export interface IBreakpoint {
  [key: string]: number
}

export interface IColor {
  highlight?: string
  interact?: string
  white?: string
  black?: string
  contrast?: string
  warning?: string
  error?: string
  Gray?: {
    300?: string
    500?: string
    700?: string
  }
  Shade?: (color: string, opacity: number) => string
}

export interface ISpace {
  tiny?: string
  small?: string
  medium?: string
  large?: string
}

export type Space = 'tiny' | 'small' | 'medium' | 'large'

export interface ILook {
  corner?: number
}
