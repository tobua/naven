import { Heading, Paragraph, Content } from 'naven'
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
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Heading>naven Demo</Heading>
    </Content>
    <Footer />
  </>,
  document.body
)`}</Code>
  </Content>
)
