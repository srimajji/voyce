import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './UserLogin.scss';

class UserLogin extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<form>
					<Paper className={styles.form} zDepth={2}>
						<p className={styles.formTitle}>Log In</p>
						<TextField floatingLabelText='Username' hintText='Enter username' fullWidth={true} className={styles.formUsername} />
						<TextField floatingLabelText='Password' hintText='Enter password' fullWidth={true} type='password' />
						<RaisedButton type='submit' label='Login' fullWidth={true} className={styles.formSubmitBtn} primary={true} />
					</Paper>
				</form>
			</div>
		);
	}
}

export default UserLogin;