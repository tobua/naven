import React, { useState, Component } from 'react'
import { Global, css as cssSheet, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
// @ts-ignore
import { Input, spaceProp } from 'naven'
import ReactDatePicker from 'react-datepicker'

const Wrapper = styled.div<{ css?: SerializedStyles; space?: string | number }>`
  ${spaceProp}
  ${({ css }) => css}
`

interface IDate {
  css?: SerializedStyles
  initialDate?: Date | null
  onChange?: (date: Date) => void
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
  onChange,
  styleOverrides = '',
  space,
  ...props
}: IDate) => {
  // Hook inside result will fail.
  const [startDate, setStartDate] = useState(initialDate)

  return (
    <Wrapper space={space} css={css}>
      <Global styles={cssSheet(styleOverrides)} />
      <ReactDatePicker
        style={{ marginBottom: 20 }}
        selected={startDate}
        onChange={(date: Date) => {
          if (onChange) {
            onChange(date)
          }
          setStartDate(date)
        }}
        // @ts-ignore
        customInput={<DateInput />}
        {...props}
      />
    </Wrapper>
  )
}
