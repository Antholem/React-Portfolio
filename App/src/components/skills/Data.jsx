import { FaReact, FaNodeJs, FaAngular } from 'react-icons/fa';
import { SiMui, SiTailwindcss, SiBootstrap, SiJavascript, SiCss3, SiMongodb, SiExpress, SiHtml5 } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const skills = [
    {
        name: 'HTML5',
        icon: <SiHtml5 />,
        color: 'text-[#e34c26]'
    },
    {
        name: 'CSS3',
        icon: <SiCss3 />,
        color: 'text-[#264de4]'
    },
    {
        name: 'ES6',
        icon: <SiJavascript />,
        color: 'text-[#f2ec3d]'
    },
    {
        name: 'Material UI',
        icon: <SiMui />,
        color: 'text-[#007fff]'
    },
    {
        name: 'Tailwind',
        icon: <SiTailwindcss />,
        color: 'text-[#17bdcd]'
    },
    {
        name: 'Bootstrap',
        icon: <SiBootstrap />,
        color: 'text-[#8a25e8]'
    },
    {
        name: 'ReactJS',
        icon: <FaReact />,
        color: 'text-[#61DAFB]'
    },
    {
        name: 'AngularJs',
        icon: <FaAngular />,
        color: 'text-[#e6373d]'
    },
    {
        name: 'NodeJs',
        icon: <FaNodeJs />,
        color: 'text-[#68A063]'
    },
    {
        name: 'ExpressJs',
        icon: <SiExpress />,
        color: 'text-[#ffffff]'
    },
    {
        name: 'MySQL',
        icon: <GrMysql />,
        color: 'text-[#f5a031]'
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        color: 'text-[#4DB33D]'
    },
];

export default skills;