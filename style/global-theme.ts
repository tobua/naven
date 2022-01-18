import { naven, responsifyConfiguration } from './index'

let currentTheme: string

export const globalTheme = <T extends {}>(configuration: T) => {
  if (!Object.keys(configuration).length) {
    document.body.classList.remove(currentTheme)
    return
  }

  const responsiveConfiguration = responsifyConfiguration({ theme: configuration })

  const themeClass = naven.createTheme(responsiveConfiguration.theme)

  if (currentTheme) {
    document.body.classList.remove(currentTheme)
  }

  document.body.classList.add(themeClass)

  currentTheme = themeClass
}
