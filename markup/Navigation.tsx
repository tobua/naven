import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { TextLink } from './element/Link'
import { List } from './element/List'
import { navigation, INavigation } from '../config'
import { Space, Color, Breakpoint, Layer } from '../style'
import { Menu } from '../icon/Menu'
import { Close } from '../icon/Close'

export const Wrapper = styled.nav<{
  showNavigation: boolean
  css?: SerializedStyles
}>`
  grid-column: 2 / 5;
  position: relative;
  z-index: ${Layer.Navigation};

  ${Breakpoint.Phone} {
    display: ${({ showNavigation }) =>
      showNavigation
        ? 'flex'
        : 'contents'}; /* Avoids grid space, while absolute children still visible. */
    position: inherit;
    flex-direction: column;
    overflow: auto;
    ${({ showNavigation }) =>
      showNavigation
        ? `height: calc(100vh - ${Space.medium} - 2 * ${Space.small});`
        : ''}
  }

  ${({ css }) => css}
`

export const Aside = styled.aside`
  grid-column: 2 / 3;
`

const listStyles = (visible: boolean) => cssStyles`
  ${Breakpoint.Phone} {
    display: ${visible ? 'flex' : 'none'};
    flex: 1;
    flex-direction: column;
  }
`

const listElementStyles = cssStyles`
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

const ToggleIconWrapper = styled.div<{ css?: SerializedStyles }>`
  display: flex;
  position: absolute;
  top: ${Space.small};
  right: ${Space.small};

  ${({ css }) => css}
`

const ToggleIcon = ({
  css,
  data,
  showNavigation,
  setShowNavigation,
}: {
  css?: SerializedStyles
  data?: INavigation
  showNavigation: boolean
  setShowNavigation: (value: boolean) => void
}) => {
  if (!data || !Array.isArray(data.top) || data.top.length < 1) {
    return null
  }

  const iconStyles = cssStyles`
    cursor: pointer;
    width: ${Space.medium};
    height: ${Space.medium};
    display: none;

    ${Breakpoint.Phone} {
      display: flex;
    }
  `

  return (
    <ToggleIconWrapper css={css}>
      {showNavigation ? (
        <Close onClick={() => setShowNavigation(false)} css={iconStyles} />
      ) : (
        <Menu onClick={() => setShowNavigation(true)} css={iconStyles} />
      )}
    </ToggleIconWrapper>
  )
}

const TabElement = styled.div<{ css?: SerializedStyles }>`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: none;

    & > a {
      color: ${Color.interact};
    }
  }
  ${({ css }) => css}
`

export const Tab = ({
  css,
  children,
}: {
  css?: SerializedStyles
  children: ReactElement[]
}) => {
  const [open, setOpen] = useState(false)

  return (
    <TabElement
      css={css}
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

interface Props {
  linkActive?: (url: string) => boolean
  data?: INavigation
  css?: SerializedStyles
  tabCss?: SerializedStyles
  toggleCss?: SerializedStyles
}

export const Navigation = ({
  data = navigation,
  linkActive = () => false,
  css,
  tabCss,
  toggleCss,
}: Props) => {
  const scrollContainerRef = useRef()
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    if (scrollContainerRef.current && showNavigation) {
      disableBodyScroll(scrollContainerRef.current)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [showNavigation])

  return (
    <Wrapper ref={scrollContainerRef} showNavigation={showNavigation} css={css}>
      <ToggleIcon
        css={toggleCss}
        data={data}
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
      />
      <List
        space={0}
        css={listStyles(showNavigation)}
        elementProps={{ css: listElementStyles }}
        horizontal
      >
        {data.top.map((link) => (
          <Tab key={link.title.name} css={tabCss}>
            <TextLink href={link.title.url} bold={linkActive(link.title.url)}>
              {link.title.name}
            </TextLink>
            <>
              {link.links &&
                link.links.length > 0 &&
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
