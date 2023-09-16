<p align="center">
  <img src="https://github.com/tobua/naven/raw/main/logo.svg" alt="naven">
</p>

# naven

[![naven Demo](https://img.shields.io/static/v1?label=naven&message=Demo&color=brightgreen)](https://tobua.github.io/naven/demo)
[![naven Docs](https://img.shields.io/static/v1?label=naven&message=Documentation&color=blue)](https://naven-documentation.vercel.app)
[![npm](https://img.shields.io/npm/v/naven)](https://npmjs.com/naven)

React based CSS-in-JS styling framework using [@stitches/react](https://github.com/modulz/stitches).

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
import { createRoot } from 'react-dom/client'
import { Header, Button, Content, Heading, Text, Important, Footer, theme } from 'naven'

createRoot(document.getElementById('root')).render(
  <>
    <Header>
      {({ TitleLink, Meta }) => (
        <>
          <TitleLink />
          <Meta>
            <Button>Login</Button>
          </Meta>
        </>
      )}
    </Header>
    <Content>
      <Heading>naven Demo</Heading>
      <Text css={{ color: theme.color.valid }}>Welcome home!</Text>
    </Content>
    <Footer>
      <Important>Made with naven</Important>
    </Footer>
  </>
)
```

## Configuration

Configure various variables used in conjunction with `@stitches/react`. Due to limitations with `createStiches` for which `create` is just an alias there are three methods that have to be called in order to configure anything. Check out the [Style Demo](https://tobua.github.io/naven/demo/style) to see and try out all the default variables that can be configured.

```jsx
import { createRoot } from 'react-dom/client'
import { Header, Button, Content, Heading, Paragraph, Footer, register, create, merge } from 'naven'

// Without intermediary variable type checking will slow down > 10 times.
const avoidTypeCheckIssueWorkaround = create(
  merge({
    theme: {
      color: {
        highlight: '#00ab64',
        interact: '#ab0047',
      },
      space: {
        tiny: 3 // => value will be responsified with wasser plugin.
        small: '8px'
        medium: '2vw'
      },
      look: {
        radius: 10
      },
    },
    breakpoint: {
      Phone: 480,
      Tablet: 768
    },
  })
)

const { theme } = register(
  avoidTypeCheckIssueWorkaround,
  {
    // Root where your application renders, set #__next for Next.js, default is #root as used in CRA.
    rootSelector: 'body',
    // Enhance or override the default global styles added by the plugin.
    globalStyles: {
      body: {
        fontFamily: 'serif',
        padding: '2vh',
      },
    },
    // Use a function if you need access to any configuration variables.
    globalStyles: (stitches) => ({
      body: {
        margin: stitches.theme.space.large,
      },
    }),
    // Configure the responsive behaviour provided through the wasser npm plugin.
    wasser: {
      scalingRatio: 2,
    },
    // Add additional z-index layers curtesy of the laier npm plugin.
    layer: ['MyModal', 'MyPopup'],
    // Usually it's better to place your layers alongside the layers required for this plugin.
    layer: (initialLayers) => ['MyNavigation'].concat(initialLayers).concat(['MyPopup', 'MyModal']),
  }
)

createRoot(document.body).render(
  <>
    <Header>
      {({ TitleLink, Meta }) => (
        <>
          <TitleLink />
          <Meta>
            <Button>Login</Button>
          </Meta>
        </>
      )}
    </Header>
    <Content>
      <Heading>naven Demo</Heading>
      <Paragraph css={{ color: theme.color.valid }}>Welcome home!</Paragraph>
    </Content>
    <Footer>
      <Paragraph>Made with naven</Paragraph>
    </Footer>
  </>
)
```

### Multiple Files

In order for the custom code and the plugin to be able to access the proper configuration it's necessary to move the configuration into a separate file and use these exported variables from anywhere else when naven is used spread out over multiple files.

```js
// configuration.js
import { merge, create, register } from 'naven'

const configuration = merge({
  theme: {
    color: {
      myButtonColor: '#BADA55',
    },
  },
})

const avoidTypeCheckIssueWorkaround = create(configuration)

export const { theme, styled, createTheme } = register(avoidTypeCheckIssueWorkaround, {
  rootSelector: 'body',
})
```

```jsx
// index.jsx
import { createRoot } from 'react-dom/client'
import { Header, Button, Content, Heading, Text, Important, Footer, theme } from 'naven'
// This import ensures the plugin has access to your configuration before anything is rendered.
import './configuration'
import { MyButton } from './MyButton'

createRoot(document.body).render(
  <>
    <Header />
    <Content>
      <Heading>naven Customized</Heading>
      <MyButton>Custom Button</MyButton>
    </Content>
  </>
)
```

```jsx
// MyButton.jsx
import { Button } from 'naven'
import { styled, theme } from './configuration'

export const MyButton = styled(Button, { background: theme.color.myButtonColor })
```

## Components

A list of available components is found in the [Element](<[Configuration](https://naven-documentation.vercel.app/element)>) documentation. Check out the [demo](https://tobua.github.io/naven/demo) for a basic example of how naven looks like with various components used.

### General Components

Complex components can be customized and combined in many ways to achieve desired layouts. Some components require input data in order to render anything useful, i.e. the links for the navigation. Refer to the documentation how to configure the base components [Configuration](https://naven-documentation.vercel.app/general). Below an example of how to add links to the `Navigation` component provided by the header.

```jsx
import { Header, Image } from 'naven'
import logo from 'assets/logo.svg'

const MyHeader = (
  <Header wide={false}>
    {({ TitleLink }) => (
      <>
        <TitleLink>
          <Image src={logo} />
        </TitleLink>
        <Navigation
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
      </>
    )}
  </Header>
)
```

### Layout Components

The CSS grid is attached to the root and there are [Layout](https://naven-documentation.vercel.app/advanced#layout) components to work with it.

```jsx
import { Wide, Content, Narrow } from 'naven'

const ContentWrappers = (
  <>
    <Wide>Wide (Screen Width)</Wide>
    <Content>Regular Width (max 1500px)</Content>
    <Narrow>Narrow Width (max 1000px)</Narrow>
  </>
)
```

## CSS-in-JS

This package uses `@stitches/react` for CSS styles. Almost every component accepts a `css` property to style the main tag. Using the `styled` API from `@stitches/react` it's also possible to extend built-in components.

```jsx
import { styled, theme } from 'naven'
// => or import yours when configurations were made
import { styled, theme } from './configuration'

const removeGapStyles = {
  rowGap: 0,
  background: theme.color.interact,
  borderRadius: theme.look.radius,
  '@tablet': {
    background: theme.color.highlight,
  },
}

const VerticalWithoutGap = styled(Vertical, {
  rowGap: 0,
  background: theme.color.interact,
  borderRadius: theme.look.radius,
  '@tablet': {
    background: theme.color.highlight,
  },
})

// Both of these will be the same.
<Vertical css={removeGapStyles}>{...}</Vertical>
<VerticalWithoutGap>{...}</VerticalWithoutGap>

// Regular way to style any tag.
const GrayWrapper = styled('div', {
  background: 'gray'
})
```

## Spacing

Spacing is handled by layout components like `Content`, `Narrow`, `Wide`, `Vertical` and `Horizontal`. These support a `space` property which will add a flex `gap` style which defaults to `theme.space.medium` (20px responsified).

```jsx
import { Vertical, Horizontal, Text, Button, theme } from 'naven'

const SpacedVertical = (
  <Vertical space={0 | 'medium' | theme.space.large | 5 | '3vh' | undefined}>
    <Text>Hello</Text>
    <Text>Again</Text>
  </Vertical>
)

const CustomHorizontal = (
  <Horizontal space="large" css={{ justifyContent: 'center' }}>
    <Button>First</Button>
    <Button>Second</Button>
  </Horizontal>
)
```

## Responsive

This plugin assumes a Desktop-First approach where you override styles for `@tablet` or `@phone`. As seen in the Configuration chapter above the breakpoints can be adapted from the defaults of 1000px for tablet and 500px for phone. Additionally, new breakpoints can be introduced. The `useBreakpoint` hook can be used to directly access the current breakpoint in React components.

```jsx
import { useBreakpoint } from 'naven'

const hideMobileCss = {
  '@phone': {
    display: 'none',
  } /* => @media (max-width: 500px) { display: none; } */,
}

const ButtonHiddenMobile = styled(Button, hideMobileCss)

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
import { Text, unit, styled, font } from 'naven'

const ResponsifiedText = styled(Text, {
  padding: unit(5), // wasser(max: 5, [min]: 5 / scalingRatio)
  marginRight: unit(10, 5), // => wasser(max: 10, [min]: 5)
  ...font(30, 20, 2), // => wasser.fontObject(max: 30, [min]: 20, [line-height-ratio]: 2)
})
```

The interface is described in [wasser - Interface](https://github.com/tobua/wasser#interface) and `unit` corresponds to `wasser` while `fibt` is the same as `fontObject` there. The default `wasser` variables can be configured in the `register()` call as shown in the Configuration chapter above.

## Font

```jsx
import { theme, font } from 'naven'

const SmallSerifText = {
  fontSize: theme.font.sizeSmall
  lineHeight: theme.font.lineHeightSmall,
  fontFamily: theme.font.familySerif
}

const CustomSizedBoldItalicLargeText = {
  fontStyle: theme.font.styleItalic,
  fontWeight: theme.font.weightBold,
  /* Uses responsive sizing from fontObject() method in wasser plugin. */
  ...font(40)
}
```

## Custom Styles for Individual Elements

While the `css` property will apply custom styles to the main tag, the `styles` property can be used to customize the styles and other attributes for any component rendered inside.

```jsx
import { Input, Button, theme } from 'naven'

const CustomInput = (
  <Input
    styles={{
      Main: { css: { background: theme.color.background } },
      Cursor: { tag: 'div', css: { marginRight: unit(12) } }, // tag can be customized as well.
      Input: { css: { padding: theme.space.small } }, // Styles from "css" property also go to Input.
    }}
  />
)

const MyAlert = (
  <Alert closeable styles={{ CloseContainer: { css: { right: theme.space.large } } }}>
    Hey
  </Alert>
)
```

## Development

To view your changes live run `npm start` in the `/demo` or `/documentation` folder. This will open a preview in the browser and automatically build and watch the plugin for changes.
