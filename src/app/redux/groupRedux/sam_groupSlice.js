import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_group_initialStore'

export const groupsSlice = createSlice({
  name: 'groupsSample',
  initialState: InitialStore,

  reducers: {

    addGroupToStore: (state, action) => {

      let groupId = action.payload.groupId
      let group = action.payload.group
      let groupHolder = action.payload.groupHolder
      let dbCollection = action.payload.dbCollection
      let newgroupHolder = {dbCollection: dbCollection, id: groupHolder}

      let groupObject = {
        id: groupId,
        group: group,
        groupHolders: [newgroupHolder]
      }

      console.log('===============================================================')
      console.log('[ sam_groupSlice ] groupId ', groupId)
      console.log('[ sam_groupSlice ] newgroupHolder ', newgroupHolder)
      console.log('[ sam_groupSlice ] dbCollection ', dbCollection)

      state.push(groupObject)
    },



  updateEditedGroup: (state, action) => {


    let groupId = action.payload.id
    let newgroup = action.payload.group
    
    

    let groupIndex = state.findIndex(index => index.id === groupId)
    
    state[groupIndex].group  = newgroup
   


  }, // end updateEditedgroup

  addGroupHolder: (state, action) => {


    let groupId = action.payload.groupId
    let groupHolder = action.payload.groupHolder
    let dbCollection = action.payload.dbCollection
    let newgroupHolder = {dbCollection: dbCollection, id: groupHolder}
    



    let groupIndex = state.findIndex(index => index.id === groupId)

    console.log('[ sam_groupSlice ] groupIndex ', groupIndex)   
    
    state[groupIndex].groupHolders.push(newgroupHolder)
   
  }, // end addgroupHolder

}

}) // end slice groupsSlice 


// --- Export actions ---------------------------------------------

export const { 
  addGroupToStore, 
  updateEditedGroup,
  addGroupHolder 

} = groupsSlice.actions



// --- Export selectors ------------------------------------------

export const selectgroups = state => state.sample.groups




// --- default Export reducers -----------------------------------

export default groupsSlice.reducer