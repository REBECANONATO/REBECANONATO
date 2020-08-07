import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { Container, ProjectsTextDiv } from './styles';

function Projects () {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container id="projects">
        <ProjectsTextDiv>
          <h1>Realizações e Conquistas</h1>
          <section class="profile-container">
                <ul class="card" id="itemContainer">
                    <a href=" " class="button">
                      <li>
                        <strong>IGTI</strong>
                        <p>Bootcamp Online - Desenvolvedor Full Stack</p>
                        <strong>2020 - Em andamento</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://hiringcoders.gama.academy/" class="button">
                      <li>
                        <strong>Gama Academy</strong>
                        <p>Desenvolvimento Full Stack e Iniciante em VTEX</p>
                        <strong>2020 - Em andamento</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Devs-IO/MinasBike" class="button">
                      <li>
                        <strong>Projeto Minas Bike</strong>
                        <p>Desenvolvimento de um projeto de controle de estoque e cadastro de cliente.</p>
                        <strong>2020</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/REBECANONATO/DreamLife" class="button">
                      <li>
                        <strong>Projeto DreamLife</strong>
                        <p>Projeto de uma página de viagens, cadastros de hotéis, cidades. Crud completo em C#, Angular e Posgres.</p>
                        <strong>2019</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/18yzR2Zn4MPsBreEhE8y-lq_Nx9Nb2p_-/view?usp=sharing" class="button">
                      <li>
                        <strong>Certificado Scrum</strong>
                        <p>Scrum Fundamentals Certified</p>
                        <strong>2018</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1RTObr5O7P2VppD94atVMwrc8-kHOU-Em/view?usp=sharing" class="button"> 
                      <li>
                        <strong>Certificado ITIL® </strong>
                        <p>Foundation Certificate in IT Service Management</p>
                        <strong>2017</strong>
                      </li>
                    </a> 
                    <a target="_blank" rel="noopener noreferrer" href="http://repositorio.ipea.gov.br/bitstream/11058/8801/1/Inova%C3%A7%C3%A3o%20aberta.pdf" class="button">  
                      <li>
                        <strong>Publicação Ipea </strong>
                        <p>Inovação aberta no setor público</p>
                        <strong>2017</strong>
                      </li>
                    </a>
                    <a href=" " class="button">
                      <li>
                        <strong>Mestrado</strong>
                        <p>UFLA - Mestrado em Engenharia de Sistemas e Automação</p>
                        <strong>2014</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4611851/" class="button"> 
                      <li>
                        <strong>Publicação Healthcare Technology Letters </strong>
                        <p>Non-invasive method to analyse the risk of developing diabetic foot</p>
                        <strong>2014</strong>
                      </li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="http://periodicos.unincor.br/index.php/revistaunincor/article/view/972" class="button">  
                      <li>
                        <strong>Publicação Revista da Universidade Vale do Rio Verde </strong>
                        <p>Development of a Help Desk System for the University Vale do Rio Verde</p>
                        <strong>2013</strong>
                      </li>
                    </a>
                    <a href=" " class="button">
                      <li>
                        <strong>Bacharel</strong>
                        <p>Anhanguera - Bacharel em Sistemas de Informação</p>
                        <strong>2012</strong>
                      </li>
                    </a>
                </ul>
            </section>
        </ProjectsTextDiv>
      </Container>
    </Fade>
  );
}

export default Projects;
