import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Settings.scss';

class Settings extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { user } = this.props;
		const company = user.companies[0];
		return (
			<Paper className={styles.Wrapper}>
				<h1 className={styles.Title}>{company.name} Settings</h1>
				<TextField
					id="text-field-default"
					defaultValue={company.alias}
					floatingLabelText="Alias"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue={company.name}
					floatingLabelText="Name"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue={company.categories}
					floatingLabelText="Categories"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue={company.location}
					floatingLabelText="Location"
				/><br />
				<TextField
					id="text-field-default"
					defaultValue={company.website}
					floatingLabelText="Website"
				/><br />
				<div className={styles.FormButtonWrapper}>
					<RaisedButton label="Update" primary={true} fullWidth={true} />
				</div>
			</Paper>
		);
	}

}

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps)(Settings);
