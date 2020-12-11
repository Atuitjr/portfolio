import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';

import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <FAQ
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <h2>
                Any questions <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title='Tell us a bit about you.'>
                    <div className='answer'>
                        <p>
                            I'm Alberto Tuit, a fullstack developer sited in
                            Asturias (Northern Spain). Born in Terneuzen (The
                            Netherlands), and raised up in Spain.
                        </p>
                        <p>
                            Passionate about developing solutions for others i
                            started studying web development. Nowadays i Work
                            in:
                        </p>
                        <ul>
                            <p>Front End:</p>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>Vue (IN PROCESS)</li>
                            </ul>
                            <p>Back End:</p>
                            <ul>
                                <li>Node JS</li>
                                <li>Python</li>
                            </ul>
                        </ul>
                    </div>
                </Toggle>
                <Toggle title='What can i offer.'>
                    <div className='answer'>
                        <p>
                            I can offer years of background experience. See my
                            personal projects for more information.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='How can you contact me.'>
                    <div className='answer'>
                        <p>
                            You can visit me via my{' '}
                            <AStyle
                                href='https://www.linkedin.com/in/alberto-tuit-jara/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                LinkedIn
                            </AStyle>{' '}
                            page. Or sending me a e-mail to:
                            albertotuitjara@gmail.com.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    );
};

const AStyle = styled.a`
    text-decoration: none;
    color: #23d977;
`;

const FAQ = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding: 2rem;
        font-weight: lighter;
    }
    .faqLine {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
