import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';

const md = new Remarkable();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { text: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({text:event.target.value});
	}

	render() {
		return (
			<div className="container">
				<div className="item">
					<h1>Entrada</h1>
					<p>Entre aqui seu texto em markdown</p>
					<textarea name="entrada" id="entrada" cols="50" rows="15" onChange={this.handleChange}/>
				</div>
				<div className="item">
					<h1>Saída</h1>
					<div className="area" dangerouslySetInnerHTML={{__html: md.render(this.state.text)}}/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


