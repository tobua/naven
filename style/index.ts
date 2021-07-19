import {
  IBreakpoint,
  IColor,
  ILook,
  ISpaceInput,
  ILayer,
  IFontInput,
} from './types'
import { configure as configureBreakpoints } from './breakpoint'
import { configure as configureSpace } from './space'
import { configure as configureColor } from './color'
import { configure as configureLook } from './look'
import { configure as configureLayer } from './layer'
import { configure as configureFont } from './font'

export { Color, Shade } from './color'
export { Breakpoints, Breakpoint, useBreakpoint } from './breakpoint'
export { Space, spaceProp, spaceStyleProp } from './space'
export { Layer } from './layer'
export { Look, radius, radiusStyleProp } from './look'
export { Font } from './font'
export { toPx } from './utility'

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize } from './types'

export interface IConfiguration {
  colors?: IColor
  space?: ISpaceInput
  breakpoints?: IBreakpoint
  look?: ILook
  layer?: ILayer
  font?: IFontInput
}

export const configure = (configuration: IConfiguration) => {
  if (configuration.colors) {
    configureColor(configuration.colors)
  }
  if (configuration.breakpoints) {
    configureBreakpoints(configuration.breakpoints)
  }
  if (configuration.space) {
    configureSpace(configuration.space)
  }
  if (configuration.look) {
    configureLook(configuration.look)
  }
  if (configuration.layer) {
    configureLayer(configuration.layer)
  }
  if (configuration.font) {
    configureFont(configuration.font)
  }
}
