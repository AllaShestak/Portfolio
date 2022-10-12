import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+393715977296">+39 371 597 7296</LinkItem>
                    <LinkItem href="tel:+48572010847">+48 572 010 847</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:allashestack@gmail.com">
                        allashestack@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/AllaShestak">
                        <AiFillGithub size="3rem"/>
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/alla-shestak-64367519b/">
                        <AiFillLinkedin size="3rem"/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
