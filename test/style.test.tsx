import React from 'react'
import { create } from 'react-test-renderer'
import { SerializedStyles } from '@emotion/react'
import { matchers } from '@emotion/jest'
import {
  configure,
  Breakpoint,
  Look,
  radius,
  radiusStyleProp,
  Color,
  Space,
  Font,
  css,
  styled,
  createCssVariable,
} from '../index'
import { assign } from '../utility/custom-object-assign-deep'

expect.extend(matchers)

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

test('Customized object-assign-deep properly merges CSSVariables.', () => {
  const InitialStyles = {
    Color: {
      highlight: createCssVariable('color-highlight', 'blue'),
      interact: createCssVariable('color-interact', 'red'),
      Gray: {
        100: createCssVariable('color-gray-100', 'lightgray'),
        900: createCssVariable('color-gray-900', 'darkgray'),
      },
    },
    Font: {
      bold: 'font-weight: bold;',
    },
  }

  expect(InitialStyles.Color.highlight.var).toEqual('var(--color-highlight)')
  expect(InitialStyles.Color.highlight.value).toEqual('blue')
  expect(InitialStyles.Color.interact.value).toEqual('red')
  expect(InitialStyles.Font.bold).toEqual('font-weight: bold;')
  expect(InitialStyles.Color.Gray[100].value).toEqual('lightgray')

  const AssignedStyles: any = assign(InitialStyles, {
    Color: {
      highlight: 'green',
    },
  })

  expect(AssignedStyles.Color.highlight.var).toEqual('var(--color-highlight)')
  expect(AssignedStyles.Color.highlight.value).toEqual('green')
  expect(AssignedStyles.Color.interact.value).toEqual('red')
  expect(AssignedStyles.Font.bold).toEqual('font-weight: bold;')
  expect(AssignedStyles.Color.Gray[900].value).toEqual('darkgray')

  const ReassignedStyles: any = assign(AssignedStyles, {
    Color: {
      Gray: {
        500: createCssVariable('color-gray-500', 'gray'),
        900: 'lightblack',
      },
    },
    Font: {
      bold: 'reassigned',
    },
  })

  expect(ReassignedStyles.Color.Gray[500].value).toEqual('gray')
  expect(ReassignedStyles.Color.Gray[900].value).toEqual('lightblack')
  expect(ReassignedStyles.Font.bold).toEqual('reassigned')
})

test('Renders styles using CSS Variables.', () => {
  const WrapperComponent = styled.div<{ css?: SerializedStyles }>`
    display: flex;
  `

  const cssStyleObject = css`
    background-color: ${Color.interact.var};
    padding: ${Space.small};
    ${Font.family.serif}
  `

  const StyledComponent = styled.div`
    color: ${Color.highlight.var};
  `

  const renderer = create(
    <>
      <WrapperComponent css={cssStyleObject} />
      <StyledComponent />
    </>
  )

  const tree = renderer.toJSON()

  expect(tree).toBeDefined()

  const wrapper = tree[0]
  const styledComponent = tree[1]

  expect(wrapper).toHaveStyleRule('display', 'flex')
  // css property only works with babel plugin.
  expect(cssStyleObject.styles).toContain(Color.interact.var)
  expect(styledComponent).toHaveStyleRule('color', Color.highlight.var)
})
