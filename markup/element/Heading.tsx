import { ElementType } from 'react'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { spaceProp, Font } from '../../style'

const getFontSize = ({ as = 'h1' }: { as?: ElementType<any> }) => {
  if (as === 'h1' || as === 'h2') {
    return Font.size[as]
  }

  return Font.size.large
}

export const Heading = styled.h1<{
  code?: boolean
  space?: string | number
  css?: SerializedStyles
  as?: ElementType<any>
}>`
  ${getFontSize}
  ${spaceProp}
  ${({ code }) =>
    code ? 'font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;' : ''}
  ${({ css }) => css}
`
