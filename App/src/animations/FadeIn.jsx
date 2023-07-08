import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = (props) => {
    const animationVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1, // Adjust the duration as desired
            },
        },
    };

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={animationVariants}
        >
            {props.children}
        </motion.div>
    );
};

export default FadeIn;
