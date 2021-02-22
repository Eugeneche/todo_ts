import { connect } from 'react-redux'
import { CreatingModal } from './CreatingModal'
import { addTask } from '../../redux/redux-toolkit'


const mapDispatch = { addTask }



export default connect(null, mapDispatch)(CreatingModal)