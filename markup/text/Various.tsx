import React, { HTMLAttributes, BlockquoteHTMLAttributes, useMemo } from 'react'
import type { CSS } from '@stitches/react'
import memoize from 'memoize-one'
import { naven } from '../../style'
import { mergeStyles } from '../../utility/merge-styles'

const inlineStyles: () => CSS = memoize(() => ({
  display: 'inline',
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
}))

export const Inline = ({
  css,
  bold,
  ...props
}: HTMLAttributes<HTMLElement> & { bold?: boolean; css?: CSS }) => {
  const styles = useMemo(
    () => ({
      fontWeight: bold ? naven.theme.font.weightBold : 'inherit',
      ...inlineStyles(),
    }),
    [bold]
  )
  // @ts-ignore
  const Strong = useMemo(() => naven.styled('span', mergeStyles(styles, css)), [css])
  return <Strong {...props}>{props.children}</Strong>
}

const importantStyles: () => CSS = memoize(() => ({
  color: naven.theme.color.highlight,
  fontWeight: naven.theme.font.weightBold,
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
}))

export const Important = ({ css, ...props }: HTMLAttributes<HTMLElement> & { css?: CSS }) => {
  // @ts-ignore
  const Strong = useMemo(() => naven.styled('strong', mergeStyles(importantStyles(), css)), [css])
  return <Strong {...props}>{props.children}</Strong>
}

const boldStyles = memoize(() => ({
  fontWeight: naven.theme.font.weightBold,
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
}))

export const Bold = ({ css, ...props }: HTMLAttributes<HTMLElement> & { css?: CSS }) => {
  // @ts-ignore
  const Strong = useMemo(() => naven.styled('b', mergeStyles(boldStyles(), css)), [css])
  return <Strong {...props}>{props.children}</Strong>
}

const textStyles = memoize(() => ({
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
  lineHeight: naven.theme.font.lineHeightMedium,
}))

export const Text = ({
  css,
  bold,
  ...props
}: HTMLAttributes<HTMLElement> & {
  css?: CSS
  bold?: boolean
}) => {
  const styles = useMemo(
    () => ({
      fontWeight: bold ? naven.theme.font.weightBold : 'inherit',
      ...textStyles(),
    }),
    [bold]
  )
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('p', mergeStyles(styles, css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const paragraphStyles = memoize(() => ({
  display: 'block',
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
  lineHeight: naven.theme.font.lineHeightMedium,
}))

export const Paragraph = ({
  css,
  ...props
}: HTMLAttributes<HTMLElement> & {
  css?: CSS
}) => {
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('p', mergeStyles(paragraphStyles(), css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const italicStyles = memoize(() => ({
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
  fontStyle: naven.theme.font.styleItalic,
}))

export const Italic = ({
  css,
  bold,
  ...props
}: HTMLAttributes<HTMLElement> & { css?: CSS; bold?: boolean }) => {
  const styles = useMemo(
    () => ({
      fontWeight: bold ? naven.theme.font.weightBold : 'inherit',
      ...italicStyles(),
    }),
    [bold]
  )
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('i', mergeStyles(styles, css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const quoteStyles = memoize(() => ({
  position: 'relative',
  marginLeft: naven.theme.space.medium,
  '&:before': {
    content: ' ',
    display: 'block',
    position: 'absolute',
    left: `calc(${naven.theme.space.medium} * -1)`,
    background: naven.theme.color.highlight,
    width: naven.theme.space.tiny,
    height: '100%',
  },
}))

export const Quote = ({
  css,
  ...props
}: BlockquoteHTMLAttributes<HTMLElement> & {
  css?: CSS
}) => {
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('blockquote', mergeStyles(quoteStyles(), css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const shortQuotationStyles = memoize(() => ({
  '&::before': {
    content: '“',
  },
  '&::after': {
    content: '”',
  },
}))

export const ShortQuotation = ({ css, ...props }: HTMLAttributes<HTMLElement> & { css?: CSS }) => {
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('q', mergeStyles(shortQuotationStyles(), css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const citationStyles = memoize(() => ({
  fontStyle: naven.theme.font.styleItalic,
}))

export const Citation = ({ css, ...props }: HTMLAttributes<HTMLElement> & { css?: CSS }) => {
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('cite', mergeStyles(citationStyles(), css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

const smallStyles = memoize(() => ({
  fontSize: 'smaller',
}))

export const Small = ({
  css,
  bold,
  ...props
}: HTMLAttributes<HTMLElement> & { css?: CSS; bold?: boolean }) => {
  const styles = useMemo(
    () => ({
      fontWeight: bold ? naven.theme.font.weightBold : 'inherit',
      ...smallStyles(),
    }),
    [bold]
  )
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('small', mergeStyles(styles, css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}

export const Abbreviation = ({
  css,
  title,
  ...props
}: HTMLAttributes<HTMLElement> & { title: string; css?: CSS }) => {
  const Tag = useMemo(() => naven.styled('abbr', css), [css])
  return (
    <Tag title={title} {...props}>
      {props.children}
    </Tag>
  )
}

const definitionStyles = memoize(() => ({
  fontFamily: naven.theme.font.familyRegular,
  fontSize: naven.theme.font.sizeMedium,
  fontStyle: naven.theme.font.styleItalic,
}))

export const Definition = ({ css, ...props }: HTMLAttributes<HTMLElement> & { css?: CSS }) => {
  // @ts-ignore
  const Tag = useMemo(() => naven.styled('dfn', mergeStyles(definitionStyles(), css)), [css])
  return <Tag {...props}>{props.children}</Tag>
}
