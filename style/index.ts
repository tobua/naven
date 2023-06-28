import { wasser, globalVariables, configure, fontObject } from 'wasser'
import configureLayer from 'laier'
import { createStitches, CSS, CreateStitches } from '@stitches/react'
import objectAssignDeep from 'object-assign-deep'
import { resetStyles, rootStyles } from '../utility/global-styles'
import { Breakpoint, configure as configureBreakpoints } from './breakpoint'
import type { Naven, Layer, Token } from '../types'
import { mergeStyles } from '../utility/merge-styles'

export { useBreakpoint } from './breakpoint'
export const layer = configureLayer([
  'Content',
  'Navigation',
  'Popup',
  'Notification',
]) as unknown as Layer
export const unit = wasser
export const font = fontObject
export const create = createStitches as CreateStitches
// eslint-disable-next-line import/no-mutable-exports
export let naven: Naven & { layer: Layer }

export const cssVariable = (variable: Token<string, string, string, ''>) =>
  `var(--${variable.scale}-${variable.token})`

const Color = {
  highlight: '#0047FF',
  interact: '#FF007A',
  white: '#FFF',
  black: '#000',
  background: '#FFF',
  backgroundContrast: '#000', // Constrast to main background.
  colorContrast: '#FFF', // Color to display stuff inside highlight or interact.
  valid: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  // Shaded colors.
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray500: '#9E9E9E',
  gray700: '#616161',
}

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
  sizeTitle: 30,
  lineHeightTitle: 38,
  sizeSubtitle: 26,
  lineHeightSubtitle: 30,
  sizeH3: 22,
  lineHeightH3: 26,
  sizeH4: 20,
  lineHeightH4: 24,
  sizeH5: 18,
  lineHeightH5: 22,
  sizeH6: 16,
  lineHeightH6: 20,
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
    'sizeH3',
    'sizeH4',
    'sizeH5',
    'sizeH6',
    'lineHeightTiny',
    'lineHeightSmall',
    'lineHeightMedium',
    'lineHeightLarge',
    'lineHeightSubtitle',
    'lineHeightTitle',
    'lineHeightH3',
    'lineHeightH4',
    'lineHeightH5',
    'lineHeightH6',
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
  // @ts-ignore
  configureBreakpoints(configuration.breakpoint)

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
    globalStyles?: (stitches: Naven) => { [key: string]: CSS } | { [key: string]: CSS }
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
    globalStyles[root] = Object.assign(rootStyles(stitches), globalStyles[root])
  } else {
    globalStyles[root] = rootStyles(stitches)
  }

  let customLayer: Layer

  if (options?.layer) {
    if (Array.isArray(options.layer)) {
      customLayer = configureLayer(options.layer) as unknown as Layer
    } else if (typeof options.layer === 'function') {
      customLayer = configureLayer(
        options.layer(['Content', 'Navigation', 'Popup', 'Notification'])
      ) as unknown as Layer
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
