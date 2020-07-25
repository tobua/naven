type Link = {
  name: string
  url: string
}

type OptionalLink = {
  name: string
  url?: string
}

export interface IFooter {
  rows: {
    title: Link | OptionalLink
    links: Link[]
  }[]
}

export const footer: IFooter = {
  rows: [
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
  ],
}
