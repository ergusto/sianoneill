import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField, renderTextarea } from 'modules/form';
import validator from './validator.js';

import './style.scss';

class Component extends React.Component {

	submit = data => {
		const { sendEmail } = this.props.actions;
		sendEmail(data);
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
		const { success } = this.props.api;

		const successText = success ? <span className='mv3 inline-block fr pink bold'>Thanks! Contact made</span> : null;

		return (
			<div className='w-100 mw-6 pv5 ph3 centred fw1'>
				<form onSubmit={handleSubmit(this.submit)} className='white-form'>
					<Field name='name' label='Full name' type='text' className='name-input' component={renderField} />
					<Field name='email' label='Email' type='email' component={renderField} />
					<Field name='message' label='Message' type='textarea' className='disable-resize' component={renderTextarea} onChange={this.onChange} elementRef={this.messageRef} />
					<button type='submit' className='btn btn--clear block fs5 ph3 pv2 mt2 ba b-lighter-grey fl'>Submit</button>
					{successText}
				</form>
			</div>
		);
	}

}

export default reduxForm({
	form: 'contact',
	validate: validator,
	propNamespace: 'form'
})(Component);