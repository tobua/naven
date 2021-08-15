import { SerializedStyles } from '@emotion/react'

export type Link = {
  name: string
  url: string
  css?: SerializedStyles
}

export type OptionalLink = {
  name: string
  url?: string
  css?: SerializedStyles
}
