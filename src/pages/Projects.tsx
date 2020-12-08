import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import portfolio from '../img/athlete-small.png';
import musicPlayer from '../img/reactMusicPlayer.png';
import spotifyProfile from '../img/spotifyProfile.png';
import { motion } from 'framer-motion';
import {
    pageAnimation,
    fadeAnim,
    photoAnim,
    lineAnim,
    sliderAnim,
    sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';
import { scrollReveal } from '../animation';
import ScrollTop from '../components/ScrollTop';

const Projects = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
            style={{ background: '#eeebeb' }}
        >
            <ScrollTop />
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnim} />
                <Frame2 variants={sliderAnim} />
                <Frame3 variants={sliderAnim} />
                <Frame4 variants={sliderAnim} />
            </motion.div>
            <Project>
                <motion.h2 variants={fadeAnim}>Portfolio</motion.h2>
                <motion.div variants={lineAnim} className='line'></motion.div>
                <Link to='/projects/portfolio'>
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={portfolio}
                            alt='portfolio'
                        />
                    </Hide>
                </Link>
            </Project>
            <Project
                variants={scrollReveal}
                animate={controls}
                initial='hidden'
                ref={element}
            >
                <h2>React Music player</h2>
                <motion.div variants={lineAnim} className='line'></motion.div>
                <Link to='/projects/musicPlayer'>
                    <img src={musicPlayer} alt='musicPlayer' />
                </Link>
            </Project>
            <Project
                variants={scrollReveal}
                animate={controls2}
                initial='hidden'
                ref={element2}
            >
                <h2>Spotify Profile</h2>
                <motion.div variants={lineAnim} className='line'></motion.div>
                <Link to='/projects/spotifyProfile'>
                    <img src={spotifyProfile} alt='spotifyProfile' />
                </Link>
            </Project>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff83fb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default Projects;
