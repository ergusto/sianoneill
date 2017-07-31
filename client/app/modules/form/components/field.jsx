import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { classnames } from 'lib';

export default class Component extends React.Component {

	render() {
		let errorText;
		const { label, className, serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		if (serverError) errorText = serverError;
		if (error) errorText = error;
		return (
			<fieldset className={errorText && touched && 'fieldset--has-error'}>
				{label && <label className='field-label mb2 block'>{label}</label>}
				<input className={classnames('field bs ba b-lighter-grey', className)} {...input} placeholder={placeholder} type={type} />
				<VelocityTransitionGroup runOnMount={false} component='div' enter={{ animation: 'fadeIn', duration: 200 }} leave={{ animation: 'fadeOut', duration: 200 }}>
					{errorText && touched && <div className='field-error fr'>{errorText}</div>}
				</VelocityTransitionGroup>
			</fieldset>
		);
	}

}