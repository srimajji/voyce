
import React, { PropTypes } from 'react';
import { Grid } from 'react-flexbox-grid';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';

import styles from './index.scss';

const Wrapper = (props) => (
	<div className={styles.AppWrapper}>
		<TopNavigation />
		<div className={styles.MainLayout}>
			<Grid fluid>
				{props.children}
			</Grid>
		</div>
	</div>
);

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
