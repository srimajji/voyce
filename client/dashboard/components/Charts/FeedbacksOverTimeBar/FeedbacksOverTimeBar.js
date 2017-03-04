import React from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import styles from './FeedbacksOverTimeBar.scss';

function getRandom(low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

function randomIntInc() {
	let numbers = new Array(35);
	for (var i = 0; i < numbers.length; i++) {
		numbers[i] = getRandom(0, 100);
	}
	return numbers;
}


const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7'],
	datasets: [
		{
			label: 'this',
			borderWidth: 1,
			data: randomIntInc(),
		}
	]
};

const options = {
	legend: {
		display: false
	},
	tooltips: {
		enabled: false
	},
	maintainAspectRatio: true,
	scales: {
		xAxes: [{
			stacked: true,
			display: false
		}],
		yAxes: [{
			stacked: true,
			display: false
		}]
	}
};

const graph = {
	height: 400,
	padding: 0,
	marginTop: 0,
	width: '100%',
	zDepth: 1
};

const FeedbacksOverTimeBar = () => (
	<Card className={styles.Wrapper}>
		<CardHeader
			title={getRandom(0, 100)}
			subtitle="# of feedbacks today"
			actAsExpander={false}
			showExpandableButton={false}
		/>
		<CardActions>
			<Bar
				data={data}
				width={150}
				height={10}
				options={options}
			/>
		</CardActions>
	</Card>
);

/*const FeedbacksOverTimeBar = ({style}) => {
	return (
		<Paper style={style} zDepth={1} className={styles.Wrapper}>
			<h2>Feedbacks today</h2>
			<h4>24</h4>
			<Bar
				data={data}
				width={150}
				height={30}
				options={options}
			/>
		</Paper>
	);
};*/

export default FeedbacksOverTimeBar;