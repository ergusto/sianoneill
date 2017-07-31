import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import form from 'modules/form';
import contact from 'modules/contact';


const appReducer = combineReducers({
	form,
	contact
});

export default appReducer;