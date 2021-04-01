import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp } from '../../style'

// TODO with mock

const Wrapper = styled.img<{
  space?: string | number
  css?: SerializedStyles
}>`
  display: flex;
  ${spaceProp}
  ${({ css }) => css}
`

interface IImage {
  src: string
  css?: SerializedStyles
  space?: string | number
}

export const Image = ({ src, css, space }: IImage) => (
  <Wrapper css={css} space={space} src={src} />
)
