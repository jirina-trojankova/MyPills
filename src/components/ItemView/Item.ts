import { connect } from 'react-redux';
import { setItemValue } from '../../actions/item-actions';
import ItemView from '../../views/ItemView/ItemView';

const mapStateToProps = (state, props) => ({
input: state.item.item,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (ItemView);