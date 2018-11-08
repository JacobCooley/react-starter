import React from 'react'
import { Link } from 'react-router-dom'
import { projectTitle } from 'utils/constants'
import './Header.scss'

const HeaderComponent = () => (
	<header>
		<div>{projectTitle}</div>
		<nav>
			<div><Link to='/'>Home</Link></div>
			<div><Link to='/form'>Form</Link></div>
		</nav>
	</header>
)

export default HeaderComponent;