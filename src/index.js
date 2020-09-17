import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
