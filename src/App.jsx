import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 =6;
  const string = "I love React!"
  return (
    <div className="App">
      <h2>{data[0]+" "+data[1]}</h2>
      <h2>{number1+number2}</h2>
      <h2>{string}</h2>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AppelSeeds</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me {count}
          
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
