import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/core'
import {
  Global,
  Header,
  Navigation,
  Content,
  Footer,
  Heading,
  SubHeading,
  Paragraph,
} from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Heading>naven Preview</Heading>
      <Paragraph>This is an introduction.</Paragraph>
      <SubHeading>naven Basics</SubHeading>
      <Paragraph>Here is a list of the included elements.</Paragraph>
    </Content>
    <Footer
      rowStyle={css`
        background: white;
      `}
    />
  </>,
  document.body
)
