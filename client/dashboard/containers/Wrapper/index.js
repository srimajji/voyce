
import React, { PropTypes } from 'react';
import TopNavigation from '../Navigation/TopNavigation/TopNavigation';

import styles from './index.scss';

const Wrapper = (props) => (
	<div className={styles.AppWrapper}>
		<TopNavigation />
		<div className={styles.SectionWrapper}>
			{props.children}
		</div>
	</div>
);

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
