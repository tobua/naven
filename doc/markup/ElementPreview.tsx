import { useState, ReactNode, ReactElement, Children } from 'react'
import styled from '@emotion/styled'
import { Button, Heading, Anchor, Horizontal, Font, Color, Space, Breakpoint } from 'naven'
import { Code } from 'naven/Code'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const TabButton = styled(Button)<{ bold: boolean }>`
  ${({ bold }) => (bold ? Font.weight.bold : '')}
  background: ${({ bold }) => (bold ? Color.highlight : Color.Gray[300])};

  &:active,
  &:focus {
    background: ${({ bold }) => (bold ? Color.highlight : Color.Gray[300])};
  }

  ${Breakpoint.Phone} {
    padding: ${Space.tiny};
  }
`

interface Props {
  title: string
  anchor?: string
  code: string
  children: ReactNode
}

export const ElementPreview = ({ title, anchor = title.toLowerCase(), code, children }: Props) => {
  const [tab, setTab] = useState<'preview' | 'code' | 'properties'>('preview')

  const renderedChildren = Children.map(children, (child: ReactElement) => {
    if (tab === 'preview' && child.type === ElementPreview.Preview) {
      return child
    }

    if (tab === 'properties' && child.type !== ElementPreview.Preview) {
      return child
    }

    return null
  })
  return (
    <>
      <Header>
        <Heading as="h2">
          <Anchor name={anchor} />
          {title}
        </Heading>
        <Horizontal space={0}>
          <TabButton bold={tab === 'preview'} onClick={() => setTab('preview')}>
            Preview
          </TabButton>
          <TabButton bold={tab === 'code'} onClick={() => setTab('code')}>
            Code
          </TabButton>
          <TabButton bold={tab === 'properties'} onClick={() => setTab('properties')}>
            Properties
          </TabButton>
        </Horizontal>
      </Header>
      {tab === 'code' && (
        <Code jsx language="typescript">
          {code}
        </Code>
      )}
      {renderedChildren}
    </>
  )
}

ElementPreview.Preview = ({ children }) => children
