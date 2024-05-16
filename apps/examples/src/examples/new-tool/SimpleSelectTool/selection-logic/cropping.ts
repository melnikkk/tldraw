import {
	Editor,
	SelectionHandle,
	TLBaseShape,
	TLImageShape,
	TLImageShapeCrop,
	TLShapePartial,
	Vec,
	structuredClone,
} from 'tldraw'

/** @internal */
export const MIN_CROP_SIZE = 8

export type ShapeWithCrop = TLBaseShape<string, { w: number; h: number; crop: TLImageShapeCrop }>

export function getCroppingSnapshot(editor: Editor, handle: SelectionHandle) {
	const selectionRotation = editor.getSelectionRotation()
	const {
		inputs: { originPagePoint },
	} = editor

	const shape = editor.getOnlySelectedShape() as TLImageShape

	const selectionBounds = editor.getSelectionRotatedPageBounds()!

	const dragHandlePoint = Vec.RotWith(
		selectionBounds.getHandlePoint(handle),
		selectionBounds.point,
		selectionRotation
	)

	const cursorHandleOffset = Vec.Sub(originPagePoint, dragHandlePoint)

	return {
		shape,
		cursorHandleOffset,
	}
}

export function getTranslateCroppedImageChange(
	editor: Editor,
	shape: TLBaseShape<string, { w: number; h: number; crop: TLImageShapeCrop }>,
	delta: Vec
) {
	if (!shape) {
		throw Error('Needs to translate a cropped shape!')
	}

	const { crop: oldCrop } = shape.props
	if (!oldCrop) {
		// can't translate a shape that doesn't have an existing crop
		return
	}

	const flatten: 'x' | 'y' | null = editor.inputs.shiftKey
		? Math.abs(delta.x) < Math.abs(delta.y)
			? 'x'
			: 'y'
		: null

	if (flatten === 'x') {
		delta.x = 0
	} else if (flatten === 'y') {
		delta.y = 0
	}

	delta.rot(-shape.rotation)

	// original (uncropped) width and height of shape
	const w = (1 / (oldCrop.bottomRight.x - oldCrop.topLeft.x)) * shape.props.w
	const h = (1 / (oldCrop.bottomRight.y - oldCrop.topLeft.y)) * shape.props.h

	const yCrop = oldCrop.bottomRight.y - oldCrop.topLeft.y
	const xCrop = oldCrop.bottomRight.x - oldCrop.topLeft.x
	const newCrop = structuredClone(oldCrop)

	newCrop.topLeft.x = Math.min(1 - xCrop, Math.max(0, newCrop.topLeft.x - delta.x / w))
	newCrop.topLeft.y = Math.min(1 - yCrop, Math.max(0, newCrop.topLeft.y - delta.y / h))

	newCrop.bottomRight.x = newCrop.topLeft.x + xCrop
	newCrop.bottomRight.y = newCrop.topLeft.y + yCrop

	const partial: TLShapePartial<typeof shape> = {
		id: shape.id,
		type: shape.type,
		props: {
			crop: newCrop,
		},
	}

	return partial
}
