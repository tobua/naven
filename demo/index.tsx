import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/core'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven Preview</Element.Heading>
      <Element.Paragraph>This is an introduction.</Element.Paragraph>
      <Element.SubHeading>naven Basics</Element.SubHeading>
      <Element.Paragraph>
        Here is a list of the included elements.
      </Element.Paragraph>
      <Element.SubHeading>Button</Element.SubHeading>
      <Element.Button />
      <Element.Button highlight />
      <Element.Button action />
    </Content>
    <Footer
      rowStyle={css`
        background: white;
      `}
    />
  </>,
  document.body
)
