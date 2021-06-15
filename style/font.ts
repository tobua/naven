import assign from 'object-assign-deep'
import { IFont } from './types'

export const Font: IFont = {
  family: {
    regular: 'font-family: sans-serif;',
    serif: 'font-family: serif;',
    mono: 'font-family: monospace;',
  },
  size: {
    small: 'font-size: 12px;',
    medium: 'font-size: 16px;',
    large: 'font-size: 20px;',
  },
}

export const configure = (_fonts: IFont) => assign(Font, _fonts)
