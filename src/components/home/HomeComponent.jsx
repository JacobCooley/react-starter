import React from 'react';
import RedditContainer from './RedditContainer';

const HomeComponent = ({ count, onIncrementClick, onDecrementClick }) => (
	<div>
		<p>current count: {count}</p>
		<button onClick={onIncrementClick}>Increment</button>
		<button onClick={onDecrementClick}>Decrement</button>
		<RedditContainer/>
	</div>
)

export default HomeComponent;