import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './Loading.scss';

const Loading = () => (
	<div className={styles.Wrapper}>
		<CircularProgress size={80} thickness={5} />
	</div>
);

export default Loading;
