import HomeComponent from '@home/HomeComponent'
import HomeContainer from '@home/HomeContainer'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('<HomeComponent />', () => {
	let wrapper
	const count = 0
	
	beforeEach(() => {
		wrapper = shallow(<HomeComponent count={count}/>)
		
	})
	
	it('+++ render the DUMB component', () => {
		expect(wrapper.length).toEqual(1)
	})
	
	it('+++ contains count', () => {
		expect(wrapper.find('p').prop('children')).toEqual(['current count: ', count])
	})
})

describe('<HomeContainer />>', () => {
	const initialState = {
		home: {
			count: 0
		}
	}
	const mockStore = configureStore()
	let store, container
	
	beforeEach(() => {
		store = mockStore(initialState)
		container = shallow(<HomeContainer store={store}/>)
	})
	
	it('+++ render the connected(SMART) component', () => {
		expect(container.length).toEqual(1)
	})
	
	it('+++ check Prop matches with initialState', () => {
		expect(container.prop('count')).toEqual(initialState.home.count)
	})
	
})

// describe('<HomeComponent /> --- Snapshot',()=>{
// 	it('+++capturing Snapshot of Home', () => {
// 		const renderedValue =  renderer.create(<HomeComponent count={10}/>).toJSON()
// 		expect(renderedValue).toMatchSnapshot();
// 	});
// });
