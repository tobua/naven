import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp } from '../../style'

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
  ${({ bold }) => (bold ? 'font-weight: bold' : null)}
  ${({ css }) => css}
`
