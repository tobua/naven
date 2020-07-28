import { footer as _footer, IFooter } from './footer'
import { navigation as _navigation, INavigation } from './navigation'

export type Link = {
  name: string
  url: string
}

export type OptionalLink = {
  name: string
  url?: string
}

export interface IConfig {
  footer: IFooter
  navigation: INavigation
}

export const footer = _footer
export const navigation = _navigation
