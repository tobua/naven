<p align="center">
  <img src="https://github.com/tobua/naven/raw/main/logo.svg" alt="naven">
</p>

# naven

[![naven Demo](https://img.shields.io/static/v1?label=naven&message=Demo&color=brightgreen)](https://tobua.github.io/naven/demo)
[![naven Docs](https://img.shields.io/static/v1?label=naven&message=Documentation&color=blue)](https://naven-documentation.vercel.app)
[![npm](https://img.shields.io/npm/v/naven)](https://npmjs.com/naven)

React based CSS-in-JS styling framework.

## Installation

```
npm i naven
```

or to generate a new project with a naven template using [now](https://github.com/tobua/now):

```
npm init -y now naven ./my-app
```

## Getting Started

The following is an example of how to render a page generated with naven to display some minimal content.

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Content, Footer, Heading, Paragraph } from 'naven'

render(
  <>
    <Global root="body" />
    <Header title="My App">
      <Header.Title.Link />
      <Header.Navigation />
    </Header>
    <Content>
      <Heading>naven Demo</Heading>
      <Paragraph>Welcome home!</Paragraph>
    </Content>
    <Footer />
  </>,
  document.body
)
```

## Configuration

The base components are populated with some example date which you can see in . This data should be configured on the respective components for example the Header.

Complex components can be customized and combined in many ways to achieve desired layouts. Check out the [demo](https://tobua.github.io/naven/demo) for a basic example without much customization. Some components require input data in order to render anything useful, i.e. the links for the navigation. Refer to the documentation how to configure the base components [Configuration](https://tobua.github.io/naven/doc/configuration).

```jsx
import { Header, Image } from 'naven'
import logo from 'assets/logo.svg'

const MyHeader = (
  <Header wide={false}>
    <Header.Title.Link>
      <Image src={logo} />
    </Header.Title.Link>
    <Header.Navigation
      links={[
        { title: { name: 'Home', url: '/' } },
        {
          title: { name: 'About', url: 'about' },
          links: [
            { name: 'Disclaimer', url: '/disclaimer' },
            { name: 'Privacy', url: '/policy' },
          ],
        },
        { title: { name: 'Shop' } },
      ]}
    />
  </Header>
)
```

## Style

The default styles can be configured. In the [Style Demo](https://tobua.github.io/naven/demo/style) you can see the result in real time.

```jsx
// File: utility/configure.js
import { configure } from 'naven'

configure({
  colors: {
    highlight: '#00B76A',
    interact: '#FF8C00'
  },
  breakpoint: {
    Phone: 480,
    Tablet: 768
  },
  space: {
    small: '8px'
    medium: '2vw'
  },
  look: {
    corner: 10
  },
  responsive: {
    scalingRatio: 2,
  }
})
```

To make sure the configuration is applied before the stylesheets are parsed with `@emotion` place the configuration in a separate file and include it before any files importing `naven`.

```jsx
// Entry file: index.js
import React from 'react'
import { render } from 'react-dom'
import { Global, Header, Content, Text } from 'naven'
// Import configuration before any components.
import 'utility/configure.js'
import { MyFooter } from 'markup/Footer.jsx'
import { Homepage } from 'pages/Homepage.jsx'
import { About } from 'pages/Homepage.jsx'

render(
  <>
    <Global />
    <Header />
    <Content>
      <Text>...</Text>
    </Content>
    <MyFooter />
  </>,
  document.body
)
```

## css-in-js

This package relies on `@emotion` for CSS styles. It's two most important methods are also exported.

```jsx
import { css } from '@emotion/react'
import styled from '@emotion/styled'
// => same as
import { css, styled } from 'naven'
```

Styles parsed with `css` can be passed to almost every element. While `styled` can be used to extend existing elements with styles or style tags from the ground up.

```jsx
const removeGapStyles = css`
  row-gap: 0;
`

const VerticalWithoutGap = styled(Vertical)`
  row-gap: 0;
`

// Both of these are now the same.
<Vertical css={removeGapStyles}>{...}</Vertical>
<VerticalWithoutGap>{...}</VerticalWithoutGap>

// Regular way to style any tag.
const GrayWrapper = styled.div`
  background: gray;
`
```

## Layout

The CSS grid is attached to the root and there are [Layout](https://tobua.github.io/naven/demo/advanced#layout) components to work with it.

```jsx
import { Wide, Narrow } from 'naven'

render(
  <>
    <Global root="body" />
    <Header>
      <Header.Title.Text>naven Demo</Header.Title.Text>
      <Header.Navigation />
    </Header>
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
import { Paragraph } from 'naven'

const SpacedParagraph = <Paragraph space={0 | Space.large | 5 | '3vh' | undefined}>Hello</Paragraph>
```

## Responsive

This plugin assumes a Desktop-First approach where you override styles for `Breakpoint.Tablet` or `Breakpoint.Mobile`. You can `configure({ breakpoints: {...}})` the breakpoints while also adding new ones.

```jsx
import { Breakpoint, Breakpoints, useBreakpoint } from 'naven'

const hideMobileCss = css`
  ${Breakpoint.Phone} {
    display: none;
  } /* => @media (max-width: 500px) { display: none; } */
`

const Responsive = () => {
  const { breakpoint } = useBreakpoint()

  if (breakpoint === 'phone' || !breakpoint) {
    return <p>Phone || Desktop</p>
  }

  return <p>Tablet</p>
}
```

Where applicable all units are _responsified_ with [wasser](https://npmjs.com/wasser). The package doesn't need to be installed and it's methods are exported by this package.

```jsx
import { unit, Font, Text, configure } from 'naven'

const ResponsifiedText = styled(Text)`
  padding: ${unit(5)};
  margin-right: ${unit(10, 5)};
  ${Font.size.custom(30, 20, 2)}
`
```

The interface is described in [wasser - Interface](https://github.com/tobua/wasser#interface) and `unit` corresponds to `wasser` while `Font.size.custom` is the same as `font` there. To `configure` the default `wasser` variables use the `responsive` property passed to `configure` for this package as shown under [Style](#style).

## Font

```jsx
import { Font } from 'naven'

const SmallSerifText = css`
  ${Font.size.small}
  ${Font.family.serif}
`

const CustomSizedHeading = css`
  ${Font.style.italic}
  ${Font.weight.bold}
  /* Uses responsive sizing from font() method in wasser package. */
  ${Font.size.custom(40, 20)}
`
```

## Development

To view your changes live run `npm start` in the `/demo` or `/doc` folder. This will open a preview in the browser and automatically build and watch the plugin for changes.
