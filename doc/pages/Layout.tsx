import React from 'react'
import { Element, Horizontal, Vertical } from 'naven'

export const Layout = () => (
  <>
    <Element.Heading as="h2">naven Layout</Element.Heading>
    <Horizontal>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Horizontal>
    <Element.Spacer />
    <Vertical>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Vertical>
    <Element.Spacer />
  </>
)
