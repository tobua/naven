import React from 'react'
import { Content, Element } from 'naven'
import { PropertyTable } from 'markup/PropertyTable'

const { Text, Link, InlineCode, Paragraph } = Element

export const Configuration = () => (
  <Content>
    <Paragraph>
      Components like <Element.InlineCode>{`<Header />`}</Element.InlineCode>{' '}
      are prefilled with some default link data.
    </Paragraph>
    <Element.Heading as="h2" code>{`<Global />`}</Element.Heading>
    <Element.Code>{`<Global root="body" />`}</Element.Code>
    <Paragraph>
      Specify the root where you render the React application. By default an
      element <Element.InlineCode>{`#root`}</Element.InlineCode> is assumed.
      This component will not output anything but is required for the rest of
      the components to work properly. It's also inserting the&nbsp;
      <Link href="https://github.com/Sayegh7/emotion-reset">
        <InlineCode>emotion-reset</InlineCode>
      </Link>
      .
    </Paragraph>
    <PropertyTable>
      <>
        <Text>root</Text>
        <Text>#root</Text>
        <Text>CSS Selector</Text>
      </>
    </PropertyTable>
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
