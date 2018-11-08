import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    increment: ['value'],
    decrement: ['value'],
    requestSubredditJson: ['subreddit'],
    receiveSubredditJson: ['subredditData']
});

export { Creators, Types };