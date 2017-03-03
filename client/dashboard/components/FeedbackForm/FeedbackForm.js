import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Rating from '../Rating/Rating.js';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './FeedbackForm.scss';

function _onChange(v) {
	console.log('Selected Star ', v);
}

const FeedbackForm = () => (
	<Paper className={styles.Wrapper}>
		<form>
			<Rating style={styles.RatingWrapper}
				onChange={_onChange}
				max={5}
			/>
			<TextField
				className={styles.FeedbackInput}
				hintText="Enter feedback here"
				floatingLabelText="What could we do better?"
				multiLine={true}
				rows={2} />
			<br />
			<RaisedButton
				label="Submit"
				fullWidth={true}
				primary={true}
			/>
		</form>
	</Paper>
);

export default FeedbackForm;