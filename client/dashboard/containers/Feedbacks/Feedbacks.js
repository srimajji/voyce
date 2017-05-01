import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { feathersServices } from '../../feathers';
import styles from './Feedbacks.scss';

class Feedbacks extends React.Component {
	constructor() {
		super();

		this._renderList = this._renderList.bind(this);
		this._onClickShowMore = this._onClickShowMore.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(feathersServices.feedbacks.find());
	}

	_onClickShowMore() {
		const { feedbacks } = this.props;
		const skipCount = feedbacks.skip + 10;
		this.props.dispatch(feathersServices.feedbacks.find({ query: { $skip: skipCount } }));
	}

	_renderList() {
		const { feedbacks } = this.props;
		const view = feedbacks.data.map((feedback, key) => {
			const createdAt = moment(feedback.created_at).format('MMMM Do YYYY');
			return (
				<TableRow key={key}>
					<TableRowColumn>{feedback.rating}</TableRowColumn>
					<TableRowColumn>{feedback.description}</TableRowColumn>
					<TableRowColumn>{feedback.email || 'NA'}</TableRowColumn>
					<TableRowColumn>{createdAt}</TableRowColumn>
				</TableRow>
			);
		});
		return view;
	}

	render() {
		const { feedbacks } = this.props;

		return (
			<div className={styles.Wrapper}>
				<Table className={styles.Table}>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow>
							<TableHeaderColumn>Rating</TableHeaderColumn>
							<TableHeaderColumn>Feedback</TableHeaderColumn>
							<TableHeaderColumn>Email</TableHeaderColumn>
							<TableHeaderColumn>Date</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{feedbacks ? this._renderList() : null}
					</TableBody>
				</Table>
				<RaisedButton
					label='Show more'
					fullWidth={true}
					primary={true}
					className={styles.ShowMoreButton}
					onClick={this._onClickShowMore}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
	feedbacks: state.feedbacks.queryResult,
});

export default connect(mapStateToProps)(Feedbacks);
