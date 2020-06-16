import React from 'react';

export default ({ data, numberOfYears }) => {
  if (data.years_from_today > numberOfYears) {
    return null;
  }
  const style = {
    position: "absolute",
    top: `${data.years_from_today}px`
  };
  return (
    <div className="datapoint" style={style}>
      { data.title }
    </div>
  );
}
