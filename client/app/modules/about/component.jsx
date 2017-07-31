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
			<div ref={this.wrapperRef} className='pv5 justify-centre'>
				<div className='mh4 mw-7 align-center fs5 lh-copy fw1'>
					<h2 className='uppercase normal'>About</h2>
					<p>I am a specialist apparel designer with just under 3 years experience in a multitude of product areas, most notably lingerie design. Product specialisms include:</p>

					<ul className='lh-branding'>
						<li>Core & Fashion Lingerie</li>
						<li>Erotic Lingerie</li>
						<li>Nightwear</li>
						<li>Shapewear</li>
						<li>Promo Briefs</li>
						<li>Sports</li>
						<li>Swimwear</li>
						<li>DD+ Lingerie</li>
						<li>Maternity & Post Surgery</li>
						<li>Teen</li>
					</ul>

					<p>Previously my employment background was in the supply chain communicating with factories in the Far East and a range of UK & Ireland High Street Retailers. For the past year I have been living in the Netherlands working for a major Dutch Lingerie Brand and am now looking for a new role. Seeing things from both the supply and retail side means I have a unique insight into lingerie product development.</p>
				</div>
			</div>
		)
	}

}