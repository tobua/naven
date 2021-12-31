import React, { HTMLAttributes } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  type?: 'line'
  size?: string | number
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'hr',
    main: true,
    css: {
      height: naven.theme.space.medium,
      border: 'none',
      margin: 0,
      position: 'relative',
      variants: {
        type: {
          line: {
            '&:after': {
              content: '',
              display: 'block',
              height: 1,
              background: naven.theme.color.backgroundContrast,
              width: '100%',
              position: 'absolute',
              top: 'calc(50% - 1px)',
            },
          },
        },
      },
    },
  },
})

const Spacer = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props

  return <Sheet.Main.Component css={Sheet.Main.css} {...otherProps} />
}

export default createComponent<Props, Sheets>(
  styles,
  Spacer,
  (allStyles, props) => {
    if (props.size) {
      allStyles.Main.css.height = props.size
    }
  },
  (props) => [props.size]
)
