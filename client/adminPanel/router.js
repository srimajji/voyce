import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { replace } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { config } from './utils/config';
import AppWrapper from './containers';
import App from './containers/App/App.js';
import UserLogin from './containers/UserLogin/UserLogin.js';
import NotFound from './containers/NotFound/NotFound';
import Loading from './components/Loading';
// Authentication Higher Order Components to wrap route components.
const UserIsAuthenticated = UserAuthWrapper({
	// extract user data from state
	authSelector: (state /* , ownProps, boolean */) => state.auth.user,

	/* When signin is pending but not fulfilled: */
	// determine if signin is pending
	authenticatingSelector: (state /* , ownProps */) => state.auth.isLoading,
	// component to render while signin is pending
	LoadingComponent: Loading,

	/* When signin is not pending. User is authenticated or not. */
	// determine if user is authenticated
	predicate: user => user && user.roles,
	// route to signin component
	failureRedirectPath: '/admin/login',

	/* Once signin is successful: */
	// redirect on successful signin to component being authenticated
	allowRedirectBack: true,
	// action to dispatch to redirect
	redirectAction: replace,

	/* For documentation: */
	wrapperDisplayName: 'UserIsAuthenticated',
});

export default function (store, history) {
	ReactDOM.render(
		<MuiThemeProvider>
			<Provider store={store}>
				<Router history={history}>
					<Route path='/admin' component={AppWrapper}>
						<IndexRedirect to='/admin/app' />
						<Route path='/admin/login' component={UserLogin} />
						<Route path='/admin/app' component={UserIsAuthenticated(App)} />
						<Route path='*' component={NotFound} />
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>,
		document.getElementById('root')
	);
}