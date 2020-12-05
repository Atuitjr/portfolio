import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className='title'>
                    <Hide>
                        <motion.h2>I work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact me to develop any idea.</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={home1} alt='A guy'></img>
            </Image>
        </About>
    );
};

export default AboutSection;
