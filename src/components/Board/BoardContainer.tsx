import { connect } from 'react-redux'
import { Board } from './Board'
import addTask from '../../redux/taskReducer'

const mapDispatch = { addTask }

export default connect(null, mapDispatch)(Board)