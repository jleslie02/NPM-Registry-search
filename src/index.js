import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

require('./stylesheets/index.css');
require('./stylesheets/lato.css');
require('./stylesheets/font-awesome.css');

const renderApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App.js', () => {
//     ReactDOM.render(
//       renderApp(),
//       document.getElementById('root')
//     );
//   });
// }

render(renderApp(), document.getElementById('root'));
