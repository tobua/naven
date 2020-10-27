import { ISpace } from './types'

export const Space: ISpace = {
  tiny: '5px',
  small: '10px',
  medium: '20px',
  large: '40px',
}

export const configure = (_space: ISpace) => {
  Object.assign(Space, _space, { clone: false })
}
