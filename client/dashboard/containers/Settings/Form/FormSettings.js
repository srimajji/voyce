import React from 'react';
import Paper from 'material-ui/Paper';
import { Rating } from 'material-ui-rating';

import styles from './FormSettings.scss';

class FormSettings extends React.Component {
	constructor() {
		super();
	}

	_onChange(v) {
		console.log('selected star', v);
	}

	render() {
		return (
			<Paper className={styles.Wrapper}>
				<Rating
					onChange={this._onChange}
					max={5}
					value={3}
				/>
			</Paper>
		);
	}
}

export default FormSettings;
