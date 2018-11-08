import { createReducer } from 'reduxsauce'
import { Types } from './actions'

// the initial state of this reducer
export const INITIAL_STATE = {
    count: 0,
    subreddit: '',
    showSpinner: false,
    subredditData: []
}

export const increment = (state = INITIAL_STATE, action) => {
    const { value } = action;
    const { count } = state;
    return {
        ...state,
        count: count + value
    }
}

export const decrement = (state = INITIAL_STATE, action) => {
    const { value } = action;
    const { count } = state;
    return {
        ...state,
        count: count - value
    }
}

export const request_subreddit_json = (state = INITIAL_STATE, action) => {
    const { subreddit } = action;
    return {
        ...state,
        subreddit,
        subredditData: [],
        showSpinner: true
    }
}

export const receive_subreddit_json = (state = INITIAL_STATE, action) => {
    const { subredditData } = action;
    return {
        ...state,
        subredditData,
        showSpinner: false

    }
}

export const HANDLERS = {
    [Types.INCREMENT]: increment,
    [Types.DECREMENT]: decrement,
    [Types.REQUEST_SUBREDDIT_JSON]: request_subreddit_json,
    [Types.RECEIVE_SUBREDDIT_JSON]: receive_subreddit_json
}

export default createReducer(INITIAL_STATE, HANDLERS)