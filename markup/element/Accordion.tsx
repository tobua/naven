import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Heading } from './Heading'
import { Space } from '../../style'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Head = styled.div`
  display: flex;
`

const Content = styled.div<{ open: boolean }>`
  display: flex;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Space.small};
`

interface IAccordion {
  titles?: string[]
  headers?: any[]
  initialOpen?: number
  children: any[]
}

export const Accordion = ({
  titles,
  headers,
  children,
  initialOpen = 0,
}: IAccordion) => {
  const [openIndex, setOpen] = useState<number>(initialOpen)
  return (
    <Wrapper>
      {children.map((child, index) => (
        <Group key={index}>
          <Head onClick={() => setOpen(index)}>
            {titles && titles.length ? (
              <Heading as="h3" noSpace>
                {titles[index]}
              </Heading>
            ) : (
              headers[index]
            )}
          </Head>
          <Content open={index === openIndex}>{child}</Content>
        </Group>
      ))}
    </Wrapper>
  )
}
