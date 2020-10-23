import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
`

interface IAccordion {
  value?: string
}

export const Accordion = ({ value = 'test' }: IAccordion) => <Wrapper>Accordion{value}</Wrapper>
