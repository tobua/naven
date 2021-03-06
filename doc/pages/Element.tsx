import { useState, Fragment } from 'react'
import { css } from '@emotion/react'
import {
  Content,
  Vertical,
  Horizontal,
  Space,
  Accordion,
  Alert,
  Anchor,
  Badge,
  Button,
  Checkbox,
  Radio,
  Heading,
  Image,
  Input,
  TextArea,
  Lazy,
  Link,
  TextLink,
  Underline,
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
  InlineCode,
} from 'naven'
import { Code } from 'naven/Code'
import { Tooltip } from 'naven/Tooltip'
import { DatePicker } from 'naven/Date'
import { Dropdown } from 'naven/Dropdown'
import { PropertyTable } from 'markup/PropertyTable'
import navenLogo from 'logo.svg'

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
      {`import { Button, Color, Space } from 'naven'
import { css } from '@emotion/react'

<Button space={Space.large}>Press me!</Button>
<Button disabled space={0} css={css\`background: \${Color.black};\`}>Can't touch this</Button>`}
    </Code>
    <Heading as="h2">
      <Anchor name="button" />
      Button
    </Heading>
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
      <Anchor name="link" />
      Link
    </Heading>
    <Link href="https://google.com">
      <Button>Button with Link</Button>
    </Link>
    <Code jsx language="typescript">
      {`<Link href="https://google.com"><Button>Button with Link</Button></Link>`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>
          All <InlineCode>a</InlineCode> Tag Properties
        </Text>
        <Text></Text>
        <Text>href, download, target, ...</Text>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="text-link" />
      TextLink
    </Heading>
    <Horizontal>
      <Vertical>
        <Text>
          Here is some text with a{' '}
          <TextLink href="https://google.com">link</TextLink>.
        </Text>
        <Paragraph
          css={css`
            max-width: 200px;
          `}
        >
          No worries as{' '}
          <TextLink href="https://google.com">
            all TextLink variants with underlines
          </TextLink>{' '}
          support multiple lines.
        </Paragraph>
        <InlineCode>{`underline={Underline.regular}`}</InlineCode>
      </Vertical>
      <Vertical>
        <Text>
          Here is some text with a{' '}
          <TextLink underline={Underline.none} href="https://google.com">
            link
          </TextLink>
          .
        </Text>
        <Paragraph
          css={css`
            max-width: 200px;
          `}
        >
          No worries as{' '}
          <TextLink underline={Underline.none} href="https://google.com">
            all TextLink variants with underlines
          </TextLink>{' '}
          support multiple lines.
        </Paragraph>
        <InlineCode>{`underline={Underline.none}`}</InlineCode>
      </Vertical>
      <Vertical>
        <Text>
          Here is some text with a{' '}
          <TextLink underline={Underline.animated} href="https://google.com">
            link
          </TextLink>
          .
        </Text>
        <Paragraph
          css={css`
            max-width: 200px;
          `}
        >
          No worries as{' '}
          <TextLink underline={Underline.animated} href="https://google.com">
            all TextLink variants with underlines
          </TextLink>{' '}
          support multiple lines.
        </Paragraph>
        <InlineCode>{`underline={Underline.animated}`}</InlineCode>
      </Vertical>
      <Vertical>
        <Text>
          Here is some text with a{' '}
          <TextLink underline={Underline.background} href="https://google.com">
            link
          </TextLink>
          .
        </Text>
        <Paragraph
          css={css`
            max-width: 200px;
          `}
        >
          No worries as{' '}
          <TextLink underline={Underline.background} href="https://google.com">
            all TextLink variants with underlines
          </TextLink>{' '}
          support multiple lines.
        </Paragraph>
        <InlineCode>{`underline={Underline.background}`}</InlineCode>
      </Vertical>
    </Horizontal>
    <Code jsx language="typescript">
      {`<Text>This <TextLink underline={Underline.background} href="https://google.com">link</TextLink> is clickable.`}
    </Code>
    <PropertyTable space={false}>
      <>
        <Text>underline</Text>
        <InlineCode>Underline.none</InlineCode>
        <InlineCode>
          Underline.regular | Underline.none | Underline.animated |
          Underline.background
        </InlineCode>
      </>
      <>
        <Text>
          All <InlineCode>a</InlineCode> Tag Properties
        </Text>
        <Text></Text>
        <Text>href, download, target, ...</Text>
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
    <PropertyTable>
      <>
        <Text>onValue</Text>
        <Text>optional</Text>
        <InlineCode>{`(value: string) => void`}</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="textarea" />
      TextArea
    </Heading>
    <TextArea placeholder="Textarea with 5 rows." rows={5} />
    <Code jsx language="typescript">
      {`<TextArea placeholder="Textarea with 5 rows." rows={5} />`}
    </Code>
    <PropertyTable>
      <>
        <Text>onValue</Text>
        <Text>optional</Text>
        <InlineCode>{`(value: string) => void`}</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="alert" />
      Alert
    </Heading>
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
    <Heading as="h2">
      <Anchor name="popup" />
      Popup
    </Heading>
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
    <Heading as="h2">
      <Anchor name="checkbox" />
      Checkbox
    </Heading>
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
    <Heading as="h2">
      <Anchor name="radio" />
      Radio
    </Heading>
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
    <Heading as="h2">
      <Anchor name="accordion" />
      Accordion
    </Heading>
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
    <Heading as="h2">
      <Anchor name="badge" />
      Badge
    </Heading>
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
    <Heading as="h2">
      <Anchor name="dropdown" />
      Dropdown
    </Heading>
    <Horizontal>
      <Dropdown
        space={0}
        options={[
          { value: 'first', label: 'First choice' },
          { value: 'second', label: 'Second choice' },
        ]}
      />
      <Dropdown
        space={0}
        backgroundColor="lightgray"
        defaultValue={{ value: 'second', label: 'Second choice' }}
        options={[
          { value: 'first', label: 'First choice' },
          { value: 'second', label: 'Second choice' },
        ]}
      />
    </Horizontal>
    <Code jsx language="typescript">
      {`import { Dropdown } from 'naven/Dropdown'

<Dropdown options={[
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
      <>
        <Text>backgroundColor</Text>
        <Text>Color.white</Text>
        <Text>string</Text>
      </>
      <>
        <Text>...props</Text>
        <Text></Text>
        <TextLink href="https://react-select.com/props">
          All other props passed to react-select
        </TextLink>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="notification" />
      Notification
    </Heading>
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
    <Heading as="h2">
      <Anchor name="tabs" />
      Tabs
    </Heading>
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
    <Heading as="h2">
      <Anchor name="tooltip" />
      Tooltip
    </Heading>
    <Tooltip content={<Text>Hello content</Text>}>
      <Text>Hover or click to show tooltip.</Text>
    </Tooltip>
    <Spacer />
    <Code jsx language="typescript">
      {`import { Tooltip } from 'naven/Tooltip'

<Tooltip content={<Text>Me?</Text>}>
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
    <Heading as="h2">
      <Anchor name="list" />
      List
    </Heading>
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
    <Heading as="h2">
      <Anchor name="date" />
      Date Picker
    </Heading>
    <DatePicker initialDate={new Date(1990, 1, 17)} />
    <Code jsx language="typescript">
      {`import { DatePicker } from 'naven/Date'

<DatePicker initialDate={new Date(1990, 1, 17)} onChange={(date) => setDate(date)} />`}
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
    <Heading as="h2">
      <Anchor name="code" />
      Code
    </Heading>
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
      {`import { Code } from 'naven/Code'

<Code jsx language="typescript">{\`const doubleIt = (value: number) => value * 2\`}</Code>`}
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
    <Heading as="h2">
      <Anchor name="inline-code" />
      Inline Code
    </Heading>
    <Paragraph>
      The proof of the following equation <InlineCode>{'2+2=5'}</InlineCode> is
      left to the reader.
    </Paragraph>
    <Paragraph
      css={css`
        max-width: 350px;
      `}
    >
      Multiple <InlineCode>inline code blocks</InlineCode> shouldn't touch each
      other even when <InlineCode>line-breaks</InlineCode> are present.
    </Paragraph>
    <Code jsx language="typescript">
      {`import { InlineCode } from 'naven'

Use <InlineCode>const</InlineCode> to define variables.`}
    </Code>
    <PropertyTable space={false} />
    <Heading as="h2">
      <Anchor name="lazy" />
      Lazy Load
    </Heading>
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
        <InlineCode>{`Promise<any>`}</InlineCode>
      </>
      <>
        <Text>result</Text>
        <Text>required</Text>
        <InlineCode>{`(...imports: any) => ReactNode`}</InlineCode>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="table" />
      Table
    </Heading>
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
    <Heading as="h2">
      <Anchor name="image" />
      Image
    </Heading>
    <Horizontal space={0}>
      <Image src={navenLogo} alt="naven Logo" height={100} />
      <Image alt="Show placeholder" width={200} height={100} />
    </Horizontal>
    <Code jsx language="typescript">
      {`<Image src={yourImage} />
<Image height={100} width={200} /> // Shows placeholder if src missing (useful for development)`}
    </Code>
    <PropertyTable>
      <>
        <Text>src</Text>
        <Text></Text>
        <Text>string</Text>
      </>
      <>
        <Text>width / height</Text>
        <Text>if present but src missing, placeholder displayed</Text>
        <Text>string | number</Text>
      </>
      <>
        <Text>...props</Text>
        <Text></Text>
        <Text>
          all props from React <InlineCode>img</InlineCode> element
        </Text>
      </>
    </PropertyTable>
    <Heading as="h2">
      <Anchor name="loader" />
      Loader
    </Heading>
    <Horizontal space={0}>
      <Loader />
      <Loader small />
    </Horizontal>
    <Code jsx language="typescript">
      {`<Loader /> <Loader small />`}
    </Code>
    <PropertyTable>
      <>
        <Text>small</Text>
        <Text>false</Text>
        <InlineCode>boolean</InlineCode>
      </>
    </PropertyTable>
  </Content>
)
