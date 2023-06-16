import React, {
  useMemo,
  useCallback,
  ReactNode,
  Children,
  cloneElement,
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  Fragment,
} from 'react'
import type { CSS } from '@stitches/react'
import { naven, unit } from '../../style'
import type { Link as LinkType } from '../../types'
import { createComponent } from '../../utility/component'
import List from '../element/List'
import Logo from '../icon/Logo'
import { mergeStyles } from '../../utility/merge-styles'
import NavigationComponent from './Navigation'
import TextLink from '../text/Link'
import { Text } from '../text/Various'

const isElement = (element: ReactElement) =>
  element && typeof element === 'object' && Object.prototype.hasOwnProperty.call(element, 'type')

type TitleLinkProps = {
  link?: string
  children?: ReactNode
  css?: CSS
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type TitleTextProps = {
  children?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

type MetaProps = {
  links?: LinkType[]
  hideMobile?: boolean
  navigation?: boolean
  open?: boolean
  children?: ReactNode
  css?: CSS
}

// TODO add generic title component for anything on the left.
export interface Props {
  Component: {
    children:
      | ReactNode
      | (({
          Middle,
          Meta,
          TitleText,
          TitleLink,
          Navigation,
        }: {
          Middle: any
          Meta: any
          TitleText: (props: TitleTextProps) => ReactElement
          TitleLink: (props: TitleLinkProps) => ReactElement
          Navigation: any
        }) => ReactNode)
    wide?: true
  }
  TitleLink: AnchorHTMLAttributes<HTMLAnchorElement>
}

const styles = () => ({
  Main: {
    tag: 'header',
    main: true,
    css: {
      gridColumn: '3 / 4',
      display: 'grid',
      gridTemplateColumns: `auto 1fr auto 1fr auto`,
      gridTemplateRows: 'auto',
      gridRowGap: naven.theme.space.medium,
      alignItems: 'center',
      position: 'relative',
      '@phone': {
        gridTemplateColumns: 'auto',
        gap: naven.theme.space.medium,
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
      gridRow: '1',
      gridColumn: '3 / 3',
      justifySelf: 'center',
      '@phone': {
        // navigation => flex
        display: 'none',
      },
      variants: {
        open: {
          true: {
            display: 'inherit',
          },
        },
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
    extends: TextLink,
    css: {
      justifySelf: 'start',
      display: 'flex',
    },
  },
  TitleText: {
    extends: Text,
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
  let newChildren: ReactElement[] = Children.map(
    Array.isArray(children) ? children : [children],
    (child) => child
  )

  if (newChildren.length === 1 && isElement(newChildren[0]) && newChildren[0].type === Fragment) {
    newChildren = newChildren[0].props.children
  }

  const navigationChild = newChildren.find(
    (child) => isElement(child) && child.type === innerComponents.Navigation
  )
  const metaChild = newChildren.find(
    (child) => isElement(child) && child.type === innerComponents.Meta
  )
  const middle = newChildren.filter(
    (child) => isElement(child) && child.type === innerComponents.Middle
  )

  if (navigationChild && (middle.length || metaChild)) {
    const navigationProps = {
      middle: undefined,
      meta: undefined,
      key: 1234,
    }

    if (middle.length > 0) {
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

    newChildren = Children.map(newChildren, (child) => {
      if (child.type === innerComponents.Navigation) {
        return cloneElement(navigationChild, navigationProps)
      }

      return child
    })
  }

  return newChildren
}

export default createComponent(styles)<Props>(function Header({ props, Sheet }) {
  const { children, wide, ...otherProps } = props

  const TitleText = useCallback(
    ({ children: innerChildren = 'naven', ...innerProps }: TitleTextProps) => (
      <Sheet.TitleText.Component css={Sheet.TitleText.css} {...innerProps}>
        {innerChildren}
      </Sheet.TitleText.Component>
    ),
    []
  )

  const TitleLink = useCallback(
    ({
      link = '/',
      children: innerChildren = <Logo css={{ height: unit(60) }} />,
      css,
      ...innerProps
    }: TitleLinkProps) => (
      <Sheet.TitleLink.Component
        css={mergeStyles(Sheet.TitleLink.css, css)}
        href={link}
        {...innerProps}
      >
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
      open = false,
      children: innerChildren,
      css,
    }: MetaProps) => {
      const metaWrapperStyles = useMemo(
        () =>
          mergeStyles(
            {
              '@phone': { display: (!navigation && hideMobile) || open ? 'flex' : 'none' },
            },
            mergeStyles(Sheet.MetaWrapper.css, css)
          ),
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

  const innerComponents = {
    Middle: (middleProps: any) => (
      <Sheet.Middle.Component css={Sheet.Middle.css} {...middleProps} />
    ),
    Meta,
    TitleText,
    TitleLink,
    Navigation: NavigationComponent,
  }
  const processedChildren = typeof children === 'function' ? children(innerComponents) : children

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {mergeChildren(processedChildren, innerComponents, Sheet)}
    </Sheet.Main.Component>
  )
})
