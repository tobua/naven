import React, { ImgHTMLAttributes } from 'react'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'img',
    main: true,
    css: {
      display: 'flex',
    },
  },
})

const placeholder = (width: number, height: number) =>
  `data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}' width='${width}' height='${height}' style='background-color: %23EEE; font-family: sans-serif;'%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='black'%3E${width} x ${height}%3C/text%3E%3C/svg%3E`

const Image = ({ Sheet, props }: ComponentProps<Sheets>) => {
  // eslint-disable-next-line prefer-const
  let { src, ...otherProps } = props

  if (!src && props.width && props.height) {
    src = placeholder(Number(props.width), Number(props.height))
  }

  return <Sheet.Main.Component css={Sheet.Main.css} src={src} {...otherProps} />
}

export default createComponent<Props, Sheets>(styles, Image)
