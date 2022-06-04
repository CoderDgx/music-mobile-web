import React from 'react'
import type { RouteObject } from 'react-router-dom'
import Home from '@/views/Home'
import Find from '@/views/Find'

const router: RouteObject[] = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/find',
    element: <Find />
  }
]

export default router
