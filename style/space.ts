import { ISpace } from './types'

export const Space: ISpace = {
  tiny: '5px',
  small: '10px',
  medium: '20px',
  large: '40px',
}

// For injecting into @emotion template.
export const spaceProp = ({ space }: { space: number | string }) => {
  if (!space && space !== 0) {
    return `margin-bottom: ${Space.medium};`
  }

  if (space === 0) {
    return null
  }

  if (typeof space === 'string') {
    return `margin-bottom: ${space};`
  }

  return `margin-bottom: ${space}px;`
}

// For native react style prop.
export const spaceStyleProp = (space: number | string) => {
  if (!space && space !== 0) {
    return { marginBottom: Space.medium }
  }

  if (space === 0) {
    return {}
  }

  if (typeof space === 'string') {
    return { marginBottom: space }
  }

  return { marginBottom: `${space}px` }
}

export const configure = (_space: ISpace) => {
  Object.assign(Space, _space, { clone: false })
}
