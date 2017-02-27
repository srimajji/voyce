import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Settings.scss';

class Settings extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Paper className={styles.Wrapper}>
				<h1>BestBuy Settings</h1>
				<TextField
					id="text-field-default"
					defaultValue="best-buy"
					floatingLabelText="Alias"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue="Best Buy"
					floatingLabelText="Name"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue="Employee, Store, Experience"
					floatingLabelText="Categories"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue="245 Geary St, San Francisco, CA 94123"
					floatingLabelText="Location"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue="http://bestbuy.com"
					floatingLabelText="Website"
				/><br />
				<div className={styles.FormButtonWrapper}>
					<RaisedButton label="Update" primary={true} fullWidth={true} />
				</div>
			</Paper>
		);
	}

}

export default Settings;
