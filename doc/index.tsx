import React from 'react'
import { render } from 'react-dom'
import { Router, Page } from 'epic-react-router'
import { Global, Header, Navigation, Content, Footer } from 'naven'
import { Configuration } from './pages/Configuration'
import { Elements } from './pages/Element'
import { Layout } from './pages/Layout'
import { Style } from './pages/Style'
import { Overview } from './pages/Overview'

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

// TODO configure pages

const app = () =>
  render(
    <>
      <Global root="body" />
      <Header title="naven Demo" />
      <Navigation />
      <Content>
        <Page onStyleChange={app} />
      </Content>
      <Footer />
    </>,
    document.body
  )

app()
