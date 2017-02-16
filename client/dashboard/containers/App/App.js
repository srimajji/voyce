import React from 'react';
import { connect } from 'react-redux';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
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
	}

	_onClickOpenDrawer() {
		this.setState({ openDrawer: !this.state.openDrawer });
	}

	_onClickLogout() {
		this.props.dispatch(feathersAuthentication.logout());
	}

	render() {
		return (
			<div>
				<Layout>
					<NavDrawer
						pinned={true} permanentAt='xxxl' width='wide'
					>
						<p> Naw drawser </p>
					</NavDrawer>
					<Panel>
						<p> This is the main content </p>
					</Panel>
				</Layout>
			</div>
		);
	}
}

export default connect()(App);