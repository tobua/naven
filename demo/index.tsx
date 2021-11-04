import { useState } from 'react'
import { render } from 'react-dom'
import {
  Global,
  Header,
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
  Input,
  Checkbox,
  Theme,
  css,
  styled,
} from 'naven'
import { Dropdown } from 'naven/Dropdown'

const navigationLinks = [
  {
    title: {
      name: 'JSX',
    },
    links: [
      {
        name: 'React',
        url: 'https://reactjs.org',
      },
    ],
  },
  {
    title: {
      name: 'CSS-in-JS',
    },
    links: [
      {
        name: 'Emotion',
        url: 'https://emotion.sh',
      },
    ],
  },
  {
    title: {
      name: 'TypeScript',
    },
    links: [
      {
        name: 'TypeScript',
        url: 'https://www.typescriptlang.org',
      },
      {
        name: 'Documentation',
        url: 'https://www.typescriptlang.org/docs/home.html',
      },
    ],
  },
  {
    title: {
      name: 'Components',
    },
    links: [
      {
        name: 'Layout',
        url: '/layout',
      },
      {
        name: 'Elements',
        url: '/elements',
      },
    ],
  },
]

const Viewport = () => {
  const { breakpoint } = useBreakpoint()

  return <Paragraph>Viewport: {breakpoint ? breakpoint : 'Desktop'}</Paragraph>
}

const Body = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    configure({
      colors: {
        backgroundContrast: nextTheme === 'light' ? Color.black.value : Color.white.value,
        background: nextTheme === 'light' ? Color.white.value : Color.black.value,
      },
    })
    setTheme(nextTheme)
  }

  return (
    <>
      <Global root="body" />
      <Header>
        <Header.Title.Text>naven Demo</Header.Title.Text>
        <Header.Meta
          links={[
            {
              name: 'HTML',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
            {
              name: 'CSS',
              url: 'https://sass-lang.com/',
            },
            {
              name: 'JavaScript',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
          ]}
        />
        <Header.Navigation links={navigationLinks} />
      </Header>
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
            Toggle {theme === 'light' ? 'dark' : 'light'} theme
          </Button>
        </Horizontal>
        <Paragraph
          css={css`
            background: ${Color.Gray[300].var};
            padding: ${Space.small};
            ${Font.family.serif}
          `}
        >
          This is a paragraph with some custom styles.
        </Paragraph>
        <Theme
          variables={[[Color.highlight, Color.warning.value]]}
          css={css`
            border: 1px solid ${Color.black.var};
            padding: ${Space.small};
          `}
        >
          <Button highlight>I'm a highlight button inside a customized theme</Button>
        </Theme>
        <Image width={200} height={100} />
        <Paragraph>
          I bet you haven't heard of <InlineCode>naven</InlineCode> the new UI framework to create
          websites quickly. The above{' '}
          <InlineCode>{`<Image width={200} height={100} />`}</InlineCode> will display a placeholder
          for development when no <InlineCode>src</InlineCode> attribute is set.
        </Paragraph>
        <Viewport />
        <Horizontal wrap>
          <Dropdown
            options={[
              { label: 'Mrs.', value: 'female' },
              { label: 'Mr.', value: 'male' },
            ]}
            space={0}
          />
          <Input placeholder="Name" space={0} />
          <Checkbox label="Really?" space={0} />
        </Horizontal>
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
      <Footer>
        <Footer.Column
          title={{ name: 'JSX' }}
          links={[
            {
              name: 'React',
              url: 'https://reactjs.org',
            },
          ]}
        />
        <Footer.Column
          title={{
            name: 'CSS-in-JS',
          }}
          links={[
            {
              name: 'Emotion',
              url: 'https://emotion.sh',
            },
          ]}
        />
        <Footer.Column
          title={{
            name: 'TypeScript',
          }}
          links={[
            {
              name: 'TypeScript',
              url: 'https://www.typescriptlang.org',
            },
            {
              name: 'Documentation',
              url: 'https://www.typescriptlang.org/docs/home.html',
            },
          ]}
        />
        <Footer.Column
          title={{
            name: 'Components',
          }}
          links={[
            {
              name: 'Layout',
              url: '/layout',
            },
            {
              name: 'Elements',
              url: '/elements',
            },
          ]}
        />
      </Footer>
    </>
  )
}

render(<Body />, document.body)
