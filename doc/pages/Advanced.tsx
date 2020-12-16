import React from 'react'
import {
  Content,
  Element,
  Horizontal,
  Vertical,
  Wide,
  Narrow,
  Color,
  Space,
} from 'naven'
import { css } from '@emotion/react'

const highlightLayoutCss = css`
  background-color: ${Color.Gray[300]};
  padding: ${Space.small};
`

export const Advanced = () => (
  <>
    <Content>
      <Element.Heading as="h2">
        <Element.Anchor name="layout" />
        Layout
      </Element.Heading>
      <Element.Heading as="h3" code space={0}>{`<Wide />`}</Element.Heading>
    </Content>
    <Wide css={highlightLayoutCss}>
      <span>Wide</span>
    </Wide>
    <Content>
      <Element.Code>{`<Wide>
  <span>Wide</span>
</Wide>`}</Element.Code>
      <Element.Heading as="h3" code space={0}>{`<Narrow />`}</Element.Heading>
    </Content>
    <Narrow css={highlightLayoutCss}>
      <span>Narrow</span>
    </Narrow>
    <Content>
      <Element.Code>{`<Narrow>
  <span>Narrow</span>
</Narrow>`}</Element.Code>
      <Element.Spacer />
      <Element.Heading as="h3" code>{`<Horizontal>`}</Element.Heading>
      <Horizontal>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Horizontal>
      <Element.Heading as="h3" code>{`<Vertical>`}</Element.Heading>
      <Vertical>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Vertical>
      <Element.Heading as="h2">
        <Element.Anchor name="spacing" />
        Spacing
      </Element.Heading>
      <Element.Heading as="h2">
        <Element.Anchor name="utility" />
        Utility Methods
      </Element.Heading>
      <Element.Code>{`import { toPx } from 'naven'

css\`
  padding: \${toPx(5)};
  margin: \${toPx('5vh')}
\``}</Element.Code>
      <Element.Heading as="h2">
        <Element.Anchor name="layers" />
        Layers
      </Element.Heading>
      <Element.Paragraph>
        Use layers to assign the{' '}
        <Element.InlineCode>z-index</Element.InlineCode> in a structured way.
        The default values used by the plugin can be configured.
      </Element.Paragraph>
      <Element.Code>{`import { configure, Layer } from 'naven'

configure({
  layer: {
    Popup: 14
  }
})

css\`
  z-index: \${Layer.Popup};
\``}</Element.Code>
    </Content>
  </>
)
