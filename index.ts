import Close from './markup/icon/Close'
import Loader from './markup/icon/Loader'
import Logo from './markup/icon/Logo'

export * from './style/index'
export { createComponent } from './utility/component'
// Element
export { default as Accordion } from './markup/element/Accordion'
export { default as Alert } from './markup/element/Alert'
export { default as Anchor } from './markup/element/Anchor'
export { default as Badge } from './markup/element/Badge'
export { default as Button } from './markup/element/Button'
export { default as Checkbox } from './markup/element/Checkbox'
export { default as Image } from './markup/element/Image'
export { default as Input } from './markup/element/Input'
export { default as Lazy } from './markup/element/Lazy'
export { default as Link } from './markup/element/Link'
export { default as List } from './markup/element/List'
export { default as Loader } from './markup/element/Loader'
export { default as Notification, addNotification } from './markup/element/Notification'
export { default as Popup } from './markup/element/Popup'
export { default as Spacer } from './markup/element/Spacer'
export { default as Table } from './markup/element/Table'
export { default as Tabs } from './markup/element/Tabs'
export { default as Text } from './markup/text/Text'
export { default as TextArea } from './markup/element/TextArea'
// General
export { default as Footer } from './markup/general/Footer'
export { default as Header } from './markup/general/Header'
export { default as Navigation } from './markup/general/Navigation'
// Icon
export const Icon = {
  Close,
  Loader,
  Logo,
}
// Layout
export { default as Content } from './markup/layout/Content'
export { default as Horizontal } from './markup/layout/Horizontal'
export { default as Narrow } from './markup/layout/Narrow'
export { default as Sidebar } from './markup/layout/Sidebar'
export { default as Vertical } from './markup/layout/Vertical'
export { default as Wide } from './markup/layout/Wide'
// Text
export { default as Heading } from './markup/text/Heading'
export { default as InlineCode } from './markup/text/InlineCode'
export { default as TextLink } from './markup/text/Link'
export {
  Inline,
  Important,
  Bold,
  Paragraph,
  Italic,
  Quote,
  Citation,
  ShortQuotation,
  Small,
  Abbreviation,
  Definition,
} from './markup/text/Various'
