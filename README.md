<p align="center">
  <img src="https://github.com/tobua/naven/raw/master/logo.svg" alt="naven">
</p>

# naven

[![naven Demo](https://img.shields.io/static/v1?label=naven&message=Demo&color=brightgreen)](https://tobua.github.io/naven/demo)
[![naven Docs](https://img.shields.io/static/v1?label=naven&message=Documentation&color=blue)](https://tobua.github.io/naven/doc)

React based CSS-in-JS styling framework.

## Installation

```
npm i naven
```

or to generate a new project with a naven template using [now](https://github.com/tobua/now):

```
npm init now naven ./my-app
```

## Getting Started

The following is an example of how to render a page generated with naven to display some minimal content.

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Navigation, Content, Footer, Element } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="My App" />
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

## Configuration

The base components are populated with some example date which you can see in the [demo](https://tobua.github.io/naven/demo). This data should be configured on the respective components for example the Header. Refer to the documentation how to configure the other components [Configuration](https://tobua.github.io/naven/doc/configuration).

```jsx
import logo from 'assets/logo.svg'

const MyHeader = (
  <Header
    logo={logo}
    data={{
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: 'about' },
        { name: 'Shop', url: 'shop' },
      ],
    }}
  />
)
```

## Style

```jsx
import { configure } from 'naven'

configure({
  colors: //
  breakpoint: //
  space: //
})
```

## Layout

```jsx
import { Wide, Narrow } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Wide>Wide (Screen Width)</Wide>
    <Content>Regular Width (max 1500px)</Content>
    <Narrow>Narrow Width (max 1000px)</Narrow>
    <Footer />
  </>,
  document.body
)
```

## Spacing

By default applicable elements will get a 20px `margin-bottom`. This space can be changed on the element with the `space` property.

```jsx
import { Element } from 'naven'

const SpacedParagraph = (
  <Element.Paragraph space={0 | Space.large | 5 | '3vh' | undefined}>
    Hello
  </Element.Paragraph>
)
```

## Responsive

This plugin assumes a Desktop-First approach where you override styles for `Breakpoint.Tablet` or `Breakpoint.Mobile`. You can `configure({ breakpoints: {...}})` the breakpoints while also adding new ones.

```jsx
import { Breakpoint, Breakpoints } from 'naven'

const hideMobileCss = css`
  ${Breakpoint.Phone} {
    display: none;
  } /* => @media (max-width: 500px) { display: none; } */
`
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