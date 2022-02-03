import { useState, ReactNode, ReactElement, Children } from 'react'
import { Button, Heading, Anchor, Horizontal } from 'naven'
import Code from 'naven/Code'
import { theme, styled } from '../configuration'

const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
})

const TabButton = styled(Button, {
  '@phone': {
    padding: theme.space.tiny,
  },
  variants: {
    bold: {
      true: {
        color: theme.color.backgroundContrast,
        cursor: 'auto',
      },
    },
  },
})

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
        <Horizontal>
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
      {tab === 'code' && <Code template="react-ts">{code}</Code>}
      {renderedChildren}
    </>
  )
}

ElementPreview.Preview = ({ children }) => children
