import React from 'react';
import { connect } from 'react-redux';

import styles from './Main.scss';

class Main extends React.Component {
	render() {
		return (
			<div>
				This is the main content
			</div>
		);
	}
}

export default connect()(Main);