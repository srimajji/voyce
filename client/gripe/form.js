import React from 'react';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { green500 } from 'material-ui/styles/colors';
import styles from './form.scss';
import $ from 'jquery';

class Form extends React.Component {
	constructor() {
		super();

		this.state = {
			feedbackType: '',
			submitSuccess: false,
			company: null
		};
		this._handleSelectFieldOnChange = this._handleSelectFieldOnChange.bind(this);
		this._onClickNewFeedbackBtn = this._onClickNewFeedbackBtn.bind(this);
		this._renderNewFeedbackForm = this._renderNewFeedbackForm.bind(this);
		this._onClickSubmitFeedbackBtn = this._onClickSubmitFeedbackBtn.bind(this);
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
		const { name, categories } = this.props;
		const formTitle = <h2 className={styles.formTitle}>Got feedback for {name}?</h2>;
		const feedbackPlaceholder = 'Your feedback is very valuable to us. Please try to be as constructive as possible';
		return (
			<form className={styles.formContainer}>
				{formTitle}
				<div className={styles.fieldWrapper}>
					<SelectField floatingLabelText='Type of feedback?' fullWidth={true} value={this.state.feedbackType} onChange={this._handleSelectFieldOnChange} >
						{categories.map((category, key) => {
							return <MenuItem value={category} key={key} primaryText={category} />;
						})}
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

export default Form;
