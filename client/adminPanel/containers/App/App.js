import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { feathersAuthentication } from '../../feathers';
import styles from './App.scss';

class App extends React.Component {
	constructor() {
		super();

		this._onClickLogout = this._onClickLogout.bind(this);
	}

	_onClickLogout() {
		this.props.dispatch(feathersAuthentication.logout());
	}

	render() {
		return (
			<AppBar title='My AppBar'
				iconElementRight={<FlatButton label="logout" onClick={this._onClickLogout} />}
			/>
		);
	}
}

export default connect()(App);