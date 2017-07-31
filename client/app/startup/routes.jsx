import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { AboutRoute } from 'modules/about';
import { ContactRoute } from 'modules/contact';
import { Header } from 'modules/header';
import { LandingRoute } from 'modules/landing';
import { PortfolioRoute } from 'modules/portfolio';
import { ResumeRoute } from 'modules/resume';
import { ServicesRoute } from 'modules/services';

const Routes = ({ history }) => (
	<ConnectedRouter history={history}>
		<div>
			<Header />
			<main>
				<Switch>
					<Route path='/' exact component={LandingRoute} />
					<Route path='/about' exact component={AboutRoute} />
					<Route path='/contact' exact component={ContactRoute} />
					<Route path='/portfolio' exact component={PortfolioRoute} />
					<Route path='/resume' exact component={ResumeRoute} />
					<Route path='/services' exact component={ServicesRoute} />
				</Switch>
			</main>
		</div>
	</ConnectedRouter>
);

export default Routes;