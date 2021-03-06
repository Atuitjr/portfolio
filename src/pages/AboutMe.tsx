import React from 'react';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import FaqSection from '../components/FaqSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const AboutMe = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <AboutSection />
            <ProjectsSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
};

export default AboutMe;
