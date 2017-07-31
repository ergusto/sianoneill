import { createValidator } from 'modules/form';

export default createValidator({
	name: (value, props) => {
		if (!value) {
			return 'This field is required';
		}
	},
	email: (value, props) => {
		if (!value) {
			return 'This field is required';
		}
	},
	message: (value, props) => {
		if (!value) {
			return 'This field is required';
		}
	}
});