import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';
import PropTypes from 'prop-types'

const mapStateToProps = state => {
    const { count } = state.home;
    return { count }
};

const mapDispatchToProps = dispatch => {
    const onIncrementClick = () => dispatch(homeOperations.increment(1));
    const onDecrementClick = () => dispatch(homeOperations.decrement(1));

    return {
        onIncrementClick,
        onDecrementClick
    }
};

HomeComponent.propTypes = {
	count: PropTypes.number,
	onIncrementClick: PropTypes.func,
	onDecrementClick: PropTypes.func,
};

HomeComponent.defaultProps = {
	count: 0,
	onIncrementClick: () => {},
	onDecrementClick: () => {},
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;