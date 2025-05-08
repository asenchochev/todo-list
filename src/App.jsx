import React from 'react'

const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500'>
      
      <div className="bg-white shadow-lg rounded-3xl p-16">
        <h1 className='text-3xl font-bold text-center text-gray-900'>✅ React Taskify</h1>

        <div className="mb-4 flex">
          <input type="text" className="mt-5 border border-gray-300 rounded-l-lg p-2 w-full" placeholder="Add a new task..." />
          <button className="mt-5 bg-blue-500 text-white rounded-r-lg px-4 py-2">Add</button>
        </div>
      </div>
    </div>
  )
}

export default App
