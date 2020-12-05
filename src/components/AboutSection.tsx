import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim, fadeAnim, photoAnim } from '../animation';
import Wave from './Wave';

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
                    Contact me to develop any idea.
                </motion.p>
                <motion.button variants={fadeAnim}>Contact me</motion.button>
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

export default AboutSection;
