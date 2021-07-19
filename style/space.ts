import { wasser } from 'wasser'
import { ISpace, ISpaceInput } from './types'
import { mapNumbersToWasserSizes } from './utility'

export const Space: ISpace = {
  tiny: wasser(5),
  small: wasser(10),
  medium: wasser(20),
  large: wasser(40),
}

// For injecting into @emotion template.
export const spaceProp = ({
  space = Space.medium,
}: {
  space?: number | string
}) => {
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

export const configure = (_space: ISpaceInput) => {
  mapNumbersToWasserSizes(_space)
  Object.assign(Space, _space, { clone: false })
}
