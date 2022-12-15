import React from 'react';
import { Router } from "@reach/router";
import Home from './templates/home';
import SearchTemplate from './templates/search';
import ApiDocsFull from './templates/api';
import NotFound from './templates/not_found';
import Dataset from './templates/dataset';
import ApiDocsSpecific from './templates/dataset/api';
import { Accessibility } from 'accessibility';
import './theme/civicindex.css';
import './theme/index.scss';
// import './medatatheme/sass/main.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  new Accessibility();
  return (
    <Router>
      <NotFound default />
      <Home path="/" />
      <SearchTemplate path="/search" />
      <ApiDocsFull path="/api" />
      <Dataset path="/dataset/:id" />
      <ApiDocsSpecific path="/dataset/:id/api" />
    </Router>
  );
}

export default App;
