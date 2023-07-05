import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss, SiMui } from 'react-icons/si';

const Media = () => {
    const [tooltipText, setTooltipText] = useState('');

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between items-center lgl:items-start">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4 text-center lgl:text-left">
                    Find me in
                </h2>
                <div className="flex gap-4">
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
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4 text-center lgl:text-left">
                    Top Skills
                </h2>
                <div className="flex gap-4">
                    <span
                        className="bannerIcon"
                        onMouseEnter={() => handleMouseEnter('React')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FaReact />
                        {tooltipText === 'React' && <div className="tooltip">ReactJs</div>}
                    </span>
                    <span
                        className="bannerIcon"
                        onMouseEnter={() => handleMouseEnter('Tailwind CSS')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <SiTailwindcss />
                        {tooltipText === 'Tailwind CSS' && <div className="tooltip">Tailwind CSS</div>}
                    </span>
                    <span
                        className="bannerIcon"
                        onMouseEnter={() => handleMouseEnter('Node.js')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FaNodeJs />
                        {tooltipText === 'Node.js' && <div className="tooltip">NodeJs</div>}
                    </span>
                    <span
                        className="bannerIcon"
                        onMouseEnter={() => handleMouseEnter('Material-UI')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <SiMui />
                        {tooltipText === 'Material-UI' && <div className="tooltip">Material UI</div>}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;
    