
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all logs sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_log_initialStore'

export const logsSlice = createSlice({
  name: 'logsSample',
  initialState: InitialStore,

  reducers: {

    addLogToStore: (state, action) => {

      let log = action.payload

      state.push(log)
    },



  updateEditedLog: (state, action) => {


    let logId = action.payload.id
 
    
    let newLogKeywordArray = action.payload.keywordArray
    let newLogMeta = action.payload.meta
    let newLogPeopleArray = action.payload.peopleArray
    let newLogLastEdit = action.payload.lastEdit
    let newLogLogDate = action.payload.logDate

    let newLogDetail = action.payload.detail
   
    
    
    

    let logIndex = state.findIndex(index => index.id === logId)

    console.log('[ sam_logSlice ] state[logIndex] ', state[logIndex]);
    console.log('[ sam_logSlice ] payload ', action.payload);
    
    state[logIndex].detail = newLogDetail
   state[logIndex].keywordArray = newLogKeywordArray
  state[logIndex].meta = newLogMeta
  state[logIndex].peopleArray = newLogPeopleArray
  state[logIndex].lastEdit = newLogLastEdit
  state[logIndex].logDate = newLogLogDate


  }, // end updateEditedLogs

  addLogsHolder: (state, action) => {


      // let log = action.payload

      // state.push(log)
    



    // let logsIndex = state.findIndex(index => index.id === logsId)

    // console.log('[ sam_logsSlice ] logsIndex ', logsIndex)   
    
    // state[logsIndex].logsHolders.push(newlogsHolder)
   
  }, // end addLogsHolder

}

}) // end slice logsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addLogToStore, 
  updateEditedLog,
  addLogsHolder 

} = logsSlice.actions



// --- Export selectors ------------------------------------------

export const selectLogs = state => state.sample.logs

export const selectLogFromArray = (logArray, id) => {
 
  let log = logArray.find(log => log.id === id) 
 
  return log
}


// --- default Export reducers -----------------------------------

export default logsSlice.reducer