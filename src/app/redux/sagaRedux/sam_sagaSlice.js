
// *** Sample Chrons Selectors ----------

import { createSelector } from 'reselect'

// Get all saga sections --------------------

import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_saga_initialStore'

export const sagaSlice = createSlice({
  name: 'sagasSample',
  initialState: InitialStore,

  reducers: {

    addsagaToStore: (state, action) => {

      // let sagaId = action.payload.sagaId
      // let saga = action.payload.saga
      // let sagaHolder = action.payload.sagaHolder
      // let dbCollection = action.payload.dbCollection
      // let newsagaHolder = {dbCollection: dbCollection, id: sagaHolder}

      // let sagaObject = {
      //   id: sagaId,
      //   saga: saga,
      //   sagaHolders: [newsagaHolder]
      // }

      // console.log('===============================================================')
      // console.log('[ sam_sagaSlice ] sagaId ', sagaId)
      // console.log('[ sam_sagaSlice ] newsagaHolder ', newsagaHolder)
      // console.log('[ sam_sagaSlice ] dbCollection ', dbCollection)

      // state.push(sagaObject)
    },



  updateEditedsaga: (state, action) => {


    // let sagaId = action.payload.id
    // let newsaga = action.payload.saga
    
    

    // let sagaIndex = state.findIndex(index => index.id === sagaId)
    
    // state[sagaIndex].saga  = newsaga
   


  }, // end updateEditedsaga

  addsagaHolder: (state, action) => {


    // let sagaId = action.payload.sagaId
    // let sagaHolder = action.payload.sagaHolder
    // let dbCollection = action.payload.dbCollection
    // let newsagaHolder = {dbCollection: dbCollection, id: sagaHolder}
    



    // let sagaIndex = state.findIndex(index => index.id === sagaId)

    // console.log('[ sam_sagaSlice ] sagaIndex ', sagaIndex)   
    
    // state[sagaIndex].sagaHolders.push(newsagaHolder)
   
  }, // end addsagaHolder

}

}) // end slice sagasSlice 


// --- Export actions ---------------------------------------------

export const { 
  addsagaToStore, 
  updateEditedsaga,
  addsagaHolder 

} = sagaSlice.actions



// --- Export selectors ------------------------------------------

export const selectSagas = state => state.sample.sagas




// --- default Export reducers -----------------------------------

export default sagaSlice.reducer