import { IBreakpoint, IColor, ILook, ISpace } from './types'
import { configure as configureBreakpoints } from './breakpoint'
import { configure as configureSpace } from './space'
import { configure as configureColor } from './color'
import { configure as configureLook } from './look'

export { Color, Shade } from './color'
export { Breakpoints, Breakpoint } from './breakpoint'
export { Space, spaceProp, spaceStyleProp } from './space'
export { Layer } from './layer'
export { Look, radius } from './look'

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize } from './types'

export interface IConfiguration {
  colors?: IColor
  space?: ISpace
  breakpoints?: IBreakpoint
  look?: ILook
}

export const toPx = (value: number | string) => {
  if (typeof value === 'number') {
    return `${value}px`
  }

  return value
}

export const configure = (configuration: IConfiguration) => {
  if (configuration.colors) {
    configureColor(configuration.colors)
  }
  if (configuration.breakpoints) {
    configureBreakpoints(configuration.breakpoints)
  }
  if (configuration.space) {
    configureSpace(configuration.breakpoints)
  }
  if (configuration.look) {
    configureLook(configuration.look)
  }
}
