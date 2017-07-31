import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendContactEmail } from './actions.js'
import Component from './component.jsx';

const mapStateToProps = state => {
	return {
		api: state.contact
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		sendEmail: sendContactEmail
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);