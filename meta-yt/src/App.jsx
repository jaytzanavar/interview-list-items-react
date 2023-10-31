import "./App.css";
import List from "./List";
import Actions from "./Actions";
import { useState } from "react";
import { intersection, not } from "./utils";
import PlayStyle from "./PlayStyle";

const App = () => {
  const listData = [1, 2, 3, 4];
  const [listItems, setLeftItems] = useState(listData);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckItems] = useState([]);

  const leftCheckedItems = intersection(listItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1); // remove from items state
    }

    setCheckItems(newCheckedItems);
  };

  const moveRIght = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(listItems, leftCheckedItems));
    setCheckItems(not(checkedItems, leftCheckedItems));
  };

  const moveLeft = () => {
    setLeftItems(listItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckItems(not(checkedItems, rightCheckedItems));
  };
  return (
    <>
      <div className="header">
        <h1>React picking list</h1>
      </div>
      <div className="App ">
        <div className="flex">
          <PlayStyle />
        </div>
        <div className=" flex">
          <List items={listItems} handleToggle={handleToggle} />
          <Actions moveRight={moveRIght} moveLeft={moveLeft} />
          <List items={rightItems} handleToggle={handleToggle} />
        </div>
      </div>
    </>
  );
};

export default App;
