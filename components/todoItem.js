const TodoItem = ({ item }) => {
  //if(item.done) console.log()
  return (
    <>
      <div className="todo-item">
        <div className="todo-item-title">{item.title}</div>
        <div className="todo-item-done">
          <input type="checkbox" defaultChecked={item.done} />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
