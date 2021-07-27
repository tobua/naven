import { wasser, configure as configureWasser } from 'wasser'
import { IResponsive } from './types'

export const unit = wasser

export const configure = (_responsive: IResponsive) => {
  configureWasser(_responsive)
}
