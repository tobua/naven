import { IConfiguration } from './types'
import { configure as configureBreakpoints } from './breakpoint'
import { configure as configureSpace } from './space'
import { configure as configureColor } from './color'
import { configure as configureLook } from './look'
import { configure as configureLayer } from './layer'
import { configure as configureFont } from './font'
import { configure as configureResponsive } from './responsive'

export { Color } from './color'
export { Breakpoints, Breakpoint, useBreakpoint } from './breakpoint'
export { Space, spaceProp, spaceStyleProp } from './space'
export { Layer } from './layer'
export { Look, radius, radiusStyleProp, radiusValue } from './look'
export { Font } from './font'
export { toPx } from './utility'
export { unit } from './responsive'

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize, CSSVariable, isCssVariable } from './types'

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
  if (configuration.responsive) {
    configureResponsive(configuration.responsive)
  }
}
