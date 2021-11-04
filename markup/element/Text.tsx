import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp, Font, Color, Space } from '../../style'

export const Paragraph = styled.p<{
  space?: number | string
  css?: SerializedStyles
}>`
  display: block;
  line-height: 1.4;
  ${spaceProp}
  ${({ css }) => css}
`

export const Text = styled.span<{ bold?: boolean; css?: SerializedStyles }>`
  display: inline;
  ${({ bold }) => (bold ? Font.weight.bold : null)}
  ${({ css }) => css}
`

export const Bold = styled.b<{ css?: SerializedStyles }>`
  ${Font.weight.bold}
  ${({ css }) => css}
`

export const Important = styled.strong<{ css?: SerializedStyles }>`
  color: ${Color.highlight.var};
  ${Font.weight.bold}
  ${({ css }) => css}
`

export const Italic = styled.i<{ css?: SerializedStyles }>`
  ${Font.style.italic}
  ${({ css }) => css}
`

export const Quote = styled.blockquote<{
  space?: number | string
  css?: SerializedStyles
}>`
  position: relative;
  margin-left: ${Space.medium};

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: calc(${Space.medium} * -1);
    background: ${Color.highlight.var};
    width: ${Space.tiny};
    height: 100%;
  }

  ${spaceProp}
  ${({ css }) => css}
`

export const ShortQuotation = styled.q<{ css?: SerializedStyles }>`
  &:before {
    content: '"';
  }

  &:after {
    content: '"';
  }

  ${({ css }) => css}
`

export const Citation = styled.cite<{ css?: SerializedStyles }>`
  ${Font.style.italic}
  ${({ css }) => css}
`

export const Small = styled.small<{ css?: SerializedStyles }>`
  font-size: smaller;
  ${({ css }) => css}
`

const AbbreviationTag = styled.abbr<{ css?: SerializedStyles }>`
  ${({ css }) => css}
`

export const Abbreviation = ({
  children,
  title,
  css,
}: {
  children: string
  title: string
  css?: SerializedStyles
}) => (
  <AbbreviationTag css={css} title={title}>
    {children}
  </AbbreviationTag>
)

export const Definition = styled.dfn<{ css?: SerializedStyles }>`
  ${Font.style.italic}
  ${({ css }) => css}
`
