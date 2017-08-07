import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField, renderTextarea } from 'modules/form';
import validator from './validator.js';

class Component extends React.Component {

	submit = data => {
		const { onSubmit } = this.props;
		onSubmit();
	};

	onChange = event => {
		this.setMessageHeight();
	};

	messageRef = ref => {
		this.message = ref;
		this.setMessageHeight();
	};

	setMessageHeight() {
		const { message } = this;
		if (message) {
			message.style.height = 'auto';
			message.style.height = (message.scrollHeight + 2) + 'px';
		}
	}

	render() {
		const { handleSubmit } = this.props.form;

		return (
			<div className='w-100 mw-6 pv5 ph3 centred fw1'>
				<form onSubmit={handleSubmit(this.submit)} className='white-form'>
					<Field name='password' label='Passphrase' type='password' className='name-input' component={renderField} />
					<button type='submit' className='btn btn--clear fs5 ph3 pv2 mt2 ba b-lighter-grey'>Submit</button>
				</form>
			</div>
		);
	}

}

export default reduxForm({
	form: 'portfolio',
	validate: validator,
	propNamespace: 'form'
})(Component);