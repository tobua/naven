import React from 'react'
import Select, { Props as SelectProps } from 'react-select'
// @ts-ignore
import { naven, unit, cssVariable } from 'naven'

interface Props {
  containerStyles?: object
  backgroundColor?: string
}

const customStyles = ({ containerStyles, backgroundColor }: Props) => ({
  container: (provided: object) => ({
    ...provided,
    minWidth: unit(200),
    ...containerStyles,
  }),
  menu: (provided: object) => ({ ...provided, background: backgroundColor }),
  option: (provided: object) => ({
    ...provided,
    cursor: 'pointer',
  }),
  control: (provided: object) => ({
    ...provided,
    borderWidth: 0,
    background: backgroundColor,
    minHeight: unit(42),
  }),
  dropdownIndicator: (provided: object) => ({
    ...provided,
    padding: 0,
    paddingRight: unit(8),
  }),
})

export const Dropdown = ({
  containerStyles,
  backgroundColor = cssVariable(naven.theme.color.white),
  ...props
}: Props & SelectProps) => (
  <Select
    {...props}
    styles={{
      ...customStyles({ containerStyles, backgroundColor }),
      ...props.styles,
    }}
    theme={{
      borderRadius: naven.theme.look.radius.value,
      // @ts-ignore TODO issue likely with plugin types.
      colors: {
        primary: cssVariable(naven.theme.color.highlight),
      },
      ...props.theme,
    }}
  />
)
