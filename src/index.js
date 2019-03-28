import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ColorContextProvider } from "./ColorContext";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ColorContextProvider>
    <App />
  </ColorContextProvider>, document.getElementById('root'));


serviceWorker.register();
