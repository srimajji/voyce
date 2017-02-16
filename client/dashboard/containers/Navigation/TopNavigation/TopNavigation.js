import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import withWidth, { MEDIUM, LARGE } from 'material-ui/utils/withWidth';
import { feathersAuthentication } from '../../../feathers';

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

	componentWillReceiveProps(nextProps) {

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
			<div>
				<AppBar title='My AppBar'
					iconElementRight={this._renderUserMenu()}
					style={{ zIndex: 'inherit' }}
					onLeftIconButtonTouchTap={this._onClickOpenDrawer}
					showMenuIconButton={!isFullWidth}
					zDepth={0}
				>
				</AppBar>
				<Drawer open={isFullWidth || this.state.openDrawer} containerStyle={{ marginTop: '64px' }} />
			</div>
		);
	}
}

export default withWidth()(TopNavigation);