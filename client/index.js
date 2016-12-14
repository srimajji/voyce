import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return <div>Hello world s</div>;
	}
}

const node = document.getElementById('root');
ReactDOM.render(<HelloWorld />, node);