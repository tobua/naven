import React from 'react'
import styled from '@emotion/styled'
import { TextLink, List } from '../component/Elements'
import { small } from '../style/space'
import { footer } from '../config'

const Wrapper = styled.footer(
  `
  padding: ${small};
  background: lightgrey;
  grid-row: 4;
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
  wrapperStyle = null,
  rowStyle = null,
}) => (
  <Wrapper css={wrapperStyle}>
    {data.rows.map((row) => (
      <Row css={rowStyle}>
        <TextLink href={row.title.url}>{row.title.name}</TextLink>
        <List>
          {row.links.map((item) => (
            <TextLink href={item.url}>{item.name}</TextLink>
          ))}
        </List>
      </Row>
    ))}
  </Wrapper>
)
