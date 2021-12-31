import React, { ReactNode, HTMLAttributes } from 'react'
import { naven } from '../../style'
import type { ComponentProps, Link, OptionalLink, ComponentStylesDefinition } from '../../types'
import { createComponent } from '../../utility/component'
import TextLink from '../text/Link'
import List from '../element/List'

export interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  type?: 'wide'
}

type Sheets = 'Main' | 'Column'

const styles: ComponentStylesDefinition<Props, Sheets> = () => ({
  Main: {
    tag: 'footer',
    main: true,
    css: {
      display: 'flex',
      gridColumn: '3 / 4',
      flexWrap: 'wrap',
      variants: {
        type: {
          wide: {
            gridColumn: '2 / 5',
          },
        },
      },
    },
  },
  Column: {
    tag: 'div',
    css: {
      flexBasis: '25%',
      '@tablet': {
        flexBasis: '50%',
      },
      '@phone': {
        flexBasis: '100%',
      },
    },
  },
})

export interface ColumnProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  children: ReactNode
  title: Link | OptionalLink
  links?: Link[]
}

const Footer = ({ Sheet, props }: ComponentProps<Sheets>) => {
  const { children, ...otherProps } = props

  // eslint-disable-next-line react/no-unstable-nested-components
  const Column = ({ links, title, ...columnProps }: ColumnProps) => {
    if (!title && !links) {
      return children
    }

    return (
      <Sheet.Column.Component css={Sheet.Column.css}>
        <TextLink bold space={naven.theme.space.medium} href={title.url}>
          {title.name}
        </TextLink>
        <List>
          {links.map((item, rowLinkIndex) => (
            <TextLink key={rowLinkIndex} href={item.url} styles={{ Main: { css: item.css } }}>
              {item.name}
            </TextLink>
          ))}
        </List>
        {columnProps.children}
      </Sheet.Column.Component>
    )
  }

  // console.log(typeof children, children)

  const processedChildren = typeof children === 'function' ? children({ Column }) : children

  return (
    <Sheet.Main.Component css={Sheet.Main.css} {...otherProps}>
      {processedChildren}
    </Sheet.Main.Component>
  )
}

export default createComponent<Props, Sheets>(styles, Footer)

// import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
// import styled from '@emotion/styled'
// import { SerializedStyles } from '@emotion/react'
// import { TextLink } from './element/Link'
// import { List } from './element/List'
// import { Space, Breakpoint } from '../style'
// import { Link, OptionalLink } from '../types'

// export interface FooterLinkRow {
//   title: Link | OptionalLink
//   links?: Link[]
//   children?: JSX.Element
//   css?: SerializedStyles
//   listCss?: SerializedStyles
// }

// const Column = ({ links, title, css, listCss, children }: FooterLinkRow) => {
//   if (!title && !links) {
//     return children
//   }

//   return (
//     <ColumnWrapper css={css}>
//       <TextLink bold space={Space.medium} href={title.url} css={title.css}>
//         {title.name}
//       </TextLink>
//       <List css={listCss}>
//         {links.map((item, rowLinkIndex) => (
//           <TextLink key={rowLinkIndex} href={item.url} css={item.css}>
//             {item.name}
//           </TextLink>
//         ))}
//       </List>
//       {children}
//     </ColumnWrapper>
//   )
// }

// const Wrapper = styled.footer<{ css?: SerializedStyles; wide: boolean }>`
//   grid-column: ${({ wide }) => (wide ? '2 / 5' : '3 / 4')};
//   display: flex;
//   flex-wrap: wrap;
//   ${({ css }) => css}
// `

// export const Footer = ({
//   css,
//   wide = false,
//   children,
//   ...props
// }: {
//   css?: SerializedStyles
//   wide?: boolean
//   children?: ReactNode | ReactNode[]
// } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
//   <Wrapper css={css} wide={wide} {...props}>
//     {children}
//   </Wrapper>
// )

// Footer.Column = Column
