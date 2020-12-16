import React from 'react'
import { Content, Element } from 'naven'
import { PropertyTable } from 'markup/PropertyTable'

const { Text, Link, TextLink, InlineCode, Paragraph } = Element

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
    <Paragraph>
      The header includes the logo and some links that are by default placed to
      the right.
    </Paragraph>
    <Element.Code>
      {`import logo from 'assets/logo.svg'

const MyHeader = <Header
  title="naven Demo"
  logo={logo}
  data={{
    links: [
      { name: 'Overview', url: 'overview' },
      { name: 'GitHub', url: 'https://github.com/tobua/naven' },
    ],
  }}
/>

const HeaderText = <Header>
  <Text>My App</Text>
</Header>`}
    </Element.Code>
    <PropertyTable space={false}>
      <>
        <Text>data</Text>
        <Text>optional</Text>
        <Text>IHeader</Text>
      </>
      <>
        <Text>title</Text>
        <Text>naven</Text>
        <Text>string</Text>
      </>
      <>
        <Text>logo</Text>
        <Text>optional</Text>
        <Text>string (image url)</Text>
      </>
      <>
        <Text>link</Text>
        <Text>/</Text>
        <Text>string</Text>
      </>
      <>
        <Text>titleCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
      <>
        <Text>metaCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Element.Heading as="h2" code>{`<Navigation />`}</Element.Heading>
    <Paragraph>
      Navigation with the top-level links directly visible and another optional
      level per link that is visible on hover. On mobile the navigation is only
      visible after clicking on an icon in the top right corner.
    </Paragraph>
    <Element.Code>
      {`const MyNavigation = <Navigation data={{
    top: [
      {
        title: { name: 'Top-Level First', url: 'first' },
        links: [
          { name: 'Bottom-Level First', url: 'first#first' },
          { name: 'Bottom-Level Second', url: 'first#second' },
        ],
      },
      {
        title: { name: 'Top-Level First', url: 'second' },
      },
    ],
  }}
/>`}
    </Element.Code>
    <PropertyTable space={false}>
      <>
        <Text>data</Text>
        <Text>optional</Text>
        <Text>INavigation</Text>
      </>
      <>
        <Text>linkActive</Text>
        <Text></Text>
        <InlineCode>{`(link: string) => boolean`}</InlineCode>
      </>
      <>
        <Text>tabCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Element.Heading as="h2" code>{`<Content />`}</Element.Heading>
    <Paragraph>
      This is where you place the actual contents of the page. This container
      takes up to 1500px. There is also a <InlineCode>{`<Narrow>`}</InlineCode>{' '}
      and <InlineCode>{`<Narrow>`}</InlineCode> a wide one available which are
      described in the <TextLink href="layout">Layout</TextLink> page.
    </Paragraph>
    <Element.Code>
      {`const MyContent = <Content>
  <Text>Hello World</Text>
</Content>`}
    </Element.Code>
    <PropertyTable space={false}>
      <>
        <Text>sidebar</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
    </PropertyTable>
    <Element.Heading as="h2" code>{`<Footer />`}</Element.Heading>
    <Paragraph>
      With this you can place more links or some common content for every page
      at the bottom.
    </Paragraph>
    <Element.Code>
      {`const FooterLinks = (
  <Footer
    data={{
      rows: [
        {
          title: { name: 'First-Level', url: 'link' },
          links: [
            { name: 'Second-Level', url: 'link' },
            { name: 'Second-Level', url: 'link' },
          ],
        },
      ],
    }}
  >
    <Paragraph>Copyright Notice</Paragraph>
  </Footer>
)

const CustomFooter = <Footer>
  <Paragraph>Copyright Notice</Paragraph>
</Footer>`}
    </Element.Code>
    <PropertyTable space={false}>
      <>
        <Text>data</Text>
        <Text></Text>
        <Text>IFooter</Text>
      </>
      <>
        <Text>rowCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Element.Spacer />
  </Content>
)
