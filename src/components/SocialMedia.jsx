import { AiFillGithub } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import React from 'react'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/BethanyACable' target='_blank' rel='noreferrer' >
                <BsTwitter />
            </a>
            
        </div>
        <div>
            <a href='https://www.linkedin.com/in/bethany-a-mattern/' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            
        </div>
        <div>
            <a href='https://github.com/bethanycable' target='_blank' rel='noreferrer'>
               <AiFillGithub /> 
            </a>
            
        </div>
   </div>
  )
}

export default SocialMedia
