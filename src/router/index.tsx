import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Albums from '../pages/Albums'

const Rounter = (prop: any) => {
    const element = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/gallery',
                    element: <Albums />
                }
            ]
        }
    ])
  return element
}

export default Rounter