import React, { useState } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Heading } from './Heading'
import { Space } from '../../style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ css }) => css}
`

const Head = styled.div`
  display: flex;
  cursor: pointer;
`

const Content = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Space.small};
`

interface IAccordion {
  headers?: (string | JSX.Element)[]
  initialOpen?: number
  children: any[]
  css?: SerializedStyles
}

export const Accordion = ({
  headers,
  children,
  css,
  initialOpen = 0,
}: IAccordion) => {
  const [openIndex, setOpen] = useState<number>(initialOpen)
  return (
    <Wrapper css={css}>
      {children.map((child, index) => {
        let header = headers[index]

        if (typeof header === 'string') {
          header = (
            <Heading as="h3" noSpace>
              {header}
            </Heading>
          )
        }

        return (
          <Group key={index}>
            <Head onClick={() => setOpen(index)}>{header}</Head>
            <Content open={index === openIndex}>{child}</Content>
          </Group>
        )
      })}
    </Wrapper>
  )
}
