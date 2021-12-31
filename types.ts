import type { StyledComponent } from '@stitches/react/types/styled-component'
import type { CSS } from '@stitches/react'
import type { Token } from '@stitches/react/types/theme'

export interface ComponentProps<Sheets extends string> {
  Sheet: { [key in Sheets]: { Component: StyledComponent<'div', {}, {}, CSS>; css: CSS } }
  props: any
}

export type Component<Sheets extends string> = (props: ComponentProps<Sheets>) => JSX.Element

export type TagStyles<Props> = {
  tag?: string
  main?: true
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
