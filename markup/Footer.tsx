import React from 'react'
import styled from '@emotion/styled'
import { css as cssStyles, SerializedStyles } from '@emotion/react'
import { TextLink, List } from './Element'
import { Space, Color, Breakpoint } from '../style'
import { footer, IFooter } from '../config'

const Wrapper = styled.footer`
  grid-column: 3 / 4;
  display: flex;
  flex-wrap: wrap;
  ${({ css }) => css}
`

const Row = styled.div`
  flex-basis: 25%;

  ${Breakpoint.Tablet} {
    flex-basis: 50%;
  }

  ${Breakpoint.Phone} {
    flex-basis: 100%;
  }

  ${({ css }) => css}
`

const firstLevelLinkStyles = cssStyles`
  display: block;
  border-bottom: 1px solid ${Color.Gray[300]};
  margin-bottom: ${Space.small};
  padding-bottom: ${Space.small}; 
  margin-right: ${Space.medium};
`

export const Footer = ({
  data = footer,
  css,
  rowCss,
  children,
}: {
  data?: IFooter
  css?: SerializedStyles
  rowCss?: SerializedStyles
  children?: React.ReactNode
}) => {
  if (children) {
    return <Wrapper css={css}>{children}</Wrapper>
  }

  return (
    <Wrapper css={css}>
      {data.rows.map((row, index) => (
        <Row key={index} css={rowCss}>
          <TextLink bold href={row.title.url} css={firstLevelLinkStyles}>
            {row.title.name}
          </TextLink>
          <List css={cssStyles`margin-left: ${Space.medium};`}>
            {row.links.map((item, rowLinkIndex) => (
              <TextLink key={rowLinkIndex} href={item.url}>
                {item.name}
              </TextLink>
            ))}
          </List>
        </Row>
      ))}
    </Wrapper>
  )
}
