import React from 'react'
import { render } from 'react-dom'
import {
  Global,
  Header,
  Navigation,
  Content,
  Footer,
  Heading,
  Paragraph,
} from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Heading>naven Demo</Heading>
      <Paragraph>Welcome home!</Paragraph>
    </Content>
    <Footer />
  </>,
  document.body
)
