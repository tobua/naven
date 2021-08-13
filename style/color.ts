import assign from 'object-assign-deep'
import hexToRgb from 'hex-rgb'
import { IColor } from './types'

export const Color: IColor = {
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
  Gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    500: '#9E9E9E',
    700: '#616161',
  },
}

export const configure = (_colors: IColor) => assign(Color, _colors)

export const Shade = (color: string, opacity: number) => {
  const rgb = hexToRgb(color)
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`
}
