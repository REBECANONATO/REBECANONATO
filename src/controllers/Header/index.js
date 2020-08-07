import React from 'react';
import { Fade, Flip } from 'react-awesome-reveal';
import { Container, Logo, Lista } from './styles';

function Header() {
    return (
        <Container>
            <Flip delay={1300} triggerOnce>
                <Logo>
                    <a href="/">
                        <h1> Rebeca Nonato </h1>
                    </a>
                </Logo>
            </Flip>
            <Fade direction="right" delay={1000} triggerOnce>
                <Lista>
                    <a href="#skills">
                        <li>Skills</li>
                    </a>
                    <a href="#projects">
                        <li>Realizações e Conquistas</li>
                    </a>
                    <a href="#contact">
                        <li>Contato</li>
                    </a>
                </Lista>
            </Fade>
    </Container>
    );
}
export default Header;