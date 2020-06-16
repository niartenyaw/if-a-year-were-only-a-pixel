import React from 'react';

const DataPoint = ({ data, maxYear }) => {
  if (data.years_from_today > maxYear) {
    return null;
  }

  const style = {
    position: "absolute",
    top: `${data.years_from_today}px`,
    left: `50px`,
  };

  return (
    <div className="datapoint" style={style}>
      { data.title }
    </div>
  );
};

export default DataPoint;
