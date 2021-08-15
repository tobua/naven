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
      <>
        <Text>bodyCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Heading as="h2" code>
      <Anchor name="header" />
      {`<Header />`}
    </Heading>
    <Paragraph>
      The header consists of four elements each optional: Title (Text or Link
      with a Logo), Middle, Meta (Right) and the Navigation. On mobile the
      navigation and some elements are hidden behind a toggle on the right.
    </Paragraph>
    <Code>
      {`const MyHeader = (
  <Header>
    <Header.Title.Text>My Page</Header.Title.Text>
    <Header.Middle>
      <TextLink>Click me</TextLink>
    </Header.Middle>
    <Header.Meta links={[
      { name: 'Overview', url: 'overview' },
      { name: 'GitHub', url: 'https://github.com/tobua/naven' },
    ]} />
    <Header.Navigation hint="see below for more" />
  </Header>
)`}
    </Code>
    <Code>
      {`import logo from 'assets/logo.svg'

const HeaderWithImage = (
  <Header wide={false}>
    <Header.Title.Link>
      <Image src={logo} css={css\`height: unit(40);\`} />
    </Header.Title.Link>
    <Header.Meta hideMobile>
      <Button>Sign Up Now!</Button>
    </Header.Meta>
  </Header>
)`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>wide</Text>
        <InlineCode>false</InlineCode>
        <InlineCode>boolean</InlineCode>
      </>
      <>
        <Text>children</Text>
        <Text></Text>
        <InlineCode>Title | Middle | Meta | Navigation</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h3" code>
      {`<Header.Title.Text />`}
    </Heading>
    <PropertyTable space={false}>
      <>
        <InlineCode>children</InlineCode>
        <Text>naven</Text>
        <InlineCode>string</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h3" code>
      {`<Header.Title.Link />`}
    </Heading>
    <PropertyTable space={false}>
      <>
        <InlineCode>link</InlineCode>
        <Text>/</Text>
        <InlineCode>string</InlineCode>
      </>
      <>
        <InlineCode>children</InlineCode>
        <Text>Naven Logo</Text>
        <InlineCode>ReactNode</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h3" code>
      {`<Header.Middle />`}
    </Heading>
    <PropertyTable space={false} />
    <Heading as="h3" code>
      {`<Header.Meta />`}
    </Heading>
    <PropertyTable space={false}>
      <>
        <InlineCode>links</InlineCode>
        <InlineCode>[]</InlineCode>
        <InlineCode>Link[]</InlineCode>
      </>
      <>
        <InlineCode>hideMobile</InlineCode>
        <InlineCode>false</InlineCode>
        <InlineCode>boolean</InlineCode>
      </>
      <>
        <InlineCode>children</InlineCode>
        <Text></Text>
        <InlineCode>ReactNode</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h3" code>
      <Anchor name="navigation" />
      {`<Header.Navigation />`}
    </Heading>
    <Paragraph>
      Navigation with the top-level links directly visible and another optional
      level per link that is visible on hover. On mobile the navigation is only
      visible after clicking on an icon in the top right corner.
    </Paragraph>
    <Code>
      {`const HeaderWithNavigation = (
  <Header>
    <Header.Navigation links={[
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
      ]}
    />
  </Header>
)`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>links</Text>
        <Text></Text>
        <InlineCode>{`{
  title: Link | OptionalLink
  links?: Link[]
}[]`}</InlineCode>
      </>
      <>
        <Text>linkActive</Text>
        <Text></Text>
        <InlineCode>{`(link: string) => boolean`}</InlineCode>
      </>
      <>
        <Text>listCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
      <>
        <Text>tabCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
      <>
        <Text>toggleCss</Text>
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
      With this you can place links in columns or some custom content for every
      page at the bottom.
    </Paragraph>
    <Code>
      {`const FooterWithLinks = (
  <Footer>
    <Footer.Column
      title={{ name: 'First-level', url: '/first' }}
      links={[
        {
          name: 'Second-Level',
          url: '/second',
        },
        {
          name: 'Second-Level Jr.',
          url: '/second-jr',
        }
      ]}
    />
    <Footer.Column
      title={{ name: 'First-Level with Content', url: '/first-content' }}
    >
      <Paragraph>Copyright Notice</Paragraph>
    </Footer.Column>
  </Footer>
)

const CustomFooter = <Footer>
  <Paragraph>Copyright Notice</Paragraph>
</Footer>`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>wide</Text>
        <InlineCode>false</InlineCode>
        <InlineCode>boolean</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h3" code>
      {`<Footer.Column />`}
    </Heading>
    <PropertyTable space={false}>
      <>
        <Text>title</Text>
        <Text>Empty</Text>
        <InlineCode>OptionalLink</InlineCode>
      </>
      <>
        <Text>links</Text>
        <Text>Empty</Text>
        <InlineCode>Link[]</InlineCode>
      </>
    </PropertyTable>
    <Spacer />
  </Content>
)
