import React, { useState } from 'react'
import { BiBorderAll } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const[MobileMenu, setMobileMenu ] = useState(true);
    const handleClick = () => setMobileMenu(!MobileMenu);
  return (
    <div>
        <header className='header'>
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className=''><BiBorderAll/></span>
                    <h4>Categories <i class="fa-solid fa-caret-down"></i></h4>
                </div>

                <div className='navlink'>
                    <ul className={MobileMenu ? 'nav-links-MobileMenu' : "link f_flex capitalize"} onClick={handleClick}>
                        <li><Link to='/'>Home</Link></li>
                         <li><Link to='/pages'>Pages</Link></li>
                         <li><Link to='/vendor'>User account</Link></li>
                         <li><Link to='/track'>My order</Link></li>
                         <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                    <button className='toggle' onClick={handleClick}>
                        {MobileMenu ? <i class="fa-solid fa-times close home-bth"></i>:
                        <i class="fa-solid fa-xmark open"></i>
                        }
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar