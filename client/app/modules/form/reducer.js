import { reducer, actionTypes } from 'redux-form';
import contact from 'modules/contact/plugin.js';

export default reducer.plugin({
	contact
});