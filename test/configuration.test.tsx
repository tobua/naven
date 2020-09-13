// import React from 'react'
// import { create } from 'react-test-renderer'
import { configure, Color } from '..'

test('Highlight color can be configured.', () => {
  expect(Color.highlight).toEqual('#2196F3')

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.highlight).toEqual('#FF00FF')
})
