import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import errors from 'feathers-errors';
import { feathersAuthentication } from '../../feathers';
import styles from './UserLogin.scss';

class UserLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};

		this._onChangeInput = this._onChangeInput.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
			this.props.dispatch(push('/dashboard'));
		}
	}

	_onChangeInput(event) {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({ [name]: value });
	}

	_onSubmit() {
		this.props.dispatch(feathersAuthentication.authenticate(
			{ type: 'local', email: this.state.email, password: this.state.password }
		))
			.catch(err => {
				err instanceof errors.BadRequest
					? new SubmissionError(Object.assign({}, err.errors, { _error: err.message || '' })) // eslint-disable-line no-undef
					: err;
			});
	}

	render() {
		return (
			<div className={styles.container} >
				<div >
					<Paper className={styles.form} zDepth={2}>
						<p className={styles.formTitle}>Log In</p>
						<TextField
							name='email'
							floatingLabelText='Email'
							hintText='Enter email'
							fullWidth={true}
							className={styles.formUsername}
							type='email'
							onChange={this._onChangeInput}
						/>
						<TextField
							name='password'
							floatingLabelText='Password'
							hintText='Enter password'
							fullWidth={true}
							type='password'
							onChange={this._onChangeInput}
						/>
						<RaisedButton type='submit' label='Login' fullWidth={true} className={styles.formSubmitBtn} primary={true} onClick={this._onSubmit} />
					</Paper>
				</div>
			</div >
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isSignedIn,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	handleLogout: () => {
		dispatch(feathersAuthentication.logout());
	},
	handleRedirect: () => {
		dispatch(push(ownProps.redirectTo || '/dashboard'));
	},
	dispatch
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserLogin);