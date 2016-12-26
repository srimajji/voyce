import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { green500 } from 'material-ui/styles/colors';
import styles from './form.scss';
import $ from 'jquery';

class WriteFeedback extends React.Component {
	constructor() {
		super();

		this.state = {
			feedbackType: '',
			submitSuccess: false
		};
		this._handleSelectFieldOnChange = this._handleSelectFieldOnChange.bind(this);
		this._onClickNewFeedbackBtn = this._onClickNewFeedbackBtn.bind(this);
		this._renderNewFeedbackForm = this._renderNewFeedbackForm.bind(this);
		this._onClickSubmitFeedbackBtn = this._onClickSubmitFeedbackBtn.bind(this);
	}

	componentShouldUpdate() {
		fetch('/api/companies?alias=bestbuy')
			.then(response => response.json())
			.then(response => console.log(response));
		return true;
	}

	_handleSelectFieldOnChange(event, index, value) {
		this.setState({ feedbackType: value });
	}

	_onClickNewFeedbackBtn() {
		this.setState({ submitSuccess: false });
	}

	_onClickSubmitFeedbackBtn() {
		this.setState({ submitSuccess: true });
	}

	_renderNewFeedbackForm() {
		const { routeParams } = this.props;
		const formTitle = <h2 className={styles.formTitle}>Got feedback for {routeParams.company ? routeParams.company : 'company'}?</h2>;
		const feedbackPlaceholder = 'Your feedback is very valuable to us. Please try to be as constructive as possible';
		return (
			<form className={styles.formContainer}>
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
				<RaisedButton label='Submit' fullWidth={true} primary={true} onClick={this._onClickSubmitFeedbackBtn} />
			</form>
		);
	}

	_renderSubmitSuccess() {
		return (
			<div className={styles.successContainer}>
				<i className={'material-icons ' + styles.successIcon}>check_circle</i>
				<h2>Thank you for your submission</h2>
				<RaisedButton
					label='Enter new feedback'
					className={styles.newFeedbackBtn}
					fullWidth={true}
					primary={true}
					onClick={this._onClickNewFeedbackBtn}
					/>
			</div>
		);
	}

	render() {
		return (
			<div className={styles.container}>
				<Paper className={styles.paperContainer} zDepth={2}>
					{this.state.submitSuccess ? this._renderSubmitSuccess() : this._renderNewFeedbackForm()}
				</Paper>
			</div>
		);
	}
}

export default WriteFeedback;
