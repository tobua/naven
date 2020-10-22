import React from 'react'
import { render } from 'react-dom'
// WORKAROUND https://github.com/emotion-js/emotion/issues/1431
// to prevent TypeScript error.
import '@emotion/core'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven UI Library</Element.Heading>
      <Element.Paragraph>This is an introduction.</Element.Paragraph>
      <Element.Heading as="h2">naven Basics</Element.Heading>
      <Element.Paragraph>
        Here is a list of the included elements.
      </Element.Paragraph>
      <Element.Heading as="h2">Button</Element.Heading>
      <Element.Button>Button</Element.Button>
      <Element.Button highlight>Highlight</Element.Button>
      <Element.Button interact>Interaction</Element.Button>
      <Element.Spacer />
      <Element.Heading as="h2">Input</Element.Heading>
      <Element.Input placeholder="Input here" />
      <Element.Input
        placeholder="Input here"
        value="value"
        onChange={() => {}}
      />
      <Element.Spacer />
      <Element.Heading as="h2">Alert</Element.Heading>
      <Element.Alert>Hey: This is an info</Element.Alert>
      <Element.Spacer size="tiny" />
      <Element.Alert type="warning">Ohh: This is a warning</Element.Alert>
      <Element.Spacer size="tiny" />
      <Element.Alert type="error">Whoopsie: This is an error</Element.Alert>
      <Element.Spacer />
      <Element.Heading as="h2">Popup</Element.Heading>
      <Element.Button>Open</Element.Button>
      <Element.Popup show={false}>
        <p>This is the popup content.</p>
      </Element.Popup>
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Checkbox</Element.Heading>
      <Element.Checkbox value={true} />
      <Element.Checkbox value={false} />
      <Element.Spacer />
    </Content>
    <Footer />
  </>,
  document.body
)
