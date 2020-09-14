export interface IBreakpoint {
  [key: string]: number
}

const defaultBreakpoints: IBreakpoint = {
  phone: 500,
  tablet: 1000,
}

export interface IColor {
  highlight?: string
  interact?: string
  white?: string
  black?: string
  warning?: string
  error?: string
  Gray?: {
    300?: string
    500?: string
    700?: string
  }
}

const defaultColors: IColor = {
  highlight: '#2196F3',
  interact: '#E91E63',
  white: '#FFF',
  black: '#000',
  warning: '#FF9800',
  error: '#F44336',
  // Shaded colors.
  Gray: {
    300: '#E0E0E0',
    500: '#9E9E9E',
    700: '#616161',
  },
}

export interface IConfiguration {
  colors?: IColor
  // space: ISpace;
  breakpoints?: IBreakpoint
}

const defaultConfiguration = {
  colors: defaultColors,
  breakpoints: defaultBreakpoints,
}

export const Style = defaultConfiguration

export const configure = (configuration: IConfiguration) => {
  // Deep merge.
  console.log('merge', configuration.colors.highlight)
  console.log(defaultConfiguration.colors.highlight)
  Object.assign(defaultConfiguration, configuration)
  console.log(defaultConfiguration.colors.highlight)
}
