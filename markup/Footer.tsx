import React from 'react'
import styled from '@emotion/styled'
import { TextLink, List } from './Element'
import { Space } from '../style'
import { footer, IFooter } from '../config'
import { SerializedStyles } from '@emotion/react'

const Wrapper = styled.footer(
  `
  padding: 0 ${Space.small};
  grid-column: 3 / 4;

  display: flex;
  flex-wrap: wrap;
`,
  (props) => props.css
)

const Row = styled.div(
  `
  flex-basis: 25%;
`,
  (props) => props.css
)

export const Footer = ({
  data = footer,
  wrapperStyle,
  rowStyle,
  children,
}: {
  data?: IFooter
  wrapperStyle?: SerializedStyles
  rowStyle?: SerializedStyles
  children?: React.ReactNode
}) => {
  if (children) {
    return <Wrapper css={wrapperStyle}>{children}</Wrapper>
  }

  return (
    <Wrapper css={wrapperStyle}>
      {data.rows.map((row, index) => (
        <Row key={index} css={rowStyle}>
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