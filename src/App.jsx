import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>HI THIS IS A TEST APP</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count+5)}>
          Count will increment with 5 : {count}
        </button>
      
      </div>
      
    </div>
  )
}

export default App
