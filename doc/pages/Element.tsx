import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Content, Element, Vertical, Space } from 'naven'

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
  type Value = 'info' | 'warning' | 'error'
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<Value>('info')

  return (
    <>
      <Element.Notification />
      <Element.Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <Element.Dropdown
        onChange={(option) => setType((option as any).value)}
        options={[
          { value: 'info', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
        ]}
        placeholder="Type"
      />
      <Element.Button
        disabled={!type || !message || message === ''}
        onClick={() => Element.addNotification({ message, type })}
      >
        Send
      </Element.Button>
    </>
  )
}

const Checkboxes = () => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(true)

  return (
    <Vertical>
      <Element.Checkbox
        label="First"
        checked={first}
        onChange={() => setFirst(!first)}
        wrapperCss={css`
          margin-bottom: ${Space.small};
        `}
      />
      <Element.Checkbox
        label="Second"
        checked={second}
        onChange={() => setSecond(!second)}
      />
    </Vertical>
  )
}

const Radios = () => {
  const [selected, setSelected] = useState('first')

  return (
    <Vertical>
      <Element.Radio
        label="First"
        name="group"
        checked={selected === 'first'}
        onChange={() => setSelected('first')}
        wrapperCss={css`
          margin-bottom: ${Space.small};
        `}
      />
      <Element.Radio
        label="Second"
        name="group"
        checked={selected === 'second'}
        onChange={() => setSelected('second')}
      />
    </Vertical>
  )
}

export const Elements = () => (
  <Content>
    <Element.Heading as="h2">Elements</Element.Heading>
    <Element.Paragraph>
      Here is a list of the included elements.
    </Element.Paragraph>
    <Element.Heading as="h2">Button</Element.Heading>
    <Element.Button
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Button
    </Element.Button>
    <Element.Button
      highlight
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Highlight
    </Element.Button>
    <Element.Button
      interact
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Interaction
    </Element.Button>
    <Element.Button disabled>Disabled</Element.Button>
    <Element.Spacer />
    <Element.Heading as="h2">
      <a id="input"></a>Input
    </Element.Heading>
    <Element.Input
      placeholder="Input here"
      css={css`
        margin-right: ${Space.small};
      `}
    />
    <Element.Input placeholder="Input here" value="value" onChange={() => {}} />
    <Element.Spacer />
    <Element.Heading as="h2">Alert</Element.Heading>
    <Element.Alert>Hey: This is an info</Element.Alert>
    <Element.Spacer size="tiny" />
    <Element.Alert type="warning" closeable>
      Ohh: This is a <b>closeable</b> warning
    </Element.Alert>
    <Element.Spacer size="tiny" />
    <Element.Alert type="error">Whoopsie: This is an error</Element.Alert>
    <Element.Spacer />
    <Element.Heading as="h2">Popup</Element.Heading>
    <Popup />
    <Element.Spacer size="large" />
    <Element.Heading as="h2">Checkbox</Element.Heading>
    <Checkboxes />
    <Element.Spacer />
    <Element.Heading as="h2">Radio</Element.Heading>
    <Radios />
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
    <Element.Tabs
      items={[
        { title: 'First', content: <p>Content First</p> },
        { title: 'Second', content: <p>Content Second</p> },
        { title: 'Third', content: <p>Content Third</p> },
      ]}
    />
    <Element.Spacer size="large" />
    <Element.Heading as="h2">Tooltip</Element.Heading>
    <Element.Tooltip content={<p>Hello content</p>}>
      <span>open tooltip</span>
    </Element.Tooltip>
    <Element.Spacer size="large" />
    <Element.Heading as="h2">List</Element.Heading>
    <Element.List>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </Element.List>
    <Element.Spacer size="large" />
    <Element.Heading as="h3">horizontal</Element.Heading>
    <Element.List horizontal>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </Element.List>
    <Element.Spacer />
    <Element.Heading as="h2">Date Picker</Element.Heading>
    <Element.DatePicker />
    <Element.Spacer />
    <Element.Heading as="h2">Code</Element.Heading>
    <Element.Code language="javascript">
      {`// Hello JS
export const hello = () => console.log('world')`}
    </Element.Code>
    <Element.Spacer />
    <Element.Code language="typescript">{`// Hello TS
export const greet = (greeting: string) => console.log(\`hello \${greeting}!\`)`}</Element.Code>
    <Element.Spacer />
  </Content>
)
