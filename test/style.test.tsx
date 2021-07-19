// import React from 'react'
// import { create } from 'react-test-renderer'
import { configure, Breakpoint, Look, radius, radiusStyleProp } from '../index'

test('Breakpoint helpers are correct.', () => {
  expect(Breakpoint.Phone).toEqual('@media (max-width: 500px)')

  configure({
    breakpoints: {
      phone: 700,
    },
  })

  expect(Breakpoint.Phone).toEqual('@media (max-width: 700px)')
})

test('Look helpers return proper values.', () => {
  expect(Look.corner).toEqual(0)
  expect(radius()).toEqual('')
  expect(radiusStyleProp()).toEqual({})

  configure({
    look: {
      corner: 10,
    },
  })

  expect(Look.corner).toEqual(10)
  expect(radius()).toContain('border-radius: calc(')
  expect(radius()).toContain('10px')
  expect(radius(2)).toContain('5px')
  expect(radius(2)).not.toContain('10px')
  expect(radiusStyleProp()).toEqual({ borderRadius: '10px' })

  configure({
    look: {
      corner: '2vw',
    },
  })

  expect(Look.corner).toEqual('2vw')
  expect(radius()).toEqual('border-radius: 2vw;')
  expect(radius(2)).toContain('border-radius: 1vw;')
  expect(radiusStyleProp()).toEqual({ borderRadius: '2vw' })
})
