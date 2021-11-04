import { IColor } from './types'
import { createCssVariable } from '../utility/css-variable'
import { assign } from '../utility/custom-object-assign-deep'

export const Color = {
  highlight: createCssVariable('color-highlight', '#0047FF'),
  interact: createCssVariable('color-interact', '#FF007A'),
  white: createCssVariable('color-white', '#FFF'),
  black: createCssVariable('color-black', '#000'),
  background: createCssVariable('color-background', '#FFF'),
  backgroundContrast: createCssVariable('color-background-contrast', '#000'), // Constrast to main background.
  colorContrast: createCssVariable('color-contrast', '#FFF'), // Color to display stuff inside highlight or interact.
  valid: createCssVariable('color-valid', '#4CAF50'),
  warning: createCssVariable('color-warning', '#FF9800'),
  error: createCssVariable('color-error', '#F44336'),
  // Shaded colors.
  Gray: {
    50: createCssVariable('color-gray-50', '#FAFAFA'),
    100: createCssVariable('color-gray-100', '#F5F5F5'),
    200: createCssVariable('color-gray-200', '#EEEEEE'),
    300: createCssVariable('color-gray-300', '#E0E0E0'),
    500: createCssVariable('color-gray-500', '#9E9E9E'),
    700: createCssVariable('color-gray-700', '#616161'),
  },
}

export const configure = (_colors: IColor) => assign(Color, _colors)
