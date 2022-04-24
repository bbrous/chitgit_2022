import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_logHolder_initialStore'

export const logHoldersSlice = createSlice({
  name: 'logHoldersSample',
  initialState: InitialStore,

  reducers: {

    addLogHolderToStore: (state, action) => {

      // let logHolderId = action.payload.id
      // let logHolder = action.payload.logHolder
      
  

      // let logHolderObject = {
      //   id: logHolderId,
      //   logHolder: logHolder,
       
      // }



      // state.push(logHolderObject)
    },// end addlogHolderToStore



  updateEditedLogHolder: (state, action) => {


    // let logHolderId = action.payload.id
    // let newlogHolder = action.payload.logHolder
    
    

    // let logHolderIndex = state.findIndex(index => index.id === logHolderId)
    
    // state[logHolderIndex].logHolder  = newlogHolder
   


  }, // end updateEditedlogHolder

  addLogHolderHolder: (state, action) => {


    // let logHolderId = action.payload.logHolderId
    // let logHolderHolder = action.payload.logHolderHolder
    // let dbCollection = action.payload.dbCollection
    // let newlogHolderHolder = {dbCollection: dbCollection, id: logHolderHolder}
    
    // console.log('===============================================================')
    // console.log('[ sam_logHolderSlice ] logHolderId ', logHolderId)
    // console.log('[ sam_logHolderSlice ] newlogHolderHolder ', newlogHolderHolder)
    // console.log('[ sam_logHolderSlice ] dbCollection ', dbCollection)


    // let logHolderIndex = state.findIndex(index => index.id === logHolderId)

    // console.log('[ sam_logHolderSlice >>>>>>>] logHolderIndex ', state[logHolderIndex].logHolderHolders)   
    
    // state[logHolderIndex].logHolderHolders.push(newlogHolderHolder)
   
  }, // end addlogHolderHolder


  deleteLogHolderHolder: (state, action) => {


    // let logHolder = action.payload.logHolder
    // let logHolderHolder = action.payload.logHolderHolder
 
 

    // let logHolderIndex = state.findIndex(index => index.logHolder === logHolder)

  

    // state[logHolderIndex].logHolderHolders = state[logHolderIndex].logHolderHolders.filter(item => item.id !== logHolderHolder)

  }, // end deletelogHolderHolder

} //----- end reducers

}) // end slice logHoldersSlice 


// --- Export actions ---------------------------------------------

export const { 
  addLogHolderToStore, 
  updateEditedLogHolder,
  addLogHolderHolder,
  deleteLogHolderHolder 

} = logHoldersSlice.actions



// --- Export selectors ------------------------------------------

export const selectlogHolders = state => state.sample.logHolders




// --- default Export reducers -----------------------------------

export default logHoldersSlice.reducer