import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className='title'>
                    <Hide>
                        <h2>I work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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
