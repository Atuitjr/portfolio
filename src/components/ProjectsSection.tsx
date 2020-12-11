import React from 'react';
import react from '../img/react.svg';
import vue from '../img/vue.svg';
import javascript from '../img/javascript.svg';
import html from '../img/html.svg';
import home2 from '../img/htmlCode.png';

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
                    High <span>quality</span> projects made in:
                </h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                            <SvgStyled src={react} alt='React' />
                            <h3>React. JS</h3>
                        </div>
                        <p>A javascript library.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <SvgStyled src={html} alt='HTML' />
                            <h3>HTML</h3>
                        </div>
                        <p>HyperText Markup Language.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <SvgStyled src={vue} alt='Vue' />
                            <h3>Vue. Js</h3>
                        </div>
                        <p>A Javascript framework.</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <SvgStyled src={javascript} alt='JS' />
                            <h3>Javascript</h3>
                        </div>
                        <p>Es6 standard Javascript.</p>
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

const SvgStyled = styled.img`
    width: 3rem;
    height: 3rem;
`;

export default ProjectsSection;
