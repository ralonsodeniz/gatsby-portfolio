import React, { useState, useEffect } from 'react';
import { faServer, faDatabase, faBook, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faReact,
  faGithub,
  faLinkedin,
  faYarn,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Hero from './Hero/Hero';
import About from './About/About';
import Body from './Body/Body';
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

library.add(
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faReact,
  faGithub,
  faLinkedin,
  faYarn,
  faNpm,
  faServer,
  faDatabase,
  faBook,
  faAngleUp
);

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [bodySelection, setBodySelection] = useState('skills');

  const isObjectEmpty = object => {
    return Object.entries(object).length === 0 && object.constructor === Object;
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
  }, [hero, about, skills, projects, contact, footer]);

  return (
    <PortfolioProvider
      value={{ hero, about, skills, projects, contact, footer, bodySelection, setBodySelection }}
    >
      {dataLoading ? null : (
        <>
          <Hero />
          <About />
          <Body />
          <Contact />
          <Footer />
        </>
      )}
    </PortfolioProvider>
  );
}

export default App;
