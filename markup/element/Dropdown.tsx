import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.select`
  display: flex;
`

interface IDropdown {
  options: {
    value: string;
    label: string;
  }[]
}

// TODO use http://npmjs.com/react-select
export const Dropdown = ({ options }: IDropdown) => <Wrapper>{options.map(option => <option value={option.value}>{option.label}</option>)}</Wrapper>

