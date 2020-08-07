import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Social from '../Social';
import GreetingImg from '../../assets/Coding-amico.svg';

import { Container, GrettingTextDiv, GrettingImgDiv, GrettingButtonDiv } from './styles';

function Greeting () {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container>
        <GrettingTextDiv>
          <h1>Oi, sou Rebeca Nonato</h1>
          <p>
            Analista de Sistemas, desenvolvedora de software.<br />
            Amo livros, músicas, animes, filmes, jogos, desafios de lógicas e programação.
            Sempre estudando, aprendendo e ensinando.
          </p>
          <span>"A persistência é o caminho do êxito." Charles Chaplin</span>
          
          <Social />
          <GrettingButtonDiv>
                <form>
                    <a href="#contact" class="button">
                        Contato
                    </a>
                </form>
          </GrettingButtonDiv>
        </GrettingTextDiv>
        
        <GrettingImgDiv>
          <img src={GreetingImg} alt="gretting" />
        </GrettingImgDiv>
      </Container>
    </Fade>
  );
}

export default Greeting;
