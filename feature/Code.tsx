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

const customStyleVariables = () => `.sp-stack, .sp-layout {
  --sp-space-4: ${naven.theme.space.small};
  --sp-border-radius: ${naven.theme.look.radius};
}`

const replStyle = () => <style>{customStyleVariables()}</style>

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
      <style>{`.naven-code-remove {
  background: #ffecec;
}
.naven-code-add {
  background: #dbffdb;
}

${customStyleVariables()}`}</style>
    ),
    decorators,
  }
}

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
        borderRadius: naven.theme.look.radius,
      }),
    []
  )

  const themes = useMemo(
    () => ({
      codeOnly: {
        colors: {
          surface1: naven.theme.color.gray100,
        },
        font: {
          size: naven.theme.font.sizeMedium,
        },
      },
      repl: {
        colors: {
          accent: 'black',
          surface1: naven.theme.color.gray100,
          surface2: naven.theme.color.gray300,
        },
        font: {
          size: naven.theme.font.sizeMedium,
        },
      },
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
          files={{
            [`/${entryFileFromTemplate(template)}`]: {
              code: children,
              readOnly: true,
            },
          }}
        >
          <SandpackThemeProvider theme={props.theme ?? themes.codeOnly}>
            <SandpackCodeViewer decorators={decorators} />
          </SandpackThemeProvider>
        </SandpackProvider>
      </Wrapper>
    )
  }

  return (
    <Wrapper css={css}>
      {replStyle()}
      <Sandpack template={template} theme={props.theme ?? themes.repl} {...props} />
    </Wrapper>
  )
}
