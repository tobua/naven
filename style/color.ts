import hexToRgb from 'hex-rgb'
import { IColor } from './types'

export const Shade = (color: string, opacity: number) => {
  const rgb = hexToRgb(color)
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`
}

export const defaultColors: IColor = {
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
