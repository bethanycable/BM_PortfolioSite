import { AppWrap, MotionWrap } from '../../wrapper'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../client'

import { motion } from 'framer-motion'

const Photography = () => {
  return (

    <div className='app__photography'>
        <h2>Placeholder</h2>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Photography, 'app__photography'), 
  'photography', 
  'app__primarybg'
)
