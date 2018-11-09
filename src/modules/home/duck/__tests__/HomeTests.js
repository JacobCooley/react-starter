import HomeComponent from '@home/HomeComponent'
import HomeContainer from '@home/HomeContainer'
import React from 'react'
import jest from 'jest'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('<HomeComponent /> --- Snapshot',()=>{
	it('+++ capturing Snapshot of <HomeComponent />', () => {
		const renderedValue =  shallow(<HomeComponent count={0}/>)
		expect(renderedValue).toMatchSnapshot();
	});
	
	// it('+++ verify PropTypes', () => {
	// 	const props = {
	// 			count: 0,
	// 			onIncrementClick: jest.fn(),
	// 			onDecrementClick: jest.fn()
	// 		},
	// 	DateInputComponent = mount(<HomeComponent {...props} />).find('.datepicker');
	// 	expect(DateInputComponent.hasClass('react-datepicker-hide-month')).toEqual(true);
	// });
});

describe('<HomeComponent /> shallow copy', () => {
	let wrapper
	const count = 0
	
	beforeEach(() => {
		wrapper = shallow(<HomeComponent count={count}/>)
		
	})
	
	it('+++ render the DUMB component', () => {
		expect(wrapper.length).toEqual(1)
	})
	
	it('+++ contains count', () => {
		expect(wrapper.find('p').text()).toEqual('current count: ' + count)
	})
})

describe('<HomeContainer /> shallow copy', () => {
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
