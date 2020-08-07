import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaDocker } from 'react-icons/fa';
import { DiPostgresql, DiAngularSimple, DiDotnet, 
    DiGithubAlt, DiNpm, DiTrello, DiVisualstudio } from 'react-icons/di';
  
import SkillImg from '../../assets/JavaScript-frameworks-amico.svg';

import { Container, SkillImgDiv, SkillsDiv, Icon, GrettingButtonDiv } from './styles';

function Skills() {
  return (
    <Fade direction="right" delay={500} triggerOnce>
      <Container id="skills">
        <SkillImgDiv>
          <img src={SkillImg} alt="developer activity" />
        </SkillImgDiv>
        <SkillsDiv>
          <h1>Skills</h1>
          <p>Atualmente Trabalho com:</p>
            <Icon>
                <li id="html5" title="Html5">
                    <FaHtml5 />
                </li>
                <li id="css3" title="CSS3">
                    <FaCss3 />
                </li>
                <li id="javaScript" title="JavaScript">
                    <FaJs />
                </li>
                <li id="angular" title="Angular">
                    <DiAngularSimple />
                </li>
                <li id="dotNet" title="dotNet">
                    <DiDotnet />
                </li>
                <li id="postgres" title="Postgres">
                    <DiPostgresql />
                </li>
            </Icon>
            <p>Tenho estudado, participado de Bootcamps e feito projetos com:</p>
            <Icon>
                <li id="nodeJs" title="NodeJS">
                    <FaNodeJs />
                </li>
                <li id="react" title="React">
                    <FaReact />
                </li>
                <li id="docker" title="Docker">
                    <FaDocker />
                </li>
            </Icon>
            <p>Todos os projetos utilizando:</p>
            <Icon>
                <li id="gitLab" title="GitLab">
                    <DiGithubAlt />
                </li>
                <li id="npm" title="Npm">
                    <DiNpm />
                </li>
                <li id="trello" title="Trello ou Taiga">
                    <DiTrello />
                </li>
                <li id="visualStudio" title="Visual Studio Code">
                    <DiVisualstudio />
                </li>
            </Icon>
            <GrettingButtonDiv>
                <form>
                    <a target="_blank" rel="noopener noreferrer" title="GitHub" href="https://github.com/REBECANONATO" class="button">
                        Veja os projetos no meu GitHub
                    </a>
                </form>
            </GrettingButtonDiv>
        </SkillsDiv>
      </Container>
    </Fade>
  );
};

export default Skills;