import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Componenet/Footeer/Footer'
import HeaderComponent from '../Componenet/HeaderComponent/HeaderComponent'

export default function Page() {
  return (
    <>
        <HeaderComponent/>

        <Outlet/>

        <Footer/>
    </>
  )
}
