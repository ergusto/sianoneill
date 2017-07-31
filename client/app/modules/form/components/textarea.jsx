import React from 'react';
import { classnames } from 'lib';

export default class Component extends React.Component {

	render() {
		const { className, label, elementRef, serverError, input, placeholder, type,  meta: { touched, error, warning } } = this.props;
		return (
			<fieldset className={error ? 'fieldset--has-error' : null}>
				{label && <label className='field-label mb2 block'>{label}</label>}
				<textarea ref={elementRef} rows='3' className={classnames('field bs ba b-lighter-grey', className)} {...input} placeholder={placeholder} type={type}></textarea>
				{(error && touched) ? <div className='field-error'>{error}</div> : null}
			</fieldset>
		);
	}

}