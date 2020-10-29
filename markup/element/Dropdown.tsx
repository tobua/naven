import React from 'react'
import Select, { Props as SelectProps } from 'react-select'

interface IDropdown {}

export const Dropdown = ({ ...props }: IDropdown & SelectProps) => (
  <Select {...props} />
)
