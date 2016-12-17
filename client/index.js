import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App/App.js';
import NotFound from './containers/NotFound/NotFound.js';

injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/' component={App}>
					<Route path='login' component={App} />
				</Route>
				<Route path='*' component={NotFound} />
			</Router>
		</MuiThemeProvider>
	);
};
const node = document.getElementById('root');
ReactDOM.render(<Main />, node);