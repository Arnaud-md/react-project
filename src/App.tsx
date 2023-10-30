import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Counter from './Counter'

function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
