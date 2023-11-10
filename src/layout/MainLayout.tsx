import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react';

const MainLayout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
        <Analytics />
    </div>
  )
}

export default MainLayout