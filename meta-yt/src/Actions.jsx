const Actions = ({ moveLeft, moveRight }) => {
  return (
    <div className="flex actions">
      <button onClick={moveRight}>&gt;</button>
      <button onClick={moveLeft}>&lt;</button>
    </div>
  );
};

export default Actions;
