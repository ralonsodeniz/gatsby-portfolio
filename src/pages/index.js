import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta property="og:type" content="portfolio" />
        <meta property="og:site_name" content="RAD Portfolio" />
        <meta
          property="og:image"
          content="https://avatars2.githubusercontent.com/u/28633982?s=400&amp;v=4"
        />
        <meta property="og:title" content="RAD Portfolio" />
        <meta property="og:description" content="Raul Alonso Déniz personal portfolio" />
        <meta property="og:url" content="https://radportfolio.netlify.com" />
      </Helmet>
      <App />
    </>
  );
};
