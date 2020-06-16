import React from 'react';

export default ({ markingLocation, yearNumber, yearsPerMarking }) => {
  const lineThickness = 2;

  let lineLength = 10;
  if (yearNumber % 1000 === 0) {
    lineLength = 50
  }
  else if (yearNumber % 100 === 0) {
    lineLength = 20;
  }

  const styles = {
    height: `${lineThickness}px`,
    width: `${lineLength}px`,
    "background-color": "red",
    position: "absolute",
    top: yearNumber
  };

  return (
    <div className="ruler-marker" style={styles}>
    </div>
  );
}
