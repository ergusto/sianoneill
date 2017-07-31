import React from 'react';
import { Storage } from 'lib';
import Form from './form.jsx';
import Portfolio from './portfolio.jsx';

const storage = new Storage('portfolio');

export default class Component extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasAccess: false
		};
	}

	componentDidMount() {
		const hasAccess = storage.get('hasAccess');
		if (hasAccess) {
			this.setState({ hasAccess: true });
		}
	}

	activate = () => {
		this.setState({
			hasAccess: true,
		});
		storage.update("hasAccess", true);
	}

	render() {
		const { hasAccess } = this.state;

		if (hasAccess) {
			return <Portfolio />;
		}

		return (
			<Form onSubmit={this.activate} />
		)
	}

}