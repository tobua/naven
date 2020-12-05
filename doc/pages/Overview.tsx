import React from 'react'
import { Element, Content } from 'naven'

export const Overview = () => (
  <Content>
    <Element.Heading>naven UI Library</Element.Heading>
    <Element.Heading as="h2">Overview</Element.Heading>
    <Element.Paragraph>
      Quickly prototype and implement custom designed web applications with
      React and CSS-in-JS. Avoid waisting time styling components from scratch
      each time.
    </Element.Paragraph>
    <Element.Spacer />
    <Element.Heading as="h2">Installation</Element.Heading>
    <Element.Paragraph>Add it to your project with</Element.Paragraph>
    <Element.Code>{`npm install naven`}</Element.Code>
    <Element.Paragraph>or start with a template:</Element.Paragraph>
    <Element.Code>{`npm init now papua ./my-app naven`}</Element.Code>
    <Element.Spacer />
    <Element.Heading as="h2">Usage</Element.Heading>
    <Element.Code>{`import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven Demo</Element.Heading>
      <Element.Spacer />
    </Content>
    <Footer />
  </>,
  document.body
)
`}</Element.Code>
    <Element.Spacer />
  </Content>
)
