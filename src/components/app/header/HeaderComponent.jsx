import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const HeaderComponent = ({ count, onIncrementClick, onDecrementClick }) => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>
		</nav>
	</header>
)

export default HeaderComponent;