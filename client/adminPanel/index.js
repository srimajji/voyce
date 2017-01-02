import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App/App.js';
import UserLogin from './containers/UserLogin/UserLogin.js';
import NotFound from './containers/NotFound/NotFound.js';
import AppWrapper from './containers';

injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/admin' component={AppWrapper}>
					<IndexRoute component={App} />
					<Route path='/admin/app' component={App}>
					</Route>
					<Route path='/admin/login' component={UserLogin} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		</MuiThemeProvider>
	);
};
ReactDOM.render(<Main />, document.getElementById('root'));
