import React, { useState } from 'react'
import { BiBorderAll } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';


const Navbar = () => {
    const[MobileMenu, setMobileMenu ] = useState(true);
    const handleClick = () => setMobileMenu(!MobileMenu);
  return (
    <div>
        <header className='header'>
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className=''><BiBorderAll/></span>
                    <h4>Categories <MdArrowDropDown/></h4>
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
                        {MobileMenu ? <FaBars/>:<FaTimes/>}
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar