import React from 'react';

import './style.scss';

export default class Component extends React.Component {

	componentDidMount() {
		this.resize();
		window.addEventListener('resize', this.resize);
	}

	wrapperRef = element => {
		this.wrapper = element;
	};

	resize = () => {
		const header = document.querySelector('header[role=banner]');
		const { wrapper } = this;

		if (wrapper) {
			const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			wrapper.style.minHeight = (windowHeight - header.offsetHeight) + 'px';
		}
	}

	render() {
		return (
			<div ref={this.wrapperRef} className='landing-wrapper'>

			</div>
		)
	}

}