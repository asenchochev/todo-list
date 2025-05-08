import React from 'react'

const App = () => {
  const [todos, setTodos] = React.useState([])
  const [input, setInput] = React.useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { text: input, completed: false }])
    setInput('')
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
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

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className="bg-white shadow-lg rounded-3xl p-16 w-full max-w-md">
        <h1 className='text-3xl font-bold text-center text-gray-900'>✅ React Taskify</h1>

        <div className="mb-4 flex">
          <input
            type="text"
            className="mt-5 border border-gray-300 rounded-l-lg p-2 w-full"
            placeholder="Add a new task..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addTodo} className="mt-5 bg-blue-500 text-white rounded-r-lg px-4 py-2">Add</button>
        </div>

        <ul className="space-y-3 mt-4">
  {todos.map((todo, index) => (
    <li
      key={index}
      className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-200 p-3 rounded-xl shadow-sm"
    >
      <span
        onClick={() => completeTodo(index)}
        className={`text-base sm:text-lg font-medium cursor-pointer transition-colors duration-200 ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <div className="flex space-x-2">
        <button
          onClick={() => completeTodo(index)}
          className={`px-4 py-2 rounded-lg font-bold shadow transition duration-200 ${
            todo.completed
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => removeTodo(index)}
          className="px-4 py-2 bg-red-100 text-red-700 font-bold rounded-lg shadow hover:bg-red-200 transition duration-200"
        >
          Remove
        </button>
      </div>
    </li>
  ))}
</ul>

      </div>
    </div>
  )
}

export default App
