
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all personalChit sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_personalChit_initialStore'

export const personalChitSlice = createSlice({
  name: 'personalChitsSample',
  initialState: InitialStore,

  reducers: {

    addPersonalChitToStore: (state, action) => {

      // let personalChitId = action.payload.personalChitId
      // let personalChit = action.payload.personalChit
      // let personalChitHolder = action.payload.personalChitHolder
      // let dbCollection = action.payload.dbCollection
      // let newpersonalChitHolder = {dbCollection: dbCollection, id: personalChitHolder}

      // let personalChitObject = {
      //   id: personalChitId,
      //   personalChit: personalChit,
      //   personalChitHolders: [newpersonalChitHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_personalChitSlice ] personalChitId ', personalChitId)
      // console.log('[ sam_personalChitSlice ] newpersonalChitHolder ', newpersonalChitHolder)
      // console.log('[ sam_personalChitSlice ] dbCollection ', dbCollection)

      // state.push(personalChitObject)
    },



  updateEditedPersonalChit: (state, action) => {


    // let personalChitId = action.payload.id
    // let newpersonalChit = action.payload.personalChit
    
    

    // let personalChitIndex = state.findIndex(index => index.id === personalChitId)
    
    // state[personalChitIndex].personalChit  = newpersonalChit
   


  }, // end updateEditedpersonalChit

  addPersonalChitHolder: (state, action) => {


    // let personalChitId = action.payload.personalChitId
    // let personalChitHolder = action.payload.personalChitHolder
    // let dbCollection = action.payload.dbCollection
    // let newpersonalChitHolder = {dbCollection: dbCollection, id: personalChitHolder}
    



    // let personalChitIndex = state.findIndex(index => index.id === personalChitId)

    // console.log('[ sam_personalChitSlice ] personalChitIndex ', personalChitIndex)   
    
    // state[personalChitIndex].personalChitHolders.push(newpersonalChitHolder)
   
  }, // end addpersonalChitHolder

}

}) // end slice personalChitsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addPersonalChitToStore, 
  updateEditedPersonalChit,
  addPersonalChitHolder 

} = personalChitSlice.actions



// --- Export selectors ------------------------------------------

export const selectAllPersonalChitSections = state => state.sample.personalChit




// --- default Export reducers -----------------------------------

export default personalChitSlice.reducer