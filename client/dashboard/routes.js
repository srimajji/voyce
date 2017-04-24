import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { replace } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import AppWrapper from '../shared/components/Layout/AppWrapper/AppWrapper.js';
import App from './containers/Layout/App/App.js';
import Dashboard from './containers/Dashboard/Dashboard.js';
import UserLogin from './containers/UserLogin/UserLogin.js';
import NotFound from './containers/NotFound/NotFound';
import Loading from './components/Loading/Loading.js';
import Feedbacks from './containers/Feedbacks/Feedbacks.js';
import CompanySettings from './containers/Settings/Company/CompanySettings.js';
import FormSettings from './containers/Settings/Form/FormSettings.js';
import NewFeedbackForm from './containers/NewFeedbackForm/NewFeedbackForm.js';

// Authentication Higher Order Components to wrap route components.
const UserIsAuthenticated = UserAuthWrapper({
	// extract user data from state
	authSelector: (state /* , ownProps, boolean */) => state.auth.user,

	// use feathers-reduxy auth store to check if its in loading state
	authenticatingSelector: (state /* , ownProps */) => state.auth.isLoading,

	predicate: user => user,

	// component to render while signin is pending
	LoadingComponent: Loading,

	// redirect to login if auth failed
	failureRedirectPath: '/login',

	// action to dispatch to redirect
	redirectAction: replace,

	// for react-devtools wrapper name
	wrapperDisplayName: 'UserIsAuthenticated',
});

const defaultRoute = '/dashboard';

export default (
	<Route path='/' component={AppWrapper}>
		<IndexRedirect to={defaultRoute} />
		<Route path='/login' component={UserLogin} />
		<Route path={defaultRoute} component={UserIsAuthenticated(App)}>
			<IndexRoute component={Dashboard} />
			<Route path='feedbacks' component={Feedbacks} />
			<Route path='settings'>
				<IndexRedirect to='company' />
				<Route path='company' component={CompanySettings} />
			</Route>
		</Route>
		<Route path='gripe' component={NewFeedbackForm} />
		<Route path='*' component={NotFound} />
	</Route>
);

/*export default function (store, history) {
	ReactDOM.render(
		<MuiThemeProvider>
			<Provider store={store}>
				<Router history={history}>
					<Route path='/' component={AppWrapper}>
						<IndexRedirect to={defaultRoute} />
						<Route path={defaultRoute} component={UserIsAuthenticated(App)} />
						<Route path='/login' component={UserLogin} />
						<Route path='*' component={NotFound} />
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>,
		document.getElementById('root')
	);
}*/
