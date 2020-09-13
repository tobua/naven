import hexToRgb from 'hex-rgb'
import { Style } from '.'

export const { highlight, interact, black, white, Gray } = Style.colors

export const Shade = (color: string, opacity: number) => {
  const rgb = hexToRgb(color)
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`
}
