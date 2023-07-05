import { Project1, Project2, Project3, Mobile1, Mobile2 } from '../../assets/images';

const projects = [
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

const getTimeDifference = (date) => {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) {
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours < 24) {
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 30) {
        if (days === 1) {
            return 'yesterday';
        }
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    if (months < 12) {
        if (months === 1) {
            return 'last month';
        }
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    }

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
    return `on ${formattedDate}`;
};


export default { projects, getTimeDifference };