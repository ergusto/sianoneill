import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'app/components';

import './style.scss';

export default class Header extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			showMobileNav: false,
		}
	}

	renderMobileNav() {
		const { showMobileNav } = this.state;

		if (showMobileNav) {
			return (
				<ul className='mobile-navigation uppercase fs5 black align-left'>
					{this.renderNavItems()}
				</ul>
			);
		}
	}

	renderNavItems() {
		return [
			<li key='about'><Link to='/about' onClick={this.navigate} className='no-underline mr5'>About</Link></li>,
			<li key='resume'><Link to='/resume' onClick={this.navigate} className='no-underline mr5'>Resume</Link></li>,
			<li key='services'><Link to='/services' onClick={this.navigate} className='no-underline mr5'>Services</Link></li>,
			<li key='portfolio'><Link to='/portfolio' onClick={this.navigate} className='no-underline mr5'>Portfolio</Link></li>,
			<li key='contact'><Link to='/contact' onClick={this.navigate} className='no-underline'>Contact</Link></li>
		];
	}

	toggleMobileNav = event => {
		if (event) event.preventDefault();
		this.setState({
			showMobileNav: !this.state.showMobileNav
		});
	};

	navigate = event => {
		this.setState({
			showMobileNav: false
		});
	};

	render() {
		return (
			<header role='banner' className='bg-spaceship-white ph2 relative tlg-ph4 align-center bb bb-lighter-grey bs'>
				<a href='#' onClick={this.toggleMobileNav} className='mobile-navigation__toggle'>
					<Icon name='bars' />
				</a>
				<Link to='/' onClick={this.navigate} className='inline-block no-underline'>
					<h1 className='site-title black wilderness'>Sian O'Neill</h1>
				</Link>
				<ul className='navigation horizontal-list uppercase fs5 black'>
					{this.renderNavItems()}
				</ul>
				{this.renderMobileNav()}
			</header>
		);
	}

}