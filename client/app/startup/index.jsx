import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

const root = document.getElementById('root');

const start = () => ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
root);

export default start;