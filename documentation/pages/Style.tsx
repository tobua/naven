import { Konfi } from 'konfi'
import merge from 'deepmerge'
import { diff } from 'deep-object-diff'
import {
  Heading,
  Button,
  Content,
  Horizontal,
} from 'naven'
import { getStoredStyles, styled, theme } from 'configuration'

const defaultStyles = merge(
  {},
  { colors: Color, space: Space, breakpoints: Breakpoints, look: Look }
)

const ColorPreview = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.space.small,
  '&:hover': {
    transform: 'scale(1.25)',
    transition: 'transform 300ms'
  }
})

export const Style = ({ onStyleChange }: { onStyleChange: () => void }) => (
  <Content>
    <Heading as="h2">Colors</Heading>
    <Horizontal gap={0}>
      <ColorPreview css={{ background: theme.color.highlight, color: theme.color.colorContrast}}>highlight</ColorPreview>
      <ColorPreview css={{ background: theme.color.interact, color: theme.color.colorContrast}} color={Color..var}>interact</ColorPreview>
      <ColorPreview css={{ background: theme.color.black, color: theme.color.colorContrast}} color={Color..var}>black</ColorPreview>
      <ColorPreview css={{ background: theme.color.white, color: theme.color.black}}>
        white
      </ColorPreview>
      <ColorPreview css={{ background: theme.color.warning, color: theme.color.colorContrast}}>warning</ColorPreview>
      <ColorPreview css={{ background: theme.color.error, color: theme.color.colorContrast}}>error</ColorPreview>
      <ColorPreview css={{ background: theme.color.colorContrast, color: theme.color.black}}>
        contrast
      </ColorPreview>
    </Horizontal>
    <Heading as="h2">Configuration</Heading>
    <Button
      disabled={!Object.keys(getStoredStyles()).length}
      onClick={() => {
        window.localStorage.removeItem('styles')
        // @ts-ignore
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
