import React, {
  useMemo,
  useCallback,
  ReactNode,
  HTMLAttributes,
  Children,
  cloneElement,
} from 'react'
import type { CSS } from '@stitches/react'
import { naven, unit } from '../../style'
import type { ComponentProps, Link as LinkType, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import TextLink from '../text/Link'
import List from '../element/List'
import Logo from '../icon/Logo'
import { mergeStyles } from '../../utility/merge-styles'
import Navigation from './Navigation'
import { linkStyles, textStyles } from '../element/Base'

export interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  wide?: true
}

type Sheets = 'Wrapper' | 'Middle' | 'MetaWrapper' | 'TitleLink' | 'TitleText'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Wrapper: {
    tag: 'header',
    main: true,
    css: {
      gridColumn: '3 / 4',
      display: 'grid',
      gridTemplateColumns: `auto 1fr auto 1fr auto`,
      gridTemplateRows: `auto auto`,
      gridRowGap: naven.theme.space.medium,
      alignItems: 'center',
      position: 'relative',
      '@phone': {
        gridTemplateColumns: 'auto',
        gap: naven.theme.space.medium,
        /* TODO only if navigation links available */
        paddingRight: naven.theme.space.large,
      },
    },
    props: (css, props) => {
      if (props.wide) {
        css.gridColumn = '2 / 5'
      }
    },
  },
  Middle: {
    tag: 'aside',
    css: {
      gridColumn: '3 / 3',
      justifySelf: 'center',
      '@phone': {
        // navigation => flex
        display: 'none',
      },
    },
  },
  MetaWrapper: {
    tag: 'nav',
    css: {
      gridColumn: '5 / 5',
      justifySelf: 'end',
      '@phone': {
        // !navigation && hideMobile -> none
        display: 'flex',
        gridRow: 2,
        justifySelf: 'start',
        gridColumn: '1 / 5',
      },
    },
  },
  TitleLink: {
    tag: 'a',
    extends: [linkStyles()],
    css: {
      justifySelf: 'start',
      display: 'flex',
    },
  },
  TitleText: {
    tag: 'p',
    // TODO extends shouldn't take precedence over css.
    extends: [textStyles()],
    css: {
      alignSelf: 'center',
      fontSize: naven.theme.font.sizeLarge,
      fontWeight: naven.theme.font.weightBold,
      '@phone': {
        alignSelf: 'inherit',
      },
    },
  },
})

const mergeChildren = (children: any, innerComponents: any, Sheet: any) => {
  // Create a copy, so we can reassign.
  const newChildren = Children.map(
    Array.isArray(children) ? children : [children],
    (child) => child
  ).filter((child) => child.type)
  // TODO type check fails when extended, perform deep check.
  const navigationIndex = newChildren.findIndex(
    (child) => child.type === innerComponents.Navigation
  )
  const metaChild = newChildren.find((child) => child.type === innerComponents.Meta)
  const middle = newChildren.filter((child) => child.type === innerComponents.Middle)

  if (navigationIndex !== -1 && (middle.length || metaChild)) {
    const navigationProps = {
      middle: undefined,
      meta: undefined,
      key: 1234,
    }

    if (middle[0]) {
      navigationProps.middle = cloneElement(middle[0], {
        navigation: true,
      })
    }

    if (metaChild) {
      navigationProps.meta = cloneElement(metaChild, {
        navigation: true,
        Sheet,
      })
    }

    newChildren[navigationIndex] = cloneElement(children[navigationIndex], navigationProps)
  }

  return newChildren
}

const Header = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, wide, ...otherProps } = props

  const TitleText = useCallback(
    ({ children: innerChildren = 'naven' }: ComponentProps<Sheets> & { children?: string }) => (
      <Sheet.TitleText.Component css={Sheet.TitleText.css}>
        {innerChildren}
      </Sheet.TitleText.Component>
    ),
    []
  )

  const TitleLink = useCallback(
    ({
      link = '/',
      children: innerChildren = <Logo css={{ height: unit(60) }} />,
    }: {
      link?: string
      children?: ReactNode
    }) => (
      // @ts-ignore
      <Sheet.TitleLink.Component css={Sheet.TitleLink.css} href={link}>
        {innerChildren}
      </Sheet.TitleLink.Component>
    ),
    []
  )

  const Meta = useCallback(
    ({
      links = [],
      hideMobile = false,
      navigation = false,
      children: innerChildren,
    }: ComponentProps<Sheets> & {
      links?: LinkType[]
      hideMobile?: boolean
      navigation?: boolean
      children?: ReactNode
    }) => {
      const metaWrapperStyles = useMemo(
        () =>
          mergeStyles(Sheet.MetaWrapper.css, {
            '@phone': { display: !navigation && hideMobile ? 'flex' : 'none' },
          }),
        [hideMobile, navigation]
      ) as CSS

      if (innerChildren) {
        return (
          <Sheet.MetaWrapper.Component css={metaWrapperStyles}>
            {innerChildren}
          </Sheet.MetaWrapper.Component>
        )
      }

      if (!Array.isArray(links) || links.length < 1) {
        return null
      }

      return (
        <Sheet.MetaWrapper.Component css={metaWrapperStyles}>
          <List space={0} horizontal>
            {links.map((currentLink) => (
              <TextLink key={currentLink.url} href={currentLink.url}>
                {currentLink.name}
              </TextLink>
            ))}
          </List>
        </Sheet.MetaWrapper.Component>
      )
    },
    []
  )

  const innerComponents = { Middle: Sheet.Middle, Meta, TitleText, TitleLink, Navigation }
  // TODO also pass navigation component
  const processedChildren = typeof children === 'function' ? children(innerComponents) : children

  return (
    <Sheet.Wrapper.Component css={Sheet.Wrapper.css} {...otherProps}>
      {mergeChildren(processedChildren, innerComponents, Sheet)}
    </Sheet.Wrapper.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Header)
