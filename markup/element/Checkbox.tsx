import React, {
  useCallback,
  useRef,
  InputHTMLAttributes,
  DetailedHTMLProps,
  LabelHTMLAttributes,
  HTMLAttributes,
} from 'react'
import { naven, unit } from '../../style'
import { createComponent } from '../../utility/component'
import { uniqueID } from '../../utility/unique-id'

export interface Props {
  Component: {
    as?: 'a'
    href?: string
    disabled?: true
    color?: 'regular' | 'highlight' | 'interact'
    type?: 'radio' | 'checkbox'
    label: string
  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  Main: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  Input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  Label: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
}

const styles = () => ({
  Main: {
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
        top: unit(1),
        left: unit(7),
        display: 'table',
        width: unit(5),
        height: unit(10),
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

export default createComponent(styles)<Props>(function Checkbox({ props, Sheet }) {
  const { type = 'checkbox', label, id = uniqueID(), ...otherProps } = props
  const inputRef = useRef<HTMLInputElement>()

  const toggleOnEnter = useCallback((event) => {
    if (event.key !== 'Enter') {
      return
    }

    inputRef.current.checked = !inputRef.current.checked
  }, [])

  return (
    <Sheet.Main.Component
      css={Sheet.Main.css}
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
      <Sheet.Label.Component css={Sheet.Label.css} htmlFor={id}>
        {label}
      </Sheet.Label.Component>
    </Sheet.Main.Component>
  )
})
