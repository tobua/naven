import React from 'react'
import { Content, Element } from 'naven'

export const Configuration = () => (
  <Content>
    <Element.Paragraph>
      Components like <Element.InlineCode>{`<Header />`}</Element.InlineCode>{' '}
      are prefilled with some default link data.
    </Element.Paragraph>
    <Element.Heading as="h2" code>{`<Global />`}</Element.Heading>
    <Element.Code>{`<Global root="body" />`}</Element.Code>
    <Element.Paragraph>
      Specify the root where you render the React application. By default an
      element <Element.InlineCode>{`#root`}</Element.InlineCode> is assumed.
      This is requried for some global styles to work as expected.
    </Element.Paragraph>
    <Element.Heading as="h2" code>{`<Header />`}</Element.Heading>
    <Element.Code>
      {`<Header
        title="naven Demo"
        logo={logo}
        data={{
          links: [
            { name: 'Overview', url: 'overview' },
            { name: 'GitHub', url: 'https://github.com/tobua/naven' },
          ],
        }}
      />`}
    </Element.Code>
    <Element.Heading as="h2" code>{`<Navigation />`}</Element.Heading>
    <Element.Heading as="h2" code>{`<Content />`}</Element.Heading>
    <Element.Heading as="h2" code>{`<Footer />`}</Element.Heading>
    <Element.Spacer />
  </Content>
)
