import RedditComponent from '@home/RedditComponent'
import RedditContainer from '@home/RedditContainer'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('<RedditComponent /> --- Snapshot',()=>{
	it('+++capturing Snapshot of <RedditComponent />', () => {
		const renderedValue =  renderer.create(<RedditComponent subredditData={[]}/>).toJSON()
		expect(renderedValue).toMatchSnapshot();
	});
});

describe('<RedditComponent />', () => {
	let wrapper
	const subredditData = []
	
	beforeEach(() => {
		wrapper = shallow(<RedditComponent subredditData={subredditData}/>)
		
	})
	
	it('+++ render the DUMB component', () => {
		expect(wrapper.length).toEqual(1)
	})
	
	it('+++ contains subredditData', () => {
		expect(wrapper.find('ul').prop('children')[0]).toEqual(subredditData)
	})
})

describe('<RedditContainer />>', () => {
	const initialState = {
		home: {
			subreddit: '',
			showSpinner: false,
			subredditData: []
		}
	}
	const mockStore = configureStore()
	let store, container
	
	beforeEach(() => {
		store = mockStore(initialState)
		container = shallow(<RedditContainer store={store}/>)
	})
	
	it('+++ render the connected(SMART) component', () => {
		expect(container.length).toEqual(1)
	})
	
	it('+++ check Prop matches with initialState', () => {
		expect(container.prop('subredditData')).toEqual(initialState.home.subredditData)
	})
	
})