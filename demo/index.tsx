import React from 'react'
import { render } from 'react-dom'
// WORKAROUND https://github.com/emotion-js/emotion/issues/1431
// to prevent TypeScript error.
import '@emotion/core'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven UI Library</Element.Heading>
      <Element.Paragraph>This is an introduction.</Element.Paragraph>
      <Element.SubHeading>naven Basics</Element.SubHeading>
      <Element.Paragraph>
        Here is a list of the included elements.
      </Element.Paragraph>
      <Element.SubHeading>Button</Element.SubHeading>
      <Element.Button>Button</Element.Button>
      <Element.Button highlight>Highlight</Element.Button>
      <Element.Button action>Action</Element.Button>
    </Content>
    <Footer />
  </>,
  document.body
)
