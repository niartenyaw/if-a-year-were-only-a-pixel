import React from 'react'
import styled from 'styled-components/macro'

const Intro = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Footer = styled.div``

const Section = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.p`
  margin: 7px 0;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const H1 = styled.h1`
 margin: 0 5px;
 `

 const Line = styled.div`
  height: 20px;
  width: 1px;
  background-color: red;
 `

export default () => (
  <Intro>
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
        <Text>what does human evolution look like?</Text>
      </Section>
    </Main>
    <Footer>
      <Text>
        scroll right to explore --->
      </Text>
    </Footer>
  </Intro>

)
