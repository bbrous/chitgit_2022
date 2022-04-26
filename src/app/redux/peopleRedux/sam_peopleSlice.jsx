import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_people_initialStore'

export const peopleSlice = createSlice({
  name: 'peopleSample',
  initialState: InitialStore,

  reducers: {

    addPersonToStore: (state, action) => {
      let personObject = action.payload
      state.push(personObject)
    },// end addPersonToStore



  // updateEditedPerson: (state, action) => {


  //   let personId = action.payload.id
  //   let newName = action.payload.name
  //   let newMeta = action.payload.meta
    

  //   let personIndex = state.findIndex(index => index.id === personId)
    
  //   state[personIndex].person  = newName
   


  // }, // end updateEditedPerson

  // addPersonHolder: (state, action) => {


  //   let personId = action.payload.personId
  //   let personHolder = action.payload.personHolder
  //   let dbCollection = action.payload.dbCollection
  //   let newPersonHolder = {dbCollection: dbCollection, id: personHolder}
    
  //   console.log('===============================================================')
  //   console.log('[ sam_personSlice ] personId ', personId)
  //   console.log('[ sam_personSlice ] newPersonHolder ', newPersonHolder)
  //   console.log('[ sam_personSlice ] dbCollection ', dbCollection)


  //   let personIndex = state.findIndex(index => index.id === personId)

  //   console.log('[ sam_personSlice >>>>>>>] personIndex ', state[personIndex].personHolders)   
    
  //   state[personIndex].personHolders.push(newPersonHolder)
   
  // }, // end addPersonHolder


  // deletePersonHolder: (state, action) => {


  //   let person = action.payload.person
  //   let personHolder = action.payload.personHolder
 
 

  //   let personIndex = state.findIndex(index => index.person === person)

  

  //   state[personIndex].personHolders = state[personIndex].personHolders.filter(item => item.id !== personHolder)

  // }, // end deletePersonHolder

} //----- end reducers

}) // end slice personsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addPersonToStore, 
  // updateEditedPerson,
  // addPersonHolder,
  // deletePersonHolder 

} = peopleSlice.actions



// --- Export selectors ------------------------------------------

export const selectPeople = state => state.sample.people




// --- default Export reducers -----------------------------------

export default peopleSlice.reducer