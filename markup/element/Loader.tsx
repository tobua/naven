import React, { HTMLAttributes } from 'react'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import LoaderIcon from '../icon/Loader'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  small?: true
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'div',
    main: true,
    css: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
    },
  },
})

const Loader = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, small, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <LoaderIcon size={small ? 'small' : undefined} />
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Loader)
