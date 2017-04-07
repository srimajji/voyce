import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
	cyan500, cyan700,
	pinkA200,
	grey100, grey300, grey400, grey500,
	white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';

import routes from '../routes.js';

class App extends Component {
	render() {
		const { store } = this.props;

		// This replaces the textColor value on the palette
		// and then update the keys for each component that depends on it.
		// More on Colors: http://www.material-ui.com/#/customization/colors
		const muiTheme = getMuiTheme({
			palette: {
				primary1Color: '#3F51B5',
				primary2Color: '#303F9F',
				primary3Color: '#C5CAE9',
				accent1Color: '#607D8B',
				accent2Color: '#C5CAE9',
				accent3Color: grey500,
				textColor: '#212121',
				alternateTextColor: white,
				canvasColor: white,
				borderColor: grey300,
				disabledColor: '#BDBDBD',
				pickerHeaderColor: cyan500,
				clockCircleColor: fade(darkBlack, 0.07),
				shadowColor: fullBlack,
			},
			appBar: {
				height: 50,
			},
		});

		const history = syncHistoryWithStore(browserHistory, store);
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
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
