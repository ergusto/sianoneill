import React from 'react';
import PropTypes from 'prop-types';

import { classnames } from 'lib';

import './style.scss';

const getFaName = string => {
	if (string.indexOf('fa-') == 0) return string;
	return 'fa-' + string;
}

export default class Component extends React.Component {

	render() {
		const { name, className } = this.props;
		const classNames = classnames('fa', getFaName(name), className);
		return (
			<i className={classNames} />
		);
	}

}

Component.propTypes = {
	name: PropTypes.string.isRequired
};