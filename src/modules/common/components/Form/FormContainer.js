import { connect } from 'react-redux';
import FormComponent from './FormComponent';
import { formOperations } from './duck';

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	const onSubmit = (e) => e.preventDefault();
	return {
		onSubmit
	}
};

const FormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FormComponent);

export default FormContainer