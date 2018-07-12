import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/root-reducer';
import HeadlineView from '../../views/HeadlineView/HeadlineView';

const mapStateToProps = (state: RootState, props) => ({
    data: state.headline.data,
});

const mapDispatchToProps = (dispatch) => ({

});

const Headline = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeadlineView);

export default Headline;

