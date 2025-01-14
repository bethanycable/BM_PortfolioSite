import './Footer.scss'

import { AppWrap, MotionWrap } from '../../wrapper'
import React, { useState } from 'react'

import { client } from '../../client'
import { images } from '../../constants'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData; 
  
  const handleChangeInput = (e) => {
    const {name, value} = e.target

    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
    <h2 className='head-text'> Take a coffee & chat with me!</h2>

    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt='email' />
        <a href='mailto:bethany.a.cable@gmail.com' className='p-text'>bethany.a.cable@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.linkedIn} alt='linkedIn' attribute="Google"/>
        <a href='https://www.linkedin.com/in/bethany-a-mattern/' target="_blank" rel="noreferrer" className='p-text'>LinkedIn: Bethany Mattern</a>
      </div>
    </div>

    {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Submit Message'}</button>
      </div>
      : <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>
    }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
