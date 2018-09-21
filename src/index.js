import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import './main.scss';

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
			<div className="hero is-fullheight">
				<div className="hero-head">
					<div className="content has-text-centered">
						<h1 className="title is-1">Editor Markdown</h1>
					</div>
				</div>
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column">
								<div className="content">
									<h1 className="title">Entrada</h1>
									<p className="subtitle">Entre aqui seu texto em markdown</p>
								</div>
								<textarea className="textarea is-danger" onChange={this.handleChange} />
							</div>
							<div className="column">
								<div className="content">
									<h1 className="title">Saída</h1>
									<p className="subtitle">Código Markdown compilado</p>
								</div>
								<div className="box">
									<div className="content" dangerouslySetInnerHTML={{__html: md.render(this.state.text)}}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero-foot">
					<footer className="footer">
						<div className="content has-text-centered">
							<p>Criado por <a href="https://will.amaral.io">Willian Amaral</a></p>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


