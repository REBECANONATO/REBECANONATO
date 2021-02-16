import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { Container, ProjectsTextDiv } from './styles';

function Projects() {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container id="projects">
        <ProjectsTextDiv>
          <h1>Realizações e Conquistas</h1>
          <section class="profile-container">
            <ul id="itemContainer">

              <li>
                <strong>Digital Innovation</strong>
                <p>Bootcamp Online - Desenvolvedor Full Stack</p>
                <h3>2021 - Em Andamento</h3>
              </li>
              <li>
                <strong>RocketSeat</strong>
                <p>Bootcamp Online - Desenvolvedor Full Stack</p>
                <h3>2021 - Em Andamento</h3>
              </li>
              <li>
                <strong>IGTI</strong>
                <p>Bootcamp Online - Desenvolvedor Full Stack</p>
                <h3>2020</h3>
              </li>
              <li>
                <strong>Gama Academy</strong>
                <p>Desenvolvimento Full Stack</p>
                <h3>2020</h3>
              </li>
              <li>
                <strong>Projeto Minas Bike</strong>
                <p>Desenvolvimento de um projeto de controle de estoque e cadastro de cliente.</p>
                <h3>2020</h3>
              </li>
              <li>
                <strong>Projeto DreamLife</strong>
                <p>Projeto de uma página de viagens, cadastros de hotéis, cidades. Crud completo em C#, Angular e Posgres.</p>
                <h3>2019</h3>
              </li>
              <li>
                <strong>Certificado Scrum</strong>
                <p>Scrum Fundamentals Certified</p>
                <h3>2018</h3>
              </li>
              <li>
                <strong>Certificado ITIL® </strong>
                <p>Foundation Certificate in IT Service Management</p>
                <h3>2017</h3>
              </li>
              <li>
                <strong>Publicação Ipea </strong>
                <p>Inovação aberta no setor público</p>
                <h3>2017</h3>
              </li>
              <li>
                <strong>Mestrado</strong>
                <p>UFLA - Mestrado em Engenharia de Sistemas e Automação</p>
                <h3>2014</h3>
              </li>
              <li>
                <strong>Publicação Healthcare Technology Letters </strong>
                <p>Non-invasive method to analyse the risk of developing diabetic foot</p>
                <h3>2014</h3>
              </li>
              <li>
                <strong>Publicação Revista da Universidade Vale do Rio Verde </strong>
                <p>Development of a Help Desk System for the University Vale do Rio Verde</p>
                <h3>2013</h3>
              </li>
              <li>
                <strong>Bacharel</strong>
                <p>Anhanguera - Bacharel em Sistemas de Informação</p>
                <h3>2012</h3>
              </li>
            </ul>
          </section>
        </ProjectsTextDiv>
      </Container>
    </Fade>
  );
}

export default Projects;
