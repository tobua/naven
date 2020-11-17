import { IFooter } from './footer'
import { INavigation } from './navigation'

export { header, IHeader } from './header'
export { footer, IFooter } from './footer'
export { navigation, INavigation } from './navigation'

export interface IConfig {
  footer: IFooter
  navigation: INavigation
}
