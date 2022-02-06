import { wasser, globalVariables, configure, fontObject } from 'wasser'
import configureLayer from 'laier'
import { createStitches, CSS } from '@stitches/react'
import type { Token } from '@stitches/react/types/theme'
import objectAssignDeep from 'object-assign-deep'
import { resetStyles, rootStyles } from '../utility/global-styles'
import { Breakpoint } from './breakpoint'
import { Color } from './color'
import type { Naven, Layer } from '../types'
import { mergeStyles } from '../utility/merge-styles'

export { useBreakpoint } from './breakpoint'
export const layer = configureLayer(['Content', 'Navigation', 'Popup', 'Notification'])
export const unit = wasser
export const font = fontObject
export const create = createStitches
// eslint-disable-next-line import/no-mutable-exports
export let naven: Naven & { layer: Layer }

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
  lineHeightTiny: 12,
  sizeSmall: 12,
  lineHeightSmall: 16,
  sizeMedium: 16,
  lineHeightMedium: 24,
  sizeLarge: 20,
  lineHeightLarge: 28,
  sizeSubtitle: 24,
  lineHeightSubtitle: 30,
  sizeTitle: 30,
  lineHeightTitle: 38,
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
  font: [
    'sizeTiny',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'sizeSubtitle',
    'sizeTitle',
    'lineHeightTiny',
    'lineHeightSmall',
    'lineHeightMedium',
    'lineHeightLarge',
    'lineHeightSubtitle',
    'lineHeightTitle',
  ],
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

export const merge = <T>(configuration: T) => {
  const defaultConfigurationCopy = objectAssignDeep({}, defaultConfiguration)
  const merged = objectAssignDeep(defaultConfigurationCopy, configuration)
  const responsifiedConfiguration = responsifyConfiguration(merged)

  return {
    ...responsifiedConfiguration,
    breakpoint: undefined,
    media: createBreakpoints(merged.breakpoint),
  }
}

export const register = <T extends Naven>(
  stitches: T,
  options?: {
    globalStyles?: (stitches: Naven) => { [key: string]: CSS }
    rootSelector?: string
    layer?: string[] | ((initial: string[]) => string[])
    wasser?: Parameters<typeof configure>[0]
  }
) => {
  let globalStylesUser: any = options?.globalStyles

  if (typeof options?.globalStyles === 'function') {
    globalStylesUser = options.globalStyles(stitches)
  }

  const globalStyles = mergeStyles(resetStyles(stitches), globalStylesUser)
  const wasserVariables = globalVariables()
  const root = options?.rootSelector ?? ':root'

  Object.assign(globalStyles, wasserVariables)

  if (globalStyles[root] !== undefined) {
    Object.assign(globalStyles[root], rootStyles(stitches))
  } else {
    globalStyles[root] = rootStyles(stitches)
  }

  let customLayer: { [x: string]: number }

  if (options?.layer) {
    if (Array.isArray(options.layer)) {
      customLayer = configureLayer(options.layer)
    } else if (typeof options.layer === 'function') {
      customLayer = configureLayer(
        options.layer(['Content', 'Navigation', 'Popup', 'Notification'])
      )
    }
  }

  stitches.globalCss(globalStyles)()
  ;(stitches as T & { layer: Layer }).layer = customLayer ?? layer

  if (customLayer) {
    // Also add to default naven export.
    Object.assign(layer, customLayer)
  }

  if (options?.wasser) {
    configure(options.wasser)
  }

  naven = stitches as T & { layer: Layer }

  return stitches as T & { layer: Layer }
}
