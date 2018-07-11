import { connect } from 'react-redux';
import { RootState } from '../../reducers/root-reducer';
import { getTime } from '../../reducers/time-reducer';
import TimeView, { TimeViewHandlerProps, TimeViewStateProps } from '../../views/TimeView/TimeView';

export interface TimeProps {
  current: number;
}

const mapStateToProps = (state: RootState, props: TimeProps): TimeViewStateProps => ({
  time: getTime(state.time),
  current: props.current,
});

const mapDispatchToProps = (dispatch): TimeViewHandlerProps => ({});

const Time = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeView);

export default Time;