import { createFormPlugin } from 'modules/form';
import { CONTACT_SUCCESS } from './actionTypes.js';

export default createFormPlugin({
	[CONTACT_SUCCESS]: () => undefined,
});