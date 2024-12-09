import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Form from './components/Form'
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <h1 className='text-5xl text-violet-300 font-bold'>Welcome to De-Genero</h1> */}
      <Navbar />
      <Hero />
      
      <Features />
      <About/>
      <Form />
    </main>
  )
}

export default App