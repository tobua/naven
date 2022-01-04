import { useState, Fragment } from 'react'
import { css } from '@emotion/react'
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
    <Vertical gap={theme.space.small}>
      <Checkbox label="First" checked={first} onChange={() => setFirst(!first)} />
      <Checkbox label="Second" checked={second} onChange={() => setSecond(!second)} />
    </Vertical>
  )
}

const Radios = () => {
  const [selected, setSelected] = useState('first')

  return (
    <Vertical gap={theme.space.small}>
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
      <Button>Press me!</Button>
      <Button
        disabled
        styles={{
          Main: {
            css: {
              background: theme.color.highlight,
            },
          },
        }}
      >
        Can't touch this
      </Button>
    </Horizontal>
    <Code jsx language="typescript">
      {`import { Button, Color, Space } from 'naven'
import { css } from '@emotion/react'

<Button space={Space.large}>Press me!</Button>
<Button disabled space={0} css={css\`background: \${Color.black.var};\`}>Can't touch this</Button>`}
    </Code>
    <ElementPreview
      title="Button"
      code={`<Button onClick={() => alert('Hello')}>Press me!</Button>`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Button color="highlight">Highlight</Button>
          <Button color="interact">Interaction</Button>
          <Button disabled>Disabled</Button>
        </Horizontal>
      </ElementPreview.Preview>
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
    </ElementPreview>
    <ElementPreview
      title="Text"
      code={`<Paragraph>
  Hey <Text>text</Text>
  <Bold>bold</Bold>
  <Important>important</Important>
  <Italic>italic</Italic>
  <Small>small</Small>
  <Abbreviation title="Frontend Development">FED</Abbreviation>
  <Definition>F.E.D.</Definition>.
</Paragraph>`}
    >
      <ElementPreview.Preview>
        <Text>This is regular inline text.</Text>
        <Paragraph>
          This is a paragraph with some <Bold>highligted text</Bold> and some{' '}
          <Important>very important text</Important> that is distinguishable by a different tag.
          Text can also be <Italic>italic</Italic>.
        </Paragraph>
        <Paragraph>Paragraphs by default have space between them.</Paragraph>
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
      <PropertyTable />
    </ElementPreview>
    <ElementPreview
      title="Link"
      code={`<Link href="https://google.com"><Button>Button with Link</Button></Link>`}
    >
      <ElementPreview.Preview>
        <Link href="https://google.com">
          <Button>Button with Link</Button>
        </Link>
      </ElementPreview.Preview>
      <PropertyTable space={0}>
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
      code={`<Text>This <TextLink underline={Underline.background} href="https://google.com">link</TextLink> is clickable.`}
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
            <InlineCode>{`underline={Underline.regular}`}</InlineCode>
          </Vertical>
          <Vertical>
            <Text>
              Here is some text with a{' '}
              <TextLink highlight="none" href="https://google.com">
                link
              </TextLink>
              .
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink highlight="none" href="https://google.com">
                all TextLink variants with underlines
              </TextLink>{' '}
              support multiple lines.
            </Paragraph>
            <InlineCode>{`highlight="none"`}</InlineCode>
          </Vertical>
          <Vertical>
            <Text>
              Here is some text with a{' '}
              <TextLink highlight="animatedUnderline" href="https://google.com">
                link
              </TextLink>
              .
            </Text>
            <Paragraph css={{ maxWidth: 200 }}>
              No worries as{' '}
              <TextLink highlight="animatedUnderline" href="https://google.com">
                all TextLink variants with underlines
              </TextLink>{' '}
              support multiple lines.
            </Paragraph>
            <InlineCode>{`highlight="animatedUnderline"`}</InlineCode>
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
          <Text>underline</Text>
          <InlineCode>Underline.none</InlineCode>
          <InlineCode>
            Underline.regular | Underline.none | Underline.animated | Underline.background
          </InlineCode>
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
      code={`<Input placeholder="Input here" value="value" onChange={(event) => alert(event.target.value)} />`}
    >
      <ElementPreview.Preview>
        <Horizontal>
          <Input placeholder="Input here" />
          <Input placeholder="Input here" value="value" onChange={() => {}} />
        </Horizontal>
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>onValue</Text>
          <Text>optional</Text>
          <InlineCode>{`(value: string) => void`}</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="TextArea"
      code={`<TextArea placeholder="Textarea with 5 rows." rows={5} />`}
    >
      <ElementPreview.Preview>
        <TextArea placeholder="Textarea with 5 rows." rows={5} />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>onValue</Text>
          <Text>optional</Text>
          <InlineCode>{`(value: string) => void`}</InlineCode>
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
          <Text>'info' | 'warning' | 'error'</Text>
        </>
        <>
          <Text>closeable</Text>
          <Text>false</Text>
          <Text>boolean</Text>
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
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </Fragment>
        <Fragment key="scrollContainerCss">
          <Text>scrollContainerCss</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </Fragment>
        <Fragment key="closeContainerCss">
          <Text>closeContainerCss</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </Fragment>
        <Fragment key="closeCss">
          <Text>closeCss</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </Fragment>
        <Fragment key="close">
          <Text>close</Text>
          <InlineCode>{`<Close />`}</InlineCode>
          <Text>ReactNode</Text>
        </Fragment>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Checkbox"
      code={`<Checkbox label="Accept Terms" checked={terms} onChange={() => setTerms(!terms)} />`}
    >
      <ElementPreview.Preview>
        <Checkboxes />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>label</Text>
          <Text> </Text>
          <Text>string</Text>
        </>
        <>
          <Text>wrapperCss</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Radio"
      code={`<Radio label="Female" name="gender" checked={selection === 'female'} onChange={() => setGender('female')} />`}
    >
      <ElementPreview.Preview>
        <Radios />
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>label</Text>
          <Text> </Text>
          <Text>string</Text>
        </>
        <>
          <Text>wrapperCss</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Accordion"
      code={`<Accordion headers={['Hello', <Text style="bold">World</Text>]}>
  <Text>Hello</Text>
  <Text>World</Text>
</Accordion>`}
    >
      <ElementPreview.Preview>
        <Accordion headers={['First', <Text style="bold">Second</Text>, 'Third']}>
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
        <Horizontal
          styles={{
            Main: {
              css: {
                overflow: 'visible',
              },
            },
          }}
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
      </ElementPreview.Preview>
      <PropertyTable>
        <>
          <Text>count</Text>
          <Text> </Text>
          <Text>number | string</Text>
        </>
        <>
          <Text>cssDot</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
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
            backgroundColor="lightgray"
            defaultValue={{ value: 'second', label: 'Second choice' }}
            options={[
              { value: 'first', label: 'First choice' },
              { value: 'second', label: 'Second choice' },
            ]}
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
          <Text>Color.white.var</Text>
          <Text>string</Text>
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
      code={`<Notification wrapperCss={css\`right: auto; left: 0;\`} />
    
addNotification({ message: 'No internet connection.', type: 'error'})
addNotification({ message: "Couldn't find entry.", type: 'warning', duration: 3 })
addNotification({ message: 'Failed to get data, please try again later.', type: 'error', closeable: true })`}
    >
      <ElementPreview.Preview>
        <NotificationToggle />
      </ElementPreview.Preview>
      <Heading as="h3" style="code">{`<Notification />`}</Heading>
      <PropertyTable>
        <>
          <Text>gap</Text>
          <Text> </Text>
          <InlineCode>string | number</InlineCode>
        </>
        <>
          <Text>wrapperCss</Text>
          <Text> </Text>
          <InlineCode>SerializedStyles</InlineCode>
        </>
        <>
          <Text>containerCss</Text>
          <Text> </Text>
          <InlineCode>SerializedStyles</InlineCode>
        </>
      </PropertyTable>
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
        <Tooltip content={<Text>Hello content</Text>}>
          <Text>Hover or click to show tooltip.</Text>
        </Tooltip>
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
      code={`const UnstyledList = <List>
  <Text>First</Text>
  <Text>Second</Text>
</List>
const HorizontalUnorderedList = <List listStyle horizontal>
  <Text>First</Text>
  <Text>Second</Text>
</List>
const VerticalOrderedList = <List listStyle type={List.Type.ordered}>
  <Text>Ordered</Text>
  <Text>Second</Text>
</List>
const DescriptionList = <List type={List.Type.description}>
  <List.Description term="Frontend">
    HTML, CSS and JavaScript
  </List.Description>
  <List.Description term={<Text>Backend</Text>}>
    <Text>Node, PHP etc.</Text>
  </List.Description>
</List>`}
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
          <InlineCode>List.Type.unordered</InlineCode>
          <InlineCode>List.Type | 'ul' | 'ol' | 'dl'</InlineCode>
        </>
        <>
          <Text>listStyle</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>horizontal</Text>
          <InlineCode>false</InlineCode>
          <InlineCode>boolean</InlineCode>
        </>
        <>
          <Text>elementProps</Text>
          <Text> </Text>
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
    </ElementPreview>
    <ElementPreview
      title="Date Picker"
      anchor="date"
      code={`import { DatePicker } from 'naven/Date'

<DatePicker initialDate={new Date(1990, 1, 17)} onChange={(date) => setDate(date)} />`}
    >
      <ElementPreview.Preview>
        <DatePicker initialDate={new Date(1990, 1, 17)} />
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
          <Text>styleOverrides</Text>
          <Text> </Text>
          <Text>SerializedStyles</Text>
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

<Code jsx language="typescript">{\`const doubleIt = (value: number) => value * 2\`}</Code>`}
    >
      <ElementPreview.Preview>
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
      </ElementPreview.Preview>
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
          <Text> </Text>
          <Text>object</Text>
        </>
        <>
          <Text>...props</Text>
          <Text> </Text>
          <TextLink href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">
            See react-syntax-highlighter
          </TextLink>
        </>
      </PropertyTable>
    </ElementPreview>
    <ElementPreview
      title="Inline Code"
      anchor="inline-code"
      code={`import { InlineCode } from 'naven'

Use <InlineCode>const</InlineCode> to define variables.`}
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
      <PropertyTable space={false} />
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
      code={`<Image src={yourImage} />
<Image height={100} width={200} /> // Shows placeholder if src missing (useful for development)`}
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
          <Text>string</Text>
        </>
        <>
          <Text>width / height</Text>
          <Text>if present but src missing, placeholder displayed</Text>
          <Text>string | number</Text>
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
          styles={{
            Main: {
              css: {
                background: theme.color.gray200,
                padding: theme.space.medium,
              },
            },
          }}
        >
          <Spacer
            styles={{
              Main: {
                css: {
                  background: theme.color.white,
                },
              },
            }}
          />
          <Spacer
            size="large"
            styles={{
              Main: {
                css: {
                  background: theme.color.white,
                },
              },
            }}
          />
          <Spacer
            line
            styles={{
              Main: {
                css: {
                  background: theme.color.white,
                },
              },
            }}
          />
        </Vertical>
      </ElementPreview.Preview>
      <PropertyTable space={false}>
        <>
          <Text>size</Text>
          <InlineCode>medium</InlineCode>
          <InlineCode>'tiny' | 'small' | 'medium' | 'large'</InlineCode>
        </>
        <>
          <Text>type</Text>
          <InlineCode>none</InlineCode>
          <InlineCode>'line'</InlineCode>
        </>
      </PropertyTable>
    </ElementPreview>
  </Content>
)
