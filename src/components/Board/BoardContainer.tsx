import { connect } from 'react-redux'
import { Board } from './Board'
import { addTask, RootState, todo } from '../../redux/redux-toolkit'

type propsType = {
    tasks: Array<todo>
    addTask: any
  }

const mapDispatch = { addTask }
const mapStateToProps = (state: RootState) => ({
    tasks: state.addTask
})

export const BoardContainer = connect(mapStateToProps, mapDispatch)(Board)