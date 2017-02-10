import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import { feathersAuthentication } from '../../feathers';
import styles from './App.scss';

class App extends React.Component {
	constructor() {
		super();

		this._onClickLogout = this._onClickLogout.bind(this);
		this._renderUserMenu = this._renderUserMenu.bind(this);
	}

	_onClickLogout() {
		this.props.dispatch(feathersAuthentication.logout());
	}

	_renderUserMenu() {
		return (
			<IconMenu
				iconButtonElement={<IconButton><ActionAccountCircle /></IconButton>}
				targetOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			>
				<MenuItem primaryText="Log out" onClick={this._onClickLogout} />
			</IconMenu>
		);
	}

	render() {
		return (
			<AppBar title='My AppBar'
				iconElementRight={this._renderUserMenu()}
			/>
		);
	}
}

export default connect()(App);