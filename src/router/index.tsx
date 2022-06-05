import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../views/Home'))
const Index = lazy(() => import('../views/Index'))
const Find = lazy(() => import('../views/Find'))
const Mine = lazy(() => import('../views/Mine'))
const Friends = lazy(() => import('../views/Friends'))
const Video = lazy(() => import('../views/Video'))

const router: RouteObject[] = [
  { path: '/', element: <Navigate to="/home" /> },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/index',
    element: <Index />,
    children: [
      {
        path: '/index/find',
        element: <Find />
      },
      {
        path: '/index/mine',
        element: <Mine />
      },
      {
        path: '/index/friends',
        element: <Friends />
      },
      {
        path: '/index/video',
        element: <Video />
      }
    ]
  }
]

export default router
