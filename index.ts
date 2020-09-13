import { Style, configure as _configure } from './style'

export { Content } from './markup/Content'
export { Global } from './markup/Global'
export { Navigation, SideBar } from './markup/Navigation'
export { Footer } from './markup/Footer'
export { Header, Wrapper, Image, Title } from './markup/Header'
export * as Element from './markup/Element'
export * as Size from './style/space'
export * as Breakpoint from './style/breakpoint'

export const configure = _configure
export const Color = Style.colors
