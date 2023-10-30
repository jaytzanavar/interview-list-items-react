const Item = (props) => {
  const { item, handleToogle } = props;
  return (
    <label>
      <input type="checkbox" onChange={() => handleToogle(item)} />
      {item}
    </label>
  );
};

export default Item;
