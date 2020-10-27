// import React from 'react'
// import { create } from 'react-test-renderer'
import { configure, Breakpoint } from '..'

test('Breakpoint helpers are correct.', () => {
  expect(Breakpoint.Phone).toEqual('@media (max-width: 500px)')

  configure({
    breakpoints: {
      phone: 700,
    },
  })

  expect(Breakpoint.Phone).toEqual('@media (max-width: 700px)')
})
