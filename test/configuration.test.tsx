// import React from 'react'
// import { create } from 'react-test-renderer'
import { configure, Color, Space, Breakpoint } from '..'

test('Highlight color can be configured.', () => {
  expect(Color.highlight).toEqual('#2196F3')

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.highlight).toEqual('#FF00FF')
})

test('Other values remain untouched.', () => {
  expect(Color.interact).toEqual('#E91E63')
  expect(Color.Gray[300]).toEqual('#E0E0E0')
  expect(Space.medium).toEqual('20px')
  expect(Breakpoint.phone).toEqual(500)

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.interact).toEqual('#E91E63')
  expect(Color.Gray[300]).toEqual('#E0E0E0')
  expect(Space.medium).toEqual('20px')
  expect(Breakpoint.phone).toEqual(500)
})
