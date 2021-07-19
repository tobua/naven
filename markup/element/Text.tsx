import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp, Font, Color } from '../../style'

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

export const Bold = styled.b`
  ${Font.weight.bold}
`

export const Important = styled.strong`
  color: ${Color.highlight};
  ${Font.weight.bold}
`

export const Italic = styled.i`
  ${Font.style.italic}
`
