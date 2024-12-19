/**
 * @vitest-environment jsdom
 */

import React from 'react'
import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Content, Header, Footer } from '../index'

test('Renders basic components.', () => {
  const { container } = render(
    <Content>
      <p>Hello Content</p>
    </Content>,
  )

  const main = container.querySelector('main')

  expect(main).toBeDefined()
  expect(main?.className).not.toBe('')
  expect(main?.innerHTML).toEqual('<p>Hello Content</p>')
})

test('Content renders all children.', () => {
  const { container } = render(
    <Content>
      <p>Hello Content</p>
      <div>
        <span>Hello nested</span>
        <p>Whoo</p>
      </div>
    </Content>,
  )

  const main = container.querySelector('main')

  expect(main?.innerHTML).toEqual(
    '<p>Hello Content</p><div><span>Hello nested</span><p>Whoo</p></div>',
  )
})

test('Renders all top-level components.', () => {
  const { container } = render(
    <>
      <Header>
        {({ TitleText, Navigation }) => (
          <>
            <TitleText>naven test</TitleText>
            <Navigation />
          </>
        )}
      </Header>
      <Content>
        <p>Hello Content</p>
      </Content>
      <Footer>
        <p>hello</p>
      </Footer>
    </>,
  )

  const header = container.querySelector('header')

  expect(header).toBeDefined()
  expect(header?.innerHTML).toContain('naven test')
})

test('Header works with different configurations.', () => {
  // Various components
  const { container } = render(
    <Header>
      {({ TitleLink, Navigation, Meta, Middle }) => (
        <>
          <TitleLink>Page Heading</TitleLink>
          <Middle>
            <p>Middle Content</p>
          </Middle>
          <Meta links={[]} />
          <Navigation />
        </>
      )}
    </Header>,
  )

  const header = container.querySelector('header')

  expect(header?.innerHTML).toContain('Middle Content')
  expect(header?.innerHTML).toContain('Page Heading')
})

test('Header works with different configurations 1.', () => {
  const { container } = render(
    <Header>
      {({ TitleText }) => (
        <>
          <TitleText>naven App</TitleText>
          {false}
          {null}
          {undefined}
        </>
      )}
    </Header>,
  )

  const header = container.querySelector('header')

  expect(header?.innerHTML).toContain('naven App')
})

test('Header works with different configurations 2.', () => {
  const { container } = render(
    <Header>{({ TitleText }) => <TitleText>Simple Header Text</TitleText>}</Header>,
  )

  const header = container.querySelector('header')

  expect(header?.innerHTML).toContain('Simple Header Text')
})
