import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contariner section container" id='contact'>
      <h2 className="section__title">Get in touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk!</h3>
          <p className="contact__details">Not into forms? Send me an email at: dias.a@live.com</p>
        </div>
        
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Subject' />
          </div>

          <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <button className="btn">Send</button>
        </form>

      </div>
    </section>
  )
}

export default Contact