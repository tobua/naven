import { useState } from 'react'
import { Konfi } from 'konfi'
import merge from 'deepmerge'
import { diff } from 'deep-object-diff'
import { Heading, Button, Content, Horizontal, defaultConfiguration, globalTheme } from 'naven'
import { getStoredStyles, styled, theme } from 'configuration'

const defaultStyles = defaultConfiguration.theme

const ColorPreview = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.space.small,
  borderRadius: theme.look.radius,
  '&:hover': {
    transform: 'scale(1.25)',
    transition: 'transform 300ms',
  },
})

export const Style = () => {
  const [hasChanges, setHasChanges] = useState(!!Object.keys(getStoredStyles()).length)

  return (
    <Content>
      <Heading as="h2">Colors</Heading>
      <Horizontal>
        <ColorPreview css={{ background: theme.color.highlight, color: theme.color.colorContrast }}>
          highlight
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.interact, color: theme.color.colorContrast }}>
          interact
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.black, color: theme.color.colorContrast }}>
          black
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.white, color: theme.color.black }}>
          white
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.warning, color: theme.color.colorContrast }}>
          warning
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.error, color: theme.color.colorContrast }}>
          error
        </ColorPreview>
        <ColorPreview css={{ background: theme.color.colorContrast, color: theme.color.black }}>
          colorContrast
        </ColorPreview>
        <ColorPreview
          css={{ background: theme.color.backgroundContrast, color: theme.color.colorContrast }}
        >
          backgroundContrast
        </ColorPreview>
      </Horizontal>
      <Heading as="h2">Configuration</Heading>
      <Button
        disabled={!hasChanges}
        onClick={() => {
          window.localStorage.removeItem('styles')
          globalTheme({})
          setHasChanges(false)
        }}
      >
        Reset
      </Button>
      <Konfi
        data={merge(defaultStyles, getStoredStyles())}
        onChange={(configuration: any) => {
          // Only store the diff, to save space ;)
          const difference = diff(defaultStyles, configuration)
          const changes = merge(getStoredStyles(), difference)
          // Store configuration in localstorage to be reflected on other pages as well.
          window.localStorage.setItem('styles', JSON.stringify(changes))
          // Rerender when config was changed to reflect changes.
          globalTheme(changes as object)
          setHasChanges(!!Object.keys(changes).length)
        }}
      />
    </Content>
  )
}
