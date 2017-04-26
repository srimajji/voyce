import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Rating from '../Rating/Rating.js';
import RaisedButton from 'material-ui/RaisedButton';
import { ActionDone } from 'material-ui/svg-icons';
import { green500 } from 'material-ui/styles/colors';

import { feathersServices } from '../../feathers';
import styles from './FeedbackForm.scss';

const initialState = {
	rating: 5,
	description: null,
	email: null,
	submitFeedbackSuccess: false,
};

class FeedbackForm extends React.Component {
	constructor() {
		super();
		this.state = initialState;

		this._onChange = this._onChange.bind(this);
		this._onChangeInput = this._onChangeInput.bind(this);
		this._onClickSubmitFeedback = this._onClickSubmitFeedback.bind(this);
		this._onClickNewFeedback = this._onClickNewFeedback.bind(this);
	}

	_onChange(value) {
		this.setState({ rating: value });
	}

	_onChangeInput(event) {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({ [name]: value });
	}

	_onClickSubmitFeedback() {
		const { dispatch, user } = this.props;
		const { rating, description, email } = this.state;
		const company = user.companies[0];
		dispatch(feathersServices.feedbacks.create({ companyId: company.id, description: description, rating: rating, email: email }))
			.then(response => {
				this.setState({ submitFeedbackSuccess: true });
			});
	}

	_onClickNewFeedback() {
		this.setState(initialState);
	}

	render() {
		return (
			<Paper className={styles.Wrapper}>
				{!this.state.submitFeedbackSuccess ?
					<form autoComplete="off">
						<Rating
							onChange={this._onChange}
							max={5}
							value={this.state.rating}
						/>
						<TextField
							name='email'
							className={styles.FeedbackInput}
							onChange={this._onChangeInput}
							hintText="Enter email"
							type="email"
							floatingLabelText="Would you like to be notified?"
						/>
						<TextField
							name="description"
							className={styles.FeedbackInput}
							onChange={this._onChangeInput}
							hintText="Enter feedback here"
							floatingLabelText="What could we do better?"
							multiLine={true}
							rows={2} />
						<RaisedButton
							label="Submit"
							fullWidth={true}
							primary={true}
							onClick={this._onClickSubmitFeedback}
						/>
					</form>
					:
					<div className={styles.SignupSuccess}>
						<ActionDone style={{ width: 40, height: 40 }} color={green500} />
						<h3>Success!</h3>
						<p>Thank you for helping improve our store.</p>
						<RaisedButton
							label="Enter new feedback"
							fullWidth={true}
							primary={true}
							onClick={this._onClickNewFeedback}
						/>
					</div>
				}
			</Paper>
		);
	}
}

const mapDispatchToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapDispatchToProps)(FeedbackForm);
