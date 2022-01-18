import {
  Content,
  Sidebar,
  Heading,
  Anchor,
  Spacer,
  Paragraph,
  Horizontal,
  Vertical,
  Wide,
  Narrow,
  InlineCode,
  Text,
} from 'naven'
import Code from 'naven/Code'
import { PropertyTable } from 'markup/PropertyTable'
import { theme } from '../configuration'

const highlightLayoutCss = {
  backgroundColor: theme.color.gray300,
  padding: theme.space.small,
}

export const Advanced = () => (
  <>
    <Content>
      <Heading as="h2">
        <Anchor name="layout" />
        Layout
      </Heading>
      <Heading as="h3" style="code">{`<Content />`}</Heading>
    </Content>
    <Content styles={{ Main: { css: highlightLayoutCss } }}>
      <span>Content</span>
    </Content>
    <Content>
      <Code>{`<Content>
  <span>Content</span>
</Content>`}</Code>
    </Content>
    <Content>
      <Heading as="h3" style="code">{`<Wide />`}</Heading>
    </Content>
    <Wide styles={{ Main: { css: highlightLayoutCss } }}>
      <span>Wide</span>
    </Wide>
    <Content>
      <Code>{`<Wide>
  <span>Wide</span>
</Wide>`}</Code>
      <Heading as="h3" style="code">{`<Narrow />`}</Heading>
    </Content>
    <Narrow styles={{ Main: { css: highlightLayoutCss } }}>
      <span>Narrow</span>
    </Narrow>
    <Content>
      <Code>{`<Narrow>
  <span>Narrow</span>
</Narrow>`}</Code>
      <Heading as="h3" style="code">{`<Sidebar />`}</Heading>
    </Content>
    <Sidebar styles={{ Main: { css: highlightLayoutCss } }}>
      <span>Sidebar</span>
    </Sidebar>
    <Content position="sidebar" styles={{ Main: { css: highlightLayoutCss } }}>
      <span>Content</span>
    </Content>
    <Content>
      <Code>{`<Sidebar>
  <span>Sidebar</span>
</Sidebar>
<Content position="sidebar">
  <span>Narrow</span>
</Content>`}</Code>
      <Heading as="h3" style="code">{`<Horizontal>`}</Heading>
      <Horizontal>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Horizontal>
      <Code>{`const HorizontallyAligned = <Horizontal>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Horizontal>`}</Code>
      <PropertyTable>
        <>
          <Text>gap</Text>
          <InlineCode>Space.medium</InlineCode>
          <InlineCode>string | number</InlineCode>
        </>
        <>
          <Text>wrap</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
      </PropertyTable>
      <Heading as="h3" style="code">{`<Vertical>`}</Heading>
      <Vertical>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Vertical>
      <Code>{`const VerticallyAligned = <Vertical>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Vertical>`}</Code>
      <PropertyTable>
        <>
          <Text>gap</Text>
          <InlineCode>Space.medium</InlineCode>
          <InlineCode>string | number</InlineCode>
        </>
      </PropertyTable>
      <Heading as="h2">
        <Anchor name="spacing" />
        Spacing
      </Heading>
      <Heading as="h2">
        <Anchor name="utility" />
        Utility Methods
      </Heading>
      <Code>{`import { toPx } from 'naven'
import { theme } from '../configuration';

css\`
  padding: \${toPx(5)};
  margin: \${toPx('5vh')}
\``}</Code>
      <Heading as="h2">
        <Anchor name="layers" />
        Layers
      </Heading>
      <Paragraph>
        Use layers to assign the <InlineCode>z-index</InlineCode> in a structured way. The default
        values used by the plugin can be configured.
      </Paragraph>
      <Code>{`import { configure, Layer } from 'naven'

configure({
  layer: {
    Popup: 14
  }
})

css\`
  z-index: \${Layer.Popup};
\``}</Code>
    </Content>
  </>
)
