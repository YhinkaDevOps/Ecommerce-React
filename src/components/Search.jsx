import React from 'react'
import logo from '../components/images/logo4.png'

import {Link} from 'react-router-dom';


const Search = () => {
  return (
    <div>
      <section className='search'>
        <div className="container c_flex">
          <div className='logo width'>
            <img src={logo} alt="" />
          </div>
          <div className='search-box f_flex'>
           <i class="fa fa-search"></i>
            <input type="text"  placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
           <i class="fa-solid fa-user"></i>
            <div className='cart'>
              <Link to ="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
              <span></span>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Search