import { Link, OptionalLink } from '.'

export interface INavigation {
  top: {
    title: Link | OptionalLink
    links: Link[]
  }[]
}

export const navigation: INavigation = {
  top: [
    {
      title: {
        name: 'JSX',
      },
      links: [
        {
          name: 'React',
          url: 'https://reactjs.org',
        },
      ],
    },
    {
      title: {
        name: 'CSS-in-JS',
      },
      links: [
        {
          name: 'Emotion',
          url: 'https://emotion.sh',
        },
      ],
    },
    {
      title: {
        name: 'TypeScript',
      },
      links: [
        {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org',
        },
        {
          name: 'Documentation',
          url: 'https://www.typescriptlang.org/docs/home.html',
        },
      ],
    },
    {
      title: {
        name: 'Components',
      },
      links: [
        {
          name: 'Layout',
          url: '/layout',
        },
        {
          name: 'Elements',
          url: '/elements',
        },
      ],
    },
  ],
}
