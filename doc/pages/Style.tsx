import React from 'react'
import styled from '@emotion/styled'
import { Konfi } from 'konfi'
import merge from 'deepmerge'
import { diff } from 'deep-object-diff'
import {
  Element,
  Content,
  Horizontal,
  Color,
  Space,
  Breakpoints,
  configure,
} from 'naven'

const defaultStyles = { colors: Color, space: Space, breakpoints: Breakpoints }

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

const getStoredStyles = () =>
  JSON.parse(window.localStorage.getItem('styles') ?? '{}')

export const configureUserStyles = () => configure(getStoredStyles())

export const Style = ({ onStyleChange }: { onStyleChange: () => void }) => (
  <Content>
    <Element.Heading as="h2">Style</Element.Heading>
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
    <Element.Heading as="h2">Configuration</Element.Heading>
    <Konfi
      data={merge(defaultStyles, getStoredStyles(), { clone: true })}
      onChange={(configuration: any) => {
        // Only store the diff, to save space ;)
        const difference = diff(
          defaultStyles,
          merge(getStoredStyles(), configuration, { clone: true })
        )
        // Store configuration in localstorage to be reflected on other pages as well.
        window.localStorage.setItem('styles', JSON.stringify(difference))
        // Rerender when config was changed to reflect changes.
        configure(configuration)
        onStyleChange()
      }}
    />
    <Element.Spacer />
  </Content>
)
