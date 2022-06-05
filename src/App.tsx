import React, { Suspense } from 'react'
import '@/App.css'
import { useRoutes } from 'react-router-dom'
import routeConfig from './router'

function App() {
  const element = useRoutes(routeConfig)
  return (
    <div className="App">
      <Suspense fallback={<div />}>{element}</Suspense>
    </div>
  )
}

export default App
