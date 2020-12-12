import React from 'react'
import { Content, Element, Horizontal, Vertical, Wide, Narrow } from 'naven'
import { css } from '@emotion/react'

export const Advanced = () => (
  <>
    <Content>
      <Element.Heading as="h2">
        <Element.Anchor name="layout" />
        Layout
      </Element.Heading>
      <Element.Heading as="h3" code>{`<Wide />`}</Element.Heading>
      <Element.Spacer />
    </Content>

    <Wide
      css={css`
        background-color: gray;
      `}
    >
      <span>Wide</span>
    </Wide>
    <Content>
      <Element.Spacer />
      <Element.Code>{`<Wide>
  <span>Wide</span>
</Wide>`}</Element.Code>
      <Element.Heading as="h3" code>{`<Narrow />`}</Element.Heading>
    </Content>
    <Narrow
      css={css`
        background-color: gray;
      `}
    >
      <span>Narrow</span>
    </Narrow>
    <Content>
      <Element.Spacer />
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
