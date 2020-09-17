import { IBreakpoint, IColor, ISpace } from './types'
import { defaultColors } from './color'
import {
  defaultBreakpoints,
  configure as configureBreakpoint,
} from './breakpoint'
import { defaultSpace } from './space'

export interface IConfiguration {
  colors?: IColor
  space?: ISpace
  breakpoints?: IBreakpoint
}

const defaultConfiguration = {
  colors: defaultColors,
  breakpoints: defaultBreakpoints,
  space: defaultSpace,
}

export const Color = defaultConfiguration.colors
export const Breakpoint = defaultConfiguration.breakpoints
export const Space = defaultConfiguration.space

// Types that can be used to type inputs requiring styles.
export { Space as SpaceSize } from './types'

// Methods that work with variables.
export { Shade } from './color'
export { Phone, Tablet } from './breakpoint'

export const configure = (configuration: IConfiguration) => {
  Object.assign(defaultConfiguration.colors, configuration.colors)
  Object.assign(defaultConfiguration.breakpoints, configuration.breakpoints)
  Object.assign(defaultConfiguration.space, configuration.space)
  // configureBreakpoint(configuration.breakpoints)
}
