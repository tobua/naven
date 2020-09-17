// import React from 'react'
// import { create } from 'react-test-renderer'
import { configure, Phone, Tablet } from '..'

test('Breakpoint helpers are correct.', () => {
  expect(Phone).toEqual('@media (max-width: 500px)')

  configure({
    breakpoints: {
      phone: 700,
    },
  })

  expect(Phone).toEqual('@media (max-width: 700px)')
})
