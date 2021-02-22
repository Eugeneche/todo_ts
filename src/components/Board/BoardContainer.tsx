import { connect } from 'react-redux'
import { Board } from './Board'
import { addTask, RootState } from '../../redux/redux-toolkit'


const mapDispatch = { addTask }
const mapStateToProps = (state: RootState) => ({
    tasks: state.addTask
})

export const BoardContainer = connect(mapStateToProps, mapDispatch)(Board)