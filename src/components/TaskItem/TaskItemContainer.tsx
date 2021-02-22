import { connect } from 'react-redux'
import { TaskItem } from './TaskItem'
import { addTask, RootState } from '../../redux/redux-toolkit'


const mapDispatch = { addTask }
const mapStateToProps = (state: RootState) => ({
    tasks: state.addTask
})

export const TaskItemContainer = connect(mapStateToProps, mapDispatch)(TaskItem)

