
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';
// import NotFound from '../adminPanel/containers/NotFound/NotFound.js';


injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/:company/feedback' component={App} />
				<Route path='*' component={App} />
			</Router>
		</MuiThemeProvider>
	);
};
ReactDOM.render(<Main />, document.getElementById('root'));
