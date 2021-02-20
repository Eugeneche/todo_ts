import * as React from 'react'
import {BoardContainer} from './components/Board/BoardContainer'
import './App.css'

export const App = (props: any) => {
  return (
    <div className="app">
      <BoardContainer {...props} />
    </div>
  );
}

//export default App;
//export {}