import { configure, Color, Space, Breakpoints } from '..'

test('Highlight color can be configured.', () => {
  expect(Color.highlight).toEqual('#0047FF')

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.highlight).toEqual('#FF00FF')
})

test('Other values remain untouched.', () => {
  expect(Color.interact).toEqual('#FF007A')
  expect(Color.Gray[300]).toEqual('#E0E0E0')
  expect(Space.medium).toEqual('20px')
  expect(Breakpoints.phone).toEqual(500)

  configure({
    colors: {
      highlight: '#FF00FF',
    },
  })

  expect(Color.interact).toEqual('#FF007A')
  expect(Color.Gray[300]).toEqual('#E0E0E0')
  expect(Space.medium).toEqual('20px')
  expect(Breakpoints.phone).toEqual(500)
})
