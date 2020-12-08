import React from 'react'
import styled from 'styled-components/macro'

const Intro = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  margin-top: 30%;
  padding: 0 50px;
`

const Footer = styled.div`
  margin-bottom: 30px;
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
      <Text>
        a showcase of time.
      </Text>
    </Header>
    <section>
      <Text>
        scroll right to explore
      </Text>
    </section>
    <Footer>
      <Text>this first long red line is the year 2020</Text>
      <Text>every small mark is 10 years apart</Text>
      <Text>the bigger ones are 100 years apart</Text>
      <Text>the largest are 1000 years apart</Text>
    </Footer>
  </Intro>

)
