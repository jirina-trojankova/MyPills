import { connect } from 'react-redux';
import { RootState } from '../../reducers/root-reducer';
import InputView, { TimeViewHandlerProps, TimeViewStateProps } from '../../views/InputView/InputView';

export interface TimeProps {
  current: number;
}

const mapStateToProps = (state: RootState, props: TimeProps): TimeViewStateProps => ({
  current: props.current,
});

const mapDispatchToProps = (dispatch): TimeViewHandlerProps => ({});

const Time = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputView);

export default Time;