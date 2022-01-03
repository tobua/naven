import { IColor } from './types'
import { assign } from '../utility/custom-object-assign-deep'

export const Color = {
  highlight: '#0047FF',
  interact: '#FF007A',
  white: '#FFF',
  black: '#000',
  background: '#FFF',
  backgroundContrast: '#000', // Constrast to main background.
  colorContrast: '#FFF', // Color to display stuff inside highlight or interact.
  valid: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  // Shaded colors.
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray500: '#9E9E9E',
  gray700: '#616161',
}

export const configure = (_colors: IColor) => assign(Color, _colors)
