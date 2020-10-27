import React from 'react'
import { create } from 'react-test-renderer'
import { Global, Content, Header, Navigation, Footer } from '..'

test('Renders basic components.', () => {
  const renderer = create(
    <>
      <Global />
      <Content>
        <p>Hello Content</p>
      </Content>
    </>
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
    <>
      <Content>
        <p>Hello Content</p>
        <div>
          <span>Hello nested</span>
          <p>Whoo</p>
        </div>
      </Content>
    </>
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
      <Global />
      <Header title="naven test" />
      <Navigation />
      <Content>
        <p>Hello Content</p>
      </Content>
      <Footer />
    </>
  ).toJSON()

  expect(markup).toBeDefined()
})
