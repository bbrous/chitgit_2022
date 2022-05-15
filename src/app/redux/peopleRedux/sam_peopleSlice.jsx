import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_people_initialStore'

export const peopleSlice = createSlice({
  name: 'peopleSample',
  initialState: InitialStore,

  reducers: {

    addPersonToStore: (state, action) => {
      console.log('[ sam+PeopleSlice ] addPersonToStore @@@  ', action.payload);
      const {id, name, personHolder, dbCollection, meta} = action.payload
      let personId = id

      let newPersonHolder, newMeta 
      personHolder ? newPersonHolder  = [{dbCollection: dbCollection, id: personHolder}]: newPersonHolder  = []

      personHolder ? newMeta  = meta: newMeta  = ''

      let personObject = {
        id: personId,
        type: 'person',
        name: name,
        meta: newMeta,
        personHolders: newPersonHolder
      }


      state.push(personObject)
    },// end addPersonToStore

    addPersonHolder: (state, action) => {


      let personId = action.payload.id
      let personHolder = action.payload.personHolder
      let dbCollection = action.payload.dbCollection
      let newPersonHolder = {dbCollection: dbCollection, id: personHolder}

  
  
      let personIndex = state.findIndex(index => index.id === personId)
  
       
      state[personIndex].personHolders.push(newPersonHolder)
     
    }, // end addPeywordHolder

    deletePersonHolder: (state, action) => {
      console.log('[ sam+PeopleSlice ] deletePersonHolder ### ', action.payload);

      let person = action.payload.person
      let personHolder = action.payload.personHolder
   
   
  
      let personIndex = state.findIndex(index => index.name === person)
  
    
  
      state[personIndex].personHolders = state[personIndex].personHolders.filter(item => item.id !== personHolder)
  
    }, // end deletePersonHolder


  // updateEditedPerson: (state, action) => {


  //   let personId = action.payload.id
  //   let newName = action.payload.name
  //   let newMeta = action.payload.meta
    

  //   let personIndex = state.findIndex(index => index.id === personId)
    
  //   state[personIndex].person  = newName
   


  // }, // end updateEditedPerson




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
  addPersonHolder,
  deletePersonHolder 

} = peopleSlice.actions



// --- Export selectors ------------------------------------------

export const selectPeople = state => state.sample.people




// --- default Export reducers -----------------------------------

export default peopleSlice.reducer