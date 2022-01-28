import React, { TextareaHTMLAttributes, DetailedHTMLProps } from 'react'
import { naven } from '../../style'
import { createComponent } from '../../utility/component'

export interface Props {
  Component: {
    count?: number | string
    type?: 'content'
    onValue?: (value: string) => void
  } & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
}

const styles = () => ({
  Main: {
    tag: 'textarea',
    main: true,
    css: {
      padding: naven.theme.space.small,
      border: `1px solid ${naven.theme.color.backgroundContrast}`,
      resize: 'none',
      borderRadius: naven.theme.look.radius,
      fontFamily: naven.theme.font.familyRegular,
      '&:focus': {
        boxShadow: `inset 0 0 0 1px ${naven.theme.color.backgroundContrast}`,
        outline: 'none',
      },
    },
  },
})

export default createComponent(styles)<Props>(function TextArea({ props, Sheet }) {
  const { onValue, ...otherProps } = props

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

  return <Sheet.Main.Component css={Sheet.Main.css} {...otherProps} />
})
