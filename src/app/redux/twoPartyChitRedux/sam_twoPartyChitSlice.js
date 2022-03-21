
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all twoParty sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_twoPartyChit_initialStore'

export const twoPartySlice = createSlice({
  name: 'twoPartysSample',
  initialState: InitialStore,

  reducers: {

    addTwoPartyToStore: (state, action) => {

      // let twoPartyId = action.payload.twoPartyId
      // let twoParty = action.payload.twoParty
      // let twoPartyHolder = action.payload.twoPartyHolder
      // let dbCollection = action.payload.dbCollection
      // let newtwoPartyHolder = {dbCollection: dbCollection, id: twoPartyHolder}

      // let twoPartyObject = {
      //   id: twoPartyId,
      //   twoParty: twoParty,
      //   twoPartyHolders: [newtwoPartyHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_twoPartySlice ] twoPartyId ', twoPartyId)
      // console.log('[ sam_twoPartySlice ] newtwoPartyHolder ', newtwoPartyHolder)
      // console.log('[ sam_twoPartySlice ] dbCollection ', dbCollection)

      // state.push(twoPartyObject)
    },



  updateEditedTwoParty: (state, action) => {


    // let twoPartyId = action.payload.id
    // let newtwoParty = action.payload.twoParty
    
    

    // let twoPartyIndex = state.findIndex(index => index.id === twoPartyId)
    
    // state[twoPartyIndex].twoParty  = newtwoParty
   


  }, // end updateEditedtwoParty

  addTwoPartyHolder: (state, action) => {


    // let twoPartyId = action.payload.twoPartyId
    // let twoPartyHolder = action.payload.twoPartyHolder
    // let dbCollection = action.payload.dbCollection
    // let newtwoPartyHolder = {dbCollection: dbCollection, id: twoPartyHolder}
    



    // let twoPartyIndex = state.findIndex(index => index.id === twoPartyId)

    // console.log('[ sam_twoPartySlice ] twoPartyIndex ', twoPartyIndex)   
    
    // state[twoPartyIndex].twoPartyHolders.push(newtwoPartyHolder)
   
  }, // end addtwoPartyHolder

}

}) // end slice twoPartysSlice 


// --- Export actions ---------------------------------------------

export const { 
  addTwoPartyToStore, 
  updateEditedTwoParty,
  addTwoPartyHolder 

} = twoPartySlice.actions



// --- Export selectors ------------------------------------------

export const selectAllTwoPartySections = state => state.sample.twoParty




// --- default Export reducers -----------------------------------

export default twoPartySlice.reducer