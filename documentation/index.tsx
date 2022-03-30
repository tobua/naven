import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Router, Page } from 'epic-react-router'
import { Header, globalTheme } from 'naven'
import '@codesandbox/sandpack-react/dist/index.css'
import { getStoredStyles } from './configuration'
import { General } from 'pages/General'
import { Elements } from 'pages/Element'
import { Advanced } from 'pages/Advanced'
import { Style } from 'pages/Style'
import { Overview } from 'pages/Overview'

// TODO use https://github.com/uber/react-view for components.

Router.setPages(
  {
    overview: Overview,
    general: General,
    element: Elements,
    advanced: Advanced,
    style: Style,
  },
  'overview'
)

function App() {
  useEffect(() => globalTheme(getStoredStyles()), [])

  return (
    <>
      <Header wide>
        {({ TitleLink, Meta, Navigation }) => (
          <>
            <TitleLink />
            <Meta
              links={[
                { name: 'Overview', url: 'overview' },
                { name: 'Demo', url: 'https://tobua.github.io/naven/demo' },
                { name: 'npm', url: 'https://npmjs.com/naven' },
                { name: 'GitHub', url: 'https://github.com/tobua/naven' },
              ]}
            />
            <Navigation
              linkActive={(url: string) => url === Router.route}
              links={[
                {
                  title: { name: 'General', url: 'general' },
                  links: [
                    { name: 'Header', url: 'general#header' },
                    { name: 'Navigation', url: 'general#navigation' },
                    { name: 'Content', url: 'general#content' },
                    { name: 'Footer', url: 'general#footer' },
                  ],
                },
                {
                  title: { name: 'Elements', url: 'element' },
                  links: [
                    { name: 'Accordion', url: 'element#accordion' },
                    { name: 'Alert', url: 'element#alert' },
                    { name: 'Anchor', url: 'element#anchor' },
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
              ]}
            />
          </>
        )}
      </Header>
      <Page />
    </>
  )
}

createRoot(document.body).render(<App />)
