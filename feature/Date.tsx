import React, { HTMLAttributes, useState, Component } from 'react'
import ReactDatePicker from 'react-datepicker'
// @ts-ignore
import { Input, createComponent } from 'naven'
import type { ComponentProps, ComponentStylesDefinition } from '../types'

// @ts-ignore
export interface Props extends HTMLAttributes<HTMLElement> {
  initialDate?: Date | null
  onChange?: (date: Date) => void
}

type Sheets = 'Main'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'div',
    main: true,
  },
})

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
const DatePicker = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { initialDate = new Date(), onChange, ...otherProps } = props
  // Hook inside result will fail.
  const [startDate, setStartDate] = useState(initialDate)

  return (
    <Sheet.Main.Component css={Sheet.Main.css}>
      {/* @ts-ignore importing default will not work */}
      <ReactDatePicker.default
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
        {...otherProps}
      />
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, DatePicker)
