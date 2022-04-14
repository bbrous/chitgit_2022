
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all logs sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_log_initialStore'

export const logsSlice = createSlice({
  name: 'logsSample',
  initialState: InitialStore,

  reducers: {

    addLogsToStore: (state, action) => {

      // let logsId = action.payload.logsId
      // let logs = action.payload.logs
      // let logsHolder = action.payload.logsHolder
      // let dbCollection = action.payload.dbCollection
      // let newlogsHolder = {dbCollection: dbCollection, id: logsHolder}

      // let logsObject = {
      //   id: logsId,
      //   logs: logs,
      //   logsHolders: [newlogsHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_logsSlice ] logsId ', logsId)
      // console.log('[ sam_logsSlice ] newlogsHolder ', newlogsHolder)
      // console.log('[ sam_logsSlice ] dbCollection ', dbCollection)

      // state.push(logsObject)
    },



  updateEditedLogs: (state, action) => {


    // let logsId = action.payload.id
    // let newlogs = action.payload.logs
    
    

    // let logsIndex = state.findIndex(index => index.id === logsId)
    
    // state[logsIndex].logs  = newlogs
   


  }, // end updateEditedLogs

  addLogsHolder: (state, action) => {


    // let logsId = action.payload.logsId
    // let logsHolder = action.payload.logsHolder
    // let dbCollection = action.payload.dbCollection
    // let newlogsHolder = {dbCollection: dbCollection, id: logsHolder}
    



    // let logsIndex = state.findIndex(index => index.id === logsId)

    // console.log('[ sam_logsSlice ] logsIndex ', logsIndex)   
    
    // state[logsIndex].logsHolders.push(newlogsHolder)
   
  }, // end addLogsHolder

}

}) // end slice logsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addLogsToStore, 
  updateEditedLogs,
  addLogsHolder 

} = logsSlice.actions



// --- Export selectors ------------------------------------------

export const selectLogs = state => state.sample.logs




// --- default Export reducers -----------------------------------

export default logsSlice.reducer