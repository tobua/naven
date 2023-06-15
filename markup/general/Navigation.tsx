import React, {
  useState,
  HTMLAttributes,
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
  useCallback,
  DetailedHTMLProps,
  cloneElement,
} from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { naven } from '../../style'
import type { Link, OptionalLink } from '../../types'
import { createComponent } from '../../utility/component'
import List from '../element/List'
import TextLink from '../text/Link'
import Spacer from '../element/Spacer'
import Menu from '../icon/Menu'
import Close from '../icon/Close'

export interface Props {
  Component: {
    children: ReactNode
    linkActive?: (url: string) => boolean
    links?: NavigationLinks
    middle?: ReactElement
    meta?: ReactElement
  } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  Main: { show: boolean } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  TabElement: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const styles = () => ({
  Main: {
    tag: 'nav',
    main: true,
    css: {
      gridColumn: '1 / 5',
      gridRow: 2,
      zIndex: naven.layer.Navigation,
      '@phone': {
        /* Avoids grid space, while absolute children still visible. */
        display: 'contents',
        position: 'inherit',
        flexDirection: 'column',
        overflow: 'auto',
      },
      variants: {
        show: {
          true: {
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
      },
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
      // Align to right.
      gridColumn: '5 / 5',
      display: 'flex',
      justifyContent: 'flex-end',
      variants: {
        open: {
          true: {
            position: 'absolute',
            right: 0,
          },
        },
      },
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

type NavigationLinks = {
  title: Link | OptionalLink
  links?: Link[]
}[]

export default createComponent(styles)<Props>(function Navigation({ props, Sheet }) {
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

  const ToggleIcon = useCallback(() => {
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
      // @ts-ignore
      <Sheet.ToggleIconWrapper.Component css={Sheet.ToggleIconWrapper.css} open={showNavigation}>
        {showNavigation ? (
          <Close onClick={() => setShowNavigation(false)} css={iconStyles} />
        ) : (
          <Menu onClick={() => setShowNavigation(true)} css={iconStyles} />
        )}
      </Sheet.ToggleIconWrapper.Component>
    )
  }, [showNavigation])

  const Tab = useCallback(({ children: tabChildren }: { children: ReactNode }) => {
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
        {tabChildren[0]}
        {tabChildren[1].props.children && ( // @ts-ignore
          <Sheet.Content.Component css={Sheet.Content.css} type={open ? 'open' : undefined}>
            <Sheet.ContentContainer.Component css={Sheet.ContentContainer.css}>
              {tabChildren[1]}
            </Sheet.ContentContainer.Component>
          </Sheet.Content.Component>
        )}
      </Sheet.TabElement.Component>
    )
  }, [])

  return (
    <Sheet.Main.Component
      css={Sheet.Main.css}
      {...otherProps}
      show={showNavigation}
      ref={scrollContainerRef}
    >
      <ToggleIcon />
      <List
        css={{
          '@phone': {
            display: showNavigation ? 'flex' : 'none',
            flexDirection: 'column',
            gap: naven.theme.space.medium,
          },
        }}
        horizontal
      >
        {links.map((link) => (
          <Tab key={link.title.name}>
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
      {showNavigation && (
        <>
          {meta || middle ? (
            <>
              <Spacer />
              <Spacer line />
              <Spacer />
            </>
          ) : null}
          {meta && cloneElement(meta, { open: true })}
          {middle && meta ? <Spacer /> : null}
          {middle && cloneElement(middle, { open: true })}
        </>
      )}
    </Sheet.Main.Component>
  )
})
