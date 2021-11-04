import React, { useState, useEffect, useRef, ReactElement, ReactNode } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { TextLink } from '../element/Link'
import { List } from '../element/List'
import { Space, Color, Breakpoint, Layer } from '../../style'
import { Menu } from '../../icon/Menu'
import { Close } from '../../icon/Close'
import { Spacer } from '../element/Spacer'
import { Link, OptionalLink } from '../../types'

export const Wrapper = styled.nav<{
  showNavigation: boolean
  css?: SerializedStyles
}>`
  grid-column: 1 / 5;
  grid-row: 2;
  z-index: ${Layer.Navigation};

  ${Breakpoint.Phone} {
    /* Avoids grid space, while absolute children still visible. */
    display: contents;
    position: inherit;
    flex-direction: column;
    overflow: auto;

    ${({ showNavigation }) =>
      showNavigation
        ? `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: ${Space.medium};
        display: flex;
        background: ${Color.background.var};
        height: calc(100vh - ${Space.medium} - 2 * ${Space.small});`
        : ''}
  }

  ${({ css }) => css}
`

const listStyles = (visible: boolean) => cssStyles`
  ${Breakpoint.Phone} {
    display: ${visible ? 'flex' : 'none'};
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
  background: ${Color.background.var};
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

type NavigationLinks = {
  title: Link | OptionalLink
  links?: Link[]
}[]

const ToggleIcon = ({
  css,
  links,
  showNavigation,
  setShowNavigation,
}: {
  css?: SerializedStyles
  links?: NavigationLinks
  showNavigation: boolean
  setShowNavigation: (value: boolean) => void
}) => {
  if (!links || !Array.isArray(links) || links.length < 1) {
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
        <Close
          color={Color.backgroundContrast.var}
          onClick={() => setShowNavigation(false)}
          css={iconStyles}
        />
      ) : (
        <Menu
          color={Color.backgroundContrast.var}
          onClick={() => setShowNavigation(true)}
          css={iconStyles}
        />
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
      color: ${Color.interact.var};
    }
  }
  ${({ css }) => css}
`

export const Tab = ({ css, children }: { css?: SerializedStyles; children: ReactElement[] }) => {
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

export interface Props {
  linkActive?: (url: string) => boolean
  links?: NavigationLinks
  middle?: ReactNode
  meta?: ReactNode
  css?: SerializedStyles
  listCss?: SerializedStyles
  tabCss?: SerializedStyles
  toggleCss?: SerializedStyles
}

export const Navigation = ({
  links = [],
  linkActive = () => false,
  middle,
  meta,
  css,
  listCss,
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
        links={links}
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
      />
      <List
        space={0}
        css={listStyles(showNavigation)}
        elementProps={{ css: listElementStyles }}
        horizontal
      >
        {links.map((link) => (
          <Tab key={link.title.name} css={tabCss}>
            <TextLink href={link.title.url} bold={showNavigation || linkActive(link.title.url)}>
              {link.title.name}
            </TextLink>
            <List space={0} css={listCss}>
              {link.links &&
                link.links.length > 0 &&
                link.links.map((secondLink) => (
                  <TextLink key={secondLink.name} href={secondLink.url}>
                    {secondLink.name}
                  </TextLink>
                ))}
            </List>
          </Tab>
        ))}
      </List>
      {(showNavigation && (
        <>
          {meta || middle ? (
            <>
              <Spacer line />
              <Spacer />
            </>
          ) : null}
          {meta}
          {middle && meta ? <Spacer /> : null}
          {middle}
        </>
      )) ||
        null}
    </Wrapper>
  )
}
