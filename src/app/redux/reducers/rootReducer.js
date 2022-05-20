//rootReducer.js

/*

DATA BASE - Data Loading --------------

Initial Store Data from database gets loaded with
homeActions (features/main/home/homeActions.js) in
componentDidMount.  The Home.jsx file is the destination
after successful login.


*/

import { combineReducers } from 'redux';



// import asyncReducer from './asyncReducer'
import sampleReducer from './sampleRootReducer'
// import mainReducer from './mainReducer'

import statusReducer from '../statusRedux/statusSlice'
import spotlightReducer from '../spotlightRedux/spotlightsSlice'
import taskReducer from '../taskRedux/tasksSlice'
import noteReducer from '../noteRedux/notesSlice'
import sharedChitReducer from '../sharedChitRedux/sharedChitSlice'


const rootReducer = combineReducers({

  // async: asyncReducer,
    sample: sampleReducer,
    status:  statusReducer,
    spotlights:  spotlightReducer,
    tasks: taskReducer ,
    notes:  noteReducer,
    sharedChits: sharedChitReducer
    

  

})

export default rootReducer