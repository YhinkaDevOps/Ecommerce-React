import React from 'react'
import {BsFillTelephoneFill, BsEnvelope} from "react-icons/bs";


const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container d_flex">
          <div className="left row">
            <BsFillTelephoneFill className='icon'/>
            <label htmlFor="">+234 8130 300 335</label>
            <BsEnvelope className='icon'/>
            <label htmlFor="">yinkabakare30@gmail.com</label>
          </div>
          <div className="right row RText">
            <label >Theme FAQ's</label>
            <label >Need Help</label>
            <span>🏳️</span>
            <label htmlFor="">EN</label>
            <span>🏳️</span>
            <label htmlFor="">USD</label>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Head