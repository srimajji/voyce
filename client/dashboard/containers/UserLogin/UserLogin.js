import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import { ActionDone } from 'material-ui/svg-icons';
import errors from 'feathers-errors';
import { green500 } from 'material-ui/styles/colors';
import { feathersAuthentication, feathersServices } from '../../feathers';
import styles from './UserLogin.scss';

class UserLogin extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			signupSuccess: false,
		};

		this._onChangeInput = this._onChangeInput.bind(this);
		this._onSubmitLogin = this._onSubmitLogin.bind(this);
		this._onSubmitSignUp = this._onSubmitSignUp.bind(this);
		this._clearState = this._clearState.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
			this.props.dispatch(push(nextProps.location.query.redirect || '/dashboard'));
		}
	}

	_onChangeInput(event) {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({ [name]: value });
	}

	_onSubmitLogin() {
		this.props.dispatch(feathersAuthentication.authenticate(
			{ type: 'local', email: this.state.email, password: this.state.password }
		))
			.catch(err => {
				err instanceof errors.BadRequest
					? new SubmissionError(Object.assign({}, err.errors, { _error: err.message || '' })) //eslint-disable-line no-undef
					: err;
			});
	}

	_onSubmitSignUp() {
		this.props.dispatch(feathersServices.users.create(
			{ email: this.state.email, password: this.state.password, name: this.state.name }
		)).then(response => {
			this._clearState();
		})
			.catch(err => {
				err instanceof errors.BadRequest
					? new SubmissionError(Object.assign({}, err.errors, { _error: err.message || '' })) //eslint-disable-line no-undef
					: err;
			});
	}

	_clearState() {
		this.setState({
			name: '',
			email: '',
			password: '',
			signupSuccess: true,
		});
	}


	render() {
		return (
			<div className={styles.container}>
				<Paper zDepth={2} className={styles.paper}>
					<Tabs>
						<Tab label="Log in">
							<div className={styles.tabContainer}>
								<TextField
									name='email'
									floatingLabelText='Email'
									hintText='Enter email'
									fullWidth={true}
									type='email'
									value={this.state.email}
									onChange={this._onChangeInput}
								/>
								<TextField
									name='password'
									floatingLabelText='Password'
									hintText='Enter password'
									fullWidth={true}
									type='password'
									value={this.state.password}
									onChange={this._onChangeInput}
								/>
								<RaisedButton type='submit' label='Login' fullWidth={true} className={styles.formSubmitBtn} primary={true} onClick={this._onSubmitLogin} />
							</div >
						</Tab>
						<Tab label="Sign up">
							<div className={styles.tabContainer}>
								{!this.state.signupSuccess ?
									<div>
										<TextField
											name='name'
											floatingLabelText='Name'
											hintText='Enter your name'
											fullWidth={true}
											type='text'
											value={this.state.name}
											onChange={this._onChangeInput}
										/>
										<TextField
											name='email'
											floatingLabelText='Email'
											hintText='Enter email'
											fullWidth={true}
											type='email'
											value={this.state.email}
											onChange={this._onChangeInput}
										/>
										<TextField
											name='password'
											floatingLabelText='Password'
											hintText='Enter password'
											fullWidth={true}
											type='password'
											value={this.state.password}
											onChange={this._onChangeInput}
										/>
										<RaisedButton type='submit' label='Sign up' fullWidth={true} className={styles.formSubmitBtn} primary={true} onClick={this._onSubmitSignUp} />
									</div>
									:
									<div className={styles.signupSuccess}>
										<ActionDone style={{ width: 40, height: 40 }} color={green500} />
										<h3>Success!</h3>
										<p>You will receive an email once verified. </p>
									</div>
								}
							</div>
						</Tab>
					</Tabs>
				</Paper>
			</div>
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
