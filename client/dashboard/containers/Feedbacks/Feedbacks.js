import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { feathersServices } from '../../feathers';
import styles from './Feedbacks.scss';

class Feedbacks extends React.Component {
	constructor() {
		super();

		this._renderList = this._renderList.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(feathersServices.feedbacks.find());
	}

	_renderList() {
		const { feedbacks } = this.props;
		const view = feedbacks.data.map((feedback, key) => {
			const createdAt = moment(feedback.created_at).format('MMMM Do YYYY');
			console.log(feedback.created_at, createdAt);
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
				<Table>
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
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
	feedbacks: state.feedbacks.queryResult,
});

export default connect(mapStateToProps)(Feedbacks);
