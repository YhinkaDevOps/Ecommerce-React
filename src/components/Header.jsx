import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Head from './Head'

const Header = () => {
  return (
    <div>
        <Head/>
        <Search />
        <Navbar />

    </div>
  )
}

export default Header