import React from 'react'
import { Content, Element, Horizontal, Vertical, Wide, Narrow } from 'naven'
import { css } from '@emotion/react'

export const Layout = () => (
  <>
    <Content>
      <Element.Heading as="h2">Layout</Element.Heading>
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
      <Element.Spacer />
      <Element.Heading as="h3" code>{`<Vertical>`}</Element.Heading>
      <Vertical>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Vertical>
      <Element.Spacer />
    </Content>
  </>
)
