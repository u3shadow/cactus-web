import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Login from "./userpage/LoginComponent";

ReactDOM.render(
  <Login />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
