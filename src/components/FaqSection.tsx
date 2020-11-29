import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
    return (
        <FAQ>
            <h2>
                Any questions <span>FAQ</span>
            </h2>
            <div className='question'>
                <h4>how do i start?</h4>
                <div className='answer'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className='faqLine' />
            </div>
            <div className='question'>
                <h4>Daily schedule.</h4>
                <div className='answer'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className='faqLine' />
            </div>
            <div className='question'>
                <h4>What technologies do i use.</h4>
                <div className='answer'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className='faqLine' />
            </div>
            <div className='question'>
                <h4>What can i offer.</h4>
                <div className='answer'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                </div>
                <div className='faqLine' />
            </div>
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
