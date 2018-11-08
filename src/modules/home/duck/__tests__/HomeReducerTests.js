import calculatorReducers from '@home/duck/reducers'
describe('>>>R E D U C E R --- Test calculatorReducers',()=>{
	it('+++ reducer for INCREMENT', () => {
		let state = {count:0}
		state = calculatorReducers(state,{type:"INCREMENT", value: 1})
		expect(state).toEqual({count:1})
	});
	it('+++ reducer for DECREMENT', () => {
		let state = {count:0}
		state = calculatorReducers(state,{type:"DECREMENT", value: 1})
		expect(state).toEqual({count:-1})
	});
});