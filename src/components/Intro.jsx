import React from 'react'
import styled from 'styled-components/macro'
import { withTheme } from 'styled-components'

import Text from './Text'

const Intro = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const H1 = styled.h1`
 margin: 0 5px;
 `

const Line = withTheme(styled.div`
  height: 20px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
 `)

const Footer = styled.div`
  display: flex;
  align-items: center;
`

const Github = styled.div`
  margin-bottom: -4px;
`

const A = withTheme(styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`)

const Img = styled.img`
  height: 30px;
  width: auto;
`

const Inspiration = styled.div`
  margin-bottom: 6px;
`

const InspirationText = withTheme(styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  margin-bottom: -5px;
`)

const Separator = styled.div`
  :before {
    content: "|";
    margin: 0 10px;
  }
`

export default ({ offset }) => (
  <Intro size={offset}>
    <Header>
      <Heading>
        <H1>
          if a year were
        </H1>
        <H1>
          only a pixel.
        </H1>
      </Heading>
      <h3>
        a showcase of evolutionary time.
      </h3>
    </Header>
    <Main>
      <Section>
        <Text>if a year were compressed to the width of this line</Text>
        <Line />
        <Text>what does the scale of human evolution look like?</Text>
      </Section>
      <Section>
        <Text>
          scroll right to explore ---&gt;
        </Text>
      </Section>
    </Main>
    <Footer>
      <Github>
        <A href='https://github.com/niartenyaw/if-a-year-were-only-a-pixel'>
          <Img src='/if-a-year-were-only-a-pixel/github.png' />
        </A>
      </Github>
      <Separator />
      <Inspiration>
        <A href='https://www.joshworth.com/dev/pixelspace/pixelspace_solarsystem.html'>
          <InspirationText>inspiration</InspirationText>
        </A>
      </Inspiration>
    </Footer>
  </Intro>
)
