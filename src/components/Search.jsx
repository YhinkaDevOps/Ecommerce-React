import React from 'react'
import logo from '../components/images/logo4.png'
import {BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <section className='search'>
        <div className="container c_flex">
          <div className='logo-width'>
            <img src={logo} alt="" />
          </div>
          <div className='search-box f_flex'>
            <BsSearch/>
            <input type="text"  placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            
          </div>

        </div>
      </section>
    </div>
  )
}

export default Search