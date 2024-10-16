import { useState, useCallback, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
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
  TextLink,
  unit,
} from 'naven'
import Dropdown from 'naven/Dropdown'
import Code from 'naven/Code'
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
  const [regularInput, setRegularInput] = useState('')
  const [existingInput, setExistingInput] = useState('existing')
  const [requiredInput, setRequiredInput] = useState()
  const highlightThemeClass = useMemo(
    () =>
      createTheme({
        color: {
          highlight: theme.color.warning.value,
        },
      }),
    [],
  )
  const darkThemeClass = useMemo(
    () =>
      createTheme({
        color: {
          backgroundContrast: theme.color.white.value,
          background: theme.color.black.value,
        },
      }),
    [],
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
        {({ TitleText, Meta, Navigation, Middle }) => (
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
            <Middle>
              <TextLink href="http://google.com">I'm in the Middle</TextLink>
            </Middle>
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
            backgroundColor={theme.color.gray100 as unknown as string}
          />
          <Dropdown
            options={[
              { label: 'Mrs.', value: 'female' },
              { label: 'Mr.', value: 'male' },
            ]}
            onChange={(value) => console.log('dropdown:', value)}
            placeholder="Required value"
            backgroundColor={theme.color.gray100 as unknown as string}
            required
          />
          {/* Wrapping with css object used to cause issues when value changed. */}
          <Horizontal css={{ flexWrap: 'wrap' }}>
            <Input placeholder="Regular Input" value={regularInput} onValue={setRegularInput} />
          </Horizontal>
          <Input placeholder="Existing Input" value={existingInput} onValue={setExistingInput} />
          <Input
            placeholder="Required Input"
            value={requiredInput}
            onValue={setRequiredInput}
            required
          />
          <Input
            placeholder="Customized Elements"
            styles={{
              Main: { css: { background: theme.color.background } },
              Cursor: { tag: 'div', css: { marginRight: unit(12) } },
              Input: {
                css: { background: theme.color.gray200, color: theme.color.interact },
              },
            }}
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
        <Code>
          {`// Code block with React support by default.
export const SayHello = () => <p>Hello World!</p>`}
        </Code>
        <Code template="vanilla-ts">
          {`const addition = (firstValue: number, secondValue: string): number => firstValue + Number(secondValue) // Does not support highlighting for TypeScript specifically.`}
        </Code>
        <Code template="react-ts" diff={{ remove: [2], add: [3] }}>
          {`// TypeScript and Diff lines optional.
- export const SayHello = () => <p>Hello World!</p>
+ export const SayGoodbye = (name: string) => <p>Bye {name}!</p>`}
        </Code>
        <Code
          files={{
            '/App.js': `import { someText } from './second-file.js'

export default () => (
  <p>Hello Me again! {someText}</p>
)`,
            '/second-file.js': `export const someText = 'Hello!!!'`,
          }}
        />
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

createRoot(document.body).render(<Body />)
