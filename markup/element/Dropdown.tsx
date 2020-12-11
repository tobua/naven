import React from 'react'
import { Props as SelectProps } from 'react-select'
import { Lazy } from './Lazy'

interface IDropdown {}

export const Dropdown = ({ ...props }: IDropdown & SelectProps) => {
  return (
    <Lazy
      imports={import('react-select')}
      result={(Component) => {
        const Select = Component.default
        return <Select {...props} />
      }}
    />
  )
}
