import React from 'react';

export default ({ data }) => {
  const style = {
    position: "absolute",
    top: `${data.years_from_today}px`
  };
  return (
    <div className="marker" style={style}>
      { data.title }
    </div>
  );
}
