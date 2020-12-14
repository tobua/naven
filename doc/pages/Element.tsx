import React, { useState, Fragment } from 'react'
import { css } from '@emotion/react'
import { Content, Element, Vertical, Space } from 'naven'

const {
  Accordion,
  Alert,
  Anchor,
  Badge,
  Button,
  Checkbox,
  Radio,
  Code,
  InlineCode,
  DatePicker,
  Dropdown,
  Heading,
  Image,
  Input,
  Lazy,
  Link,
  TextLink,
  List,
  Loader,
  Notification,
  addNotification,
  Popup,
  Spacer,
  Table,
  Tabs,
  Paragraph,
  Text,
  Tooltip,
} = Element

const ElementPropertyTable = ({
  space = true,
  children,
}: {
  children?: any
  space?: boolean
}) => {
  const contents = [
    <Fragment key="head">
      <Text>Property</Text>
      <Text>Default</Text>
      <Text>Values</Text>
    </Fragment>,
  ]

  contents.push(...children)

  if (space) {
    contents.push(
      <Fragment key="space">
        <Text>space</Text>
        <Text>Space.medium</Text>
        <Text>string | number</Text>
      </Fragment>
    )
  }

  contents.push(
    <Fragment key="css">
      <Text>css</Text>
      <Text>Empty</Text>
      <Text>SerializedStyles</Text>
    </Fragment>
  )

  return <Table>{contents}</Table>
}

const PopupToggle = () => {
  const [show, togglePopup] = useState(false)

  return (
    <>
      <Button onClick={() => togglePopup(!show)}>Open</Button>
      <Popup show={show} onClose={() => togglePopup(false)}>
        <p>This is the popup content.</p>
      </Popup>
    </>
  )
}

const NotificationToggle = () => {
  type Value = 'info' | 'warning' | 'error'
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<Value>('info')

  return (
    <>
      <Notification />
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <Dropdown
        onChange={(option) => setType((option as any).value)}
        options={[
          { value: 'info', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
        ]}
        placeholder="Type"
      />
      <Button
        disabled={!type || !message || message === ''}
        onClick={() => addNotification({ message, type })}
      >
        Send
      </Button>
    </>
  )
}

const Checkboxes = () => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(true)

  return (
    <Vertical gap={Space.small}>
      <Checkbox
        space={0}
        label="First"
        checked={first}
        onChange={() => setFirst(!first)}
      />
      <Checkbox
        space={0}
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
    <Vertical gap={Space.small}>
      <Radio
        space={0}
        label="First"
        name="group"
        checked={selected === 'first'}
        onChange={() => setSelected('first')}
      />
      <Radio
        space={0}
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
    <Heading as="h2">General</Heading>
    <Code jsx language="typescript">
      {`import { Element, Color, Space } from 'naven'
import { css } from '@emotion/react'

<Element.Button space={Space.large}>Press me!</Element.Button>

const { Button } = Element

<Button disabled space={0} css={css\`background: \${Color.black};\`}>Can't touch this</Button>`}
    </Code>
    <Heading as="h2">Button</Heading>
    <Button
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Button
    </Button>
    <Button
      highlight
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Highlight
    </Button>
    <Button
      interact
      css={css`
        margin-right: ${Space.small};
      `}
    >
      Interaction
    </Button>
    <Button disabled>Disabled</Button>
    <Code jsx language="typescript">
      {`<Button onClick={() => alert('Hello')}>Press me!</Button>`}
    </Code>
    <ElementPropertyTable>
      <>
        <Text>highlight</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
      <>
        <Text>interact</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
    </ElementPropertyTable>
    <Heading as="h2">
      <Anchor name="input" />
      Input
    </Heading>
    <Input
      placeholder="Input here"
      css={css`
        margin-right: ${Space.small};
      `}
    />
    <Input placeholder="Input here" value="value" onChange={() => {}} />
    <Code jsx language="typescript">
      {`<Input placeholder="Input here" value="value" onChange={(event) => alert(event.target.value)} />`}
    </Code>
    <ElementPropertyTable />
    <Heading as="h2">Alert</Heading>
    <Alert>Hey: This is an info</Alert>
    <Alert type="warning" closeable>
      Ohh: This is a <b>closeable</b> warning
    </Alert>
    <Alert type="error">Whoopsie: This is an error</Alert>
    <Code jsx language="typescript">
      {`<Alert type="warning" closeable>Watch out!</Alert>`}
    </Code>
    <ElementPropertyTable>
      <>
        <Text>type</Text>
        <Text>info</Text>
        <Text>'info' | 'warning' | 'error'</Text>
      </>
      <>
        <Text>closeable</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
    </ElementPropertyTable>
    <Heading as="h2">Popup</Heading>
    <PopupToggle />
    <Code jsx language="typescript">
      {`<Popup show={show} onClose={() => setShow(false)}>
  <Text>Content</Text>
</Popup>`}
    </Code>
    <ElementPropertyTable space={false}>
      <Fragment key="show">
        <Text>show</Text>
        <Text>true</Text>
        <Text>boolean</Text>
      </Fragment>
      <Fragment key="onClose">
        <Text>onClose</Text>
        <Text>required</Text>
        <Text>{`() => any`}</Text>
      </Fragment>
      <Fragment key="contentCss">
        <Text>contentCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </Fragment>
      <Fragment key="scrollContainerCss">
        <Text>scrollContainerCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </Fragment>
      <Fragment key="closeContainerCss">
        <Text>closeContainerCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </Fragment>
      <Fragment key="closeCss">
        <Text>closeCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </Fragment>
      <Fragment key="close">
        <Text>close</Text>
        <InlineCode>{`<Close />`}</InlineCode>
        <Text>JSX.Element</Text>
      </Fragment>
    </ElementPropertyTable>
    <Heading as="h2">Checkbox</Heading>
    <Checkboxes />
    <Code jsx language="typescript">
      {`<Checkbox label="Accept Terms" checked={terms} onChange={() => setTerms(!terms)} />`}
    </Code>
    <ElementPropertyTable>
      <>
        <Text>label</Text>
        <Text></Text>
        <Text>string</Text>
      </>
      <>
        <Text>wrapperCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </ElementPropertyTable>
    <Heading as="h2">Radio</Heading>
    <Radios />
    <Code jsx language="typescript">
      {`<Radio label="Female" name="gender" checked={selection === 'female'} onChange={() => setGender('female')} />`}
    </Code>
    <ElementPropertyTable>
      <>
        <Text>label</Text>
        <Text></Text>
        <Text>string</Text>
      </>
      <>
        <Text>wrapperCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </ElementPropertyTable>
    <Heading as="h2">Accordion</Heading>
    <Accordion headers={['First', <Text bold>Second</Text>, 'Third']}>
      <Text>First Content</Text>
      <Text>Second Content</Text>
      <Text>Third Content</Text>
    </Accordion>
    <Code jsx language="typescript">
      {`<Accordion headers={['Hello', <Text bold>World</Text>]}>
  <Text>Hello</Text>
  <Text>World</Text>
</Accordion>`}
    </Code>
    <ElementPropertyTable>
      <>
        <Text>headers</Text>
        <Text>required</Text>
        <Text>(string | JSX.Element)[]</Text>
      </>
      <>
        <Text>initialOpen</Text>
        <Text>0</Text>
        <Text>number</Text>
      </>
    </ElementPropertyTable>
    <Heading as="h2">Badge</Heading>
    <Badge>
      <Paragraph>Hey Badge</Paragraph>
    </Badge>
    <Heading as="h3">With Count</Heading>
    <Badge
      count={5}
      css={css`
        margin-right: 30px;
      `}
    >
      <span>count me</span>
    </Badge>
    <Badge count={987}>
      <span>big number</span>
    </Badge>
    <Heading as="h2">Dropdown</Heading>
    <Dropdown
      options={[
        { value: 'first', label: 'First choice' },
        { value: 'second', label: 'Second choice' },
      ]}
    />
    <Heading as="h2">Notification</Heading>
    <NotificationToggle />
    <Heading as="h2">Tabs</Heading>
    <Tabs
      items={[
        { title: 'First', content: <p>Content First</p> },
        { title: 'Second', content: <p>Content Second</p> },
        { title: 'Third', content: <p>Content Third</p> },
      ]}
    />
    <Heading as="h2">Tooltip</Heading>
    <Tooltip content={<p>Hello content</p>}>
      <Paragraph space={0}>Hover or click to show tooltip.</Paragraph>
    </Tooltip>
    <Spacer />
    <Heading as="h2">List</Heading>
    <List>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </List>
    <Heading as="h3">horizontal</Heading>
    <List horizontal>
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
    </List>
    <Heading as="h2">Date Picker</Heading>
    <DatePicker />
    <Heading as="h2">Code</Heading>
    <Code language="javascript">
      {`// Hello JS
export const hello = () => console.log('world')`}
    </Code>
    <Code language="typescript">{`// Hello TS
export const greet = (greeting: string) => console.log(\`hello \${greeting}!\`)`}</Code>
    <Code jsx language="typescript">
      {`// Hello JSX / TSX
export const Hello = () => <p>W<strong>o</strong>rld</p>`}
    </Code>
    <Heading as="h2">Lazy</Heading>
    <Lazy
      // Mocking an import('./whatever')
      imports={new Promise((done) => done(() => <p>lazy loaded...</p>))}
      result={(Component) => Component}
    />
    <Spacer />
    <Heading as="h2">Table</Heading>
    <Table>
      <>
        <Text>First</Text>
        <Text>Second</Text>
        <Text>Third</Text>
      </>
      <>
        <Text>Fourth</Text>
        <Text>Fifth</Text>
        <Text>Sixth</Text>
      </>
    </Table>
  </Content>
)
