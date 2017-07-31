import { createReducer } from 'lib';

import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from './actionTypes.js';

const initialState = {
	loading: false,
	success: false,
	error: null,
	errors: {},
	statusText: null
};

export default createReducer(initialState, {
	[CONTACT_REQUEST]: (state, payload) => {
		return Object.assign({}, state, {
			loading: true,
			success: false,
			statusText: null
		});
	},
	[CONTACT_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			success: true,
			error: null,
			errors: {},
			statusText: 'Thanks! Contact made.'
		});
	},
	[CONTACT_FAILURE]: (state, payload) => {
		return Object.assign({}, state, {
			loading: false,
			success: false,
			error: payload.error,
			errors: payload.errors,
			statusText: 'Unable to send email'
		});
	}
})