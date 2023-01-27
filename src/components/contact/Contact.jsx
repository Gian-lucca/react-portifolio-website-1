import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_1ekraxg', form.current, 'bQliW15FJ8ugDI6EJ')
    
    e.target.reser()
  };
  return (
    <section id='contact'>
      <h5>Entre em Contato</h5>
      <h2>Meus Contatos</h2>

      <div className="container contact__container">
        <div className="contact__options">

          {/*<article className="contact__option">
            <MdOutlineEmail className='contact__opition-icon'/>
            <h4>Email</h4>
            <h5>gianlucca.augusto@gmail.com</h5>
            <a href="mailto:gianlucca.augusto@gmail.com" target="_blank">Enviar</a>
          </article>*/}

          <article className="contact__option">
            <BsInstagram className='contact__opition-icon'/>
            <h4>Instagram</h4>
            <h5>@gianlucaaugusto</h5>
            <a href="https://www.instagram.com/gianlucaaugusto/" target="_blank">Envie um Direct</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__opition-icon'/>
            <h4>WhatsApp</h4>
            <h5>(21)96541-5563</h5>
            <a href="https://wa.me/21965415563" target="_blank">Envie uma Mensagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required />
          <input type="email" name='email' placeholder='E-mail Valido' required />
          <textarea type="message" rows="7" placeholder='Sua Mensagem' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>

      </div>
    </section>
  )
}

export default Contact