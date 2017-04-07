import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
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
					<Router history={history} routes={routes} />
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;

App.propTypes = {
	store: React.PropTypes.object.isRequired
};
