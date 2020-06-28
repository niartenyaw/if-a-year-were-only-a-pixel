import React from 'react';


const Arrow = (props) => {
  const styles = {
    width: "30px",
    height: "1px",
    backgroundColor: "white",
    margin: "0 10px"
  };

  if (props.type === "vertical") {
    Object.assign(styles, {
      height: "30px",
      width: "1px",
      margin: "10px 0"
    })
  }

  return (
    <div style={styles}>
    </div>
  );
};

export default Arrow;
