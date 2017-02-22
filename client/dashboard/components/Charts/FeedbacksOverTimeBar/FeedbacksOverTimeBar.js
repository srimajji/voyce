import React from 'react';
import { Bar } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

import styles from './FeedbacksOverTimeBar.scss';

const data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: 'this',
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
			data: [65, 59, 80, 81, 56, 55, 40],
		}
	]
};

const options = {
	legend: {
		display: false
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
	padding: 20,
	marginTop: 20,
	width: '100%',
	zDepth: 1
};

const FeedbacksOverTimeBar = ({style}) => {
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
};

export default FeedbacksOverTimeBar;