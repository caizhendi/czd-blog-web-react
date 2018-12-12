import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.scss';
import registerServiceWorker from './register_service_worker';
import AppRouter from './router';
=======
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
>>>>>>> 80a4140d6800d4d184fb99b9e846906a7bbfeda6

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
