import React from 'react';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {LeftSection} from './HeroStyles';

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br/>
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    Hi there and welcome to my portfolio!<br/>
                    Explore my <a target='_blank' href="https://github.com/AllaShestak"> github</a> page to see more pojects.
                </SectionText>
                {/* <Button onClick={props.handleClick}>Learn More</Button>*/}
            </LeftSection>
        </Section>
    </>
);

export default Hero;
