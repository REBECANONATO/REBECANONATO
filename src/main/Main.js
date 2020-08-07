import React from 'react';
import Header from '../controllers/Header';
import Footer from '../controllers/Footer';
import TopPage from '../controllers/TopPage';
import Gretting from '../controllers/Greeting';
import Skills from '../controllers/Skills';
import Projects from '../controllers/Projects';
import Contact from '../controllers/Contact';


function Main() {
    return (
        <>
            <Header />
            <Gretting />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <TopPage />
        </>
    );
  }

export default Main;