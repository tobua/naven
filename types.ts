import type { ReactNode, ElementType } from 'react'
import type { CSS, keyframes, styled, createTheme, globalCss } from '@stitches/react'

export interface ScaleValue {
  token: number | string
  value: number | string
  scale: string
  prefix: string
}

// Taken from @stitches/react/types/theme which can no longer be directly imported with "exports"/
export interface Token<
  NameType extends number | string = string,
  ValueType extends number | string = string,
  ScaleType extends string | void = void,
  PrefixType extends string | void = void,
> extends ScaleValue {
  new (name: NameType, value: ValueType, scale?: ScaleType, prefix?: PrefixType): this
  token: NameType
  value: ValueType
  scale: ScaleType extends string ? ScaleType : ''
  prefix: PrefixType extends string ? PrefixType : ''
  variable: `--${this['prefix'] extends '' ? '' : `${this['prefix']}-`}${this['scale'] extends ''
    ? ''
    : `${this['scale']}-`}${this['token']}`
  computedValue: `var(${this['variable']})`
  toString(): this['computedValue']
}

export type Assign<T1 = {}, T2 = {}> = T1 extends any ? Omit<T1, keyof T2> & T2 : never
export type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`
export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements
export declare const $$StyledComponentType: unique symbol
export declare const $$StyledComponentProps: unique symbol
export declare const $$StyledComponentMedia: unique symbol
export type TransformProps<Props, Media> = {
  [K in keyof Props]:
    | Props[K]
    | ({
        [KMedia in Prefixed<'@', 'initial' | keyof Media>]?: Props[K]
      } & {
        [KMedia in string]: Props[K]
      })
}

// From @stitches/react/types/styled-component
export interface StyledComponent<Type = 'span', Props = {}, Media = {}, StyledCSS = {}>
  extends React.ForwardRefExoticComponent<
    Assign<
      Type extends IntrinsicElementsKeys | React.ComponentType<any>
        ? React.ComponentPropsWithRef<Type>
        : never,
      TransformProps<Props, Media> & { css?: StyledCSS }
    >
  > {
  (
    props: Assign<
      Type extends IntrinsicElementsKeys | React.ComponentType<any>
        ? React.ComponentPropsWithRef<Type>
        : {},
      TransformProps<Props, Media> & {
        as?: never
        css?: StyledCSS
      }
    >
  ): React.ReactElement | null

  <
    C extends StyledCSS,
    As extends string | React.ComponentType<any> = Type extends string | React.ComponentType<any>
      ? Type
      : any,
    InnerProps = Type extends StyledComponent<any, infer IP, any, any> ? IP : {},
  >(
    props: Assign<
      React.ComponentPropsWithRef<
        As extends IntrinsicElementsKeys | React.ComponentType<any> ? As : never
      >,
      TransformProps<Assign<InnerProps, Props>, Media> & {
        as?: As
        css?: {
          [K in keyof C]: K extends keyof StyledCSS ? StyledCSS[K] : never
        }
      }
    >
  ): React.ReactElement | null

  className: string
  selector: string

  [$$StyledComponentType]: Type
  [$$StyledComponentProps]: Props
  [$$StyledComponentMedia]: Media
}

// NOTE tag can't be inferred this way props have to be added manually.
export type CustomStyledComponent<
  Base extends { [key: string | number | symbol]: any },
  Props,
> = StyledComponent<Base['tag'], Props, {}, CSS>

export type Sheet<Styles, Props extends { [key: string | number | symbol]: any }> = {
  [Property in keyof Styles]: {
    Component: CustomStyledComponent<Styles[Property], Props[Property] & { children?: ReactNode }>
    css: CSS
  }
}

export type Optional<Type> = {
  [Property in keyof Type]?: Type[Property]
}

// TODO currently unused, still useful for typed styles though.
// export type TagStyles<Props> = {
//   type?: any
//   tag: string
//   main?: boolean
//   space?: true
//   css?: CSS
//   props?: (css: CSS, props: Props) => void
//   // TODO adapt
//   extends?: CSS[]
// }

// export type ComponentStylesUser<Props> = {
//   [key: string]: TagStyles<Props>
// }

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
      lineHeightTiny: Token<'lineHeightTiny', string, 'font', ''>
      sizeSmall: Token<'sizeSmall', string, 'font', ''>
      lineHeightSmall: Token<'lineHeightSmall', string, 'font', ''>
      sizeMedium: Token<'sizeMedium', string, 'font', ''>
      lineHeightMedium: Token<'lineHeightMedium', string, 'font', ''>
      sizeLarge: Token<'sizeLarge', string, 'font', ''>
      lineHeightLarge: Token<'lineHeightLarge', string, 'font', ''>
      sizeSubtitle: Token<'sizeSubtitle', string, 'font', ''>
      lineHeightSubtitle: Token<'lineHeightSubtitle', string, 'font', ''>
      sizeTitle: Token<'sizeTitle', string, 'font', ''>
      lineHeightTitle: Token<'lineHeightTitle', string, 'font', ''>
      sizeH3: Token<'sizeH3', string, 'font', ''>
      lineHeightH3: Token<'lineHeightH3', string, 'font', ''>
      sizeH4: Token<'sizeH4', string, 'font', ''>
      lineHeightH4: Token<'lineHeightH4', string, 'font', ''>
      sizeH5: Token<'sizeH5', string, 'font', ''>
      lineHeightH5: Token<'lineHeightH5', string, 'font', ''>
      sizeH6: Token<'sizeH6', string, 'font', ''>
      lineHeightH6: Token<'lineHeightH6', string, 'font', ''>
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
  config: {
    media: any
  }
}

export type Layer = { [x: string]: number }

export interface IBreakpoint {
  [key: string]: number
}

export interface ComponentSheet {
  tag?: string
  main?: boolean
  space?: boolean
  css?: CSS
  // TODO better type
  extends?: any
}

export interface CustomStyles {
  css?: CSS
  tag?: string
  props?: Function
}

export interface DefaultProps {
  as?: ElementType<any>
  space?: CSSValue
}
