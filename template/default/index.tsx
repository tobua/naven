import { render } from 'react-dom'
import { Global, Header, Content, Footer, Heading, Paragraph } from 'naven'

render(
  <>
    <Global root="body" />
    <Header>
      <Header.Title.Text>naven Demo</Header.Title.Text>
      <Header.Navigation
        links={[
          {
            title: { name: 'Products' },
            links: [
              { name: 'Library', url: '/library' },
              { name: 'Design', url: '/design' },
            ],
          },
          {
            title: { name: 'Company' },
            links: [{ name: 'About', url: '/about' }],
          },
        ]}
      />
    </Header>
    <Content>
      <Heading>naven Demo</Heading>
      <Paragraph>Welcome home!</Paragraph>
    </Content>
    <Footer>
      <Paragraph>Created with naven</Paragraph>
    </Footer>
  </>,
  document.body
)
