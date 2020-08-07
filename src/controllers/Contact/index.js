import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Social from '../Social';
import ContactImg from '../../assets/Messages-amico.svg';

import { Container, ContactImgDiv, ContactDiv } from './styles';

export default class Contact extends React.Component {

    render(){
        return(
            <Fade direction="top" delay={500} triggerOnce>
                <Container id="contact">
                    <ContactDiv>
                        <h1>Mais sobre mim:</h1>
                        <p>Rebeca Nonato, 30 anos, casada.<br />
                            Residente atual da cidade de Lavras-MG.<br /><br />
                            Aberta a oportunidades: <b>Sim</b><br />
                            Aberta a mudança de local: <b>Sim</b><br />
                        </p><br />
                        <h1>Entre em contato:</h1>
                        <p>
                            <a href="tel:31994298913">+55 (31) 99429-8913</a>
                        </p>

                        <p>
                            <a href="mailto:rebecanonato89@gmail.com">rebecanonato89@gmail.com</a>
                        </p>
                        <Social />       
                    </ContactDiv>
                    <ContactImgDiv>
                        <img src={ContactImg} alt="Imagem de contato" />
                    </ContactImgDiv>
                </Container>
                </Fade>
        );
    }
}