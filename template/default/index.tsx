import { render } from 'react-dom'
import { Header, Content, Footer, Heading, Paragraph } from 'naven'
import './configuration'

render(
  <>
    <Header>
      {({ TitleText, Navigation }) => (
        <>
          <TitleText>naven Demo</TitleText>
          <Navigation
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
        </>
      )}
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
