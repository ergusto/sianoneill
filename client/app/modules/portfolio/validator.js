import { createValidator } from 'modules/form';

export default createValidator({
	password: (value, props) => {
		if (!value) {
			return 'This field is required';
		}

		if (value !== 'leatherandlace') {
			return 'This is pass phrase is incorrect';
		}
	}
});