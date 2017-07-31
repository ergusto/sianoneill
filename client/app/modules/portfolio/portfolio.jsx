import React from 'react';

import './portfolio.scss';

const images = [
	'portfolio-01.png',
	'portfolio-02.png',
	'portfolio-03.png',
	'portfolio-04.png',
	'portfolio-05.png',
	'portfolio-06.png',
	'portfolio-07.png',
	'portfolio-08.png',
	'portfolio-09.png',
	'portfolio-10.png',
	'portfolio-11.png',
	'portfolio-12.png',
	'portfolio-13.png',
	'portfolio-14.png',
	'portfolio-15.png',
	'portfolio-16.png',
	'portfolio-17.png',
	'portfolio-18.png',
	'portfolio-19.png',
	'portfolio-20.png',
	'portfolio-21.png',
	'portfolio-22.png',
	'portfolio-23.png',
	'portfolio-24.png',
	'portfolio-25.png',
	'portfolio-26.png',
	'portfolio-27.png',
	'portfolio-28.png',
	'portfolio-29.png',
	'portfolio-30.png',
	'portfolio-31.png',
	'portfolio-32.png',
	'portfolio-33.png',
	'portfolio-34.png',
	'portfolio-35.png',
	'portfolio-36.png',
	'portfolio-37.png',
];

export default class Component extends React.Component {

	renderItems() {
		return images.map((image, index) => {
			return (
				<li className='relative' key={index}>
					<img className='portfolio-image' src={'https://s3.eu-west-2.amazonaws.com/sianoneill/' + image} />
					<div className='portfolio-image-mask' />
				</li>
			);
		});
	}

	render() {
		return (
			<div className='portfolio'>
				<ul>
					{this.renderItems()}
				</ul>
			</div>
		);
	}

}