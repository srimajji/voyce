import React from 'react';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm.js';
import { Paper } from 'material-ui/Paper';
import styles from './FeedbackForm.scss';

class NewFeedbackForm extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<FeedbackForm />
			</div>
		);
	}
}

export default NewFeedbackForm;
