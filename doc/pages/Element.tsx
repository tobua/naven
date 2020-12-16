import React, { useState, Fragment } from 'react'
import { css } from '@emotion/react'
import { Content, Element, Vertical, Horizontal, Space } from 'naven'
import { PropertyTable } from 'markup/PropertyTable'

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
    <Horizontal>
      <Notification />
      <Input
        space={0}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message"
      />
      <Dropdown
        space={0}
        onChange={(option) => setType((option as any).value)}
        options={[
          { value: 'info', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
        ]}
        placeholder="Type"
      />
      <Button
        space={0}
        disabled={!type || !message || message === ''}
        onClick={() => addNotification({ message, type })}
      >
        Send
      </Button>
    </Horizontal>
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
    <PropertyTable>
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
    </PropertyTable>
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
    <PropertyTable />
    <Heading as="h2">Alert</Heading>
    <Alert>Hey: This is an info</Alert>
    <Alert type="warning" closeable>
      Ohh: This is a <b>closeable</b> warning
    </Alert>
    <Alert type="error">Whoopsie: This is an error</Alert>
    <Code jsx language="typescript">
      {`<Alert type="warning" closeable>Watch out!</Alert>`}
    </Code>
    <PropertyTable>
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
    </PropertyTable>
    <Heading as="h2">Popup</Heading>
    <PopupToggle />
    <Code jsx language="typescript">
      {`<Popup show={show} onClose={() => setShow(false)}>
  <Text>Content</Text>
</Popup>`}
    </Code>
    <PropertyTable space={false}>
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
        <Text>ReactNode</Text>
      </Fragment>
    </PropertyTable>
    <Heading as="h2">Checkbox</Heading>
    <Checkboxes />
    <Code jsx language="typescript">
      {`<Checkbox label="Accept Terms" checked={terms} onChange={() => setTerms(!terms)} />`}
    </Code>
    <PropertyTable>
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
    </PropertyTable>
    <Heading as="h2">Radio</Heading>
    <Radios />
    <Code jsx language="typescript">
      {`<Radio label="Female" name="gender" checked={selection === 'female'} onChange={() => setGender('female')} />`}
    </Code>
    <PropertyTable>
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
    </PropertyTable>
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
    <PropertyTable>
      <>
        <Text>headers</Text>
        <Text>required</Text>
        <Text>(string | ReactNode)[]</Text>
      </>
      <>
        <Text>initialOpen</Text>
        <Text>0</Text>
        <Text>number</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Badge</Heading>
    <Horizontal
      css={css`
        overflow: visible;
      `}
    >
      <Badge>
        <Text>Hey Badge</Text>
      </Badge>
      <Badge count={5}>
        <Text>count me</Text>
      </Badge>
      <Badge count={987}>
        <Text>big number</Text>
      </Badge>
    </Horizontal>
    <Code jsx language="typescript">
      {`<Badge count={30}>
  <Text>Mail</Text>
</Badge>`}
    </Code>
    <PropertyTable>
      <>
        <Text>count</Text>
        <Text></Text>
        <Text>number | string</Text>
      </>
      <>
        <Text>cssDot</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Dropdown</Heading>
    <Dropdown
      options={[
        { value: 'first', label: 'First choice' },
        { value: 'second', label: 'Second choice' },
      ]}
    />
    <Code jsx language="typescript">
      {`<Dropdown options={[
  { value: 'first', label: 'First choice' },
  { value: 'second', label: 'Second choice' },
]} />`}
    </Code>
    <PropertyTable css={false}>
      <>
        <Text>options</Text>
        <Text>required</Text>
        <TextLink href="https://react-select.com/props">
          See react-select
        </TextLink>
      </>
      <>
        <Text>containerStyles</Text>
        <Text></Text>
        <Text>object</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Notification</Heading>
    <NotificationToggle />
    <Heading as="h3" code>{`<Notification />`}</Heading>
    <Code jsx language="typescript">
      {`<Notification wrapperCss={css\`right: auto; left: 0;\`} />`}
    </Code>
    <PropertyTable>
      <>
        <Text>gap</Text>
        <Text></Text>
        <Text>string | number</Text>
      </>
      <>
        <Text>wrapperCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
      <>
        <Text>containerCss</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
    </PropertyTable>
    <Heading as="h3" code>{`addNotification`}</Heading>
    <Code jsx language="typescript">
      {`addNotification({ message: 'No internet connection.', type: 'error'})`}
    </Code>
    <PropertyTable css={false} space={false}>
      <>
        <Text>message</Text>
        <Text>required</Text>
        <Text>string</Text>
      </>
      <>
        <Text>duration</Text>
        <Text>8</Text>
        <Text>number</Text>
      </>
      <>
        <Text>type</Text>
        <Text>info</Text>
        <Text>'info' | 'warning' | 'error'</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Tabs</Heading>
    <Tabs
      items={[
        { title: 'First', content: <p>Content First</p> },
        { title: 'Second', content: <p>Content Second</p> },
        { title: 'Third', content: <p>Content Third</p> },
      ]}
    />
    <Code jsx language="typescript">
      {`<Tabs items={[
  { title: 'First', content: <Text>First Content</Text> },
  { title: 'Second', content: <Text>Second Content</Text> }
]} />`}
    </Code>
    <PropertyTable>
      <>
        <Text>items</Text>
        <Text>required</Text>
        <Text>{`{ title: string, content: ReactNode }[]`}</Text>
      </>
      <>
        <Text>initialTab</Text>
        <Text>0</Text>
        <Text>number</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Tooltip</Heading>
    <Tooltip content={<Text>Hello content</Text>}>
      <Text>Hover or click to show tooltip.</Text>
    </Tooltip>
    <Spacer />
    <Code jsx language="typescript">
      {`<Tooltip content={<Text>Me?</Text>}>
  <Text>Who!</Text>
</Tooltip>`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>content</Text>
        <Text>required</Text>
        <Text>ReactNode</Text>
      </>
      <>
        <Text>children</Text>
        <Text>required</Text>
        <Text>ReactNode</Text>
      </>
      <>
        <Text>arrow</Text>
        <Text>true</Text>
        <Text>boolean</Text>
      </>
      <>
        <Text>close</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
    </PropertyTable>
    <Heading as="h2">List</Heading>
    <List>
      <Text>First</Text>
      <Text>Second</Text>
      <Text>Third</Text>
    </List>
    <List horizontal>
      <Text>First</Text>
      <Text>Second</Text>
      <Text>Third</Text>
    </List>
    <Code jsx language="typescript">
      {`<List horizontal>
  <Text>First</Text>
  <Text>Second</Text>
</List>`}
    </Code>
    <PropertyTable>
      <>
        <Text>horizontal</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
      <>
        <Text>elementProps</Text>
        <Text></Text>
        <InlineCode>{`{ css: SerializedStyles } & LiElement`}</InlineCode>
      </>
      <>
        <Text>wrap</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
      <>
        <Text>gap</Text>
        <Text>Space.small</Text>
        <Text>number | string</Text>
      </>
    </PropertyTable>
    <Heading as="h2">Date Picker</Heading>
    <DatePicker initialDate={new Date(1990, 1, 17)} />
    <Code jsx language="typescript">
      {`<DatePicker initialDate={new Date(1990, 1, 17)} onChange={(date) => setDate(date)} />`}
    </Code>
    <PropertyTable>
      <>
        <Text>initialDate</Text>
        <Text>now</Text>
        <Text>Date | null</Text>
      </>
      <>
        <Text>onChange</Text>
        <Text></Text>
        <InlineCode>{`(date: Date) => void`}</InlineCode>
      </>
      <>
        <Text>styleOverrides</Text>
        <Text></Text>
        <Text>SerializedStyles</Text>
      </>
      <>
        <Text>...props</Text>
        <Text></Text>
        <TextLink href="https://reactdatepicker.com">
          See react-datepicker
        </TextLink>
      </>
    </PropertyTable>
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
    <Code jsx language="typescript">
      {`<Code jsx language="typescript">{\`const doubleIt = (value: number) => value * 2\`}</Code>`}
    </Code>
    <PropertyTable>
      <>
        <Text>language</Text>
        <Text>typescript</Text>
        <Text>'javascript' | 'typescript'</Text>
      </>
      <>
        <Text>jsx</Text>
        <Text>false</Text>
        <Text>boolean</Text>
      </>
      <>
        <Text>style</Text>
        <Text></Text>
        <Text>object</Text>
      </>
      <>
        <Text>...props</Text>
        <Text></Text>
        <TextLink href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
          See react-syntax-highlighter
        </TextLink>
      </>
    </PropertyTable>
    <Heading as="h2">Lazy</Heading>
    <Lazy
      // Mocking an import('./whatever')
      imports={new Promise((done) => done(() => <p>lazy loaded...</p>))}
      result={(Component) => Component}
    />
    <Spacer />
    <Code jsx language="typescript">
      {`<Lazy imports={import('epic-react-router')} result={(Component) => <Component.Page />} />`}
    </Code>
    <PropertyTable>
      <>
        <Text>imports</Text>
        <Text>required</Text>
        <Text>{`Promise<any>`}</Text>
      </>
      <>
        <Text>result</Text>
        <Text>required</Text>
        <InlineCode>{`(...imports: any) => ReactNode`}</InlineCode>
      </>
    </PropertyTable>
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
    <Code jsx language="typescript">
      {`<Table>
  <>
    <Text>First</Text>
    <Text>Second</Text>
  </>
  <>
    <Text>Third</Text>
    <Text>Fourth</Text>
  </>
</Table>`}
    </Code>
    <PropertyTable />
  </Content>
)
