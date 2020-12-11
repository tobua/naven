import assign from 'object-assign-deep'
import { toPx } from './utility'
import { ILook } from './types'

export const Look: ILook = {
  corner: 0,
}

export const configure = (_look: ILook) => assign(Look, _look)

export const radius = () =>
  Look.corner ? `border-radius: ${Look.corner}px;` : ''

export const radiusStyleProp = () =>
  Look.corner ? { borderRadius: toPx(Look.corner) } : {}
