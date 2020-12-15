import React, { useState } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Color, Space, spaceProp } from '../../style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${spaceProp}
  ${({ css }) => css}
`

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: ${Space.medium};
`

const Tab = styled.div<{ active?: boolean }>`
  display: flex;
  cursor: pointer;
  margin-right: ${Space.medium};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  :hover,
  :focus {
    color: ${Color.interact};
    outline: none;
  }
`

const Content = styled.div`
  display: flex;
`

interface ITabs {
  items: {
    title: string
    content: React.ReactNode
  }[]
  initialTab?: number
  css?: SerializedStyles
  space?: string | number
}

export const Tabs = ({ items, initialTab = 0, css, space }: ITabs) => {
  const [tab, setTab] = useState(initialTab)

  const { content } = items[tab]

  return (
    <Wrapper css={css} space={space}>
      <TabWrapper>
        {items.map((_tab, index) => (
          <Tab
            key={index}
            tabIndex={0}
            active={index === tab}
            onKeyUp={(event) => event.key === 'Enter' && setTab(index)}
            onClick={() => setTab(index)}
          >
            {_tab.title}
          </Tab>
        ))}
      </TabWrapper>
      <Content>{content}</Content>
    </Wrapper>
  )
}
