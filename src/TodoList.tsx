import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <>
    <ul className="list">
        {todos.length === 0 && "Nothing yet... Get Busy!"}
        {todos.map((todo: string) => {
          return <TodoItem {...todo} key={todo.id} />
        })}
      </ul>
    </>
  )
}

export default TodoList;