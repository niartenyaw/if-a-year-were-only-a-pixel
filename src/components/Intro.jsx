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
  margin: 0;
`

export default () => (
  <Intro>
    <Header>
      <h1>
        if a year were only a pixel.
      </h1>
      <h3>
        a showcase of time.
      </h3>
    </Header>
    <Main>
      <Section>
        <Text>every small mark is 10 years apart</Text>
        <Text>medium marks are every 100 years</Text>
        <Text>large marks are 1000</Text>
      </Section>
      <Section>
        <Text>this first long red line is 6 million years ago</Text>
      </Section>
    </Main>
    <Footer>
      <Text>
        scroll right to explore --->
      </Text>
    </Footer>
  </Intro>

)
