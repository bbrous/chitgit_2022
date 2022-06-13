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
import logReducer from '../logRedux/sam_logsSlice'
import logHolderReducer from '../logHolderRedux/sam_logHolderSlice'

import journalReducer from '../journalRedux/sam_journalSlice'

import noteReducer from '../noteRedux/sam_notesSlice'
import categoryReducer from '../categoryRedux/sam_categorySlice'

import keywordReducer from '../keywordRedux/sam_keywordSlice'
import groupReducer from '../groupRedux/sam_groupSlice'
import peopleReducer from '../peopleRedux/sam_peopleSlice'
import orgReducer from '../orgRedux/X_sam_reducers_Orgs'
// import topicReducer from '../topicRedux/sam_topicSlice'
import personalChitReducer from '../personalChitRedux/sam_personalChitSlice';
import twoPartyChitReducer from '../twoPartyChitRedux/sam_twoPartyChitSlice';

import spotlightReducer from '../spotlightRedux/sam_spotlightsSlice'
import topics from '../topicalRedux/sam_topicsSlice'
import topicalSections from '../topicalRedux/sam_topicalSectionsSlice'

const sampleRootReducer = combineReducers({
  // data: homeReducer,
    // private : mainReducer,
    // public: landingReducer,
    status : statusReducer,
    personalChits: personalChitReducer,
    twoPartyChits: twoPartyChitReducer,
   
    categories: categoryReducer,
    keywords: keywordReducer,

    tasks: taskReducer,
    logs: logReducer,
    logHolders: logHolderReducer,
    topics: topics,
    topicalSections: topicalSections,
    journal: journalReducer,
    notes: noteReducer,
    // topics: topicReducer,
    organizations: orgReducer,
    people: peopleReducer,
    groups: groupReducer,
    spotlights: spotlightReducer,



    async: asyncReducer


  // crud : crudReducer
  

})

export default sampleRootReducer