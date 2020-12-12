import assign from 'object-assign-deep'
import { ILayer } from './types'

export const Layer: ILayer = {
  Content: 1,
  Navigation: 7,
  Popup: 8,
  Notification: 9,
}

export const configure = (_layer: ILayer) => assign(Layer, _layer)
