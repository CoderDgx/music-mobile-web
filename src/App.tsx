import React from 'react'
import '@/App.css'
import { useRoutes } from 'react-router-dom'
import routeConfig from './router'

function App() {
  const element = useRoutes(routeConfig)
  return <div className="App">{element}</div>
}

export default App
