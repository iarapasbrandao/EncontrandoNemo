import React from 'react';
import { Button, Link } from 'carbon-components-react';
import { default as Api124 } from '@carbon/icons-react/lib/API--1/24';
import Document24 from '@carbon/icons-react/lib/document/24';
import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
import Launch16 from '@carbon/icons-react/lib/launch/16';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';

import './styles/main.scss';
import useScript from './hooks/useScript';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import { description, title } from './data/input.json';

const HEADER_LINKS = [

  <Link
    className="link"
    key="github-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/iarapasbrandao/VR_EncontrandoNemo"
  >
    <p className="link-text">GitHub</p>
    <LogoGithub24 className="link-icon" />
  </Link>,
  <Link
    className="link getting-started"
    key="ibm-cloud-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://guiadopeixe.com.br/receitas/"
  >
    <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
      Como preparar seu peixe
    </Button>
    <IbmCloud24 className="link-icon" />
  </Link>,
];

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header
        description={description}
        links={HEADER_LINKS}
        title={title}
      />
      <ServiceContainer />
    </div>
  );
}

export default App;