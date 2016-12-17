import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppWrapper from './containers';
import App from './containers/App/App.js';
import NotFound from './containers/NotFound/NotFound.js';

injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/' component={AppWrapper}>
					<Route path='login' component={App} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		</MuiThemeProvider>
	);
};
const node = document.getElementById('root');
ReactDOM.render(<Main />, node);