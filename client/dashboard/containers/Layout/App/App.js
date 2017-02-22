
import React, { PropTypes } from 'react';
import TopNavigation from '../../Navigation/TopNavigation/TopNavigation';

import styles from './App.scss';

const App = (props) => (
	<div className={styles.App}>
		<TopNavigation />
		<div className={styles.Section}>
			{props.children}
		</div>
	</div>
);

App.propTypes = {
	children: PropTypes.any,
};

export default App;
