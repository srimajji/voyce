import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FeedbacksOverTime from '../../components/Charts/FeedbacksOverTime/FeedbacksOverTime.js';
import styles from './Main.scss';

class Main extends React.Component {
	render() {
		const style = {
			height: 200,
			padding: 20,
			width: '100%',
			textAlign: 'center',
			display: 'inline-block',
			zDepth: 1
		};

		return (
			<div className={styles.MainLayout}>
				<Grid fluid>
					<Row>
						<Col xs={4} md={4} lg={4}>
							<Paper style={style} zDepth={1}>
								<h1>Submissions</h1>
							</Paper>
						</Col>
						<Col xs={4} md={4} lg={4}>
							<Paper style={style} zDepth={1} />
						</Col>
						<Col xs={4} md={4} lg={4}>
							<Paper style={style} zDepth={1} />
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

export default connect()(Main);