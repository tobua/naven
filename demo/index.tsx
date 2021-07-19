import { useState } from 'react'
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
  Horizontal,
  Alert,
  Color,
  Space,
  Font,
  Breakpoint,
  InlineCode,
  Image,
  useBreakpoint,
  configure,
} from 'naven'

const Viewport = () => {
  const { breakpoint } = useBreakpoint()

  return <Paragraph>Viewport: {breakpoint ? breakpoint : 'Desktop'}</Paragraph>
}

const Body = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    configure({
      colors: {
        backgroundContrast: theme === 'light' ? '#FFF' : '#000',
      },
    })

    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  let bodyStyles

  if (theme === 'dark') {
    bodyStyles = css`
      background: ${Color.black};
      color: ${Color.white};
    `
  }

  return (
    <>
      <Global bodyCss={bodyStyles} root="body" />
      <Header title="naven Demo" />
      <Navigation />
      <Content>
        <Heading>naven Demo {theme}</Heading>
        <Horizontal
          css={css`
            gap: ${Space.small};
          `}
        >
          <Button space={0} highlight>
            I'm a button
          </Button>
          <Button space={0} interact onClick={toggleTheme}>
            Toggle dark theme
          </Button>
        </Horizontal>
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
        <Paragraph>
          I bet you haven't heard of <InlineCode>naven</InlineCode> the new UI
          framework to create websites quickly. The above{' '}
          <InlineCode>{`<Image width={200} height={100} />`}</InlineCode> will
          display a placeholder for development when no{' '}
          <InlineCode>src</InlineCode> attribute is set.
        </Paragraph>
        <Viewport />
        <Alert
          space={0}
          closeable
          css={css`
            ${Breakpoint.Phone} {
              display: none;
            }
          `}
        >
          I'm an alert that can be closed and will disappear on phone viewport.
        </Alert>
      </Content>
      <Footer />
    </>
  )
}

render(<Body />, document.body)
