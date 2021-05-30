import { render } from 'react-dom'
import { css } from '@emotion/react'
import {
  Global,
  Header,
  Navigation,
  Content,
  Footer,
  Heading,
  Paragraph,
  Button,
  Color,
  Space,
  Breakpoint,
  Image,
} from 'naven'

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
      <Image width={200} height={100} />
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
