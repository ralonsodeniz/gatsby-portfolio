import React, { useContext, useEffect, useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuidv1 from 'uuid/v1';

import PortfolioContext from '../../context/context';

import Title from '../Title/Title';

import Firebase from '../../../assets/firebase.svg';
import Gatsby from '../../../assets/gatsby.svg';
import Redux from '../../../assets/redux.svg';
import Router from '../../../assets/router.svg';
import Typescript from '../../../assets/typescript.svg';
import Bundler from '../../../assets/bundler.svg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const svgObj = {
    firebase: Firebase,
    gatsby: Gatsby,
    redux: Redux,
    router: Router,
    typescript: Typescript,
    bundler: Bundler,
  };

  return (
    <section id="skills">
      <Container>
        <div className="skill-wrapper">
          <Title title="Skills" />
          {Object.entries(skills).map(category => {
            const [categoryTitle, categoryData] = category;

            return (
              <Fragment key={categoryTitle}>
                <Row>
                  <Col sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="skill-wrapper__text">
                        <h3 className="skill-wrapper__text-title">{categoryTitle}</h3>
                      </div>
                    </Fade>
                  </Col>
                </Row>
                {categoryData.map(skill => {
                  const { id, icon, icon2, iconType, name, description } = skill;

                  const faMarkup = icon2 ? (
                    <>
                      <FontAwesomeIcon size="7x" icon={[iconType, icon]} />
                      <FontAwesomeIcon
                        style={{ marginLeft: '20px' }}
                        size="7x"
                        icon={[iconType, icon2]}
                      />
                    </>
                  ) : (
                    <FontAwesomeIcon size="7x" icon={[iconType, icon]} />
                  );

                  const SvgIcon = iconType === 'svg' ? svgObj[icon] : null;

                  return (
                    <Row key={id}>
                      <Col lg={4} sm={12}>
                        <Fade
                          right={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={1000}
                          distance="30px"
                        >
                          <div className="skill-wrapper__image">
                            {iconType === 'svg' ? <SvgIcon /> : faMarkup}
                          </div>
                        </Fade>
                      </Col>
                      <Col lg={8} sm={12}>
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={500}
                          distance="30px"
                        >
                          <div className="skill-wrapper__text">
                            <h4 className="skill-wrapper__text-description">{name}</h4>
                            <div>
                              <p style={{ textAlign: 'justify' }}>{description}</p>
                            </div>
                          </div>
                        </Fade>
                      </Col>
                    </Row>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
