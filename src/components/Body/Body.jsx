import React, { useContext } from 'react';

import PortfolioContext from '../../context/context';

import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Body = () => {
  const { bodySelection } = useContext(PortfolioContext);

  return bodySelection === 'skills' ? <Skills /> : <Projects />;
};

export default Body;
