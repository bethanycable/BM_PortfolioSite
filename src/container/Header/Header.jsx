import './Header.scss'

import {AppWrap} from '../../wrapper'
import React from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.dev
        whileInView={{ x: [-100,0], opacity: [0,1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Bethany</h1>
            </div>
          </div>  {/* badge-cmp*/}
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Web Developer</p>
          <p className='p-text'>Book Nerd</p>
          </div>

        </div>
        {/* <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          duration={{ duration: 0.5 }}
          className='app__header-btn'
        >
          <a href="Contact.jsx">Contact Me!</a>
        </motion.div>  */}
      </motion.dev>


      
      <motion.div
        whileInView={{opacity: [0, 1] }}
        transition={{duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sass, images.javascript, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle=${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
