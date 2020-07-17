import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer } from 'strappd'

render(
  <>
    <Global root="body" />
    <Header title="strappd Demo" />
    <Navigation />
    <Content />
    <Footer />
  </>,
  document.body
)
