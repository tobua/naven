import React, { useState, ReactNode } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { Heading } from './Heading'
import { Space, spaceProp } from '../../style'

const Wrapper = styled.div<{ css?: SerializedStyles; space?: string | number }>`
  display: flex;
  flex-direction: column;
  ${spaceProp}
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
  headers?: (string | ReactNode)[]
  initialOpen?: number
  children: any[]
  css?: SerializedStyles
  space?: string | number
}

export const Accordion = ({ headers, children, css, space, initialOpen = 0 }: IAccordion) => {
  const [openIndex, setOpen] = useState<number>(initialOpen)
  return (
    <Wrapper css={css} space={space}>
      {children.map((child, index) => {
        let header = headers[index]

        if (typeof header === 'string') {
          header = (
            <Heading as="h3" space={0}>
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
