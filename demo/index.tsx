import React from 'react'
import { render } from 'react-dom'
import { css } from '@emotion/react'
import {
  Global,
  Header,
  Navigation,
  Content,
  Footer,
  Element,
  Color,
  Space,
  Breakpoint,
} from 'naven'

const { Heading, Paragraph, Button } = Element

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Heading>naven Demo</Heading>
      <Button highlight>I'm a button</Button>
      <Paragraph
        css={css`
          background: ${Color.Gray[300]};
          padding: ${Space.small};
        `}
      >
        This is a paragraph with some custom styles.
      </Paragraph>
      <Button
        space={0}
        interact
        css={css`
          ${Breakpoint.Phone} {
            display: none;
          }
        `}
      >
        I will disappear on mobile.
      </Button>
    </Content>
    <Footer />
  </>,
  document.body
)
