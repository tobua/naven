import React, { InputHTMLAttributes } from 'react'
import { naven, unit } from '../../style'
import { createComponent } from '../../utility/component'
import { blinkAnimation } from '../../style/animation'

export interface Props {
  Component: {
    onValue?: (value: string) => void
  } & InputHTMLAttributes<HTMLInputElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '&::before': {
        content: ' ',
        display: 'block',
        height: naven.theme.space.medium,
        width: unit(4),
        background: naven.theme.color.gray500,
        marginRight: unit(6),
        animation: `${blinkAnimation()} 1s linear infinite alternate`,
      },
    },
  },
  Input: {
    tag: 'input',
    main: true,
    css: {
      padding: 0,
      fontSize: naven.theme.font.sizeMedium,
      radius: naven.theme.look.radius,
      border: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },
})

export default createComponent(styles)<Props>(function Input({ props, Sheet }) {
  const { children, onValue, ...otherProps } = props

  if (onValue) {
    const initialOnChange = props.onChange
    // eslint-disable-next-line no-param-reassign
    props.onChange = (event) => {
      onValue(event.target.value)
      if (initialOnChange) {
        initialOnChange(event)
      }
    }
  }

  return (
    <Sheet.Main.Component css={Sheet.Main.css}>
      <Sheet.Input.Component css={Sheet.Input.css} {...otherProps} />
    </Sheet.Main.Component>
  )
})
