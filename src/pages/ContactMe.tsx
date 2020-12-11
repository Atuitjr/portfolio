import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import { Hide } from '../styles';
import ScrollTop from '../components/ScrollTop';

const ContactMe = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
            style={{ background: '#eeebeb' }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle /> <h2>Send me a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle /> <h2>Send me an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <AStyle
                            href='https://www.linkedin.com/in/alberto-tuit-jara/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <h2>LinkedIn</h2>
                        </AStyle>
                    </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
        margin-top: 5rem;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    min-width: 3rem;
    min-height: 3rem;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

const AStyle = styled.a`
    text-decoration: none;
    color: #353535;
`;

export default ContactMe;
