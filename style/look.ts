import { ILook } from './types'

export const Look: ILook = {
  corner: 0,
}

export const configure = (_look: ILook) => {
  Object.assign(Look, _look, { clone: false })
}
