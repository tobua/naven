import React from 'react'
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