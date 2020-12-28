import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { spaceProp } from '../../style'

export const Heading = styled.h1<{
  code?: boolean
  space?: string | number
  css?: SerializedStyles
}>`
  font-size: ${({ as = 'h1' }) => {
    if (as === 'h1') {
      return '30px'
    }

    if (as === 'h2') {
      return '24px'
    }

    return '20px'
  }};
  ${spaceProp}
  ${({ code }) =>
    code
      ? 'font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;'
      : ''}
  ${({ css }) => css}
`
