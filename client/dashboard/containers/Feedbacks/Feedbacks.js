import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './Feedbacks.scss';

const Feedbacks = () => (
	<div className={styles.Wrapper}>
		<Table>
			<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
				<TableRow>
					<TableHeaderColumn>Rating</TableHeaderColumn>
					<TableHeaderColumn>Feedback</TableHeaderColumn>
					<TableHeaderColumn>Email</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody displayRowCheckbox={false}>
				<TableRow>
					<TableRowColumn>4.5</TableRowColumn>
					<TableRowColumn>Employee was rude to me!</TableRowColumn>
					<TableRowColumn>sri@sri.com</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>8</TableRowColumn>
					<TableRowColumn>I thought there could be more machines dedicated to check workouts!</TableRowColumn>
					<TableRowColumn>ante@gmail.com</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>9</TableRowColumn>
					<TableRowColumn>Everything was great!</TableRowColumn>
					<TableRowColumn>nik@gmail.com</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn>1</TableRowColumn>
					<TableRowColumn>Employee was super racist towards me and told me to go back to my country</TableRowColumn>
					<TableRowColumn>douche@hotmail.com</TableRowColumn>
				</TableRow>
			</TableBody>
		</Table>
	</div>
);

export default Feedbacks;
