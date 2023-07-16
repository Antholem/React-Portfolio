import React from 'react';
import { BannerImg } from '../../assets/images';
import { motion } from 'framer-motion';

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img
        className='w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 py-1'
        src={BannerImg}
        alt='bannerImg'
      />
      <motion.div
        className='absolute bottom-0 w-[350px] h-[400px] lgl:w-[500px] lgl:h-[680px] bg-gradient-to-r rounded-lg border-2 border-designColor shadow-neon flex justify-center items-center animate-pulse'
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default RightBanner;
