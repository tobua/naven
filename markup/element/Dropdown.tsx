import React from 'react'
import { Props as SelectProps } from 'react-select'
import { Color, Look, spaceStyleProp } from '../../style'
import { Lazy } from './Lazy'

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
  <Lazy
    imports={import('react-select')}
    result={(Component) => {
      const Select = Component.default
      return (
        <Select
          {...props}
          styles={{
            ...customStyles({ space, containerStyles }),
            ...props.styles,
          }}
          theme={{
            borderRadius: Look.corner,
            colors: {
              primary: Color.highlight,
            },
          }}
        />
      )
    }}
  />
)
