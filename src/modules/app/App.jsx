import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Home from 'home/HomeContainer';
import Form from 'components/Form';
import Header from 'app/header/HeaderComponent';
import './App.scss'

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Header/>
					<main>
						<Route exact path='/' component={Home}/>
						<Route path='/form' component={Form}/>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;