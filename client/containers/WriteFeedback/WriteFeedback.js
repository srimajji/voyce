import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './WriteFeedback.scss';

class WriteFeedback extends React.Component {
	constructor() {
		super();

		this.state = {
			feedbackType: ''
		};
		this._handleSelectFieldOnChange = this._handleSelectFieldOnChange.bind(this);
	}

	_handleSelectFieldOnChange(event, index, value) {
		this.setState({ feedbackType: value });
	}

	render() {
		const { routeParams } = this.props;
		const formTitle = <h2 className={styles.formTitle}>Got feedback for {routeParams.company ? routeParams.company : 'company'}?</h2>;
		const feedbackPlaceholder = 'Your feedback is very valuable to us. Please try to be as constructive as possible';

		return (
			<div className={styles.container}>
				<form>
					<Paper className={styles.form} zDepth={2}>
						{formTitle}
						<div className={styles.fieldWrapper}>
							<SelectField floatingLabelText='Type of feedback?' fullWidth={true} value={this.state.feedbackType} onChange={this._handleSelectFieldOnChange} >
								<MenuItem value={1} primaryText='Customer Service' />
								<MenuItem value={2} primaryText='Building' />
								<MenuItem value={3} primaryText='Other' />
							</SelectField>
							<TextField
								className={styles.newFeedbackField}
								floatingLabelText='Enter feedback'
								hintText={feedbackPlaceholder}
								multiLine={true}
								rows={5}
								fullWidth={true} />
						</div>
						<RaisedButton label='Submit' fullWidth={true} primary={true} type='submit' />
					</Paper>
				</form>
			</div>
		);
	}
}

export default WriteFeedback;
