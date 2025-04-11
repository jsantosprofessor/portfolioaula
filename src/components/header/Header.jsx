import React from 'react'
import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img.jpg'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Olá, meu nome é </h5>
        <h1 className='text-light'>Jefferson dos Santos</h1>
        {" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Criação, Dev. e Hospedagem de Sites 🌐",
              3000,
              "Front-End Dev. 💻",
              3000,
              "Projetos, UX|UI Design 🎨",
              3000,
              "EAD & Design Instrucional 👨‍🏫",
              3000,
              "SEO & Otimização de Wordpress 🔎",
              3000,
              "Estratégias Digitais 🎯",
              3000,
              "Mountainbike 🚴‍♂️",
              3000,
              ]}
            />
        </h3>
        {/* <h4 className="text-light">
          Projetos de tecnologia, marketing e educação
        </h4> */}
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="André Tavares Fotografando" />
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll
        </a>
      </div>
    </header>
  )
}