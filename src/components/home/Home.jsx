import React from 'react'
import "./home.css"
import MyAvatar from '../../assets/avatar-1.png'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={MyAvatar} alt="" className="home__img" />
        <h1 className="home__name">Rodrigo Dias</h1>
        <span className="home__education">Back-end & Front-end Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
        
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home