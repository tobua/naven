export interface IBreakpoint {
  [key: string]: number
}

export interface IColor {
  highlight?: string
  interact?: string
  white?: string
  black?: string
  backgroundContrast?: string
  colorContrast?: string
  valid?: string
  warning?: string
  error?: string
  Gray?: {
    50?: string
    100?: string
    200?: string
    300?: string
    500?: string
    700?: string
  }
  Shade?: (color: string, opacity: number) => string
}

export interface IFont {
  family?: {
    regular?: string
    serif?: string
    mono?: string
  }
  size?: {
    tiny?: string
    small?: string
    medium?: string
    large?: string
    h2?: string
    h1?: string
  }
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

export interface ILayer {
  Content?: number
  Navigation?: number
  Popup?: number
  Notification?: number
}
