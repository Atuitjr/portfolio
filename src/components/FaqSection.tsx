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
                <Toggle title='how do i start?'>
                    <div className='answer'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='Daily schedule.'>
                    <div className='answer'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='What technologies do i use.'>
                    <div className='answer'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Toggle>
                <Toggle title='What can i offer.'>
                    <div className='answer'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    );
};

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
