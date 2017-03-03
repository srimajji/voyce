import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import Rating from '../../../components/Rating/Rating.js';
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
				<Rating
					onChange={this._onChange}
					max={5}
				/>
				<TextField
					hintText="Feedback"
					floatingLabelText="Enter feedback"
					multiLine={true}
					rows={2} />
			</Paper>
		);
	}
}

export default connect()(FormSettings);
