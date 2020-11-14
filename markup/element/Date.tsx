import React, { useState, Component } from 'react'
import { Global, css } from '@emotion/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Input } from './Input'

interface IDate {
  initialDate?: Date
  styleOverrides?: string
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
  initialDate = new Date(),
  styleOverrides = '',
}: IDate) => {
  const [startDate, setStartDate] = useState(initialDate)

  return (
    <>
      <Global styles={css(styleOverrides)} />
      <ReactDatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        // @ts-ignore
        customInput={<DateInput />}
      />
    </>
  )
}
