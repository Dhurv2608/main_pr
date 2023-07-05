import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import S_header from './S_header'

const S_layout = () => {
  return (
    <div>
      <S_header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default S_layout