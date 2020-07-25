import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/core'
import { Global, Header, Navigation, Content, Footer } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content />
    <Footer
      rowStyle={css`
        background: white;
      `}
    />
  </>,
  document.body
)
