import { Project1, Project2, Project3, Mobile1, Mobile2 } from '../../assets/images';

const projectLists = [
    {
        title: 'Learn Type',
        desc: 'Static Single Page Application Using HTML, CSS, and VanillaJS from Scratch',
        src: [Project1, Mobile1],
        date: new Date(2023, 3, 14, 12, 35, 32),
        site: 'https://learn-type.vercel.app/',
        github: 'https://github.com/Antholem/Learn-Type'
    },
    {
        title: 'PokéAPI',
        desc: 'Restful API Application Using ReactJS and Material UI',
        src: [Project2, Mobile2],
        date: new Date(2023, 4, 22, 4, 30, 15),
        site: 'https://poke-api-2023.vercel.app/',
        github: 'https://github.com/Antholem/PokeAPI'
    },
    {
        title: 'Learn Type',
        desc: 'Static Single Page Application Using HTML, CSS, and JavaScript from Scratch',
        src: [Project3, Mobile2],
        date: new Date(2023, 5, 16, 23, 34, 45),
        site: 'https://learn-type.vercel.app/',
        github: 'https://github.com/Antholem/Learn-Type'
    }
];

export default projectLists;