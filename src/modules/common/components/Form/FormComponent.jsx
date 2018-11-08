import React from 'react';
import Button from '@components/Button'
import './Form.scss'

const FormComponent = ({ onSubmit }) => (
	<form onSubmit={onSubmit}>
		<label>
			Input 1:
			<input type="text" name="input1" />
		</label>
		<label>
			Input 2:
			<input type="text" name="input2" />
		</label>
		<label>
			Output:
			<input type="text" name="output" />
		</label>
		<Button type="submit" value="Submit" text="Submit"/>
	</form>
)

export default FormComponent;