import React, { useState, Component } from 'react'
import { Global, css as cssSheet, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Input } from './Input'
import { Lazy } from './Lazy'
import { Space, spaceProp } from '../../style'

const Wrapper = styled.div`
  ${spaceProp}
  ${({ css }) => css}
`

interface IDate {
  css?: SerializedStyles
  initialDate?: Date
  styleOverrides?: string
  space?: string | number
}

// Will throw an error related to refs the plugin tries to
// attach if written as functional component.
// eslint-disable-next-line react/prefer-stateless-function
class DateInput extends Component<{ value: any; onClick: any }> {
  render() {
    const { value, onClick } = this.props
    // Empty onChange to prevent react error, will be overridden by plugin later anyways.
    return <Input value={value} onClick={onClick} onChange={() => {}} />
  }
}

// Date is already reserved in JS, therefore we use DatePicker.
export const DatePicker = ({
  css,
  initialDate = new Date(),
  styleOverrides = '',
  space,
}: IDate) => {
  // Hook inside result will fail.
  const [startDate, setStartDate] = useState(initialDate)
  return (
    <Lazy
      imports={Promise.all([
        import('react-datepicker'),
        import('react-datepicker/dist/react-datepicker.css'),
      ])}
      result={(ImportedComponent) => {
        const ReactDatePicker = ImportedComponent.default
        return (
          <Wrapper space={space} css={css}>
            <Global styles={cssSheet(styleOverrides)} />
            <ReactDatePicker
              style={{ marginBottom: 20 }}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              // @ts-ignore
              customInput={<DateInput />}
            />
          </Wrapper>
        )
      }}
    />
  )
}
