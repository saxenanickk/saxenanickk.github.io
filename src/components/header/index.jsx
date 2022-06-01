import React from 'react'
import CTA from './cta'
import ME from "../../assets/me.png"
import "./index.css"
import HeaderSocials from './headerSocials'


const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Nikhil Saxena</h1>
        <h5 className='text-light'>Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt={"me"} />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header