import { Link } from '.'

export interface IHeader {
  links: Link[]
}

export const header: IHeader = {
  links: [
    {
      name: 'HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS',
      url: 'https://sass-lang.com/',
    },
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
  ],
}
