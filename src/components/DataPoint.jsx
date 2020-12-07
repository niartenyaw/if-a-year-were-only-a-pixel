import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: relative;
`;
const Title = styled.div`
  position: absolute;
  width: max-content;
  bottom: -20px;
  left: 5px;
`;

const Point = styled.div`
  position: absolute;
  left: ${({ yearsFromToday }) => yearsFromToday}px;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`;

const Arrow = styled.div`
  background-color: white;
  height: ${({ layer }) => layer * 30}px;
  width: 1px;
  margin: 10px 0;
`;

const DataPoint = ({ data, maxYear }) => {

  const currentYear = (new Date(Date.now())).getYear() + 1900; // fuck javascript

  const yearsFromToday = data.year ? (0 - (data.year - currentYear)) : data.years_ago

  if (yearsFromToday > maxYear) {
    return null;
  }

  return (
    <Point className="datapoint" yearsFromToday={yearsFromToday}>
      <Arrow layer={data.layer || 1} />
      <TitleContainer>
        <Title>
          { data.title }
        </Title>
      </TitleContainer>
    </Point>
  );
};

export default DataPoint;
