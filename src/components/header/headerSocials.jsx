import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare, FaTwitter} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com/in/saxenanickk" target="_blank" >
        <BsLinkedin/>
      </a>
      <a href="https://github.com/saxenanickk" target="_blank" >
        <FaGithubSquare/>
      </a>
      <a href="https://twitter.com/saxenanickk" target="_blank" >
        <FaTwitter/>
      </a>
    </div>
  )
}

export default HeaderSocials;