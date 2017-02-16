
import React, { PropTypes } from 'react';
import styles from './index.scss';

const Wrapper = (props) => (
	<div className={styles.AppWrapper}>
		{props.children}
	</div>
);

Wrapper.propTypes = {
	children: PropTypes.any,
};

export default Wrapper;
