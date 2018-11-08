import React from 'react';
import RedditContainer from './RedditContainer';
import Button from '@components/Button'
import PropTypes from "prop-types";

const HomeComponent = ({ count, onIncrementClick, onDecrementClick }) => (
	<div>
		<p>current count: {count}</p>
		<Button onClick={onIncrementClick} text='Increment' />
		<Button onClick={onDecrementClick} text='Decrement' />
		<RedditContainer/>
	</div>
)

HomeComponent.propTypes = {
	count: PropTypes.number,
	onIncrementClick: PropTypes.func,
	onDecrementClick: PropTypes.func,
};

HomeComponent.defaultProps = {
	count: 0,
	onIncrementClick: () => {},
	onDecrementClick: () => {},
};

export default HomeComponent;