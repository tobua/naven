import * as DefaultColor from './Color'

interface ITheme {
  color: DefaultColor.IColor
  // space: ISpace;
  // breakpoint: IBreakpoint;
}

let defaultTheme = {
  color: DefaultColor,
}

export const Color = defaultTheme.color

export const theme = (_theme: ITheme) => {
  // Deep merge.
  Object.assign(defaultTheme, _theme)
}
