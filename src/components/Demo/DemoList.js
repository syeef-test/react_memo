import React from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items, title } = props;

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
