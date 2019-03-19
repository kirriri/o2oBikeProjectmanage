import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import Admin from './admin'
import IRouter from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<IRouter />, document.getElementById('root'));

serviceWorker.unregister();
