import React from 'react'
import Select, { Props as SelectProps } from 'react-select'
// @ts-ignore
import { Color, radiusValue, spaceStyleProp, unit } from 'naven'

interface IDropdown {
  containerStyles?: object
  space?: string | number
  backgroundColor?: string
}

const customStyles = ({ space, containerStyles, backgroundColor }: IDropdown) => ({
  container: (provided: object) => ({
    ...provided,
    minWidth: unit(200),
    ...containerStyles,
    ...spaceStyleProp(space),
  }),
  menu: (provided: object) => ({ ...provided, background: backgroundColor }),
  option: (provided: object) => ({
    ...provided,
    cursor: 'pointer',
  }),
  control: (provided: object) => ({
    ...provided,
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
  space,
  containerStyles,
  backgroundColor = Color.white.var,
  ...props
}: IDropdown & SelectProps) => (
  <Select
    {...props}
    styles={{
      ...customStyles({ space, containerStyles, backgroundColor }),
      ...props.styles,
    }}
    theme={{
      borderRadius: radiusValue(),
      // @ts-ignore TODO issue likely with plugin types.
      colors: {
        primary: Color.highlight.var,
      },
      ...props.theme,
    }}
  />
)
