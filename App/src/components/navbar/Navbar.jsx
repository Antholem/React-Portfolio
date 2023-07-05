import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Logo } from '../../assets/images';
import { navLinksData } from '../../constants/NavLinks';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className="w-full h-20 lgl:h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont shadow-shadowOne px-2 md:px-10">
            <div>
                <img src={Logo} alt="Logo" className="w-12 lgl:w-16 h-auto" />
            </div>
            <div>
                <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
                    {navLinksData.map((nav) => (
                        <li
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={nav._id}
                        >
                            <Link
                                activeClass="active"
                                to={nav.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <span
                onClick={openMenu}
                className="text-2xl md:hidden inline-flex items-center justify-center rounded-full cursor-pointer"
            >
                <FiMenu />
            </span>

            <div
                className={`md:hidden fixed inset-0 bg-[#141518] transition-transform duration-500 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'
                    } flex justify-center items-center`}
            >
                <div className="w-[100%] h-screen overflow-scroll p-4 scrollbar-hide flex flex-col gap-12 py-8 relative">
                    <div
                        onClick={closeMenu}
                        className="text-gray-400 w-6 flex justify-center items-center hover:text-designColor duration-300 text-2xl cursor-pointer"
                    >
                        <MdClose />
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <img src={Logo} alt="Logo" className="w-16 h-auto" />
                    </div>
                    <ul className="flex flex-col gap-6">
                        {navLinksData.map((nav) => (
                            <li
                                key={nav._id}
                                className="text-base font-normal text-center text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            >
                                <Link
                                    activeClass="active"
                                    to={nav.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center gap-4">
                        <div>
                            <FaFacebookF />
                        </div>
                        <div>
                            <FaGithub />
                        </div>
                        <div>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;