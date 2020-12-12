import { IBreakpoint, IColor, ILook, ISpace, ILayer } from './types'
import { configure as configureBreakpoints } from './breakpoint'
import { configure as configureSpace } from './space'
import { configure as configureColor } from './color'
import { configure as configureLook } from './look'
import { configure as configureLayer } from './layer'

export { Color, Shade } from './color'
export { Breakpoints, Breakpoint } from './breakpoint'
export { Space, spaceProp, spaceStyleProp } from './space'
export { Layer } from './layer'
export { Look, radius, radiusStyleProp } from './look'
export { toPx } from './utility'

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize } from './types'

export interface IConfiguration {
  colors?: IColor
  space?: ISpace
  breakpoints?: IBreakpoint
  look?: ILook
  layer?: ILayer
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
  if (configuration.layer) {
    configureLayer(configuration.layer)
  }
}
