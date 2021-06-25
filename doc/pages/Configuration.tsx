import {
  Content,
  Text,
  Link,
  TextLink,
  Paragraph,
  Anchor,
  Heading,
  Spacer,
  InlineCode,
} from 'naven'
import { Code } from 'naven/Code'
import { PropertyTable } from 'markup/PropertyTable'

export const Configuration = () => (
  <Content>
    <Paragraph>
      Components like <InlineCode>{`<Header />`}</InlineCode> are prefilled with
      some default link data.
    </Paragraph>
    <Heading as="h2" code>
      <Anchor name="global" />
      {`<Global />`}
    </Heading>
    <Code>{`<Global root="body" />`}</Code>
    <Paragraph>
      Specify the root where you render the React application. By default an
      element <InlineCode>{`#root`}</InlineCode> is assumed. This component will
      not output anything but is required for the rest of the components to work
      properly. It's also inserting the&nbsp;
      <Link href="https://github.com/Sayegh7/emotion-reset">
        <InlineCode>emotion-reset</InlineCode>
      </Link>
      .
    </Paragraph>
    <PropertyTable space={false}>
      <>
        <Text>root</Text>
        <Text>#root</Text>
        <Text>CSS Selector</Text>
      </>
      <>
        <Text>rootCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Heading as="h2" code>
      <Anchor name="header" />
      {`<Header />`}
    </Heading>
    <Paragraph>
      The header includes the logo and some links that are by default placed to
      the right.
    </Paragraph>
    <Code>
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
    </Code>
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
    <Heading as="h2" code>
      <Anchor name="navigation" />
      {`<Navigation />`}
    </Heading>
    <Paragraph>
      Navigation with the top-level links directly visible and another optional
      level per link that is visible on hover. On mobile the navigation is only
      visible after clicking on an icon in the top right corner.
    </Paragraph>
    <Code>
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
    </Code>
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
    <Heading as="h2" code>
      <Anchor name="content" />
      {`<Content />`}
    </Heading>
    <Paragraph>
      This is where you place the actual contents of the page. This container
      takes up to 1500px. There is also a <InlineCode>{`<Narrow>`}</InlineCode>{' '}
      and <InlineCode>{`<Narrow>`}</InlineCode> a wide one available which are
      described in the <TextLink href="advanced#layout">Layout</TextLink> page.
    </Paragraph>
    <Code>
      {`const MyContent = <Content>
  <Text>Hello World</Text>
</Content>`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>sidebar</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
    </PropertyTable>
    <Heading as="h2" code>
      <Anchor name="footer" />
      {`<Footer />`}
    </Heading>
    <Paragraph>
      With this you can place more links or some common content for every page
      at the bottom.
    </Paragraph>
    <Code>
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
    </Code>
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
    <Spacer />
  </Content>
)
