import React, { useState } from "react"
import TodoForm from "./todo/TodoForm"
import TodoItem from "./todo/TodoItem"

function App() {
  const [todo, setTodo] = useState([]);

  const onSubmit = newTodo => {
    const nextTodo = [...todo, {title: newTodo, completed: false, id: Math.random()}];
    setTodo(nextTodo);
  }

  return (
    <> {/* Fragment */}
      <div className="App">TODO</div>
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가해보세요.</div>
            <TodoForm onSubmit={onSubmit}/>
          </div>
        ) : <>
              {todo.map((t, i) => (<TodoItem key={t.id} index={i} item={t} setTodo={setTodo}/>))}
              <TodoForm onSubmit={onSubmit}/>
            </>
        }
      </div>
    </>
  )
}

export default App
