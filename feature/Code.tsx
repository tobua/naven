import React, { useMemo } from 'react'
import {
  Sandpack,
  SandpackProvider,
  SandpackThemeProvider,
  SandpackCodeViewer,
} from '@codesandbox/sandpack-react'
import type { SandpackProps } from '@codesandbox/sandpack-react'
import type { CSS } from '@stitches/react'
// @ts-ignore
import { naven } from 'naven'
import '@codesandbox/sandpack-react/dist/index.css'

// Alternative without preview: https://codemirror.net/6/docs/guide
// Inspired by: https://github.com/reactjs/reactjs.org/blob/main/beta/src/components/MDX/CodeBlock/CodeBlock.tsx
// Docs: https://sandpack.codesandbox.io/docs/api/react/interfaces/SandpackProps

export default ({
  css = {},
  children,
  template = 'react',
  ...props
}: SandpackProps & { children?: string; css?: CSS }) => {
  const Wrapper = useMemo(
    () =>
      naven.styled('div', {
        alignSelf: 'normal',
        background: naven.theme.color.gray100,
        borderRadius: naven.theme.look.radius,
      }),
    []
  )

  if (typeof children === 'string') {
    return (
      <Wrapper css={css}>
        <SandpackProvider
          template={template}
          customSetup={{
            files: {
              '/App.js': {
                code: children,
                readOnly: true,
              },
            },
          }}
        >
          <SandpackThemeProvider
            theme={{
              palette: {
                defaultBackground: 'inherit',
              },
            }}
          >
            <SandpackCodeViewer />
          </SandpackThemeProvider>
        </SandpackProvider>
      </Wrapper>
    )
  }

  return (
    <Wrapper css={css}>
      <Sandpack template={template} {...props} />
    </Wrapper>
  )
}
