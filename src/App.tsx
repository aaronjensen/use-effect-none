import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import pk from '../package.json'

const App: React.FC = () => {
  useEffect(() => {
    console.log(`useEffect fired! react: ${pk.dependencies.react}`)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
