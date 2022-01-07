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
  menu: (provided: object) => ({ ...provided, background: backgroundColor, boxShadow: 'none' }),
  option: (provided: object) => ({
    ...provided,
    cursor: 'pointer',
  }),
  control: (provided: object) => ({
    ...provided,
    borderWidth: 0,
    boxShadow: 'none',
    background: backgroundColor,
    minHeight: unit(42),
  }),
  dropdownIndicator: (provided: object) => ({
    ...provided,
    padding: 0,
    paddingRight: unit(8),
  }),
})

export default function Dropdown({
  containerStyles,
  backgroundColor = cssVariable(naven.theme.color.white),
  ...props
}: Props & SelectProps) {
  return (
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
}
