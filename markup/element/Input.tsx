import React, { InputHTMLAttributes, useState, DetailedHTMLProps } from 'react'
import { naven, unit } from '../../style'
import { mergeStyles } from '../../utility/merge-styles'
import { createComponent } from '../../utility/component'
import { blinkAnimation } from '../../style/animation'

export interface Props {
  Component: {
    onValue?: (value: any) => void
  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  Input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  Cursor: {
    tag: 'span',
    css: {
      height: '100%',
      minHeight: unit(20),
      width: unit(4),
      marginRight: unit(6),
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
      background: 'inherit',
      '&:focus': {
        outline: 'none',
      },
    },
  },
})

export default createComponent(styles)<Props>(function Input({ props, Sheet }) {
  const { value, required, children, onValue, ...otherProps } = props
  const [active, setActive] = useState(false)

  if (onValue) {
    const initialOnChange = props.onChange
    // eslint-disable-next-line no-param-reassign
    otherProps.onChange = (event) => {
      onValue(event.target.value)
      if (initialOnChange) {
        initialOnChange(event)
      }
    }
  }

  const hasAnimation = required && !value && !active

  return (
    <Sheet.Main.Component css={Sheet.Main.css}>
      <Sheet.Cursor.Component
        css={mergeStyles(
          {
            animation: hasAnimation ? `${blinkAnimation()} 1s linear infinite alternate` : 'none',
            background: active ? naven.theme.color.backgroundContrast : naven.theme.color.gray500,
          },
          Sheet.Cursor.css
        )}
      />
      <Sheet.Input.Component
        css={Sheet.Input.css}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        required={required}
        value={value}
        {...otherProps}
      />
    </Sheet.Main.Component>
  )
})
