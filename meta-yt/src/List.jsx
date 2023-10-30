import Item from "./Item";

const List = ({ items, handleToggle }) => {
  return (
    <div className="list flex">
      {items.map((item) => (
        <Item key={item} item={item} handleToogle={handleToggle} />
      ))}
    </div>
  );
};

export default List;
