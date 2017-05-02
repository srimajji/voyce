import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { feathersServices } from '../../feathers';
import styles from './Feedbacks.scss';

class Feedbacks extends React.Component {
	constructor() {
		super();

		this.state = {
			openDialog: false,
			selectedFeedback: null
		};
		this._renderList = this._renderList.bind(this);
		this._onClickShowMore = this._onClickShowMore.bind(this);
		this._onClickFeedback = this._onClickFeedback.bind(this);
		this._handleCloseDialog = this._handleCloseDialog.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(feathersServices.feedbacks.find());
	}

	_onClickShowMore() {
		const { feedbacks } = this.props;
		const skipCount = feedbacks.skip + 10;
		this.props.dispatch(feathersServices.feedbacks.find({ query: { $skip: skipCount } }));
	}

	_onClickFeedback(row) {
		const { feedbacks } = this.props;
		this.setState({ openDialog: true, selectedFeedback: feedbacks.data[row] });

	}

	_handleCloseDialog() {
		this.setState({ openDialog: false, selectedFeedback: null });
	}

	_renderList() {
		const { feedbacks } = this.props;
		const view = feedbacks.data.map((feedback, key) => {
			const createdAt = moment(feedback.created_at).format('MMMM Do YYYY');
			return (
				<TableRow key={key}>
					<TableRowColumn>{feedback.rating}</TableRowColumn>
					<TableRowColumn>{feedback.description}</TableRowColumn>
					<TableRowColumn>{createdAt}</TableRowColumn>
				</TableRow>
			);
		});
		return view;
	}

	render() {
		const { feedbacks } = this.props;

		const actions = [
			<FlatButton
				label="Ok"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this._handleCloseDialog}
			/>,
		];

		return (
			<div className={styles.Wrapper}>
				<Table className={styles.Table} onCellClick={this._onClickFeedback}>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow>
							<TableHeaderColumn>Rating</TableHeaderColumn>
							<TableHeaderColumn>Feedback</TableHeaderColumn>
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
				<Dialog
					title={this.state.selectedFeedback ? this.state.selectedFeedback.title : 'Feedback'}
					actions={actions}
					modal={false}
					open={this.state.openDialog}
					onRequestClose={this._handleCloseDialog}
				>
					{this.state.selectedFeedback ? this.state.selectedFeedback.description : ''}
					<br />
					<br />
					Submitted: {this.state.selectedFeedback ? moment(this.state.selectedFeedback.created_at).format('MMMM Do YYYY') : ''}
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
	feedbacks: state.feedbacks.queryResult,
});

export default connect(mapStateToProps)(Feedbacks);
