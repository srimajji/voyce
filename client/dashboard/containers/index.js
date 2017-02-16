import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from '../routes.js';

class App extends Component {
	render() {
		const { store } = this.props;
		const history = syncHistoryWithStore(browserHistory, store);
		return (
			<MuiThemeProvider>
				<Provider store={store}>
					<div>
						<Router history={history} routes={routes} />
					</div>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;
