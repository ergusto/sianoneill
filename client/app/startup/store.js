import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import rootReducer from './reducer.js';

export default function configureStore(history) {
	const routerMiddleware = createRouterMiddleware(history);
	return createStore(
		rootReducer,
		applyMiddleware(thunkMiddleware, routerMiddleware)
	);
}