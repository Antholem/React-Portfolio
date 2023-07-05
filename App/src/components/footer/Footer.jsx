import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Logo } from '../../assets/images';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-[#141518]'>
            <div className="w-full py-6 h-auto  border-b-[1px] border-b-black flex flex-col items-center gap-3 justify-center">
                <img className="w-16 mb-4" src={Logo} alt="Logo" />
                <div className="flex gap-8">
                    <a
                        className='hover:text-designColor duration-300 cursor-pointer'
                        href="https://www.facebook.com"
                        target='_blank'
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        className='hover:text-designColor duration-300 cursor-pointer'
                        href="https://github.com"
                        target='_blank'
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        className='hover:text-designColor duration-300 cursor-pointer'
                        href="https://www.linkedin.com"
                        target='_blank'
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                    <a
                        className='hover:text-designColor duration-300 cursor-pointer'
                        href="https://www.instagram.com"
                        target='_blank'
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
            <div className="w-full py-6">
                <p className="text-center text-gray-500 text-base">
                    © {currentYear}. All rights reserved by Sam Manalo
                </p>
            </div>
        </div>
    );
};

export default Footer;
