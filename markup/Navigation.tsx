import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { List, TextLink } from './Element'
import { navigation } from '../config'
import { Space, Color, Breakpoint } from '../style'

export const Wrapper = styled.nav<{ showNavigation: boolean }>`
  grid-column: 2 / 5;
  position: relative;

  ${Breakpoint.Phone} {
    display: ${({ showNavigation }) => (showNavigation ? 'flex' : 'none')};
    ${({ showNavigation }) =>
      showNavigation
        ? `
    height: 100vh;
    `
        : ''}
  }
`

export const Aside = styled.aside`
  grid-column: 2 / 3;
`

const listStyles = css`
  ${Breakpoint.Phone} {
    flex: 1;
    flex-direction: column;
  }
`

const listElementStyles = css`
  ${Breakpoint.Phone} {
    padding: 0;
    margin-bottom: ${Space.medium};
  }
`

const Content = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  overflow: hidden;
  background: #d5d5d5;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;

  ${Breakpoint.Phone} {
    position: relative;
    height: auto;
    top: inherit;
    margin-top: ${Space.small};
  }
`

const ContentContainer = styled.div`
  padding: ${Space.medium};

  ${Breakpoint.Phone} {
    padding: 0;
  }
`

const TabElement = styled.div`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;

    & > a {
      color: ${Color.interact};
    }
  }
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
      <Content isOpen={open}>
        <ContentContainer>{children[1]}</ContentContainer>
      </Content>
    </TabElement>
  )
}

export const SideBar = () => (
  <Aside>
    <nav>Sidebar</nav>
  </Aside>
)

let toggleMobileNavigation = null

export const Navigation = () => {
  const [showNavigation, toggleMobileNavigationState] = useState(false)

  toggleMobileNavigation = toggleMobileNavigationState

  return (
    <Wrapper showNavigation={showNavigation}>
      <List
        css={listStyles}
        elementProps={{ css: listElementStyles }}
        horizontal
      >
        {navigation.top.map((link, index) => (
          <Tab key={index}>
            <TextLink href={link.title.url}>{link.title.name}</TextLink>
            <p>content</p>
          </Tab>
        ))}
      </List>
    </Wrapper>
  )
}

export const showMobileNavigation = (show) => {
  toggleMobileNavigation(show)
}
