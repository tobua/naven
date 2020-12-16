import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { TextLink, List } from './Element'
import { Space } from '../style'
import { footer, IFooter } from '../config'

const Wrapper = styled.footer`
  padding: 0 ${Space.small};
  grid-column: 3 / 4;
  display: flex;
  flex-wrap: wrap;
  ${({ css }) => css}
`

const Row = styled.div`
  flex-basis: 25%;
  ${({ css }) => css}
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
          <TextLink href={row.title.url}>{row.title.name}</TextLink>
          <List>
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
