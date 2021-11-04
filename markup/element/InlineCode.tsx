import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { wasser, font } from 'wasser'
import { Color, Font } from '../../style'

export const InlineCode = styled.code<{ css?: SerializedStyles }>`
  background: ${Color.Gray[300].var};
  border-radius: ${wasser(3)};
  padding: ${wasser(2)} ${wasser(4)};
  ${Font.family.mono}
  ${font(14)}
  ${({ css }) => css}
`
