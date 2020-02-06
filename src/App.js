import React from 'react'
// import logo from './logo.svg'

import './styles/tailwind.css'
import './App.css'

function App() {
  return (
    <>
      <div className='relative bg-gray-400 pt-16 h-screen/2'>
        <h1 className='text-2xl'>This takes up 1/2 of the screen</h1>
        <div className='fixed bg-gray-600 w-screen p-8'>
          Fixed child
          <div className='absolute top-0 right-0 bg-gray-300 h-full'>
            <div className='flex justify-center items-center h-full'>
              <span>Absolute child</span>
            </div>
          </div>
        </div>
        Scroll me! Lorem ipsum...
      </div>
      <div className='bg-red-300 flex justify-center items-center h-screen/3'>
        <h1 className='text-2xl'>This takes up 1/3 of the screen</h1>
      </div>
    </>
  )
}

export default App
