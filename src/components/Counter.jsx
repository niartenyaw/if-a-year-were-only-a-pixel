import React from 'react';
import Arrow from './Arrow';

const Counter = (props) => {
  let { year } = props;
  console.log(year)
  if (year < 0) return null;
  if (year === 0) year += 0; // stupid negative zero

  const style = {
    position: "sticky",
    top: `${window.innerHeight / 2}px`,
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "140px",
  };

  const formattedYear = year.toLocaleString(undefined, { minimumFrationDigits: 0 })

  return (
    <div style={style}>
      <div>
        <div>
          { formattedYear }
        </div>
        <div>
          years ago
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default Counter;
