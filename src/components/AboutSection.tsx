import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fadeAnim, photoAnim } from '../animation';
import { Link } from 'react-router-dom';
import Wave from './Wave';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            I work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fadeAnim}>
                    Contact me if you have any idea.
                </motion.p>
                <motion.button variants={fadeAnim}>
                    <StyledLink to='/contact'>Contact me</StyledLink>
                </motion.button>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt='A guy'
                ></motion.img>
            </Image>
            <Wave />
        </About>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export default AboutSection;
