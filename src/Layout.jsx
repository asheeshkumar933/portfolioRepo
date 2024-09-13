import React, { useEffect, useState } from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../src/Component/Contexts/Theme';



 function Layout() {
  
  // const [themeMode , setThemeMode] = useState("light")

  // const lightTheme = () => {
  //   setThemeMode ("light")
  // }
  // const darkTheme = () => {
  //   setThemeMode ("dark")
  // }
  // // actual change in a theme

  // useEffect (() => {
  //   document.querySelector("html").classList.remove("light" ,"dark")
  //   document.querySelector("html").classList.add(themeMode)

  // },[themeMode])


 
  
  return (

    <>
      <Header />
     <Outlet />
    <Footer />
    </>
  )
}

export default Layout