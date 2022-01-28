import { wasser, globalVariables } from 'wasser'
import configureLayer from 'laier'
import { createStitches } from '@stitches/react'
import type { Token } from '@stitches/react/types/theme'
import objectAssignDeep from 'object-assign-deep'
import { resetStyles, rootStyles } from '../utility/global-styles'
import { Breakpoint } from './breakpoint'
import { Color } from './color'
import type { Naven } from '../types'

export { useBreakpoint } from './breakpoint'
// TODO make configurable
export const Layer = configureLayer(['Content', 'Navigation', 'Popup', 'Notification'])
export const unit = wasser
export const create = createStitches
// eslint-disable-next-line import/no-mutable-exports
export let naven: Naven

export const cssVariable = (variable: Token<string, string, string, ''>) =>
  `var(--${variable.scale}-${variable.token})`

const Space = {
  tiny: 5,
  small: 10,
  medium: 20,
  large: 40,
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
  sizeTiny: 8,
  sizeSmall: 12,
  sizeMedium: 16,
  sizeLarge: 20,
  sizeSubtitle: 24,
  sizeTitle: 30,
}

const createBreakpoints = <T extends {}>(breakpoints: T) => {
  const result = {}

  Object.keys(breakpoints).forEach((key) => {
    result[key] = `(max-width: ${breakpoints[key]}px)`
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
  breakpoint: Breakpoint,
  utils: {
    radius: (value: number) => ({
      borderRadius: `calc(${naven.theme.look.radius} * ${value})`,
    }),
  },
}

const responsiveProperties = {
  space: ['tiny', 'small', 'medium', 'large'],
  font: ['sizeTiny', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'sizeSubtitle', 'sizeTitle'],
  look: ['radius'],
}

export const responsifyConfiguration = <T extends { theme: any }>(configuration: T) => {
  // Assign responsive wasser units to properties where necessary.
  Object.keys(responsiveProperties).forEach((firstLevel) => {
    responsiveProperties[firstLevel].forEach((secondLevel) => {
      if (
        configuration.theme &&
        configuration.theme[firstLevel] &&
        configuration.theme[firstLevel][secondLevel]
      ) {
        const value = configuration.theme[firstLevel][secondLevel]
        if (typeof value === 'number' && value !== 0) {
          configuration.theme[firstLevel][secondLevel] = unit(value)
        }
      }
    })
  })

  return configuration
}

export const merge = <T extends object>(configuration?: T) => {
  const defaultConfigurationCopy = objectAssignDeep({}, defaultConfiguration)
  const merged = objectAssignDeep(defaultConfigurationCopy, configuration ?? {})
  const responsifiedConfiguration = responsifyConfiguration(merged)

  return {
    ...responsifiedConfiguration,
    breakpoint: undefined,
    media: createBreakpoints(merged.breakpoint),
  }
}

export const register = <T extends Naven>(stitches: T, rootSelector = ':root') => {
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
