import React, { cloneElement, useState } from 'react'
import styled from '@emotion/styled'
import { List, TextLink } from './Element'
import { navigation } from '../config'

export const Wrapper = styled.nav`
  grid-column: 2 / 5;
`

export const Aside = styled.aside`
  grid-column: 2 / 3;
`

const Content = styled.div<{ open: boolean }>`
  height: ${({ open }) => (open ? 'auto' : 0)};
  overflow: hidden;
  background: #d5d5d5;
`

export const Tab = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {cloneElement(children[0], {
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => setOpen(false),
      })}
      <Content open={open}>{children[1]}</Content>
    </>
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
