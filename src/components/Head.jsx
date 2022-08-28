import React from 'react'
import {BsFillTelephoneFill, BsEnvelope} from "react-icons/bs"

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="conatainer d_flex">
          <div className="left_row">
            <BsFillTelephoneFill/>
            <label htmlFor="">+234 8130 300 335</label>
            <BsEnvelope/>
            <label htmlFor="">yinkabakare30@gmail.com</label>
          </div>
          <div className="right row RText">
            <label >Theme FAQ's</label>
            <label >Need Help</label>
            span

          </div>


        </div>

      </section>
    </div>
  )
}

export default Head