import React, { useState, HTMLAttributes, useEffect, useRef, ReactNode } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { naven, Layer } from '../../style'
import type { ComponentProps, Link, OptionalLink, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import List from '../element/List'
import TextLink from '../text/Link'
import Spacer from '../element/Spacer'
import Menu from '../icon/Menu'
import Close from '../icon/Close'
import { mergeStyles } from '../../utility/merge-styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  linkActive?: (url: string) => boolean
  links?: NavigationLinks
  middle?: ReactNode
  meta?: ReactNode
}

type Sheets = 'Wrapper' | 'Content' | 'ContentContainer' | 'ToggleIconWrapper' | 'TabElement'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'nav',
    main: true,
    css: {
      gridColumn: '1 / 5',
      gridRow: 2,
      zIndex: Layer.Navigation,

      '@phone': {
        /* Avoids grid space, while absolute children still visible. */
        display: 'contents',
        position: 'inherit',
        flexDirection: 'column',
        overflow: 'auto',
      },
    },
    show: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: naven.theme.space.medium,
      display: 'flex',
      background: naven.theme.color.background,
      height: `calc(100vh - ${naven.theme.space.medium} - 2 * ${naven.theme.space.small})`,
    },
  },
  Content: {
    tag: 'div',
    css: {
      height: 0,
      background: naven.theme.color.background,
      overflow: 'hidden',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      '@phone': {
        position: 'relative',
        height: 'auto',
        top: 'inherit',
        marginTop: naven.theme.space.medium,
      },
      variants: {
        type: {
          open: {
            height: 'auto',
          },
        },
      },
    },
  },
  ContentContainer: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'column',
      padding: `${naven.theme.space.medium} 0`,
      '@phone': {
        padding: 0,
      },
    },
  },
  ToggleIconWrapper: {
    tag: 'div',
    css: {
      display: 'flex',
      position: 'absolute',
      top: naven.theme.space.small,
      right: naven.theme.space.small,
    },
  },
  TabElement: {
    tag: 'div',
    css: {
      display: 'flex',
      flexDirection: 'column',
      '&:focus': {
        outline: 'none',
        '& > a': {
          color: naven.theme.color.interact,
        },
      },
    },
  },
})

const ToggleIcon = ({
  Sheet,
  props,
  showNavigation,
  setShowNavigation,
}: ComponentProps<Sheets> & {
  showNavigation: boolean
  setShowNavigation: (value: boolean) => void
}) => {
  const { links } = props
  if (!links || !Array.isArray(links) || links.length < 1) {
    return null
  }

  const iconStyles = {
    cursor: 'pointer',
    width: naven.theme.space.medium,
    height: naven.theme.space.medium,
    display: 'none',
    '@phone': {
      display: 'flex',
    },
  }

  return (
    <Sheet.ToggleIconWrapper.Component css={Sheet.ToggleIconWrapper.css}>
      {showNavigation ? (
        <Close onClick={() => setShowNavigation(false)} css={iconStyles} />
      ) : (
        <Menu onClick={() => setShowNavigation(true)} css={iconStyles} />
      )}
    </Sheet.ToggleIconWrapper.Component>
  )
}

const listElementStyles = () => ({
  padding: 0,
  marginRight: naven.theme.space.small,
  '@phone': {
    marginBottom: naven.theme.space.medium,
  },
})

const listStyles = (visible: boolean) => ({
  '@phone': {
    display: visible ? 'flex' : 'none',
    flexDirection: 'column',
  },
})

export const Tab = ({ Sheet, children }: ComponentProps<Sheets> & { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet.TabElement.Component
      css={Sheet.TabElement.css}
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onFocus={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={() => setOpen(false)}
    >
      {children[0]}
      {children[1].props.children && ( // @ts-ignore
        <Sheet.Content.Component css={Sheet.Content.css} type={open ? 'open' : undefined}>
          <Sheet.ContentContainer.Component css={Sheet.ContentContainer.css}>
            {children[1]}
          </Sheet.ContentContainer.Component>
        </Sheet.Content.Component>
      )}
    </Sheet.TabElement.Component>
  )
}

type NavigationLinks = {
  title: Link | OptionalLink
  links?: Link[]
}[]

const Navigation = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, links = [], linkActive = () => false, meta, middle, ...otherProps } = props
  const scrollContainerRef = useRef()
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    if (scrollContainerRef.current && showNavigation) {
      disableBodyScroll(scrollContainerRef.current)
    } else {
      clearAllBodyScrollLocks()
    }
  }, [showNavigation])

  // @ts-ignore
  const wrapperStyles = mergeStyles(Sheet.Wrapper.css, showNavigation ? Sheet.Wrapper.show : {})

  return (
    <Sheet.Wrapper.Component css={wrapperStyles} {...otherProps} ref={scrollContainerRef}>
      <ToggleIcon
        Sheet={Sheet}
        props={props}
        showNavigation={showNavigation}
        setShowNavigation={setShowNavigation}
      />
      <List
        space={0}
        // TODO dynamic styles
        // css={listStyles(showNavigation)}
        // elementProps={{ css: listElementStyles() }}
        horizontal
      >
        {links.map((link) => (
          <Tab key={link.title.name} Sheet={Sheet} props={props}>
            <TextLink href={link.title.url} bold={showNavigation || linkActive(link.title.url)}>
              {link.title.name}
            </TextLink>
            <List space={0}>
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
              <Spacer type="line" />
              <Spacer />
            </>
          ) : null}
          {meta}
          {middle && meta ? <Spacer /> : null}
          {middle}
        </>
      )) ||
        null}
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Navigation)
