import { useState } from "react";
import "./styles.css";

type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState<TodoItem[]>([])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { //any?
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]})

      setNewItem("")
    }

    function toggleTodo(id: string, completed: boolean) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed }
          }

          return todo
        })
      })
    }
    
    function deleteTodo(id: string) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} 
          type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {todos.length === 0 && "Nothing yet... Get Busy!"}
        {todos.map(todo => {
          return (
          
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
