import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import './main.scss';
import {
	Hero,
	HeroHeader,
	HeroBody,
	HeroFooter,
	Content,
	Title,
	Subtitle,
	Container,
	Columns,
	Column,
	TextArea,
	Box,
	Footer
} from 'bloomer';

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
			<Hero>
				<HeroHeader>
					<Content hasTextAlign="centered">
						<Title isSize={1}>Editor Markdown</Title>
					</Content>
				</HeroHeader>
				<HeroBody>
					<Container>
						<Columns>
							<Column>
								<Content>
									<Title>Entrada</Title>
									<Subtitle tag="p"isSize={5}>Entre aqui seu texto em markdown</Subtitle>
								</Content>
								<TextArea onChange={this.handleChange}/>
							</Column>
							<Column>
								<Content>
									<Title>Saída</Title>
									<Subtitle tag="p"isSize={5}>Código markdown compilado</Subtitle>
								</Content>
								<Box>
									<Content dangerouslySetInnerHTML={{__html: md.render(this.state.text)}}/>
								</Box>
							</Column>
						</Columns>
					</Container>
				</HeroBody>
				<HeroFooter>
					<Footer>
						<Content hasTextAlign="centered">
							<p>Criado por <a href="https://will.amaral.io">Willian Amaral</a></p>
						</Content>
					</Footer>
				</HeroFooter>
			</Hero>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


