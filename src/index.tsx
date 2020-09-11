import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/app/App';
import * as serviceWorker from './serviceWorker';
import * as ReactGa from 'react-ga';

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
	ReactGa.initialize('');
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
