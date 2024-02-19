import React from 'react'
import "./about.css"
import MyAvatar_About from "../../assets/avatar-2.png"
import AboutBox from "./AboutBox"
import Data from './Data'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={MyAvatar_About} alt="" className="about__img" />
      
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">{Data[0].aboutEN}</p>
            <a href="../../assets/CV - Rodrigo Dias English Version.pdf" download="CV - Rodrigo Dias English Version.pdf" className="btn">Download CV</a>
          </div>
      
          <div className="about__skills grid">

        <div className="skills__data"> 
          <div className="skills__titles">
            <h3 className="skills__name">Development</h3>
            <span className="skills__number">100%</span>
          </div>

          <div className="skills__bar">
            <span className="skills__percentage development"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Deployment</h3>
            <span className="skills__number">50%</span>
          </div>

          <div className="skills__bar">
            <span className="skills__percentage deployment"></span>
          </div>
        </div>

        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">English</h3>
            <span className="skills__number">100%</span>
          </div>

          <div className="skills__bar">
            <span className="skills__percentage english"></span>
          </div>
        </div>


          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About