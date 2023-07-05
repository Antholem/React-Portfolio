import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { MdEmail, MdPhone, MdLocationPin, MdOutlineClose } from 'react-icons/md';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';
import clipboardCopy from 'clipboard-copy';
import { motion, AnimatePresence } from 'framer-motion';

const Snackbar = ({ message, onClose }) => {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 667) {
                setScreenSize('sm');
            } else {
                setScreenSize('md');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let containerClassName = 'fixed bottom-4 left-4';
    let contentClassName = 'bg-black text-sm text-white py-2 px-4 rounded-md';

    if (screenSize === 'sm') {
        containerClassName = 'fixed bottom-2 left-0 w-full';
        contentClassName += ' mx-2';
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.2 }}
            className={containerClassName}
        >
            <div className={contentClassName}>
                <div className='flex items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                        <div className='text-green-500'>
                            <HiCheckCircle />
                        </div>
                        <div>
                            {message}
                        </div>
                    </div>
                    <div>
                        <MdOutlineClose className='cursor-pointer hover:text-designColor duration-300' onClick={onClose} />
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

const LeftContact = () => {
    const [tooltipText, setTooltipText] = useState('');
    const [copied, setCopied] = useState('');
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    const handleCopyClick = (text) => {
        clipboardCopy(text);
        setTooltipText('Text copied to clipboard');
        setCopied(text);
        setSnackbarMessage('Text copied to clipboard');
        setShowSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
        setSnackbarMessage('');
    };

    useEffect(() => {
        if (showSnackbar) {
            const timer = setTimeout(() => {
                setShowSnackbar(false);
                setSnackbarMessage('');
            }, 4000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showSnackbar]);

    return (
        <div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 flex flex-col gap-8 justify-center">
            <AnimatePresence>
                {showSnackbar && (
                    <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />
                )}
            </AnimatePresence>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <h3 className="text-3xl font-bold text-white">
                        Get in Touch
                    </h3>
                    <p className="text-base text-gray-400 tracking-wide mb-2">
                        I'm available to answer any questions or discuss potential collaborations.
                    </p>
                </div>
                <div className='flex flex-col gap-10'>
                    <p className='text-base text-gray-400 flex flex-col items-start gap-2'>
                        <p className="text-sm text-white uppercase tracking-wide">
                            Contact
                        </p>
                        <div className='flex flex-row gap-6 items-center'>
                            <span className='text-designColor'>
                                <MdPhone />
                            </span>
                            <div className='flex flex-row gap-2 items-center'>
                                <span className='text-base text-gray-400 tracking-wide'>
                                    +63 977 333 6314
                                </span>
                                {copied === '+639773336314' ? (
                                    <LuCopyCheck
                                        onClick={() => handleCopyClick('+639773336314')}
                                        className="cursor-pointer text-green-500"
                                    />
                                ) : (
                                    <LuCopy
                                        onClick={() => handleCopyClick('+639773336314')}
                                        className="cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>
                    </p>
                    <p className='text-base text-gray-400 flex flex-col items-start gap-2'>
                        <p className="text-sm text-white uppercase tracking-wide">
                            Email
                        </p>
                        <div className='flex flex-row gap-6 items-center'>
                            <span className='text-designColor'>
                                <MdEmail />
                            </span>
                            <div className='flex flex-row gap-2 items-center'>
                                <span className='text-base text-gray-400 tracking-wide'>
                                    antholemlemmanalo@gmail.com
                                </span>
                                {copied === 'antholemlemmanalo@gmail.com' ? (
                                    <LuCopyCheck
                                        onClick={() => handleCopyClick('antholemlemmanalo@gmail.com')}
                                        className="cursor-pointer text-green-500"
                                    />
                                ) : (
                                    <LuCopy
                                        onClick={() => handleCopyClick('antholemlemmanalo@gmail.com')}
                                        className="cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>
                    </p>
                    <p className='text-base text-gray-400 flex flex-col items-start gap-2'>
                        <p className="text-sm text-white uppercase tracking-wide">
                            Location
                        </p>
                        <div className='flex flex-row gap-6 items-center'>
                            <span className='text-designColor'>
                                <MdLocationPin />
                            </span>
                            <span className='text-base text-gray-400 tracking-wide'>
                                Mabalacat, Pampanga, Philippines
                            </span>
                        </div>
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-base text-gray-400 flex flex-col items-start gap-2'>
                        <p className="text-sm text-white uppercase tracking-wide">
                            Find me in
                        </p>
                        <div>
                            <div className='flex gap-4'>
                                <a
                                    href="https://www.facebook.com"
                                    target='_blank'
                                    className="bannerIcon"
                                    onMouseEnter={() => handleMouseEnter('Facebook')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaFacebookF />
                                    {tooltipText === 'Facebook' && <div className="tooltip">Lem Garcia</div>}
                                </a>
                                <a
                                    href="https://github.com"
                                    target='_blank'
                                    className="bannerIcon"
                                    onMouseEnter={() => handleMouseEnter('Github')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaGithub />
                                    {tooltipText === 'Github' && <div className="tooltip">Antholem</div>}
                                </a>
                                <a
                                    href="https://www.linkedin.com"
                                    target='_blank'
                                    className="bannerIcon"
                                    onMouseEnter={() => handleMouseEnter('LinkedIn')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaLinkedinIn />
                                    {tooltipText === 'LinkedIn' && <div className="tooltip">Sam Antholem Manalo</div>}
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target='_blank'
                                    className="bannerIcon"
                                    onMouseEnter={() => handleMouseEnter('Instagram')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FaInstagram />
                                    {tooltipText === 'Instagram' && <div className="tooltip">garcia.lemmie</div>}
                                </a>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftContact;
