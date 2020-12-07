import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import styled from 'styled-components';
import { useScroll } from './useScroll';

import { scrollReveal } from '../animation';

import { About, Description, Image } from '../styles';

const ProjectsSection = () => {
    const [element, controls] = useScroll();
    return (
        <Projects
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <h2>
                    High <span>quality</span> projects
                </h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                            <img src={clock} alt='a clock' />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={teamwork} alt='teamwork' />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={diaphragm} alt='diaphragm' />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={money} alt='money' />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt='second home' />
            </Image>
        </Projects>
    );
};

const Projects = styled(About)`
    h2 {
        padding-bottom: 2rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ProjectsSection;
