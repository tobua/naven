import React, { useState } from 'react'
import styled from '@emotion/styled'
import { List, TextLink } from './Element'
import { navigation } from '../config'

export const Wrapper = styled.nav`
  grid-column: 2 / 5;
  position: relative;
`

export const Aside = styled.aside`
  grid-column: 2 / 3;
`

const Content = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  overflow: hidden;
  background: #d5d5d5;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
`

const TabElement = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tab = ({ children }: { children: React.ReactElement[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <TabElement
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onFocus={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={() => setOpen(false)}
    >
      {children[0]}
      <Content isOpen={open}>{children[1]}</Content>
    </TabElement>
  )
}

export const SideBar = () => (
  <Aside>
    <nav>Sidebar</nav>
  </Aside>
)

export const Navigation = () => (
  <Wrapper>
    <List horizontal>
      {navigation.top.map((link, index) => (
        <Tab key={index}>
          <TextLink href={link.title.url}>{link.title.name}</TextLink>
          <p>content</p>
        </Tab>
      ))}
    </List>
  </Wrapper>
)
