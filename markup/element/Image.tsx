import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { spaceProp } from '../../style'

const placeholder = (width: number, height: number) =>
  `data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' width='${width}' height='${height}' style='background-color: %23EEE; font-family: sans-serif;'%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='black'%3E${width} x ${height}%3C/text%3E%3C/svg%3E`

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
  ...props
}: IImage &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) => {
  if (!src && props.width && props.height) {
    // eslint-disable-next-line no-param-reassign
    src = placeholder(Number(props.width), Number(props.height))
  }

  return <Wrapper css={css} space={space} src={src} {...props} />
}
