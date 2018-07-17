import { connect } from 'react-redux';
import { setInputValue, setNewHeadline } from '../../actions/headline-actions';
import HeadlineView from '../../views/HeadlineView/HeadlineView';

const mapStateToProps = (state, props) => ({
  headlineName: state.headline.headlineName,
  inputValue: state.headline.inputValue,
  // myProp: props.myProp,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValueHandler: (value) => dispatch(setInputValue(value)),
  handleSubmit: () => dispatch(setNewHeadline()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (HeadlineView);
