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

type Diff = { add?: number[]; remove?: number[] }

const entryFileFromTemplate = (template: string) => {
  if (template === 'vanilla') {
    return 'src/index.js'
  }

  if (template === 'vanilla-ts') {
    return 'src/index.ts'
  }

  if (template === 'react-ts') {
    return 'App.tsx'
  }

  return 'App.js'
}

const getDecoratorsFromDiff = (diff?: Diff) => {
  if (!diff || (!diff.add.length && !diff.remove.length)) {
    return {}
  }

  let decorators = []

  if (diff.remove.length) {
    decorators = decorators.concat(
      diff.remove.map((lineNumber) => ({
        line: lineNumber,
        className: 'naven-code-remove',
      }))
    )
  }

  if (diff.add.length) {
    decorators = decorators.concat(
      diff.add.map((lineNumber) => ({
        line: lineNumber,
        className: 'naven-code-add',
      }))
    )
  }

  // Line numbers have to be sorted.
  decorators = decorators.sort((first, second) => (first.line > second.line ? 1 : -1))

  return {
    style: (
      <style>
        {`.naven-code-remove {
      background: #ffecec;
    }
    .naven-code-add {
      background: #dbffdb;
    }`}
      </style>
    ),
    decorators,
  }
}

// Alternative without preview: https://codemirror.net/6/docs/guide
// Inspired by: https://github.com/reactjs/reactjs.org/blob/main/beta/src/components/MDX/CodeBlock/CodeBlock.tsx
// Docs: https://sandpack.codesandbox.io/docs/api/react/interfaces/SandpackProps

export default ({
  css = {},
  children,
  template = 'react',
  diff,
  ...props
}: SandpackProps & { children?: string; css?: CSS; diff?: Diff }) => {
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
    const { decorators, style } = getDecoratorsFromDiff(diff)
    return (
      <Wrapper css={css}>
        {style}
        <SandpackProvider
          template={template}
          customSetup={{
            files: {
              [`/${entryFileFromTemplate(template)}`]: {
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
            <SandpackCodeViewer decorators={decorators} />
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
