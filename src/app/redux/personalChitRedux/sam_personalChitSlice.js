
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

      let personalChit = action.payload

      state.push(personalChit)
    },



  updateEditedPersonalChit: (state, action) => {

    let data = action.payload.data
    let personalChitId = action.payload.data.id

    const {chitType, chitColor, category, workRelated, detail, chitDate, keyWordArray } = data

    console.log('[ updateEditedPersonalChit ] personalChitId ', personalChitId);

    let personalIndex  = state.findIndex(index => index.id === personalChitId)

    state[personalIndex].chitType  = chitType
    state[personalIndex].chitColor  = chitColor
    state[personalIndex].category  = category
    state[personalIndex].workRelated  = workRelated
    state[personalIndex].detail  = detail
    state[personalIndex].chitDate  = chitDate
    state[personalIndex].keyWordArray  = keyWordArray

 



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

export const selectAllPersonalChits = state => state.sample.personalChits




// --- default Export reducers -----------------------------------

export default personalChitSlice.reducer