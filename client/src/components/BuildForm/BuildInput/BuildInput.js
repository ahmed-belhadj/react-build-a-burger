import React from "react";

import classes from "./BuildInput.css";

const BuildInput = props => {
  return (
    <div className={classes.buildInput}>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.less}>Less</button>
      <button className={classes.more} onClick={props.more}>
        More
      </button>
    </div>
  );
};

export default BuildInput;
