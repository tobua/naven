import React, { TextareaHTMLAttributes, DetailedHTMLProps, useState } from 'react'
import { naven, unit } from '../../style'
import { createComponent } from '../../utility/component'
import { mergeStyles } from '../../utility/merge-styles'
import { blinkAnimation } from '../../style/animation'

export interface Props {
  Component: {
    onValue?: (value: string) => void
  } & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  TextArea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
}

const styles = () => ({
  Main: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'normal',
    },
  },
  Cursor: {
    tag: 'span',
    css: {
      height: '100%',
      width: unit(4),
      marginRight: unit(6),
      transition: 'background 300ms ease',
    },
  },
  TextArea: {
    tag: 'textarea',
    main: true,
    css: {
      display: 'flex',
      alignSelf: 'normal',
      padding: 0,
      resize: 'none',
      border: 'none',
      outline: 'none',
      background: 'inherit',
      width: '100%',
      fontFamily: naven.theme.font.familyRegular,
      fontSize: naven.theme.font.sizeMedium,
    },
  },
})

export default createComponent(styles)<Props>(function TextArea({ props, Sheet }) {
  const { value, onValue, required, ...otherProps } = props
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
      <Sheet.TextArea.Component
        css={Sheet.TextArea.css}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        required={required}
        value={value}
        {...otherProps}
      />
    </Sheet.Main.Component>
  )
})
