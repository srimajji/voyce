import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App/App.js';
import NotFound from './containers/NotFound/NotFound.js';
import AppWrapper from './containers';

injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/' component={AppWrapper}>
					<Route path='app' component={App}>
						<Route path='/login' component={NotFound} />
					</Route>
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		</MuiThemeProvider>
	);
};
const node = document.getElementById('root');
ReactDOM.render(<Main />, node);