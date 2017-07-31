import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import form from 'modules/form';


const appReducer = combineReducers({
	form
});

export default appReducer;