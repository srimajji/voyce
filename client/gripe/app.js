import React from 'react';
import { browserHistory } from 'react-router';
import { isEmpty } from 'lodash/isEmpty';
import Form from './form.js';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			company: {}
		};
	}
	componentDidMount() {
		const { company } = this.props.params;
		fetch(`/api/companies?alias=${company}`)
			.then(response => response.json())
			.then(response => {
				if (response.data.length) {
					const company = response.data[0];
					this.setState({ company: company });
				} else {
					browserHistory.push('/notfound');
				}
			});
	}
	render() {
		const { company } = this.state;
		return (<div>{!isEmpty(company) ? <Form {...company} /> : null}</div>);
	}
}

export default App;