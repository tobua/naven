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

export const configure = (configuration: IConfiguration) => {
  // Deep merge.
  console.log('merge', configuration.colors.highlight)
  console.log(defaultConfiguration.colors.highlight)
  Object.assign(defaultConfiguration, configuration)
  console.log(defaultConfiguration.colors.highlight)
  configureBreakpoint(configuration.breakpoints)
}
