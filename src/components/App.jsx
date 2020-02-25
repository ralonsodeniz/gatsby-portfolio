import React, { useState, useEffect } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  skillsData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

library.add(fas, fab, far);

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [dataLoading, setDataLoading] = useState(true);

  const isObjectEmpty = object => {
    return Object.entries(object).length === 0 && object.constructor === Object ? true : false;
  };

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setSkills({ ...skillsData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  useEffect(() => {
    if (
      !isObjectEmpty(hero) &&
      !isObjectEmpty(about) &&
      !isObjectEmpty(skills) &&
      !isObjectEmpty(projects) &&
      !isObjectEmpty(contact) &&
      !isObjectEmpty(footer)
    ) {
      setDataLoading(false);
    }
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, skills, projects, contact, footer }}>
      {dataLoading ? null : (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </PortfolioProvider>
  );
}

export default App;
