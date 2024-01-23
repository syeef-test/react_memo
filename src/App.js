import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [order, setOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const orderHandler = useCallback(() => {
    setOrder((prevOrder) => !prevOrder);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList = useMemo(() => {
    console.log(`Items sorted ${order}`);
    return [...listItems].sort((a, b) => (order ? b - a : a - b));
  }, [listItems, order]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={orderHandler}>
        Change to {order ? "descending" : "ascending"} order
      </Button>
    </div>
  );
}

export default App;
