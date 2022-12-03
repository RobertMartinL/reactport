import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/robert-martin-400584244/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/robertmartinl" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/robm96/" target="_blank"><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials