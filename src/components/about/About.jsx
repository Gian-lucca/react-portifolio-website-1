import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Um pouco</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">

            <div className="about__cards">
              
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experiencia</h5>
                <small>Mais de 2 Anos</small>
              </article>
            
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clientes</h5>
                <small>Mais de 100 Clientes</small>
              </article>
            
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projetos</h5>
                <small>Mais de 150 Completos</small>
              </article>
            </div>

            <p>
              Gianlucca Augusto é um Desenvolvedor Web que oferece serviços de desenvolvimento, correção, otimização e manutenção de sites. 
              Acredito que com as ferramentas confiáveis e inovadoras, eu irei conseguir melhorar os seus processos e focar principalmente em suas estratégias de negócio.
            </p>

            <a href="#contact" className='btn btn-primary'>Contato</a>
        </div>
      </div>
    </section>
  )
}

export default About