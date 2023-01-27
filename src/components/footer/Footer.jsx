import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo'>Gianlucca Augusto</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#experience">Experiencias</a></li>
          <li><a href="#servives">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/gianlucca-augusto-745485237/"><BsLinkedin/></a>
          <a href="https://github.com/Gian-lucca"><FaGithub/></a>
          <a href="https://www.instagram.com/gianlucaaugusto/"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
          <small>Copyright © Gianlucca Augusto - Todos os direitos reservados.</small>
        </div>

      </footer>
    </div>
  )
}

export default Footer