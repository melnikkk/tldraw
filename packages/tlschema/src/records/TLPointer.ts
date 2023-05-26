import { BaseRecord, createRecordType, ID, Migrator } from '@tldraw/tlstore'
import { T } from '@tldraw/tlvalidate'
import { idValidator } from '../validation'

/**
 * TLPointer
 *
 * @public
 */
export interface TLPointer extends BaseRecord<'pointer', TLPointerId> {
	x: number
	y: number
	lastActivityTimestamp: number
}

/** @public */
export type TLPointerId = ID<TLPointer>

/** @public */
export const TLPointer = createRecordType<TLPointer>('pointer', {
	scope: 'instance',
}).withDefaultProperties(
	(): Omit<TLPointer, 'id' | 'typeName'> => ({
		x: 0,
		y: 0,
		lastActivityTimestamp: 0,
	})
)

/** @public */
export const TLPOINTER_ID = TLPointer.createCustomId('pointer')

/** @public */
export const pointerTypeMigrator = new Migrator()

/** @public */
export const pointerTypeValidator = T.model(
	'pointer',
	T.object({
		typeName: T.literal('pointer'),
		id: idValidator<TLPointerId>('pointer'),
		x: T.number,
		y: T.number,
		lastActivityTimestamp: T.number,
	})
)
