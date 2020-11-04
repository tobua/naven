import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Color, Space } from '../../style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: ${Space.medium};
`

const Tab = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: ${Space.medium};

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
}

export const Tabs = ({ items, initialTab = 0 }: ITabs) => {
  const [tab, setTab] = useState(initialTab)

  const { content } = items[tab]

  return (
    <Wrapper>
      <TabWrapper>
        {items.map((_tab, index) => (
          <Tab
            key={index}
            tabIndex={0}
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
