
import React, { PropTypes } from 'react';
import styles from './index.scss';

const AppWrapper = (props) => (
	<div className={styles.AppWrapper}>
		{props.children}
	</div>
);

AppWrapper.propTypes = {
	children: PropTypes.any,
};

export default AppWrapper;
