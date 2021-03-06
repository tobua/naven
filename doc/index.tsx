import { render, unmountComponentAtNode } from 'react-dom'
import { Router, Page } from 'epic-react-router'
import { Global, Header, Navigation } from 'naven'
import 'utility/configure'
import { Configuration } from 'pages/Configuration'
import { Elements } from 'pages/Element'
import { Advanced } from 'pages/Advanced'
import { Style } from 'pages/Style'
import { Overview } from 'pages/Overview'
import logo from 'logo.svg'

Router.setPages(
  {
    overview: Overview,
    configuration: Configuration,
    element: Elements,
    advanced: Advanced,
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
            { name: 'Demo', url: 'https://tobua.github.io/naven/demo' },
            { name: 'npm', url: 'https://npmjs.com/naven' },
            { name: 'GitHub', url: 'https://github.com/tobua/naven' },
          ],
        }}
      />
      <Navigation
        linkActive={(url: string) => url === Router.route}
        data={{
          top: [
            {
              title: { name: 'Configuration', url: 'configuration' },
              links: [
                { name: 'Global', url: 'configuration#global' },
                { name: 'Header', url: 'configuration#header' },
                { name: 'Navigation', url: 'configuration#navigation' },
                { name: 'Content', url: 'configuration#content' },
                { name: 'Footer', url: 'configuration#footer' },
              ],
            },
            {
              title: { name: 'Elements', url: 'element' },
              links: [
                { name: 'Accordion', url: 'element#accordion' },
                { name: 'Alert', url: 'element#alert' },
                { name: 'Badge', url: 'element#badge' },
                { name: 'Button', url: 'element#button' },
                { name: 'Checkbox', url: 'element#checkbox' },
                { name: 'Radio', url: 'element#radio' },
                { name: 'Inline-Code', url: 'element#inline-code' },
                { name: 'Code', url: 'element#code' },
                { name: 'Date Picker', url: 'element#date' },
                { name: 'Dropdown', url: 'element#dropdown' },
                { name: 'Heading', url: 'element#heading' },
                { name: 'Image', url: 'element#image' },
                { name: 'Input', url: 'element#input' },
                { name: 'TextArea', url: 'element#textarea' },
                { name: 'Link', url: 'element#link' },
                { name: 'List', url: 'element#list' },
                { name: 'Loader', url: 'element#loader' },
                { name: 'Notification', url: 'element#notification' },
                { name: 'Popup', url: 'element#popup' },
                { name: 'Spacer', url: 'element#spacer' },
                { name: 'Tabs', url: 'element#tabs' },
                { name: 'Text', url: 'element#text' },
                { name: 'Tooltip', url: 'element#tooltip' },
                { name: 'Table', url: 'element#table' },
                { name: 'Lazy Load', url: 'element#lazy' },
              ],
            },
            {
              title: { name: 'Style', url: 'style' },
            },
            {
              title: { name: 'Advanced', url: 'advanced' },
              links: [
                { name: 'Layout', url: 'advanced#layout' },
                { name: 'Spacing', url: 'advanced#spacing' },
                { name: 'Utility Methods', url: 'advanced#utility' },
                { name: 'Layers', url: 'advanced#layers' },
              ],
            },
          ],
        }}
      />
      <Page onStyleChange={rerender} />
    </>,
    document.body
  )

app()
