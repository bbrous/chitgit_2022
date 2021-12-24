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
import asyncReducer from './asyncReducer'
import statusReducer from '../statusRedux/sam_statusSlice'

import taskReducer from '../taskRedux/sam_tasksSlice'
import logReducer from '../logRedux/X_sam_reducers_Logs'

import noteReducer from '../noteRedux/sam_notesSlice'


import peopleReducer from '../peopleRedux/X_sam_reducers_People'
import orgReducer from '../orgRedux/X_sam_reducers_Orgs'
import topicReducer from '../topicRedux/X_sam_reducers_Topics'
import chitReducer from  '../chitRedux/X_sam_reducers_Chits'
import chitLinkReducer from  '../chitRedux/X_sam_reducers_ChitLinks'
import spotlightReducer from '../spotlightRedux/sam_spotlightsSlice'


const sampleRootReducer = combineReducers({
  // data: homeReducer,
    // private : mainReducer,
    // public: landingReducer,
    status : statusReducer,
    chits: chitReducer,
    chitLinks: chitLinkReducer,
    tasks: taskReducer,
    logs: logReducer,
    notes: noteReducer,
    topics: topicReducer,
    organizations: orgReducer,
    people: peopleReducer,
    spotlights: spotlightReducer,



    async: asyncReducer


  // crud : crudReducer
  

})

export default sampleRootReducer