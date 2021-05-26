import React from 'react'
import Select, { Props as SelectProps } from 'react-select'
// @ts-ignore
import { Color, Look, spaceStyleProp } from 'naven'

interface IDropdown {
  containerStyles?: object
  space?: string | number
}

const customStyles = ({ space, containerStyles }: IDropdown) => ({
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  container: (provided: any) => ({
    ...provided,
    minWidth: 200,
    ...containerStyles,
    ...spaceStyleProp(space),
  }),
})

export const Dropdown = ({
  space,
  containerStyles,
  ...props
}: IDropdown & SelectProps) => (
  <Select
    {...props}
    styles={{
      ...customStyles({ space, containerStyles }),
      ...props.styles,
    }}
    // @ts-ignore
    theme={{
      borderRadius: Look.corner,
      colors: {
        primary: Color.highlight,
      },
    }}
  />
)
