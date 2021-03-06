import styled from '@emotion/styled'
import { Konfi } from 'konfi'
import merge from 'deepmerge'
import { diff } from 'deep-object-diff'
import {
  Heading,
  Button,
  Content,
  Horizontal,
  Color,
  Space,
  Look,
  Breakpoints,
  configure,
} from 'naven'
import { getStoredStyles } from 'utility/configure'

const defaultStyles = merge(
  {},
  { colors: Color, space: Space, breakpoints: Breakpoints, look: Look }
)

const ColorPreview = styled.div<{ color: string; contrast?: string }>`
  background: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${Space.small};
  color: ${({ contrast = Color.colorContrast }) => contrast};

  :hover {
    transform: scale(1.25);
    transition: transform 300ms;
  }
`

export const Style = ({ onStyleChange }: { onStyleChange: () => void }) => (
  <Content>
    <Heading as="h2">Colors</Heading>
    <Horizontal gap={0}>
      <ColorPreview color={Color.highlight}>highlight</ColorPreview>
      <ColorPreview color={Color.interact}>interact</ColorPreview>
      <ColorPreview color={Color.black}>black</ColorPreview>
      <ColorPreview color={Color.white} contrast={Color.black}>
        white
      </ColorPreview>
      <ColorPreview color={Color.warning}>warning</ColorPreview>
      <ColorPreview color={Color.error}>error</ColorPreview>
      <ColorPreview color={Color.colorContrast} contrast={Color.black}>
        contrast
      </ColorPreview>
    </Horizontal>
    <Heading as="h2">Configuration</Heading>
    <Button
      disabled={!Object.keys(getStoredStyles()).length}
      onClick={() => {
        window.localStorage.removeItem('styles')
        configure(defaultStyles)
        onStyleChange()
      }}
    >
      Reset
    </Button>
    <Konfi
      data={merge(defaultStyles, getStoredStyles())}
      onChange={(configuration: any) => {
        // Only store the diff, to save space ;)
        const difference = diff(defaultStyles, configuration)
        // Store configuration in localstorage to be reflected on other pages as well.
        window.localStorage.setItem('styles', JSON.stringify(difference))
        // Rerender when config was changed to reflect changes.
        configure(configuration)
        onStyleChange()
      }}
    />
  </Content>
)
