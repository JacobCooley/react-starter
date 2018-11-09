import homeReducers from '@home/duck/reducers'

describe('>REDUCER --- Test homeReducers', () => {
	it('+++ reducer for INCREMENT', () => {
		let state = { count: 0 }
		state = homeReducers(state, { type: "INCREMENT", value: 1 })
		expect(state).toEqual({ count: 1 })
	})
	it('+++ reducer for DECREMENT', () => {
		let state = { count: 0 }
		state = homeReducers(state, { type: "DECREMENT", value: 1 })
		expect(state).toEqual({ count: -1 })
	})
	it('+++ reducer for REQUEST_SUBREDDIT_JSON', () => {
		let state = {
			subreddit: '',
			subredditData: [],
			showSpinner: false
		}
		state = homeReducers(state, { type: "REQUEST_SUBREDDIT_JSON", subreddit: 'funny' })
		expect(state).toEqual({
			subreddit: 'funny',
			subredditData: [],
			showSpinner: true
		})
	})
	it('+++ reducer for RECEIVE_SUBREDDIT_JSON', () => {
		let state = {
			subredditData: [],
			showSpinner: true
		}
		state = homeReducers(state, { type: "RECEIVE_SUBREDDIT_JSON", subredditData: ['data1', 'data2'] })
		expect(state).toEqual({ subredditData: ['data1', 'data2'], showSpinner: false })
	})
})