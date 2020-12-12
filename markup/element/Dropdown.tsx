import React from 'react'
import { Props as SelectProps } from 'react-select'
import { Color, Look } from '../../style'
import { Lazy } from './Lazy'

const customStyles = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
}

interface IDropdown {}

export const Dropdown = ({ ...props }: IDropdown & SelectProps) => {
  return (
    <Lazy
      imports={import('react-select')}
      result={(Component) => {
        const Select = Component.default
        return (
          <Select
            {...props}
            styles={{ ...customStyles, ...props.styles }}
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
}
