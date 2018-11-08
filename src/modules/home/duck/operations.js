import fetch from 'cross-fetch'
import { Creators } from './actions'

const increment = Creators.increment
const decrement = Creators.decrement
const requestSubredditJsonAction = Creators.requestSubredditJson
const receiveSubredditJsonAction = Creators.receiveSubredditJson

const fetchSubredditJson = (subreddit) => {
	return async dispatch => {
		dispatch(requestSubredditJsonAction(subreddit))
		const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
		const responseData = await response.json()
		let data = []
		responseData.data.children.map(child => {
			const childData = {
				title: child.data.title,
				url: child.data.permalink
			}
			data.push(childData)
			return null
		})
		dispatch(receiveSubredditJsonAction(data))
	}
}

export default {
	increment,
	decrement,
	fetchSubredditJson
}