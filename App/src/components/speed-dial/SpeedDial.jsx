import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

const SpeedDial = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollToTopThreshold = 200;

        if (scrollY > scrollToTopThreshold) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className='fixed bottom-12 right-5 z-50 bg-designColor rounded-full p-2 cursor-pointer'
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollToTop ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            <IoIosArrowUp className='text-white text-xl' />
        </motion.div>
    );
};

export default SpeedDial;
