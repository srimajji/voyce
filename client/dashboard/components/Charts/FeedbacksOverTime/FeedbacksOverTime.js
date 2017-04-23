import React from 'react';
import { Line } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7'],
	datasets: [
		{
			label: 'Feedbacks over time',
			fill: true,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40],
			spanGaps: true,
		}
	]
};

const graph = {
	height: 400,
	padding: 20,
	marginTop: 20,
	width: '100%',
	zDepth: 1
};

const FeedbacksOverTime = () => {
	return (
		<Paper style={graph} zDepth={1}>
			<Line data={data} height={350} options={{
				maintainAspectRatio: false,
			}} />
		</Paper>
	);
};

export default FeedbacksOverTime;
