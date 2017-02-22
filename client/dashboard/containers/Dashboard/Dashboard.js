import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FeedbacksOverTime from '../../components/Charts/FeedbacksOverTime/FeedbacksOverTime.js';
import FeedbacksOverTimeBar from '../../components/Charts/FeedbacksOverTimeBar/FeedbacksOverTimeBar.js';
import styles from './Dashboard.scss';

class Dashboard extends React.Component {
	render() {
		const style = {
			height: 200,
			marginTop: 20,
			padding: 20,
			width: '100%',
			textAlign: 'center',
			display: 'inline-block',
			zDepth: 1
		};

		return (
			<div className={styles.Dashboard}>
				<Grid fluid>
					<Row>
						<Col xs={12} md={4} lg={4}>
							<FeedbacksOverTimeBar style={style} />
						</Col>
						<Col xs={12} md={4} lg={4}>
							<Paper style={style} zDepth={1}>
								<h1>Feedbacks</h1>
								<h4>this month</h4>
							</Paper>
						</Col>
						<Col xs={12} md={4} lg={4}>
							<Paper style={style} zDepth={1}>
								<h1>Feedbacks</h1>
								<h4>total</h4>
							</Paper>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={12} lg={12}>
							<FeedbacksOverTime />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default connect()(Dashboard);