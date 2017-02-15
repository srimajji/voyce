import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
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
		this.state = {
			openDrawer: false
		};

		this._onClickOpenDrawer = this._onClickOpenDrawer.bind(this);
		this._onClickLogout = this._onClickLogout.bind(this);
		this._renderUserMenu = this._renderUserMenu.bind(this);
	}

	_onClickOpenDrawer() {
		this.setState({ openDrawer: !this.state.openDrawer });
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
			<div className={styles.App}>
				<AppBar title='My AppBar'
					iconElementRight={this._renderUserMenu()}
					style={{ zIndex: 'inherit' }}
					onLeftIconButtonTouchTap={this._onClickOpenDrawer}
					zDepth={0}
				>
				</AppBar>
				<Drawer docked={this.state.openDrawer} containerStyle={{ marginTop: '64px', zIndex: '-999' }} />
			</div>
		);
	}
}

export default connect()(App);