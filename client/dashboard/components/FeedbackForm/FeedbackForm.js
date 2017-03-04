import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Rating from '../Rating/Rating.js';
import RaisedButton from 'material-ui/RaisedButton';

import { feathersServices } from '../../feathers';
import styles from './FeedbackForm.scss';

class FeedbackForm extends React.Component {
	constructor() {
		super();
		this.state = {
			rating: null,
			description: null,
		};

		this._onChange = this._onChange.bind(this);
		this._onChangeDescription = this._onChangeDescription.bind(this);
		this._onClickSubmitFeedback = this._onClickSubmitFeedback.bind(this);
	}

	_onChange(value) {
		this.setState({ rating: value });
	}

	_onChangeDescription(e, value) {
		this.setState({ description: value });
	}

	_onClickSubmitFeedback() {
		const { dispatch, user } = this.props;
		const { rating, description } = this.state;
		const company = user.companies[0];
		dispatch(feathersServices.feedbacks.create({ companyId: company.id, description: description, rating: rating }));
	}

	render() {
		return (
			<Paper className={styles.Wrapper}>
				<form>
					<Rating
						onChange={this._onChange}
						max={5}
						value={1}
					/>
					<TextField
						className={styles.FeedbackInput}
						onChange={this._onChangeDescription}
						hintText="Enter feedback here"
						floatingLabelText="What could we do better?"
						multiLine={true}
						rows={2} />
					<br />
					<RaisedButton
						label="Submit"
						fullWidth={true}
						primary={true}
						onClick={this._onClickSubmitFeedback}
					/>
				</form>
			</Paper>
		);
	}
}

const mapDispatchToProps = (state) => ({
	user: state.auth.user
});

export default connect(mapDispatchToProps)(FeedbackForm);