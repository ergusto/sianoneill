import React from 'react';

import './style.scss';

export default class Component extends React.Component {

	render() {
		return (
			<div className='pt3 tsm-pt4 pb5 ph4 mw-7 fs5 lh-copy fw1 block centred'>
				<h2 className='uppercase normal align-center'>Resume</h2>

				<div className='align-center pb3'>
					<p>Skilled in lingerie design and product development, I am a commercially aware individual seeking to push the boundaries of intimates design, looking for my next 'perfect fit'.</p>
				</div>

				<h2 className='normal align-center mv3'>Experience</h2>

				<div className='mb5'>
					<span className='fs5 block'>September 2016 - September 2017</span>
					<h3 className='normal'>Lingerie Designer - Hunkemoller</h3>
					<p>Designer with sole responsibility for Private Collection, Non Wired Product & Pillar Briefs.</p>

					<ul className='bulleted pl4'>
						<li>Create a multitude of erotic product for the Hunkemoller sub brand ‘Private Collection’</li>
						<li>Design season appropriate bodies, bralettes, cami sets & promo briefs</li>
						<li>Create the product design strategy on a top line level for the Underwear product group</li>
						<li>Create & Amend tech packs</li>
						<li>Range build with buyers</li>
						<li>Involved with trend and colour direction for the season/quarters</li>
						<li>Communicate with garment and fabric suppliers</li>
						<li>Work closely with garment technicians from design concept to fit sessions to sealing</li>
						<li>Breifing in house print designers on artistic direction</li>
						<li>Travel to research overseas markets & to visit suppliers for product development</li>
					</ul>
				</div>

				<div className='mb5'>
					<span className='fs5 block'>July 2015 - June 2016</span>
					<h3 className='normal'>Junior Designer - Courtaulds</h3>
					<p>Worked on accounts for Dunnes, Sainsburys & Primark.</p>

					<ul className='bulleted pl4'>
						<li>Create and amend tech packs, BOMs and design specifications for the factory</li>
						<li>Communicate with the factory daily to request costs, samples and answer queries</li>
						<li>Brief out and action prints for core briefs and lingerie</li>
						<li>Manage all lab dips, technical submissions, bulk submissions and print strike offs</li>
						<li>Attend CP meetings, concept garment fits and client one to ones</li>
						<li>Create seasonal customer appropriate mood & trend boards</li>
						<li>Produce creative, cost effective and production viable designs</li>
						<li>Sourcing fabrics, trims and componentry to within target prices</li>
					</ul>
				</div>

				<div className='mb5'>                               
					<span className='fs5 block'>August 2014 -September 2014</span>
					<h3 className='normal'>Design Assistant - Courtaulds</h3>
					<p>Worked on Marks & Spencers T81 Limited, Adored & Autograph.</p>

					<ul className='bulleted pl4'>
						<li>Managed a micro fabric library updating with details of MCQs, MOQs, cost, lead times & greige availability</li>
						<li>Sourcing bows, fabrics, elastics, trims and componentry</li>
						<li>Managed the M&S account communicating with buyers when seniors were overseas</li>
						<li>Communicated daily with factory to answer queries</li>
					</ul>
				</div>

				<h2 className='normal align-center mv3'>Education</h2>

				<ul className='mb5'>
					<li className='pv3 bv b-lighter-grey'>
						<span className='fs5 block'>September 2011 – August 2015</span>
						<h3 className='normal'>London College of Fashion</h3>
						<p className='mb0 mt2'>BA Contour Fashion – 2:1</p>
						<p className='ma0'>Won ‘Collection of the Year’ as part of a collaborative and featured on <a href='http://www.vogue.co.uk/article/london-college-of-fashion-ba-show'>Vogue UK Online</a>.</p>
					</li>
					<li className='pv3 bb bb-lighter-grey'>
						<span className='fs5 block'>September 2009 – August 2011</span>
						<h3 className='normal'>Oaklands College</h3>
						<p className='mb0 mt2'>BTEC National Diploma Fashion Design – MMM</p>
					</li>
				</ul>

				<h2 className='normal align-center mv3'>Skills and attributes</h2>

				<ul className='bulleted pl4'>
					<li>Advanced level use of Adobe Photoshop & Illustrator.</li>
					<li>Intermediate level use of Adobe InDesign, PLM Software, MS Word and Excel.</li>
					<li>Speak 3 languages at beginner level - Dutch, German & French.</li>
				</ul>

			</div>
		)
	}

}