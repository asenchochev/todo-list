import React from 'react'

const App = () => {

    const [todos, setTodos] = React.useState([])
    const [input, setInput] = React.useState()


    const addTodo = (e) => {
        e.preventDefault()
        if (!input) return
        setTodos([...todos, input])
        setInput('')
    }
    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    const completeTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed }
        setTodos(newTodos)
    }
    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo(e)
        }
    }
    const handleClick = (e) => {
        if (e.target.tagName === 'BUTTON') {
            removeTodo(e.target.dataset.index)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
      
      <div className="bg-white shadow-lg rounded-3xl p-16">
        <h1 className='text-3xl font-bold text-center text-gray-900'>✅ React Taskify</h1>

        <div className="mb-4 flex">
          <input type="text" className="mt-5 border border-gray-300 rounded-l-lg p-2 w-full" placeholder="Add a new task..." />
          <button onClick={addTodo} className="mt-5 bg-blue-500 text-white rounded-r-lg px-4 py-2">Add</button>
        </div>

        <ul className="list-disc list-inside">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo}</span>
              <button data-index={index} onClick={removeTodo} className="bg-red-500 text-white rounded px-2 py-1">Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={clearCompleted} className="mt-5 bg-red-500 text-white rounded px-4 py-2">Clear Completed</button>
        
      </div>
    </div>
  )
}

export default App
