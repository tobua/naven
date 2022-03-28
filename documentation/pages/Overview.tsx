import { Heading, Paragraph, Content, InlineCode, TextLink } from 'naven'
import Code from 'naven/Code'

export const Overview = () => (
  <Content>
    <Heading>naven UI Library</Heading>
    <Paragraph>
      Quickly prototype and implement custom designed web applications with React and CSS-in-JS.
    </Paragraph>
    <Heading as="h2">Installation</Heading>
    <Paragraph>Add it to your project with</Paragraph>
    <Code>{`npm install naven`}</Code>
    <Paragraph>or start with a template:</Paragraph>
    <Code>{`npm init now naven ./my-app`}</Code>
    <Heading as="h2">Usage</Heading>
    <Code>{`import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer, Heading } from 'naven'

render(
  <>
    <Header title="naven Demo" />
    <Navigation links={[{ title: { name: 'Links' }, links: [{ name: 'First' }]}]} />
    <Content>
      <Heading>naven Demo</Heading>
    </Content>
    <Footer />
  </>,
  document.body
)`}</Code>
    <Heading as="h2">Custom Configuration</Heading>
    <Paragraph>
      Configuring the theme variables requires one to call a few methods.{' '}
      <InlineCode>create</InlineCode> as used below is exported by naven but simply an alias for{' '}
      <InlineCode>createStitches</InlineCode> from <InlineCode>@stitches/react</InlineCode>. In
      order to avoid a massive slowdown of typechecking with TypeScript the result of{' '}
      <InlineCode>create</InlineCode> has to be stored in a temporary variable before calling{' '}
      <InlineCode>register</InlineCode>. The <TextLink href="/style">style page</TextLink> lists all
      the variables that can be configured. It's also possible to add additional variables.
    </Paragraph>
    <Code>{`import { merge, create, register } from 'naven'

// Without intermediary variable type checking will slow down > 10 times.
const avoidTypeCheckIssueWorkaround = create(merge({
  theme: {
    color: {
      highlight: '#00ab64',
      interact: '#ab0047',
    },
    look: {
      radius: 10
    },
  }
}))

export const { theme, styled, createTheme } = register(avoidTypeCheckIssueWorkaround, {
  rootSelector: 'body',
})`}</Code>
    <Paragraph>
      This configuration is usually done in a separate file. Other files that need access to any of
      the stitches methods should import them from this configuration file.
    </Paragraph>
    <Code>{`import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer, Heading } from 'naven'
import { theme, styled } from './configuration'

const customTextColor = { color: theme.color.highlight }
const InteractiveText = styled(Text, {
  color: theme.color.interactive,
  background: theme.color.backgroundContrast,
  borderRadius: theme.look.radius
})

render(
  <>
    <Header title="naven Customized" />
    <Content>
      <Text css={customTextColor}>This appears in highlight color.</Text>
      <InteractiveText>This is a reusable customized Text component.</InteractiveText>
    </Content>
  </>,
  document.body
)`}</Code>
  </Content>
)
