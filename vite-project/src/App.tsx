import React, { useState } from "react"

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const onChangeNewTodo = e => {
    setNewTodo(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
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
            <form onSubmit={onSubmit}>
              <input value={newTodo} onChange={onChangeNewTodo}/>
              <button>추가</button>
            </form>
            
          </div>
        ) : <>
              {todo.map(t => (<div key={t.id}>{t.title}</div>))}
              <form onSubmit={onSubmit}>
                <input value={newTodo} onChange={onChangeNewTodo}/>
                <button>추가</button>
              </form>
            </>
        }
      </div>
    </>
  )
}

export default App
