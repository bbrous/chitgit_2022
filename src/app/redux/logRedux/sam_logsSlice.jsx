
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



  updateEditedLogs: (state, action) => {


    // let logsId = action.payload.id
    // let newlogs = action.payload.logs
    
    

    // let logsIndex = state.findIndex(index => index.id === logsId)
    
    // state[logsIndex].logs  = newlogs
   


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
  updateEditedLogs,
  addLogsHolder 

} = logsSlice.actions



// --- Export selectors ------------------------------------------

export const selectLogs = state => state.sample.logs




// --- default Export reducers -----------------------------------

export default logsSlice.reducer