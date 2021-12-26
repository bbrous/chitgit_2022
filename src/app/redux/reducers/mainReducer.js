//rootReducer.js

/*

DATA BASE - Data Loading --------------

Initial Store Data from database gets loaded with
homeActions (features/main/home/homeActions.js) in
componentDidMount.  The Home.jsx file is the destination
after successful login.


*/

import { combineReducers } from 'redux';


// import landingReducer from './x_reducer_Landing'
// import mainReducer from './x_reducer_Main'
// import asyncReducer from './asyncReducer'

import statusReducer from '../statusRedux/statusSlice'
import spotlightReducer from '../spotlightRedux/spotlightsSlice'
import taskReducer from '../taskRedux/tasksSlice'
import noteReducer from '../noteRedux/notesSlice'

// import logReducer from '../logRedux/X_sam_reducers_Logs'
// import peopleReducer from '../peopleRedux/X_sam_reducers_People'
// import orgReducer from '../orgRedux/X_sam_reducers_Orgs'
// import topicReducer from '../topicRedux/X_sam_reducers_Topics'
// import chitReducer from  '../chitRedux/X_sam_reducers_Chits'
// import chitLinkReducer from  '../chitRedux/X_sam_reducers_ChitLinks'



const mainRootReducer = combineReducers({
  
    status : statusReducer,
    spotlights: spotlightReducer,
    tasks: taskReducer,
    notes: noteReducer,


    // chits: chitReducer,
    // chitLinks: chitLinkReducer,
    // logs: logReducer,
    // topics: topicReducer,
    // organizations: orgReducer,
    // people: peopleReducer,
   
  

})

export default mainRootReducer