import React, { useState } from 'react'
import { render } from 'react-dom'
// WORKAROUND https://github.com/emotion-js/emotion/issues/1431
// to prevent TypeScript error.
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {
  Global,
  Header,
  Navigation,
  Content,
  Footer,
  Element,
  Color,
  Space,
} from 'naven'

const Popup = () => {
  const [show, togglePopup] = useState(false)

  return (
    <>
      <Element.Button onClick={() => togglePopup(!show)}>Open</Element.Button>
      <Element.Popup show={show} onClose={() => togglePopup(false)}>
        <p>This is the popup content.</p>
      </Element.Popup>
    </>
  )
}

const Notification = () => {
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<string>()

  return (
    <>
      <Element.Notification />
      <Element.Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <Element.Dropdown
        onChange={(option) => setType(option.value)}
        options={[
          { value: 'info', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
        ]}
        placeholder="Type"
      />
      <Element.Button
        onClick={() => Element.addNotification({ message, type })}
      >
        Send
      </Element.Button>
    </>
  )
}

const ColorPreview = styled.div<{ color: string; contrast?: string }>`
  background: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Space.small};
  color: ${({ contrast = Color.contrast }) => contrast};

  :hover {
    transform: scale(1.25);
    transition: transform 300ms;
  }
`

render(
  <>
    <Global root="body" />
    <Header title="naven Demo" />
    <Navigation />
    <Content>
      <Element.Heading>naven UI Library</Element.Heading>
      <Element.Paragraph>This is an introduction.</Element.Paragraph>
      <Element.Heading as="h2">naven Styles</Element.Heading>
      <Element.Heading as="h3">Colors</Element.Heading>
      <div style={{ display: 'flex' }}>
        <ColorPreview color={Color.highlight}>highlight</ColorPreview>
        <ColorPreview color={Color.interact}>interact</ColorPreview>
        <ColorPreview color={Color.black}>black</ColorPreview>
        <ColorPreview color={Color.white} contrast={Color.black}>
          white
        </ColorPreview>
        <ColorPreview color={Color.warning}>warning</ColorPreview>
        <ColorPreview color={Color.error}>error</ColorPreview>
        <ColorPreview color={Color.contrast} contrast={Color.black}>
          contrast
        </ColorPreview>
      </div>
      <Element.Spacer />
      <Element.Heading as="h2">naven Configuration</Element.Heading>
      <div>interactive configuration</div>
      <Element.Spacer />
      <Element.Heading as="h2">naven Elements</Element.Heading>
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
      <Popup />
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Checkbox</Element.Heading>
      <Element.Checkbox value={true} />
      <Element.Checkbox value={false} />
      <Element.Spacer />
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Accordion</Element.Heading>
      <Element.Accordion titles={['First', 'Second', 'Third']}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Element.Accordion>
      <Element.Heading as="h3">Custom Titles</Element.Heading>
      <Element.Accordion
        headers={[<p>First</p>, <span>Second</span>, <strong>Third</strong>]}
      >
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Element.Accordion>
      <Element.Spacer />
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Badge</Element.Heading>
      <Element.Badge>
        <p>hey badge</p>
      </Element.Badge>
      <Element.Spacer />
      <Element.Heading as="h3">With Count</Element.Heading>
      <Element.Spacer />
      <Element.Badge
        count={5}
        css={css`
          margin-right: 30px;
        `}
      >
        <span>count me</span>
      </Element.Badge>
      <Element.Badge count={987}>
        <span>big number</span>
      </Element.Badge>
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Dropdown</Element.Heading>
      <Element.Dropdown
        options={[
          { value: 'first', label: 'First choice' },
          { value: 'second', label: 'Second choice' },
        ]}
      />
      <Element.Spacer />
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Notification</Element.Heading>
      <Notification />
      <Element.Spacer />
      <Element.Spacer size="large" />
      <Element.Heading as="h2">Tabs</Element.Heading>
      <Element.Tabs />
      <Element.Spacer />
    </Content>
    <Footer />
  </>,
  document.body
)
