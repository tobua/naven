import assign from 'object-assign-deep'
import { font } from 'wasser'
import { IFont } from './types'

export const Font: IFont = {
  family: {
    regular: 'font-family: sans-serif;',
    serif: 'font-family: serif;',
    mono: 'font-family: monospace;',
  },
  size: {
    tiny: font(8),
    small: font(12),
    medium: font(16),
    large: font(20),
    h2: font(24),
    h1: font(30),
  },
}

export const configure = (_fonts: IFont) => assign(Font, _fonts)
