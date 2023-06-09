import './Photography.scss';

import { AppWrap, MotionWrap } from '../../wrapper';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';

// import { motion } from 'framer-motion'

const Photography = () => {
  const [photography, setPhotography] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const photo = photography[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "photography"]';

    client.fetch(query).then((data) => {
      setPhotography(data);
    });
  }, []);

  return (
    <div className="app__photography">
      <h2 className="head-text">Photography Side</h2>
      {photography.length && (
        <>
          <div className="app__photography-card">
            <div className="app__photography-item app__flex">
              <img src={urlFor(photo.imgurl)} alt={photo.name} />
            </div>
          </div>
          <div className="app__photography-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? photography.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === photography.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Photography, 'app__photography'),
  'photography',
  'app__primarybg'
);
