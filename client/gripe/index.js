import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import WriteFeedback from './form.js';
import NotFound from '../adminPanel/containers/NotFound/NotFound.js';


injectTapEventPlugin();
const Main = () => {
	return (
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path='/:company/feedback' component={WriteFeedback} />
				<Route path='*' component={NotFound} />
			</Router>
		</MuiThemeProvider>
	);
};
ReactDOM.render(<Main />, document.getElementById('root'));
