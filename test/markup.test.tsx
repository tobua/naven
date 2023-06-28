import React from 'react'
import { test, expect } from 'vitest'
import { create } from 'react-test-renderer'
import { Content, Header, Footer } from '../index'

test('Renders basic components.', () => {
  const renderer = create(
    <Content>
      <p>Hello Content</p>
    </Content>
  )

  const markup = renderer.toJSON()

  expect(markup).toBeDefined()
  expect(markup.type).toEqual('main')
  expect(typeof markup.props.className).toEqual('string')
  expect(markup.children.length).toEqual(1)
  expect(markup.children[0].type).toEqual('p')
  expect(markup.children[0].children[0]).toEqual('Hello Content')
})

test('Content renders all children.', () => {
  const renderer = create(
    <Content>
      <p>Hello Content</p>
      <div>
        <span>Hello nested</span>
        <p>Whoo</p>
      </div>
    </Content>
  )

  const markup = renderer.toJSON()

  expect(markup).toBeDefined()
  expect(markup.children.length).toEqual(2)
  expect(markup.children[0].type).toEqual('p')
  expect(markup.children[1].type).toEqual('div')
  expect(markup.children[1].children.length).toEqual(2)
})

test('Renders all top-level components.', () => {
  const markup = create(
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
    </>
  ).toJSON()

  expect(markup).toBeDefined()
})

test('Header works with different configurations.', () => {
  // Various components
  let markup = create(
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
    </Header>
  ).toJSON()

  expect(markup).toBeDefined()

  // Empty React elements
  markup = create(
    <Header>
      {({ TitleText }) => (
        <>
          <TitleText>naven App</TitleText>
          {false}
          {null}
          {undefined}
        </>
      )}
    </Header>
  ).toJSON()

  expect(markup).toBeDefined()

  // No Fragment wrapper
  markup = create(
    <Header>{({ TitleText }) => <TitleText>Simple Header Text</TitleText>}</Header>
  ).toJSON()

  expect(markup).toBeDefined()
})
