import React from 'react'
import styled from 'styled-components/macro'

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

const Footer = styled.div`
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

 const Line = styled.div`
  height: 20px;
  width: 1px;
  background-color: red;
 `

const ToTranscript = styled.div`
  display: inline-block;
  border: 1px solid white;
  border-radius: 6px;
  padding: 3px 11px;
  margin-top: 9px;
  &:hover {
    cursor: pointer;
  }
`

export default ({ toTranscript, offset }) => (
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
        <Text>what does human evolution look like?</Text>
      </Section>
    </Main>
    <Footer>
      <Text>
        scroll right to explore --->
      </Text>
      <Text>
        or
      </Text>
      <ToTranscript onClick={toTranscript}>
        <Text>read the transcript (boring)</Text>
      </ToTranscript>
    </Footer>
  </Intro>
)
