import React, { HTMLAttributes, DetailedHTMLProps } from 'react'
import { createComponent } from '../../utility/component'
import LoaderIcon from '../icon/Loader'

export interface Props {
  Component: {
    small?: true
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const styles = () => ({
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

export default createComponent(styles)<Props>(function Loader({ props, Sheet }) {
  const { children, small, ...otherProps } = props
  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      <LoaderIcon size={small ? 'small' : undefined} />
    </Sheet.Main.Component>
  )
})
