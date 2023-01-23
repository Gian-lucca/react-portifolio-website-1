import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Olá eu sou</h5>
          <h1>Gianlucca Augusto</h1>
          <h5 className="text-ligth"> Desenvolvedor Front End </h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'> Scroll Down</a>
        </div>
    </header>
  )
}

export default Header