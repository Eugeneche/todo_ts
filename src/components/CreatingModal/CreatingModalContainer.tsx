import React, { useState } from 'react'
import { connect } from 'react-redux'
import { CreatingModal } from './CreatingModal'
import addTask from '../../redux/taskReducer'

const mapDispatch = { addTask }



export default connect(null, mapDispatch)(CreatingModal)