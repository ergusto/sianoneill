import {
	CONTACT_REQUEST,
	CONTACT_SUCCESS,
	CONTACT_FAILURE
} from './actionTypes.js';

import { CALL_API, METHOD_POST } from 'middleware/api';

export const sendContactEmail = data => ({
	[CALL_API]: {
		types: [CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE],
		endpoint: '/api/contact/',
		method: METHOD_POST,
		body: data
	}
})