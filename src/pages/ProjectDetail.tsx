import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ProjectState } from '../projectsState';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    const [projects, setProjects] = useState(ProjectState);

    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        const currentProject = projects.filter(
            (stateProject: any) => stateProject.url === url
        );
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <Details
                    variants={pageAnimation}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                >
                    <ScrollTop />
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt={project.title} />
                    </HeadLine>
                    <BuildIn>
                        <BuildIcon
                            src={project.buildIcon}
                            alt={project.build}
                        />
                        <h3>{project.build}</h3>
                        <Line />
                    </BuildIn>
                    <Languages>
                        {project.languages.map((language: any) => (
                            <Language
                                key={language.title}
                                language={language}
                            />
                        ))}
                    </Languages>
                    <ImageDisplay>
                        <img src={project.secondaryImg} alt={project.title} />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const BuildIn = styled.div`
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20rem;
    margin: 5rem auto 0rem auto;
    h3 {
        font-size: 2rem;
    }
`;

const Languages = styled.div`
    min-height: 60vh;
    display: flex;
    margin: 0rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const Line = styled.div`
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
`;

const LanguageStyle = styled.div`
    padding: 5rem;
    .row {
        display: flex;
        justify-content: center;
    }
    h3 {
        font-size: 2rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const BuildIcon = styled.img`
    width: 5rem;
    height: 5rem;
`;

const LanguageIcon = styled.img`
    width: 3rem;
    height: 3rem;
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

const Language = ({ language }: any) => {
    return (
        <LanguageStyle>
            <div className='row'>
                <LanguageIcon src={language.icon} alt={language.title} />
                <h3>{language.title}</h3>
            </div>
            <Line />
            <p>{language.description}</p>
        </LanguageStyle>
    );
};

export default ProjectDetail;
