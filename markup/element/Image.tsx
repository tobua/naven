import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp } from '../../style'

const placeholder = (width: number, height: number) =>
  `data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' width='${width}' height='${height}' style='background-color: gray'%3E%3Ctext x='10' y='10' fill='black'%3E${width} x ${height}%3C/text%3E%3C/svg%3E`

const Wrapper = styled.img<{
  space?: string | number
  css?: SerializedStyles
}>`
  display: flex;
  ${spaceProp}
  ${({ css }) => css}
`

interface IImage {
  css?: SerializedStyles
  space?: string | number
}

export const Image = ({
  src,
  css,
  space,
  width,
  height,
}: IImage &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) => {
  if (!src && width && height) {
    // eslint-disable-next-line no-param-reassign
    src = placeholder(Number(width), Number(height))
  }

  return <Wrapper css={css} space={space} src={src} />
}
