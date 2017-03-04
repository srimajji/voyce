import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import FeedbackForm from '../../../components/FeedbackForm/FeedbackForm.js';
import styles from './FormSettings.scss';

class FormSettings extends React.Component {
	constructor() {
		super();
	}

	_onChange(v) {
		console.log('selected star', v);
	}

	render() {
		return (
			<Paper className={styles.Wrapper}>
				<FeedbackForm />
			</Paper>
		);
	}
}

export default connect()(FormSettings);
