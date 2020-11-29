import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Router, Page } from 'epic-react-router'
import { Global, Header, Navigation, Content } from 'naven'
import { Configuration } from 'pages/Configuration'
import { Elements } from 'pages/Element'
import { Layout } from 'pages/Layout'
import { Style } from 'pages/Style'
import { Overview } from 'pages/Overview'
// @ts-ignore
import logo from 'logo.svg'

Router.setPages(
  {
    overview: Overview,
    configuration: Configuration,
    element: Elements,
    layout: Layout,
    style: Style,
  },
  'overview'
)

const rerender = () => {
  // Just rerendering will only update components where props have changed.
  // Changing configuration at run-time only for demonstration purposes.
  unmountComponentAtNode(document.body)
  app()
}

const app = () =>
  render(
    <>
      <Global root="body" />
      <Header
        title="naven Demo"
        logo={logo}
        data={{
          links: [
            { name: 'Overview', url: 'overview' },
            { name: 'Installation', url: 'installation' },
            { name: 'Usage', url: 'usage' },
            { name: 'Demo', url: 'https://tobua.github.io/naven/demo' },
            { name: 'GitHub', url: 'https://github.com/tobua/naven' },
          ],
        }}
      />
      <Navigation
        data={{
          top: [
            {
              title: { name: 'Elements', url: 'element' },
              links: [{ name: 'Input', url: 'element#input' }],
            },
            {
              title: { name: 'Layout', url: 'layout' },
            },
            {
              title: { name: 'Style', url: 'style' },
            },
            {
              title: { name: 'Configuration', url: 'configuration' },
              links: [{ name: 'Header', url: 'configuration#header' }],
            },
          ],
        }}
      />
      <Content>
        <Page onStyleChange={rerender} />
      </Content>
    </>,
    document.body
  )

app()
