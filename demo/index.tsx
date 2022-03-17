import { useState, useCallback, useMemo } from 'react'
import { render } from 'react-dom'
import {
  Button,
  Content,
  Footer,
  Header,
  Heading,
  Paragraph,
  Horizontal,
  Alert,
  InlineCode,
  Image,
  Input,
  Checkbox,
  useBreakpoint,
} from 'naven'
import Dropdown from 'naven/Dropdown'
import { theme, createTheme } from './configuration'

const styles = {
  form: {
    background: theme.color.gray100,
    padding: theme.space.small,
    borderRadius: theme.look.radius,
  },
  customParagraph: {
    background: theme.color.gray300,
    padding: theme.space.small,
    fontFamily: theme.font.familySerif,
  },
}

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
  const [userTheme, setUserTheme] = useState('light')
  const [regularInput, setRegularInput] = useState()
  const [existingInput, setExistingInput] = useState('existing')
  const [requiredInput, setRequiredInput] = useState()
  const highlightThemeClass = useMemo(
    () =>
      createTheme({
        color: {
          highlight: theme.color.warning.value,
        },
      }),
    []
  )
  const darkThemeClass = useMemo(
    () =>
      createTheme({
        color: {
          backgroundContrast: theme.color.white.value,
          background: theme.color.black.value,
        },
      }),
    []
  )
  const toggleTheme = useCallback(() => {
    const nextTheme = userTheme === 'light' ? 'dark' : 'light'
    if (nextTheme === 'dark') {
      document.body.classList.add(darkThemeClass)
    } else {
      document.body.classList.remove(darkThemeClass)
    }
    setUserTheme(nextTheme)
  }, [userTheme])

  return (
    <>
      <Header wide>
        {({ TitleText, Meta, Navigation }) => (
          <>
            <TitleText>naven Demo</TitleText>
            <Meta
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
            <Navigation links={navigationLinks} />
          </>
        )}
      </Header>
      <Content>
        <Heading>naven Demo {userTheme}</Heading>
        <Horizontal wrap>
          <Button>Text Button</Button>
          <Button color="highlight">I'm a button</Button>
          <Button color="interact" onClick={toggleTheme}>
            Toggle {userTheme === 'light' ? 'dark' : 'light'} theme
          </Button>
        </Horizontal>
        <Paragraph css={styles.customParagraph}>
          This is a paragraph with some custom styles.
        </Paragraph>
        <div className={highlightThemeClass}>
          <Button color="highlight">I'm a highlight button inside a customized theme</Button>
        </div>
        <Image width={200} height={100} />
        <Paragraph>
          I bet you haven't heard of <InlineCode>naven</InlineCode> the new UI framework to create
          websites quickly. The above{' '}
          <InlineCode>{`<Image width={200} height={100} />`}</InlineCode> will display a placeholder
          for development when no <InlineCode>src</InlineCode> attribute is set.
        </Paragraph>
        <Viewport />
        <Horizontal wrap css={styles.form}>
          <Dropdown
            options={[
              { label: 'Mrs.', value: 'female' },
              { label: 'Mr.', value: 'male' },
            ]}
            backgroundColor={theme.color.gray100}
          />
          <Dropdown
            options={[
              { label: 'Mrs.', value: 'female' },
              { label: 'Mr.', value: 'male' },
            ]}
            onChange={(value) => console.log('dropdown:', value)}
            placeholder="Required value"
            backgroundColor={theme.color.gray100}
            required
          />
          <Input placeholder="Regular Input" value={regularInput} onValue={setRegularInput} />
          <Input placeholder="Existing Input" value={existingInput} onValue={setExistingInput} />
          <Input
            placeholder="Required Input"
            value={requiredInput}
            onValue={setRequiredInput}
            required
          />
          <Checkbox label="Really?" />
        </Horizontal>
        <Alert
          closeable
          styles={{
            Main: {
              css: {
                '@phone': {
                  display: 'none',
                },
              },
            },
          }}
        >
          I'm an alert that can be closed and will disappear on phone viewport.
        </Alert>
      </Content>
      <Footer>
        {({ Column }) => (
          <>
            <Column
              title={{ name: 'JSX' }}
              links={[
                {
                  name: 'React',
                  url: 'https://reactjs.org',
                },
              ]}
            />
            <Column
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
            <Column
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
            <Column
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
          </>
        )}
      </Footer>
    </>
  )
}

render(<Body />, document.body)
