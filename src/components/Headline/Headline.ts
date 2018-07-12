import { connect } from 'react-redux';
import { setHeadlineCounter } from '../../actions/headline-actions';
import { RootState } from '../../reducers';
import HeadlineView from '../../views/HeadlineView/HeadlineView';

const mapStateToProps = (state: RootState) => ({
  headlineCounter: state.headline.headlineCounter,
});

const mapDispatchToProps = dispatch => ({
  setHeadlineCounterHandler: (val: number) => dispatch(setHeadlineCounter(val)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeadlineView);