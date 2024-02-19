import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
          <i className="about__icon icon-fire"></i>
          
          <div>
            <h3 className="about__title">2</h3>
            <span className="about__subtitle">Completed projects</span>
          </div>
        </div>


        <div className="about__box">
          <i className="about__icon icon-event"></i>
          
          <div>
            <h3 className="about__title">1.5+</h3>
            <span className="about__subtitle">Years of experience</span>
          </div>
        </div>


        <div className="about__box">
          <i className="about__icon icon-notebook"></i>
          
          <div>
            <h3 className="about__title">20+</h3>
            <span className="about__subtitle">Practice projects</span>
          </div>
        </div>


        <div className="about__box">
          <i className="about__icon icon-cup"></i>
          
          <div>
            <h3 className="about__title">9000+</h3>
            <span className="about__subtitle">Cups of coffee drank</span>
          </div>
        </div>
    </div>
  )
}

export default AboutBox