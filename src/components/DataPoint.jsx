import React from 'react';
import Arrow from './Arrow';

const DataPoint = ({ data, maxYear }) => {
  if (data.years_from_today > maxYear) {
    return null;
  }

  const style = {
    position: "absolute",
    top: `${data.years_from_today_augmented}px`,
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  };

  return (
    <div className="datapoint" style={style}>
      <Arrow />
      { data.title }
    </div>
  );
};

export default DataPoint;
