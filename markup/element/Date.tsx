import React, { useState } from 'react'
import { Global, css } from '@emotion/react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Input } from './Input'

interface IDate {
  initialDate?: Date
  styleOverrides?: string
}

const DateInput = ({ value, onClick }: { value: any; onClick: any }) => (
  <Input value={value} onClick={onClick} />
)

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
