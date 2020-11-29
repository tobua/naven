import React, { useState, useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { List, TextLink } from './Element'
import { navigation, INavigation } from '../config'
import { Space, Color, Breakpoint } from '../style'

export const Wrapper = styled.nav<{ showNavigation: boolean }>`
  grid-column: 2 / 5;
  position: relative;

  ${Breakpoint.Phone} {
    flex-direction: column;
    overflow: auto;
    display: ${({ showNavigation }) => (showNavigation ? 'flex' : 'none')};
    ${({ showNavigation }) =>
      showNavigation
        ? `height: calc(100vh - ${Space.medium} - 2 * ${Space.small});`
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
  padding: 0;
  margin-right: ${Space.small};

  ${Breakpoint.Phone} {
    margin-bottom: ${Space.medium};
  }
`

const Content = styled.div<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  background: #fff;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  ${Breakpoint.Phone} {
    position: relative;
    height: auto;
    top: inherit;
    margin-top: ${Space.medium};
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Space.medium} 0;

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
      {children[1].props.children && (
        <Content isOpen={open}>
          <ContentContainer>{children[1]}</ContentContainer>
        </Content>
      )}
    </TabElement>
  )
}

export const SideBar = () => (
  <Aside>
    <nav>Sidebar</nav>
  </Aside>
)

let toggleMobileNavigation = null

export const Navigation = ({ data = navigation }: { data?: INavigation }) => {
  const scrollContainerRef = useRef()
  const [showNavigation, toggleMobileNavigationState] = useState(false)

  toggleMobileNavigation = toggleMobileNavigationState

  useEffect(() => {
    if (scrollContainerRef.current && showNavigation) {
      disableBodyScroll(scrollContainerRef.current)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [showNavigation])

  return (
    <Wrapper ref={scrollContainerRef} showNavigation={showNavigation}>
      <List
        css={listStyles}
        elementProps={{ css: listElementStyles }}
        horizontal
      >
        {data.top.map((link) => (
          <Tab key={link.title.name}>
            <TextLink href={link.title.url}>{link.title.name}</TextLink>
            <>
              {link.links &&
                link.links.length &&
                link.links.map((secondLink) => (
                  <TextLink key={secondLink.name} href={secondLink.url}>
                    {secondLink.name}
                  </TextLink>
                ))}
            </>
          </Tab>
        ))}
      </List>
    </Wrapper>
  )
}

export const showMobileNavigation = (show) => {
  toggleMobileNavigation(show)
}
