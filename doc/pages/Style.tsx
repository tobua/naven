import React from 'react'
import styled from '@emotion/styled'
import { Konfi } from 'konfi'
import {
  Element,
  Horizontal,
  Color,
  Space,
  Breakpoints,
  configure,
} from 'naven'

const ColorPreview = styled.div<{ color: string; contrast?: string }>`
  background: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Space.small};
  color: ${({ contrast = Color.contrast }) => contrast};

  :hover {
    transform: scale(1.25);
    transition: transform 300ms;
  }
`

// Rerender when config was changed to reflect changes.
const handleConfig = (configuration: any) => {
  configure(configuration)
  // TODO onStyleChange
}

export const Style = ({ onStyleChange }: { onStyleChange: () => void }) => (
  <>
    <Element.Heading as="h2">naven Styles</Element.Heading>
    <Element.Heading as="h3">Colors</Element.Heading>
    <Horizontal>
      <ColorPreview color={Color.highlight}>highlight</ColorPreview>
      <ColorPreview color={Color.interact}>interact</ColorPreview>
      <ColorPreview color={Color.black}>black</ColorPreview>
      <ColorPreview color={Color.white} contrast={Color.black}>
        white
      </ColorPreview>
      <ColorPreview color={Color.warning}>warning</ColorPreview>
      <ColorPreview color={Color.error}>error</ColorPreview>
      <ColorPreview color={Color.contrast} contrast={Color.black}>
        contrast
      </ColorPreview>
    </Horizontal>
    <Element.Spacer />
    <Element.Heading as="h2">naven Configuration</Element.Heading>
    <Konfi
      data={{ colors: Color, space: Space, breakpoints: Breakpoints }}
      onChange={handleConfig}
    />
    <Element.Spacer />
  </>
)
