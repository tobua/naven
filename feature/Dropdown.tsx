import React, { useState, useCallback } from 'react'
import Select, { Props as SelectProps, StylesConfig, GroupBase, ActionMeta } from 'react-select'
import memoize from 'memoize-one'
// @ts-ignore
import { naven, unit, cssVariable, createComponent, mergeStyles } from 'naven'
import { Token } from '../types'

const blinkAnimation = memoize(() =>
  naven.keyframes({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  }),
)

export interface Props {
  Component: {
    required?: boolean
    containerStyles?: object
    backgroundColor?: string
    onValue?: (value: string) => void
  } & SelectProps
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
})

const customStyles: ({
  containerStyles,
  backgroundColor,
}: Props['Component']) => StylesConfig<unknown, boolean, GroupBase<unknown>> = ({
  containerStyles,
  backgroundColor,
}) => ({
  container: (provided: object) => ({
    ...provided,
    flex: 1,
    ...containerStyles,
  }),
  valueContainer: (provided: object) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided: object) => ({
    ...provided,
    margin: 0,
  }),
  input: (provided: object) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menu: (provided: object) => ({
    ...provided,
    background: backgroundColor,
    boxShadow: 'none',
    marginTop: 0,
    marginBottom: 0,
  }),
  menuList: (provided: object) => ({
    ...provided,
    display: 'flex',
    flexDirection: 'column',
    gap: cssVariable(naven.theme.space.small),
  }),
  option: (provided: object, props) => ({
    ...provided,
    cursor: 'pointer',
    padding: 0,
    fontWeight: props.isSelected ? cssVariable(naven.theme.font.weightBold) : 'inherit',
    color: cssVariable(naven.theme.color.backgroundContrast),
  }),
  control: (provided: object) => ({
    ...provided,
    borderWidth: 0,
    boxShadow: 'none',
    backgroundColor,
    minHeight: 'auto',
  }),
  dropdownIndicator: (provided: object) => ({
    ...provided,
    padding: 0,
    cursor: 'pointer',
  }),
  indicatorSeparator: (provided: object) => ({
    ...provided,
    background: 'inherit',
  }),
  indicatorsContainer: (provided: object) => ({
    ...provided,
    height: unit(20),
  }),
})

type Option = { value: any; label: string }

export default createComponent(styles)<Props>(function Dropdown({ props, Sheet }) {
  if (
    typeof props.backgroundColor === 'object' &&
    typeof (props.backgroundColor as Token)?.token === 'string'
  ) {
    props.backgroundColor = cssVariable(props.backgroundColor)
  }
  const {
    required,
    containerStyles,
    backgroundColor = cssVariable(naven.theme.color.background),
    ...otherProps
  } = props
  const [active, setActive] = useState(false)
  const [value, setValue] = useState(otherProps.defaultValue)
  const Component = (Select as any).default || Select // Required to render with Next.js

  const hasAnimation = required && !active && !value

  const handleChange = useCallback(
    (currentValue: Option, action: ActionMeta<Option>) => {
      if (otherProps.onChange) {
        otherProps.onChange(currentValue, action)
      }
      if (otherProps.onValue) {
        otherProps.onValue(currentValue.value)
      }
      setValue(currentValue)
    },
    [props.onChange],
  )

  return (
    <Sheet.Main.Component css={Sheet.Main.css}>
      <Sheet.Cursor.Component
        css={mergeStyles(
          {
            animation: hasAnimation ? `${blinkAnimation()} 1s linear infinite alternate` : 'none',
            background: active ? naven.theme.color.backgroundContrast : naven.theme.color.gray500,
          },
          Sheet.Cursor.css,
        )}
      />
      <Component
        {...otherProps}
        styles={{
          ...customStyles({ containerStyles, backgroundColor }),
          ...otherProps.styles,
        }}
        onChange={handleChange}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        theme={(theme) => ({
          ...theme,
          borderRadius: naven.theme.look.radius.value,
          colors: {
            ...theme.colors,
            primary: cssVariable(naven.theme.color.highlight),
          },
          ...otherProps.theme,
        })}
      />
    </Sheet.Main.Component>
  )
})
