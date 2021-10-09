import {
  Content,
  Heading,
  Anchor,
  Spacer,
  Paragraph,
  Horizontal,
  Vertical,
  Wide,
  Narrow,
  Color,
  Space,
  InlineCode,
  Text,
} from 'naven'
import { css } from '@emotion/react'
import { Code } from 'naven/Code'
import { PropertyTable } from 'markup/PropertyTable'

const highlightLayoutCss = css`
  background-color: ${Color.Gray[300]};
  padding: ${Space.small};
`

export const Advanced = () => (
  <>
    <Content>
      <Heading as="h2">
        <Anchor name="layout" />
        Layout
      </Heading>
      <Heading as="h3" code space={0}>{`<Wide />`}</Heading>
    </Content>
    <Wide css={highlightLayoutCss}>
      <span>Wide</span>
    </Wide>
    <Content>
      <Code>{`<Wide>
  <span>Wide</span>
</Wide>`}</Code>
      <Heading as="h3" code space={0}>{`<Narrow />`}</Heading>
    </Content>
    <Narrow css={highlightLayoutCss}>
      <span>Narrow</span>
    </Narrow>
    <Content>
      <Code>{`<Narrow>
  <span>Narrow</span>
</Narrow>`}</Code>
      <Heading as="h3" code>{`<SideBar />`}</Heading>
      <Paragraph>TODO</Paragraph>
      <Heading as="h3" code>{`<Horizontal>`}</Heading>
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
      <Heading as="h3" code>{`<Vertical>`}</Heading>
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
