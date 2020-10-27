import { IBreakpoint, IColor, ISpace } from './types'
import { configure as configureBreakpoints } from './breakpoint'
import { configure as configureSpace } from './space'
import { configure as configureColor } from './color'

export { Color, Shade } from './color'
export { Breakpoints, Breakpoint } from './breakpoint'
export { Space } from './space'

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize } from './types'

export interface IConfiguration {
  colors?: IColor
  space?: ISpace
  breakpoints?: IBreakpoint
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
}
