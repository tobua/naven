import type { StyledComponent } from '@stitches/react/types/styled-component'
import type { CSS, keyframes, styled, createTheme, globalCss } from '@stitches/react'
import type { Token } from '@stitches/react/types/theme'

export interface ComponentProps<Sheets extends string> {
  Sheet: { [key in Sheets]: { Component: StyledComponent<'div', {}, {}, CSS>; css: CSS } }
  props: any
}

export type Component<Sheets extends string> = (props: ComponentProps<Sheets>) => JSX.Element

export type TagStyles<Props> = {
  tag?: string
  main?: true
  space?: true
  css?: CSS
  props?: (css: CSS, props: Props) => void
  extends?: CSS[]
}

export type ComponentStylesDefinition<Props, Sheets extends string> = () => {
  [key in Sheets]: TagStyles<Props>
}

export type ComponentStylesUser<Props, Sheets extends string> = {
  [key in Sheets]?: TagStyles<Props>
}

export type CSSValue = string | number | Token<string, string, string, string>

export type Link = {
  name: string
  url: string
  css?: CSS
}

export type OptionalLink = {
  name: string
  url?: string
  css?: CSS
}

export type Naven = {
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
  createTheme: typeof createTheme
  globalCss: typeof globalCss
}
