import React from 'react';
import Arrow from './Arrow';

import styled from 'styled-components';

const TitleContainer = styled.div`
  transform: translateX(-50%)rotate(-90deg) translateX(50%);
`;

const Point = styled.div`
  position: absolute;
  left: ${props => props.year}px;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`;

const DataPoint = ({ data, maxYear }) => {
  if (data.years_from_today > maxYear) {
    return null;
  }

  return (
    <Point className="datapoint" year={data.years_from_today_augmented}>
      <Arrow type="vertical"/>
      <TitleContainer>
        { data.title }
      </TitleContainer>
    </Point>
  );
};

export default DataPoint;
