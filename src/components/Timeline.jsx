
import React from 'react'
import styled from 'styled-components/macro'

import Data from './Data'
import Ruler from './Ruler'

const Timeline = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

export default (props) => (
  <Timeline>
    <Ruler
      {...props}
    />
    <Data
      {...props}
    />
  </Timeline>
)
