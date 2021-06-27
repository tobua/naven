import React from 'react'
import Select, { Props as SelectProps } from 'react-select'
// @ts-ignore
import { Color, Look, spaceStyleProp } from 'naven'

interface IDropdown {
  containerStyles?: object
  space?: string | number
  backgroundColor?: string
}

const customStyles = ({
  space,
  containerStyles,
  backgroundColor,
}: IDropdown) => ({
  container: (provided: any) => ({
    ...provided,
    minWidth: 200,
    ...containerStyles,
    ...spaceStyleProp(space),
  }),
  menu: (provided: any) => ({ ...provided, background: backgroundColor }),
  option: (provided: any) => ({
    ...provided,
    cursor: 'pointer',
  }),
  control: (provided: any) => ({
    ...provided,
    background: backgroundColor,
  }),
})

export const Dropdown = ({
  space,
  containerStyles,
  backgroundColor = Color.white,
  ...props
}: IDropdown & SelectProps) => (
  <Select
    {...props}
    styles={{
      ...customStyles({ space, containerStyles, backgroundColor }),
      ...props.styles,
    }}
    // @ts-ignore
    theme={{
      borderRadius: Look.corner,
      colors: {
        primary: Color.highlight,
      },
      ...props.theme,
    }}
  />
)
