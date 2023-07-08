import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollTop = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger animation once
        threshold: 0.1, // Adjust threshold as needed
    });

    const animationVariants = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            key={props.key}
            variants={animationVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'} // Animate when in view
            ref={ref} // Set the intersection observer ref
        >
            {props.children}
        </motion.div>
    );
};

export default ScrollTop;
