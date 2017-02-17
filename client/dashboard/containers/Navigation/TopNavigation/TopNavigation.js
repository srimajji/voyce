import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import withWidth, { MEDIUM, LARGE } from 'material-ui/utils/withWidth';

import { feathersAuthentication } from '../../../feathers';
import SideNavigation from '../SideNavigation/SideNavigation.js';

class TopNavigation extends React.Component {
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
		const isFullWidth = this.props.width == LARGE;
		return (
			<AppBar title='Gripe Admin Panel'
				iconElementRight={this._renderUserMenu()}
				style={{ zIndex: 'inherit', position: 'fixed' }}
				onLeftIconButtonTouchTap={this._onClickOpenDrawer}
				showMenuIconButton={!isFullWidth}
				zDepth={0}
			>
				<SideNavigation openDrawer={isFullWidth || this.state.openDrawer} containerStyle={{ marginTop: '64px' }} />
			</AppBar>
		);
	}
}

export default withWidth()(connect()(TopNavigation));