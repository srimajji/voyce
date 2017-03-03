import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import styles from './Form.scss';

const Form = (props) => {
	const combinedStyles = Object.assign({}, props.styles, styles);
	return (
		<Paper className={combinedStyles}>
			{props.children}
		</Paper>
	);
};

Form.propTypes = {
	children: PropTypes.any,
};

export default Form;
