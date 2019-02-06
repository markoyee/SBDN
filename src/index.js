import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';

import Logo from './components/logo/Logo';
import Container from './components/container/Container';
import App from './App'


import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
				<div>
					<Logo/>,
					<Container/>,
					<App/>
				</div>,
				 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
