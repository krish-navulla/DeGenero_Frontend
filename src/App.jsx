import React from 'react'
import Hero from './components/Hero'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <h1 className='text-5xl text-violet-300 font-bold'>Welcome to De-Genero</h1> */}
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500"/>
    </main>
  )
}

export default App