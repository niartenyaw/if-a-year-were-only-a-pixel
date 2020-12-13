import React from 'react'
import styled from 'styled-components/macro'

import { prettyYear } from '../helpers'
import Text from './Text'

const DataContainer = styled.table`
  padding: 5% 15%;
`

const ItemBase = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

const ItemHeader = styled(ItemBase)`
  font-size: x-large;
`

const Item = styled(ItemBase)`
  border-top: 1px solid white;
`

const Year = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 120px;
  border-right: 1px solid white;
  padding: 16px;
  flex-shrink: 0;
`
const YearHeader = styled(Year)`
`

const Title = styled.div`
  flex-grow: 1;
  padding: 16px;
`
const TitleHeader = styled(Title)`
  font-size: x-large;
`

const ToTimeline = styled.div`
  display: inline-block;
  border: 1px solid white;
  border-radius: 6px;
  padding: 3px 11px;
  &:hover {
    cursor: pointer;
  }
`

const DataItem = ({ item }) => (
  <Item>
    <Year>{prettyYear(item.yearsFromToday)}</Year>
    <Title>{item.title}</Title>
  </Item>
)

export default ({ data, toTimeline }) => (
  <DataContainer>
    <ToTimeline onClick={toTimeline}>
      <Text>
        back
      </Text>
    </ToTimeline>
    <ItemHeader>
      <YearHeader>Years Ago</YearHeader>
      <TitleHeader>Info</TitleHeader>
    </ItemHeader>
    {data.reverse().map(d => <DataItem key={d.title} item={d} />)}
  </DataContainer>
)
