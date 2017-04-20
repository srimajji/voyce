import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { replace } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

import AppWrapper from './containers/Layout/AppWrapper/AppWrapper.js';
import UserLogin from '../dashboard/containers/UserLogin/UserLogin.js';
import NotFound from '../../shared/components/NotFound/NotFound';
import Loading from '../../shared/components/Loading/Loading.js';
import Feedbacks from './containers/Feedbacks/Feedbacks.js';

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
	failureRedirectPath: '/login',

	/* Once signin is successful: */
	// redirect on successful signin to component being authenticated
	allowRedirectBack: true,
	// action to dispatch to redirect
	redirectAction: replace,

	/* For documentation: */
	wrapperDisplayName: 'UserIsAuthenticated',
});

const defaultRoute = '/submit';

export default (
	<Route path='/' component={AppWrapper}>
		<IndexRedirect to={defaultRoute} />
		<Route path='/login' component={UserLogin} />
		<Route path={defaultRoute} component={UserIsAuthenticated(AppWrapper)}>
			<Route path='feedbacks' component={Feedbacks} />
		</Route>
		<Route path='*' component={NotFound} />
	</Route>
);
