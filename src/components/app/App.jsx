import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Home from 'home/HomeContainer';
import Reddit from 'home/RedditContainer';
import Header from 'app/header/HeaderComponent';
import './App.scss'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>
					<div>
						<Route exact path='/' component={Home}/>
						<Route path='/about' component={Reddit}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;