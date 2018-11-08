import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const HeaderComponent = ({ count, onIncrementClick, onDecrementClick }) => (
	<header>
		<nav>
			<div><Link to='/'>Home</Link></div>
			<div><Link to='/about'>About</Link></div>
		</nav>
	</header>
)

export default HeaderComponent;