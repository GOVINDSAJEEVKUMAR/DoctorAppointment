import React from 'react'
import Header from "../Componets/Header/Header"
import Footer from "../Componets/Footer/Footer"
import Routes from "../Route/Route"

const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
