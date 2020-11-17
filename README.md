# naven

React based CSS-in-JS styling framework.

## Installation

```
npm i naven
```

or to generate a new project with a naven template:

```
npm init now naven
```

## Getting Started

The following is an example of how to render a page generated with naven to display some minimal content.

```tsx
import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven Demo</Element.Heading>
      <Element.Paragraph>Welcome home!</Element.Paragraph>
    </Content>
    <Footer />
  </>,
  document.body
)
```

## Development

To view your changes live run `npm start` in the `/demo` or `/doc` folder. This will open a preview in the browser and automatically build and watch the plugin for changes.

## Reference

Here are some existing UI libraries to use as inspiration.

- https://getbootstrap.com/docs/3.4/css/
- https://chakra-ui.com/
- https://bumbag.style/
- https://styleguide.republik.ch/
- https://github.com/microsoft/fluentui
