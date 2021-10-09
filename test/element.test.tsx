import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from '../index'

test('Input onChange handler works as expected.', () => {
  const onChangeMock = jest.fn()
  const { container } = render(<Input onChange={onChangeMock} />)

  const input = container.querySelector('input')

  expect(onChangeMock.mock.calls.length).toBe(0)
  expect(input).toBeDefined()

  fireEvent.change(input, { target: { value: 'Hello' } })

  expect(onChangeMock.mock.calls.length).toBe(1)
  expect(input.value).toEqual('Hello')
  expect(onChangeMock.mock.calls[0][0].target.value).toEqual('Hello')
})

test('Input onValue handler works as expected.', () => {
  const onValueMock = jest.fn()
  const { container } = render(<Input onValue={onValueMock} />)

  const input = container.querySelector('input')

  expect(onValueMock.mock.calls.length).toBe(0)
  expect(input).toBeDefined()

  fireEvent.change(input, { target: { value: 'Hello' } })

  expect(onValueMock.mock.calls.length).toBe(1)
  expect(onValueMock.mock.calls[0][0]).toEqual('Hello')
})

test('Input onValue and onChange handlers combined work as expected.', () => {
  const onValueMock = jest.fn()
  const onChangeMock = jest.fn()
  const { container } = render(<Input onValue={onValueMock} onChange={onChangeMock} />)

  const input = container.querySelector('input')

  expect(onValueMock.mock.calls.length).toBe(0)
  expect(onChangeMock.mock.calls.length).toBe(0)
  expect(input).toBeDefined()

  fireEvent.change(input, { target: { value: 'Hello' } })

  expect(onValueMock.mock.calls.length).toBe(1)
  expect(onChangeMock.mock.calls.length).toBe(1)
  expect(input.value).toEqual('Hello')
  expect(onChangeMock.mock.calls[0][0].target.value).toEqual('Hello')
  expect(onValueMock.mock.calls[0][0]).toEqual('Hello')
})
