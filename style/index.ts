import { wasser, globalVariables } from 'wasser'
import configureLayer from 'laier'
import type { keyframes, styled } from '@stitches/react'
import { createStitches as create } from '@stitches/react'
import type { Token } from '@stitches/react/types/theme'
import objectAssignDeep from 'object-assign-deep'
import { resetStyles, rootStyles } from '../utility/global-styles'
import { Breakpoint } from './breakpoint'
import { Color } from './color'

export { useBreakpoint } from './breakpoint'
export const Layer = configureLayer(['Content', 'Navigation', 'Popup', 'Notification'])
export const unit = wasser
export const createStitches = create

export const cssVariable = (variable: Token<string, string, string, ''>) =>
  `var(--${variable.scale}-${variable.token})`

const Space = {
  tiny: wasser(5),
  small: wasser(10),
  medium: wasser(20),
  large: wasser(40),
}

const Look = {
  radius: 0,
}

const Font = {
  familyRegular: '-apple-system, Helvetica, Arial, sans-serif',
  familySerif: 'serif',
  familyMono: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
  weightBold: 'bold',
  styleItalic: 'italic',
  sizeTiny: wasser(8),
  sizeSmall: wasser(12),
  sizeMedium: wasser(16),
  sizeLarge: wasser(20),
  sizeSubtitle: wasser(24),
  sizeTitle: wasser(30),
}

const createBreakpoints = () => {
  const result = {}

  Object.keys(Breakpoint).forEach((key) => {
    result[key] = `(max-width: ${Breakpoint[key]}px)`
  })

  return result
}

export const defaultConfiguration = {
  theme: {
    color: Color,
    space: Space,
    look: Look,
    font: Font,
  },
  media: createBreakpoints(),
  utils: {
    radius: (value: string | number) => ({ borderRadius: value }),
    space: (value: string | number) => {
      if (typeof Space[value] !== 'undefined') {
        return { marginBottom: Space[value] }
      }

      return { marginBottom: value }
    },
  },
}

export const mergeConfiguration = <T extends object>(configuration?: T) =>
  objectAssignDeep(defaultConfiguration, configuration ?? {})

// eslint-disable-next-line import/no-mutable-exports
export let naven: {
  theme: {
    color: {
      highlight: Token<'highlight', string, 'color', ''>
      interact: Token<'interact', string, 'color', ''>
      white: Token<'white', string, 'color', ''>
      black: Token<'black', string, 'color', ''>
      background: Token<'background', string, 'color', ''>
      backgroundContrast: Token<'backgroundContrast', string, 'color', ''>
      colorContrast: Token<'colorContrast', string, 'color', ''>
      valid: Token<'valid', string, 'color', ''>
      warning: Token<'warning', string, 'color', ''>
      error: Token<'error', string, 'color', ''>
      gray50: Token<'gray50', string, 'color', ''>
      gray100: Token<'gray100', string, 'color', ''>
      gray200: Token<'gray200', string, 'color', ''>
      gray300: Token<'gray300', string, 'color', ''>
      gray500: Token<'gray500', string, 'color', ''>
      gray700: Token<'gray700', string, 'color', ''>
    }
    font: {
      familyRegular: Token<'familyRegular', string, 'font', ''>
      familySerif: Token<'familySerif', string, 'font', ''>
      familyMono: Token<'familyMono', string, 'font', ''>
      weightBold: Token<'weightBold', string, 'font', ''>
      styleItalic: Token<'styleItalic', string, 'font', ''>
      sizeTiny: Token<'sizeTiny', string, 'font', ''>
      sizeSmall: Token<'sizeSmall', string, 'font', ''>
      sizeMedium: Token<'sizeMedium', string, 'font', ''>
      sizeLarge: Token<'sizeLarge', string, 'font', ''>
      sizeSubtitle: Token<'sizeSubtitle', string, 'font', ''>
      sizeTitle: Token<'sizeTitle', string, 'font', ''>
    }
    space: {
      tiny: Token<'tiny', string, 'space', ''>
      small: Token<'small', string, 'space', ''>
      medium: Token<'medium', string, 'space', ''>
      large: Token<'large', string, 'space', ''>
    }
    look: {
      radius: Token<'radius', string, 'look', ''>
    }
  }
  styled: typeof styled
  keyframes: typeof keyframes
}

export const registerStitches = <
  T extends { globalCss: any; theme: any; styled: any; keyframes: any }
>(
  stitches: T,
  rootSelector = ':root'
) => {
  naven = stitches

  const globalStyles = resetStyles(stitches)
  const wasserVariables = globalVariables()

  Object.assign(globalStyles, wasserVariables)

  if (globalStyles[rootSelector] !== undefined) {
    Object.assign(globalStyles[rootSelector], rootStyles(stitches))
  } else {
    globalStyles[rootSelector] = rootStyles(stitches)
  }

  stitches.globalCss(globalStyles)()

  return stitches
}
