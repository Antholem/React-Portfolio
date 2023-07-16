import { Project1, Project2, Project3, Mobile1, Mobile2, Mobile3 } from '../../assets/images';

const projectLists = [
    {
        title: 'Learn Type',
        desc: 'A Static Single Page Application that built entirely from Scratch Using HTML, CSS, and VanillaJS',
        src: [Project1, Mobile1],
        date: new Date(2023, 3, 14, 12, 35, 32),
        site: 'https://learn-type.vercel.app/',
        github: 'https://github.com/Antholem/Learn-Type'
    },
    {
        title: 'PokéAPI',
        desc: 'A Restful Pokémon API Application Using ReactJS and Material UI with customizable.',
        src: [Project2, Mobile2],
        date: new Date(2023, 4, 22, 4, 30, 15),
        site: 'https://poke-api-2023.vercel.app/',
        github: 'https://github.com/Antholem/PokeAPI'
    },
    {
        title: 'CryptCoin',
        desc: 'Real-time cryptocurrency app using ReactJS and Tailwind with Coingecko API for live data and dynamic routing.',
        src: [Project3, Mobile3],
        date: new Date(2023, 5, 16, 23, 34, 45),
        site: 'https://crypt-coin.vercel.app/',
        github: 'https://github.com/Antholem/Crypt-Coin'
    }
];

export default projectLists;