import assign from 'object-assign-deep'
import { font } from 'wasser'
import { mapNumbersToWasserSizes } from './utility'
import { IFontInput, IFont } from './types'

export const Font: IFont = {
  family: {
    regular: 'font-family: sans-serif;',
    serif: 'font-family: serif;',
    mono: 'font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;',
  },
  size: {
    tiny: font(8),
    small: font(12),
    medium: font(16),
    large: font(20),
    h2: font(24),
    h1: font(30),
    custom: font,
  },
  weight: {
    bold: 'font-weight: bold;',
  },
  style: {
    italic: 'font-style: italic;',
  },
}

export const configure = (_fonts: IFontInput) => {
  mapNumbersToWasserSizes(_fonts.size)
  assign(Font, _fonts)
}
