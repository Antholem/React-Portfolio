import React, { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Background } from '../../assets/images';

const Card = (props) => {
    const [tooltipText, setTooltipText] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevImage) => (prevImage + 1) % props.src.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [props.src.length]);

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    const cardStyles = {
        background: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='w-full p-4 bg-card xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col group'>
            <div className={`w-full h-[80%] bg-bodyColor overflow-hidden rounded-lg gradient-div ${props.background}`}>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    transition={{ duration: 2 }} 
                    unmountOnExit
                >
                    <motion.div 
                        key={currentImageIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        transition={{ duration: 2 }}
                    >
                        <motion.img
                            className='w-full h-60 object-cover hover:scale-110 duration-300'
                            src={props.src[currentImageIndex]}
                            alt={props.title}
                            transition={{ duration: 2 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className='w-full mt-5 flex flex-col gap-6'>
                <div>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-base text-designColor font-normal'>{props.title}</h3>
                        <div className='flex gap-2'>
                            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer relative'>
                                <a
                                    href={props.github}
                                    target='_blank'
                                    onMouseEnter={() => handleMouseEnter('Source Code')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <BsGithub />
                                    {tooltipText === 'Source Code' && <div className='tooltip'>Source Code</div>}
                                </a>
                            </span>
                            <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer relative'>
                                <a
                                    href={props.site}
                                    target='_blank'
                                    onMouseEnter={() => handleMouseEnter('Website')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaGlobe />
                                    {tooltipText === 'Website' && <div className='tooltip'>Website</div>}
                                </a>
                            </span>
                        </div>
                    </div>
                    <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{props.desc}</p>
                    <p className='text-sm text-right text-gray-500 tracking-wide mt-3'>{props.date}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;