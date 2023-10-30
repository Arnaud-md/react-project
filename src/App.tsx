import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Counter from './Counter'
import List from './List'
import NameForm from './NameForm'

function App() {
  return (
    <>
      <div>
        <HelloWorld />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <List />
      </div>
      <div>
        <NameForm />
      </div>
    </>
  )
}

export default App
