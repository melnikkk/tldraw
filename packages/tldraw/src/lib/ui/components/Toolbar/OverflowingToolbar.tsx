import { useEvent } from '@tldraw/editor'
import classNames from 'classnames'
import { createContext, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { PORTRAIT_BREAKPOINT } from '../../constants'
import { useBreakpoint } from '../../context/breakpoints'
import { TLUiToolItem } from '../../hooks/useTools'
import { useTranslation } from '../../hooks/useTranslation/useTranslation'
import { TldrawUiButton } from '../primitives/Button/TldrawUiButton'
import { TldrawUiButtonIcon } from '../primitives/Button/TldrawUiButtonIcon'
import {
	TldrawUiDropdownMenuContent,
	TldrawUiDropdownMenuRoot,
	TldrawUiDropdownMenuTrigger,
} from '../primitives/TldrawUiDropdownMenu'

export const IsInOverflowContext = createContext(false)

export function OverflowingToolbar({ children }: { children: React.ReactNode }) {
	const id = useId().replace(/:/g, '_')
	const breakpoint = useBreakpoint()
	const msg = useTranslation()

	const overflowIndex = Math.min(8, 5 + breakpoint)

	const [totalItems, setTotalItems] = useState(0)
	const mainToolsRef = useRef<HTMLDivElement>(null)
	const [lastActiveOverflowItem, setLastActiveOverflowItem] = useState<string | null>(null)

	const css = useMemo(() => {
		const showInMainSelectors = []
		const hideFromOverflowSelectors = []

		if (lastActiveOverflowItem) {
			showInMainSelectors.push(`[data-value="${lastActiveOverflowItem}"]`)
		} else {
			showInMainSelectors.push(`:nth-child(${overflowIndex + 1})`)
		}

		for (let i = 0; i < overflowIndex; i++) {
			showInMainSelectors.push(`:nth-child(${i + 1})`)
			hideFromOverflowSelectors.push(`:nth-child(${i + 1})`)
		}

		return `
			#${id}_main > *:not(${showInMainSelectors.join(', ')}) {
				display: none;
			}
			${hideFromOverflowSelectors.map((s) => `#${id}_more > *${s}`).join(', ')} {
				display: none;
			}
        `
	}, [lastActiveOverflowItem, id, overflowIndex])

	const onDomUpdate = useEvent(() => {
		if (!mainToolsRef.current) return

		const children = Array.from(mainToolsRef.current.children)
		setTotalItems(children.length)

		// If the last active overflow item is no longer in the overflow, clear it
		const lastActiveElementIdx = children.findIndex(
			(el) => el.getAttribute('data-value') === lastActiveOverflowItem
		)
		if (lastActiveElementIdx <= overflowIndex) {
			setLastActiveOverflowItem(null)
		}

		// But if there's a new active item...
		const activeElementIdx = Array.from(mainToolsRef.current.children).findIndex(
			(el) => el.getAttribute('aria-checked') === 'true'
		)
		if (activeElementIdx === -1) return

		// ...and it's in the overflow, set it as the last active overflow item
		if (activeElementIdx >= overflowIndex) {
			setLastActiveOverflowItem(children[activeElementIdx].getAttribute('data-value'))
		}
	})

	useLayoutEffect(() => {
		onDomUpdate()
	})

	useLayoutEffect(() => {
		if (!mainToolsRef.current) return

		const mutationObserver = new MutationObserver(onDomUpdate)
		mutationObserver.observe(mainToolsRef.current, {
			childList: true,
			subtree: true,
			attributeFilter: ['data-value', 'aria-checked'],
		})

		return () => {
			mutationObserver.disconnect()
		}
	}, [onDomUpdate])

	// todo: get this working
	// useEffect(() => {
	// 	const itemsWithShortcuts = [...itemsInPanel, dropdownFirstItem]
	// 	for (let i = 0; i < Math.min(10, itemsWithShortcuts.length); i++) {
	// 		const indexKbd = `${i + 1}`.slice(-1)
	// 		hotkeys(indexKbd, (event) => {
	// 			if (areShortcutsDisabled(editor)) return
	// 			preventDefault(event)
	// 			itemsWithShortcuts[i].toolItem.onSelect('kbd')
	// 		})
	// 	}
	// 	return () => {
	// 		hotkeys.unbind('1,2,3,4,5,6,7,8,9,0')
	// 	}
	// }, [dropdownFirstItem, editor, itemsInPanel])

	return (
		<>
			<style>{css}</style>
			<div
				className={classNames('tlui-toolbar__tools', {
					'tlui-toolbar__tools__mobile': breakpoint < PORTRAIT_BREAKPOINT.TABLET_SM,
				})}
				role="radiogroup"
			>
				<div id={`${id}_main`} ref={mainToolsRef} className="tlui-toolbar__tools__list">
					{children}
				</div>
				{totalItems > overflowIndex && (
					<IsInOverflowContext.Provider value={true}>
						<TldrawUiDropdownMenuRoot id="toolbar overflow" modal={false}>
							<TldrawUiDropdownMenuTrigger>
								<TldrawUiButton
									title={msg('tool-panel.more')}
									type="tool"
									className="tlui-toolbar__overflow"
									data-testid="tools.more-button"
								>
									<TldrawUiButtonIcon icon="chevron-up" />
								</TldrawUiButton>
							</TldrawUiDropdownMenuTrigger>
							<TldrawUiDropdownMenuContent side="top" align="center">
								<div
									className="tlui-buttons__grid"
									data-testid="tools.more-content"
									id={`${id}_more`}
								>
									{children}
								</div>
							</TldrawUiDropdownMenuContent>
						</TldrawUiDropdownMenuRoot>
					</IsInOverflowContext.Provider>
				)}
			</div>
		</>
	)
}

export const isActiveTLUiToolItem = (
	item: TLUiToolItem,
	activeToolId: string | undefined,
	geoState: string | null | undefined
) => {
	return item.meta?.geo
		? activeToolId === 'geo' && geoState === item.meta?.geo
		: activeToolId === item.id
}