import hexToRgb from 'hex-rgb'

export interface IColor {
  highlight: string
  action: string
  white: string
  black: string
  Shade: (color: string, opacity: number) => string
}

export const highlight = '#2196F3'
export const action = '#E91E63'
export const white = '#FFF'
export const black = '#000'
// Shaded colors.
export const Gray = {
  300: '#E0E0E0',
  500: '#9E9E9E',
  700: '#616161',
}

export const Shade = (color: string, opacity: number) => {
  const rgb = hexToRgb(color)
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`
}
