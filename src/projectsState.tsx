//Import Images
import portfolioIm from './img/portfolio.png';
import musicPlayer from './img/reactMusicPlayer.png';
import spotifyProfile from './img/spotifyProfile.png';
import portfolioIm2 from './img/portfolio2.png';
import musicPlayer2 from './img/reactMusicPlayer2.png';
import spotifyProfile2 from './img/spotifyProfile2.png';
import react from './img/react.svg';
import typescript from './img/typescript.svg';
import html from './img/html.svg';
import javascript from './img/javascript.svg';
import sass from './img/sass.svg';

export const ProjectState = () => {
    return [
        {
            title: 'The portfolio v1.',
            mainImg: portfolioIm,
            secondaryImg: portfolioIm2,
            url: '/projects/portfolio',
            build: 'React',
            buildIcon: react,
            languages: [
                {
                    title: 'Typescript.',
                    description: '“75%”',
                    icon: typescript,
                },
                {
                    title: 'HTML.',
                    description: '“x%”',
                    icon: html,
                },
                {
                    title: 'SASS.',
                    description: '“z%”',
                    icon: sass,
                },
            ],
        },
        {
            title: 'React Music player',
            mainImg: musicPlayer,
            url: '/projects/musicPlayer',
            secondaryImg: musicPlayer2,
            build: 'React',
            buildIcon: react,
            languages: [
                {
                    title: 'Typescript.',
                    description: '“69.5%”',
                    icon: typescript,
                },
                {
                    title: 'HTML.',
                    description: '“10.1%”',
                    icon: html,
                },
                {
                    title: 'SASS.',
                    description: '“20.4%”',
                    icon: sass,
                },
            ],
        },
        {
            title: 'Spotify Profile',
            mainImg: spotifyProfile,
            url: '/projects/spotifyProfile',
            secondaryImg: spotifyProfile2,
            build: 'React',
            buildIcon: react,
            languages: [
                {
                    title: 'Typescript.',
                    description: '“89.3%”',
                    icon: typescript,
                },
                {
                    title: 'HTML.',
                    description: '“5.2%”',
                    icon: html,
                },
                {
                    title: 'Javascript.',
                    description: '“5.5%”',
                    icon: javascript,
                },
            ],
        },
    ];
};
