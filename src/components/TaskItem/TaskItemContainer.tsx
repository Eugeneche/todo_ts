import { connect } from 'react-redux'
import { TaskItem } from './TaskItem'
import { addTask, RootState, todo } from '../../redux/redux-toolkit'

/* type propsType = {
    tasks: Array<todo>
    addTask: any
  } */

const mapDispatch = { addTask }
const mapStateToProps = (state: RootState) => ({
    tasks: state.addTask
})

export const TaskItemContainer = connect(mapStateToProps, mapDispatch)(TaskItem)

