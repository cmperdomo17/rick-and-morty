import React from "react"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-full md:h-screen flex-col gap-2 mt-10 md:mt-0">
        <img src="/logo.png" alt="Rick and Morty Logo" className='w-60' />
        <h1 className='text-blue-200 text-5xl font-extrabold mb-14 text-center'>Rick and Morty API</h1>
        <Link to="/characters" className='text-2xl font-extrabold'>
          <button className='bg-blue-200 hover:bg-blue-300 text-stone-900 font-extrabold text-3xl py-2 px-6 rounded-full'>
            View Characters
          </button>
        </Link>
      </div>
    </>
  )
}




export default App
