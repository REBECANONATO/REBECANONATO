import React from 'react';
import { Flip } from 'react-awesome-reveal';

import { Container } from './styles';

function Footer() {
  return (
    <Flip delay={1000} triggerOnce>
      <Container>
        <p> © Copyright 2020 Rebeca Nonato - All Rights Reserved</p>
      </Container>
    </Flip>
  );
}
export default Footer;