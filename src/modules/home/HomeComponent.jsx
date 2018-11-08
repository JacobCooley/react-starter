import React from 'react';
import RedditContainer from './RedditContainer';
import Button from 'components/Button'

const HomeComponent = ({ count, onIncrementClick, onDecrementClick }) => (
	<div>
		<p>current count: {count}</p>
		<Button onClick={onIncrementClick} text='Increment' />
		<Button onClick={onDecrementClick} text='Decrement' />
		<RedditContainer/>
	</div>
)

export default HomeComponent;