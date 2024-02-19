import React from 'react'
import "./home.css"

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/diasrodr" className="home__social-link" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram"></i>
        </a>           

        <a href="https://www.github.com/rdias66" className="home__social-link" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/rodrigo-dias-45009a242/" className="home__social-link" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        </a>        
    </div>
  )
}

export default HeaderSocials