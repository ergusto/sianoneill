import React from 'react';
import { Link } from 'react-router-dom';

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
			<div ref={this.wrapperRef} className='justify-centre'>
				<div className='pb4 mh4 mw-7 align-center fs5 lh-copy fw1'>
					<h2 className='uppercase normal'>Freelance Services</h2>

					<p>I can offer the creation of garment design and technical specifications, product development, CAD presentation, start up consultancy, trend & market research. I have proficient experience with Adobe Illustrator and Photoshop. Please contact me about this at <a href='mailto:sianoneilldesign@gmail.com'>sianoneilldesign@gmail.com</a> or use the <Link to='/contact'>contact form</Link>.</p>
				</div>
			</div>
		)
	}

}