import React, { useState } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';
import { Container } from './styles';

function TopPage() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Container
      style={{
        color: '#BA68C8',
        display: showScroll ? 'flex' : 'none',
      }}
    >
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} size={40} />
    </Container>
  );
};

export default TopPage;
