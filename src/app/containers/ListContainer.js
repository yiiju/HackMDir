import { connect } from 'react-redux'
import List from '../components/ListContent.js'
import { setItems, deleteItems } from '../redux/actions/List.js'
import { selectItem, unSelectItem, clearAllSelected } from '../redux/actions/SelectedList.js'

const mapStateToProps = (state) => {
  return {
    list: state.List,
    selectedList: state.SelectedList,
    tab: state.Tab
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (target) => dispatch(setItems(target)),
    deleteItems: (target) => dispatch(deleteItems(target)),
    selectItem: (target) => dispatch(selectItem(target)),
    unSelectItem: (target) => dispatch(unSelectItem(target)),
    clearAllSelected: () => dispatch(clearAllSelected())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
