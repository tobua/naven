import React, { useCallback, useRef, InputHTMLAttributes } from 'react'
import { naven } from '../../style'
import type { ComponentProps, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import { uniqueID } from '../../utility/unique-id'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  as?: 'a'
  href?: string
  disabled?: true
  color?: 'regular' | 'highlight' | 'interact'
  type?: 'radio' | 'checkbox'
  label: string
}

type Sheets = 'Wrapper' | 'Input' | 'Label'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'div',
    css: {
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        outline: 'none',
        color: naven.theme.color.interact,
        input: {
          borderColor: naven.theme.color.interact,
          outline: 'none',
        },
        'input:checked': {
          boxShadow: `inset 0 0 0 3px ${naven.theme.color.interact}`,
        },
      },
    },
  },
  Label: {
    tag: 'label',
    css: {
      marginLeft: naven.theme.space.small,
      cursor: 'pointer',
    },
  },
  Input: {
    tag: 'input',
    main: true,
    css: {
      position: 'relative',
      border: 'none',
      background: naven.theme.color.gray500,
      cursor: 'pointer',
      // ${() => radius(2)}
      appearance: 'none',
      margin: 0,
      '&:before': {
        content: '',
        display: 'flex',
        width: naven.theme.space.medium,
        height: naven.theme.space.medium,
      },
      '&:checked': {
        background: naven.theme.color.backgroundContrast,
      },
      '&:checked:after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: '6px',
        display: 'table',
        width: '6px',
        height: '12px',
        border: '2px solid #FFF',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        transform: 'rotate(45deg)',
      },
      '&:focus': {
        outline: 'none',
      },
      // variants: {
      //   type: {
      //     radio: {
      //       borderRadius: '100%',
      //     },
      //   },
      // },
    },
  },
})

const Checkbox = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { type = 'checkbox', label, id = uniqueID(), ...otherProps } = props
  const inputRef = useRef<HTMLInputElement>()

  const toggleOnEnter = useCallback((event) => {
    if (event.key !== 'Enter') {
      return
    }

    inputRef.current.checked = !inputRef.current.checked
  }, [])

  return (
    <Sheet.Wrapper.Component
      css={Sheet.Wrapper.css}
      tabIndex={0}
      onKeyDown={(event) => toggleOnEnter(event)}
    >
      <Sheet.Input.Component
        css={Sheet.Input.css}
        ref={inputRef}
        tabIndex={-1}
        id={id}
        type={type}
        {...otherProps}
      />
      {/* @ts-ignore */}
      <Sheet.Label.Component css={Sheet.Label.css} htmlFor={id}>
        {label}
      </Sheet.Label.Component>
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Checkbox)
