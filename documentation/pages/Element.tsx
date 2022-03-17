import { useState, Fragment } from 'react'
import {
  Content,
  Vertical,
  Horizontal,
  Accordion,
  Alert,
  Anchor,
  Badge,
  Button,
  Checkbox,
  Heading,
  Image,
  Input,
  TextArea,
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
  Inline,
  Bold,
  Important,
  Italic,
  Quote,
  Citation,
  ShortQuotation,
  InlineCode,
  Small,
  Abbreviation,
  Definition,
} from 'naven'
import Code from 'naven/Code'
import Tooltip from 'naven/Tooltip'
import DatePicker from 'naven/Date'
import Dropdown from 'naven/Dropdown'
import 'react-datepicker/dist/react-datepicker.css'
import { theme } from '../configuration'
import { PropertyTable } from 'markup/PropertyTable'
import { ElementPreview } from 'markup/ElementPreview'
import navenLogo from 'logo.svg'

const PopupToggle = () => {
  const [show, togglePopup] = useState(false)

  return (
    <>
      <Button onClick={() => togglePopup(!show)}>Open Popup</Button>
      <Popup show={show} onClose={() => togglePopup(false)}>
        <p>This is the popup content.</p>
      </Popup>
    </>
  )
}

const NotificationToggle = () => {
  type Value = 'info' | 'warning' | 'error'
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<Value>('info')
  const [closeable, setCloseable] = useState<boolean>(false)

  return (
    <Horizontal>
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
      <Checkbox checked={closeable} onChange={() => setCloseable(!closeable)} label="Closeable?" />
      <Button
        disabled={!type || !message || message === ''}
        onClick={() => addNotification({ message, type, closeable })}
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
    <Vertical space={theme.space.small}>
      <Checkbox label="First" checked={first} onChange={() => setFirst(!first)} />
      <Checkbox label="Second" checked={second} onChange={() => setSecond(!second)} />
    </Vertical>
  )
}

const Radios = () => {
  const [selected, setSelected] = useState('first')

  return (
    <Vertical space={theme.space.small}>
      <Checkbox
        type="radio"
        label="First"
        name="group"
        checked={selected === 'first'}
        onChange={() => setSelected('first')}
      />
      <Checkbox
        type="radio"
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
    <Horizontal>
      <Button onClick={() => alert('Well Hello!')}>Press me!</Button>
      <Button
        disabled
        styles={{
          Main: {
            css: {
              background: theme.color.backgroundContrast,
              color: theme.color.colorContrast,
              padding: theme.space.small,
            },
          },
        }}
      >
        Can't touch this
      </Button>
    </Horizontal>
    <Code>
      {`import { Button } from 'naven'

const ClickableButton = <Button onClick={() => alert('Well Hello!')}>Press me!</Button>
const DisabledCustomButton = <Button disabled styles={{ Main: { css: {
  background: theme.color.backgroundContrast,
  color: theme.color.colorContrast,
  padding: theme.space.small
} }}>Can't touch this</Button>`}
    </Code>
    <ElementPreview
      title="Text"
      code={`<Text>
  Hey <Inline>inline</Inline>
  <Bold>bold</Bold>
  <Important>important</Important>
  <Italic>italic</Italic>
  <Small>small</Small>
  <Abbreviation title="Frontend Development">FED</Abbreviation>
  <Definition>F.E.D.</Definition>.
</Text>`}
    >
      <ElementPreview.Preview>
        <Text>
          This is regular text <Inline>with inline text in it</Inline>.
        </Text>
        <Paragraph>
          This is a paragraph with some <Bold>bold text</Bold> and some{' '}
          <Important>very important text</Important> that is distinguishable by a different tag and
          the color. Text can also be <Italic>italic</Italic>.
        </Paragraph>
        <Quote cite="https://www.youtube.com/watch?v=spwU2P5U_1U">
          Web developers, web developers, web developers.
        </Quote>
        <Paragraph>
          Einstein said{' '}
          <ShortQuotation>
            Vanilla JavaScript will only get you so far, try a good UI library.
          </ShortQuotation>{' '}
          and people were stunned.
        </Paragraph>
        <Paragraph>
          Taken from the first chapter of the{' '}
          <Citation>
            <TextLink highlight="underline" href="https://en.wikipedia.org/wiki/Iliad">
              Iliad
            </TextLink>
          </Citation>{' '}
          by Homer.
        </Paragraph>
        <Paragraph>
          Let's write some <Small>small</Small> text and ask whether{' '}
          <Abbreviation title="Frontend Development">FED</Abbreviation> or{' '}
          <Definition>F.E.D.</Definition> is a valid abbreviation for Frontend Development.
        </Paragraph>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>bold</Text>
          <Text>false</Text>
          <Text>boolean</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Button"
      code={`<Button onClick={() => alert('Hello')}>Press me!</Button>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Button>Default</Button>
          <Button color="regular">Regular</Button>
          <Button color="highlight">Highlight</Button>
          <Button color="interact">Interaction</Button>
          <Button disabled>Disabled</Button>
          <Button as="a" href="http://google.com">
            Link Button
          </Button>
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>color</Text>
          <Text>none</Text>
          <InlineCode>'regular' | 'highlight' | 'interact'</InlineCode>
        </>
        <>
          <Text>disabled</Text>
          <Text>false</Text>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>as</Text>
          <Text>button</Text>
          <InlineCode>'button' | 'a'</InlineCode>
        </>
        <>
          <Text>href</Text>
          <Text></Text>
          <InlineCode>string</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Link"
      code={`<Link href="https://google.com"><Button>Button in Link</Button></Link>`}
    >
      <ElementPreview.Preview>
        <Link href="https://google.com">
          <Button>Regular Button wrapped in Link</Button>
        </Link>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>
            All <InlineCode>a</InlineCode> Tag Properties
          </Text>
          <Text> </Text>
          <Text>href, download, target, ...</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Text Link"
      anchor="text-link"
      code={`<Text>This <TextLink highlight="gradient" href="https://google.com">link</TextLink> is clickable.</Text>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Vertical>
            <Text>
              Here is some text with a <TextLink href="https://google.com">link</TextLink>.
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink href="https://google.com">all TextLink variants with underlines</TextLink>{' '}
              support multiple lines.
            </Paragraph>
          </Vertical>
          <Vertical>
            <Text>
              Here is some text with a{' '}
              <TextLink highlight="underline" href="https://google.com">
                link
              </TextLink>
              .
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink highlight="underline" href="https://google.com">
                all TextLink variants with underlines
              </TextLink>{' '}
              support multiple lines.
            </Paragraph>
            <InlineCode>{`highlight="underline"`}</InlineCode>
          </Vertical>
          <Vertical>
            <Text>
              Here is some text with a{' '}
              <TextLink highlight="animated" href="https://google.com">
                link
              </TextLink>
              .
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink highlight="animated" href="https://google.com">
                all TextLink variants with underlines
              </TextLink>{' '}
              support multiple lines.
            </Paragraph>
            <InlineCode>{`highlight="animated"`}</InlineCode>
          </Vertical>
          <Vertical>
            <Text>
              Here is some text with a{' '}
              <TextLink highlight="gradient" href="https://google.com">
                link
              </TextLink>
              .
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink highlight="gradient" href="https://google.com">
                all TextLink variants with underlines
              </TextLink>{' '}
              support multiple lines.
            </Paragraph>
            <InlineCode>{`highlight="gradient"`}</InlineCode>
          </Vertical>
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable space={false}>
        <>
          <Text>highlight</Text>
          <InlineCode>empty</InlineCode>
          <InlineCode>'underline' | 'animated' | 'gradient'</InlineCode>
        </>
        <>
          <Text>bold</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>
            All <InlineCode>a</InlineCode> Tag Properties
          </Text>
          <Text> </Text>
          <Text>href, download, target, ...</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Input"
      code={`<Input
  placeholder="with placeholder"
  value="with value"
  required
  onValue={(value) => value}
  onChange={(event) => event.target.value}
/>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Input placeholder="with placeholder" />
          <Input placeholder="with placeholder" value="with value" onChange={() => {}} />
          <Input placeholder="is required" required />
          <Input
            placeholder="is required"
            value="required but has value"
            onChange={() => {}}
            required
          />
          <Input placeholder="Custom color" cursorColor="green" />
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>onValue</Text>
          <Text>optional</Text>
          <InlineCode>{`(value: string) => void`}</InlineCode>
        </>
        <>
          <Text>required</Text>
          <Text></Text>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>
            All <InlineCode>input</InlineCode> Tag Properties
          </Text>
          <Text> </Text>
          <Text>placeholder, value, onChange, ...</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="TextArea"
      code={`<TextArea
  placeholder="Placeholder"
  value="Current value"
  rows={5}
  required
  onValue={(value) => value}
  onChange={(event) => event.target.value}
/>`}
    >
      <ElementPreview.Preview>
        <TextArea placeholder="Textarea with 5 rows" rows={5} />
        <TextArea
          placeholder="Placeholder"
          value="Textarea with 2 rows and initial value"
          onChange={() => {}}
          rows={2}
        />
        <TextArea placeholder="Required textarea" rows={2} required />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>onValue</Text>
          <Text>optional</Text>
          <InlineCode>{`(value: string) => void`}</InlineCode>
        </>
        <>
          <Text>
            All <InlineCode>textarea</InlineCode> Tag Properties
          </Text>
          <Text> </Text>
          <Text>rows, cols, placeholder, ...</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview title="Alert" code={`<Alert type="warning" closeable>Watch out!</Alert>`}>
      <ElementPreview.Preview>
        <Alert>Hey: This is an info</Alert>
        <Alert type="warning" closeable>
          Ohh: This is a <b>closeable</b> warning
        </Alert>
        <Alert type="error">Whoopsie: This is an error</Alert>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>type</Text>
          <Text>info</Text>
          <InlineCode>'info' | 'warning' | 'error'</InlineCode>
        </>
        <>
          <Text>closeable</Text>
          <Text>false</Text>
          <Text>boolean</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Anchor"
      code={`<Anchor name="my-anchor">
  <Text>Anchor point</Text>
</Anchor>

<TextLink href="#my-anchor">Go to anchor</TextLink>`}
    >
      <ElementPreview.Preview>
        <TextLink href="#first">To First Anchor</TextLink>
        <TextLink href="#second">To Second Anchor</TextLink>
        <Anchor name="first">
          <Text>First Anchor</Text>
        </Anchor>
        <Anchor name="second">
          <Text>Second Anchor</Text>
        </Anchor>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>name</Text>
          <Text>required</Text>
          <InlineCode>string</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Popup"
      code={`<Popup show={show} onClose={() => setShow(false)}>
  <Text>Content</Text>
</Popup>`}
    >
      <ElementPreview.Preview>
        <PopupToggle />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>show</Text>
          <Text>true</Text>
          <Text>boolean</Text>
        </>
        <>
          <Text>onClose</Text>
          <Text>required</Text>
          <Text>{`() => any`}</Text>
        </>
        <>
          <Text>close</Text>
          <InlineCode>{`<Close />`}</InlineCode>
          <Text>ReactNode</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Checkbox / Radio"
      code={`const checkbox = <Checkbox label="Accept Terms" checked={terms} onChange={() => setTerms(!terms)} />
      
const Radios = (
  <>
    <Radio label="Female" name="gender" checked={selection === 'female'} onChange={() => setGender('female')} />
    <Radio label="Male" name="gender" checked={selection === 'male'} onChange={() => setGender('male')} />
  </>
)`}
    >
      <ElementPreview.Preview>
        <Checkboxes />
        <Radios />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>label</Text>
          <Text> </Text>
          <InlineCode>string</InlineCode>
        </>
        <>
          <Text>type</Text>
          <Text>checkbox</Text>
          <InlineCode>'radio' | 'checkbox'</InlineCode>
        </>
        <>
          <Text>id</Text>
          <Text>randomly generated</Text>
          <InlineCode>string</InlineCode>
        </>
        <>
          <Text>name</Text>
          <Text>required for radio</Text>
          <InlineCode>string</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Accordion"
      code={`<Accordion headers={['Hello', <Text bold>World</Text>]}>
  <Text>Hello</Text>
  <Text>World</Text>
</Accordion>`}
    >
      <ElementPreview.Preview>
        {/* // TODO bug second and third content text will also inherit bold from headers text */}
        <Accordion headers={['First', <Text bold>Second</Text>, 'Third']}>
          <Text>First Content</Text>
          <Text>Second Content</Text>
          <Text>Third Content</Text>
        </Accordion>
      </ElementPreview.Preview>
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
    </ElementPreview>
    <ElementPreview
      title="Badge"
      code={`<Badge count={30}>
  <Text>Mail</Text>
</Badge>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
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
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>count</Text>
          <Text>required</Text>
          <InlineCode>number | string</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Dropdown"
      code={`import { Dropdown } from 'naven/Dropdown'

<Dropdown options={[
  { value: 'first', label: 'First choice' },
  { value: 'second', label: 'Second choice' },
]} />`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Dropdown
            options={[
              { value: 'first', label: 'First choice' },
              { value: 'second', label: 'Second choice' },
            ]}
          />
          <Dropdown
            backgroundColor="darkgray"
            options={[
              { value: 'first', label: 'First choice' },
              { value: 'second', label: 'Second choice' },
            ]}
            css={{ minWidth: 120, maxWidth: 300, flex: 1 }}
          />
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable css={false}>
        <>
          <Text>options</Text>
          <Text>required</Text>
          <TextLink href="https://react-select.com/props">See react-select</TextLink>
        </>
        <>
          <Text>containerStyles</Text>
          <Text> </Text>
          <Text>object</Text>
        </>
        <>
          <Text>backgroundColor</Text>
          <Text>theme.color.background</Text>
          <InlineCode>string</InlineCode>
        </>
        <>
          <Text>...props</Text>
          <Text> </Text>
          <TextLink href="https://react-select.com/props">
            All other props passed to react-select
          </TextLink>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Notification"
      code={`<Notification css={{ right: auto, left: 0 }} />

addNotification({ message: 'Login successful.' })
addNotification({ message: 'No internet connection.', type: 'error'})
addNotification({ message: "Couldn't find entry.", type: 'warning', duration: 3 })
addNotification({ message: 'Failed to get data, please try again later.', type: 'error', closeable: true })`}
    >
      <ElementPreview.Preview>
        <NotificationToggle />
      </ElementPreview.Preview>
      <Heading as="h3" style="code">{`<Notification />`}</Heading>
      <PropertyTable />
      <Heading as="h3" style="code">{`addNotification`}</Heading>
      <PropertyTable css={false} space={false}>
        <>
          <Text>message</Text>
          <Text>required</Text>
          <InlineCode>string</InlineCode>
        </>
        <>
          <Text>duration</Text>
          <Text>8</Text>
          <InlineCode>number</InlineCode>
        </>
        <>
          <Text>type</Text>
          <Text>info</Text>
          <InlineCode>'info' | 'warning' | 'error'</InlineCode>
        </>
        <>
          <Text>closeable</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Tabs"
      code={`<Tabs items={[
  { title: 'First', content: <Text>First Content</Text> },
  { title: 'Second', content: <Text>Second Content</Text> }
]} />`}
    >
      <ElementPreview.Preview>
        <Tabs
          items={[
            { title: 'First', content: <p>Content First</p> },
            { title: 'Second', content: <p>Content Second</p> },
            { title: 'Third', content: <p>Content Third</p> },
          ]}
        />
      </ElementPreview.Preview>
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
    </ElementPreview>
    <ElementPreview
      title="Tooltip"
      code={`import { Tooltip } from 'naven/Tooltip'

<Tooltip content={<Text>Me?</Text>}>
  <Text>Who!</Text>
</Tooltip>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Tooltip content={<Text>Hello content</Text>}>
            <Text>Hover or click to show tooltip.</Text>
          </Tooltip>
        </Horizontal>
      </ElementPreview.Preview>
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
    </ElementPreview>
    <ElementPreview
      title="List"
      code={`const UnstyledList = (
  <List>
    <Text>First</Text>
    <Text>Second</Text>
  </List>
)
const HorizontalUnorderedDiscList = (
  <List type="disc" horizontal>
    <Text>First</Text>
    <Text>Second</Text>
  </List>
)
const VerticalOrderedList = (
  <List type="ordered">
    <Text>Ordered</Text>
    <Text>Second</Text>
  </List>
)
const DescriptionList = (
  <List type="description">
    {({ Description }) => (
      <>
        <Description term="Frontend">HTML, CSS and JavaScript</Description>
        <Description term={<Text>Backend</Text>}>
          <Text>Node, PHP etc.</Text>
        </Description>
      </>
    )}
  </List>
)`}
    >
      <ElementPreview.Preview>
        <List>
          <Text>Unstyled</Text>
          <Text>Vertical</Text>
          <Text>Third</Text>
        </List>
        <List horizontal>
          <Text>Unstyled</Text>
          <Text>Horizontal</Text>
          <Text>Third</Text>
        </List>
        <List type="disc">
          <Text>Disc</Text>
          <Text>Second</Text>
          <Text>Third</Text>
        </List>
        <List horizontal type="disc">
          <Text>Disc</Text>
          <Text>Second</Text>
          <Text>Third</Text>
        </List>
        <List type="ordered">
          <Text>Ordered</Text>
          <Text>Second</Text>
        </List>
        <List type="ordered" horizontal>
          <Text>Ordered</Text>
          <Text>Second</Text>
        </List>
        <List type="description">
          {({ Description }) => (
            <>
              <Description term="Frontend">HTML, CSS and JavaScript</Description>
              <Description term={<Text>Backend</Text>}>
                <Text>Node, PHP etc.</Text>
              </Description>
            </>
          )}
        </List>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>type</Text>
          <Text>{`empty => unordered`}</Text>
          <InlineCode>'ordered' | 'description | 'disc'</InlineCode>
        </>
        <>
          <Text>horizontal</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>elementProps</Text>
          <Text> </Text>
          <Text>
            all props from React <InlineCode>li</InlineCode> element
          </Text>
        </>
        <>
          <Text>wrap</Text>
          <Text>false</Text>
          <Text>boolean</Text>
        </>
        <>
          <Text>gap</Text>
          <Text>theme.space.small</Text>
          <Text>number | string</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Date Picker"
      anchor="date"
      code={`import { DatePicker } from 'naven/Date'
import 'react-datepicker/dist/react-datepicker.css'

<DatePicker initialDate={new Date(1990, 1, 17)} onChange={(date) => setDate(date)} />`}
    >
      <ElementPreview.Preview>
        <DatePicker initialDate={new Date(1990, 1, 17)} />
        <DatePicker />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>initialDate</Text>
          <Text>now</Text>
          <Text>Date | null</Text>
        </>
        <>
          <Text>onChange</Text>
          <Text> </Text>
          <InlineCode>{`(date: Date) => void`}</InlineCode>
        </>
        <>
          <Text>...props</Text>
          <Text> </Text>
          <TextLink href="https://reactdatepicker.com">See react-datepicker</TextLink>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Code"
      code={`import { Code } from 'naven/Code'
import '@codesandbox/sandpack-react/dist/index.css'

const RegularCode = <Code template="react-ts">{\`const doubleIt = (value: number) => value * 2\`}</Code>

const CodeWithDiff = (
  <Code template="react-ts" diff={{ remove: [2], add: [3] }}>
{\`// Hello Diff
- export const Hello = () => <p>World</p>
+ export const Again = () => <p>Hello</p>\`}
  </Code>
)`}
    >
      <ElementPreview.Preview>
        <Code>
          {`// Hello JS
export const hello = () => console.log('world')`}
        </Code>
        <Code template="vanilla">
          {`// Hello JS
export const hello = () => console.log('world')`}
        </Code>
        <Code template="vanilla-ts">{`// Hello TS
export const greet = (greeting: string) => console.log(\`hello \${greeting}!\`)`}</Code>
        <Code template="react-ts">
          {`// Hello JSX / TSX
export const Hello = () => <p>W<strong>o</strong>rld</p>`}
        </Code>
        <Code template="react-ts" diff={{ remove: [2, 5, 6], add: [3, 7, 8] }}>
          {`// Hello Diff
- export const Hello = () => <p>World</p>
+ export const Again = () => <p>Hello</p>
// Untouched
- const test = 5
- const result = test * 2
+ const test: number = 6
+ const result = test * 2`}
        </Code>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>template</Text>
          <InlineCode>react</InlineCode>
          <InlineCode>
            'react' | 'react-ts' | 'vanilla' | 'vanilla-ts' | 'angular' | 'vue' | 'vue3'
          </InlineCode>
        </>
        <>
          <Text>...props</Text>
          <Text> </Text>
          <TextLink href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
            See @codesandbox/sandpack-react
          </TextLink>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Inline Code"
      anchor="inline-code"
      code={`<Text>Use <InlineCode>const</InlineCode> to define variables.</Text>`}
    >
      <ElementPreview.Preview>
        <Paragraph>
          The proof of the following equation <InlineCode>{'2+2=5'}</InlineCode> is left to the
          reader.
        </Paragraph>
        <Paragraph css={{ maxWidth: 350 }}>
          Multiple <InlineCode>inline code blocks</InlineCode> shouldn't touch each other even when{' '}
          <InlineCode>line-breaks</InlineCode> are present.
        </Paragraph>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>children</Text>
          <Text>required</Text>
          <InlineCode>string</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Lazy Loading"
      anchor="lazy"
      code={`<Lazy imports={import('epic-react-router')} result={(Component) => <Component.Page />} />`}
    >
      <ElementPreview.Preview>
        <Lazy
          // Mocking an import('./whatever')
          imports={new Promise((done) => done(() => <p>lazy loaded...</p>))}
          result={(Component) => Component}
        />
      </ElementPreview.Preview>
      <PropertyTable css={false}>
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
    </ElementPreview>
    <ElementPreview
      title="Table"
      code={`<Table>
  <>
    <Text>First</Text>
    <Text>Second</Text>
  </>
  <>
    <Text>Third</Text>
    <Text>Fourth</Text>
  </>
</Table>`}
    >
      <ElementPreview.Preview>
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
      </ElementPreview.Preview>
      <PropertyTable />
    </ElementPreview>
    <ElementPreview
      title="Image"
      code={`const imageAsset = <Image src={yourImage} />
const imagePlaceholder = <Image height={100} width={200} /> // Shows placeholder if src missing (useful for development)`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Image src={navenLogo} alt="naven Logo" height={100} />
          <Image alt="Show placeholder" width={200} height={100} />
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>src</Text>
          <Text> </Text>
          <InlineCode>string</InlineCode>
        </>
        <>
          <Text>width / height</Text>
          <Text>if present but src missing, placeholder displayed</Text>
          <InlineCode>string | number</InlineCode>
        </>
        <>
          <Text>...props</Text>
          <Text> </Text>
          <Text>
            all props from React <InlineCode>img</InlineCode> element
          </Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview title="Loader" code={`<Loader /> <Loader small />`}>
      <ElementPreview.Preview>
        <Horizontal>
          <Loader />
          <Loader small />
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>small</Text>
          <Text>false</Text>
          <InlineCode>boolean</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Spacer"
      code={`<Spacer />
<Spacer size="large" />
<Spacer line />`}
    >
      <ElementPreview.Preview>
        <Vertical
          css={{
            background: theme.color.gray200,
            padding: theme.space.medium,
            alignSelf: 'normal',
          }}
        >
          <Spacer
            css={{
              background: theme.color.white,
            }}
          />
          <Spacer
            size="large"
            css={{
              background: theme.color.white,
            }}
          />
          <Spacer
            line
            css={{
              background: theme.color.white,
            }}
          />
        </Vertical>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>size</Text>
          <InlineCode>medium</InlineCode>
          <InlineCode>'tiny' | 'small' | 'medium' | 'large'</InlineCode>
        </>
        <>
          <Text>line</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
  </Content>
)
