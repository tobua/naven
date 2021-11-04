import { configure, Color, Space, Font, Breakpoints, Look } from '../index'

test('Highlight color can be configured.', () => {
  expect(Color.highlight.value).toEqual('#0047FF')

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.highlight.value).toEqual('#FF00FF')
})

test('Other values remain untouched.', () => {
  expect(Color.interact.value).toEqual('#FF007A')
  expect(Color.Gray[300].value).toEqual('#E0E0E0')
  expect(Space.medium).toContain('20px')
  expect(Breakpoints.phone).toEqual(500)

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.interact.value).toEqual('#FF007A')
  expect(Color.Gray[300].value).toEqual('#E0E0E0')
  expect(Space.medium).toContain('20px')
  expect(Breakpoints.phone).toEqual(500)
})

test('Properties without units are "responsified".', () => {
  expect(Font.size.medium).toContain('calc')
  expect(Font.size.medium).toContain('16px')
  expect(Font.size.medium).not.toContain('18px')
  expect(Space.tiny).toContain('calc')
  // Also contains '5px' in rounding of digits.
  expect(Space.tiny).toContain(' 5px')
  expect(Space.tiny).not.toContain('10px')
  expect(Look.corner).toEqual(0)

  configure({
    font: {
      size: {
        medium: 18,
      },
    },
    space: {
      tiny: 10,
    },
    look: {
      corner: 5,
    },
  })

  expect(Font.size.medium).toContain('calc')
  expect(Font.size.medium).not.toContain('16px')
  expect(Font.size.medium).toContain('18px')
  expect(Space.tiny).toContain('calc')
  expect(Space.tiny).not.toContain(' 5px')
  expect(Space.tiny).toContain('10px')
  expect(Look.corner).toEqual(5)

  // No responsification for values with units.
  configure({
    font: {
      size: {
        medium: '18vw',
      },
    },
    space: {
      tiny: '10vh',
    },
    look: {
      corner: '5rem',
    },
  })

  expect(Font.size.medium).toEqual('18vw')
  expect(Space.tiny).toEqual('10vh')
  expect(Look.corner).toEqual('5rem')
})
