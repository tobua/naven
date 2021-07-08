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
  Font,
  Breakpoint,
  Image,
  useBreakpoint,
} from 'naven'

const Viewport = () => {
  const { breakpoint } = useBreakpoint()

  return <Paragraph>Viewport: {breakpoint ? breakpoint : 'Desktop'}</Paragraph>
}

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
          ${Font.family.serif}
        `}
      >
        This is a paragraph with some custom styles.
      </Paragraph>
      <Image width={200} height={100} />
      <Viewport />
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
