import React from 'react';
import Timeline from './Timeline';
import { Fade } from 'react-awesome-reveal';

import { Container, ProjectsTextDiv } from './styles';

function Projects() {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container id="projects">
        <ProjectsTextDiv>
          <h1>Realizações e Conquistas</h1>
          <section class="profile-container">
            <Timeline />
          </section>
        </ProjectsTextDiv>
      </Container>
    </Fade>
  );
}

export default Projects;
