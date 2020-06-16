import React from 'react';

export default ({ markingLocation, yearsAgo}) => {
  const lineThickness = 1;

  let lineLength = 10;
  if (yearsAgo % 1000 === 0) {
    lineLength = 50
  }
  else if (yearsAgo % 100 === 0) {
    lineLength = 20;
  }

  const styles = {
    height: `${lineThickness}px`,
    width: `${lineLength}px`,
    "background-color": "red",
    position: "absolute",
    top: yearsAgo
  };

  return (
    <div className="ruler-marker" style={styles}>
    </div>
  );
}
