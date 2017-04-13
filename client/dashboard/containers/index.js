import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
	indigo500, indigo700, indigo100, grey500, teal500, teal700, teal100, grey900, cyan500,
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
				primary1Color: indigo500,
				primary2Color: indigo700,
				primary3Color: indigo100,
				accent1Color: teal500,
				accent2Color: teal700,
				accent3Color: teal100,
				textColor: grey900,
				alternateTextColor: white,
				canvasColor: 'rgba(255, 255, 255, 0.64)',
				borderColor: '#ccc',
				disabledColor: '#BDBDBD',
				pickerHeaderColor: indigo500,
				clockCircleColor: fade(darkBlack, 0.07),
				shadowColor: fullBlack,
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
