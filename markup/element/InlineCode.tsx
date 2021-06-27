import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color } from '../../style'

export const InlineCode = styled.code<{ css?: SerializedStyles }>`
  background-color: ${Color.Gray[300]};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 0.9rem;
  ${({ css }) => css}
`
