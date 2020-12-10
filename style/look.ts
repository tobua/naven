import assign from 'object-assign-deep'
import { ILook } from './types'

export const Look: ILook = {
  corner: 0,
}

export const configure = (_look: ILook) => assign(Look, _look)

export const radius = () =>
  Look.corner ? `border-radius: ${Look.corner}px;` : ''
