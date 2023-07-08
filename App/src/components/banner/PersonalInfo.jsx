import React from 'react';
import { GoLinkExternal } from 'react-icons/go';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Resume } from '../../assets/images';
import IconMedia from './IconMedia';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Software Engineer.', 'React Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const openResume = () => {
        window.open(Resume, '_blank');
    };

    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-10 lgl:gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-sm lgl:text-lg font-normal uppercase text-center lgl:text-left'>Hello World!</h4>
                <h1 className='text-4xl lgl:text-6xl font-bold text-white text-center lgl:text-left'>
                    I'm{' '}
                    <span className='text-designColor capitalize text-center lgl:text-left'>Sam Manalo</span>
                </h1>
                <h2 className='text-2xl lgl:text-4xl font-bold text-white text-center lgl:text-left'>
                    <span>{text}</span>
                    <Cursor cursorBlinking='false' cursorStyle='|' cursorColor='#ff014f' />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide text-center lgl:text-left'>
                    A highly motivated Software Engineer and React Developer who thrives on building visually stunning and user-friendly websites. With a comprehensive skill set encompassing HTML5, CSS3, ES6+, and React.js, I specialize in creating captivating online experiences.
                </p>
                <div className='flex justify-center lgl:justify-start items-center'>
                    <button
                        className='w-auto px-10 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 border-[1px] hover:border-designColor border-transparent flex items-center' // Added flex and items-center classes
                        onClick={openResume}
                    >
                        <GoLinkExternal className='text-white mr-2' />
                        Resume
                    </button>
                </div>
            </div>
            <IconMedia />
        </div>
    );
};

export default LeftBanner;
