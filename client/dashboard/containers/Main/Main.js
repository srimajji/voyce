import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import styles from './Main.scss';

class Main extends React.Component {
	render() {
		const style = {
			height: 200,
			width: '100%',
			textAlign: 'center',
			display: 'inline-block',
		};

		const graph = {
			height: 400,
			width: '100%',
		};
		return (
			<div>
				<Row>
					<Col xs={4} md={4} lg={4}>
						<Paper style={style} zDepth={3} />
					</Col>
					<Col xs={4} md={4} lg={4}>
						<Paper style={style} zDepth={3} />
					</Col>
					<Col xs={4} md={4} lg={4}>
						<Paper style={style} zDepth={3} />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={12} lg={12}>
						<Paper style={graph} zDepth={3} />
					</Col>
				</Row>
			</div>
		);
	}
}

export default connect()(Main);