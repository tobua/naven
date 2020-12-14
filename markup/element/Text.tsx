import styled from '@emotion/styled'
import { spaceProp } from '../../style'

// @ts-ignore
export const Paragraph = styled.p<{ space?: number | string }>`
  display: block;
  ${spaceProp}
`

export const Text = styled.span<{ bold?: boolean }>`
  display: inline;
  ${({ bold }) => (bold ? 'font-weight: bold' : null)}
`
