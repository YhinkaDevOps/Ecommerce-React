import React from 'react'
import logo from '../assets/img/olayinka.jpg'
import {Link} from 'react-router-dom';

const Search = () => {
  window.addEventListener("scroll", function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", this.window>this.screenY >100)
  })
  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img className="logo__" src={logo} alt="logo" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa-solid fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping icon-circle"></i>
              </Link>
              <span>0</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search