import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_group_initialStore'

export const groupsSlice = createSlice({
  name: 'groupsSample',
  initialState: InitialStore,

  reducers: {

    addGroupToStore: (state, action) => {
      const {id, name, groupHolder, dbCollection, meta} = action.payload
      let groupId = id
     
      let newGroupHolder, newMeta 
      groupHolder ? newGroupHolder  = [{dbCollection: dbCollection, id: groupHolder}]: newGroupHolder  = []

      groupHolder ? newMeta  = meta: newMeta  = ''

      let groupObject = {
        id: groupId,
        type: 'other',
        name: name,
        meta: newMeta,
        groupHolders: newGroupHolder
      }
      state.push(groupObject)
    },



  updateEditedGroup: (state, action) => {


    let groupId = action.payload.id
    let newgroup = action.payload.group
    
    

    let groupIndex = state.findIndex(index => index.id === groupId)
    
    state[groupIndex].group  = newgroup
   


  }, // end updateEditedgroup

  addGroupHolder: (state, action) => {

    
    let groupId = action.payload.id
    let groupHolder = action.payload.groupHolder
    let dbCollection = action.payload.dbCollection
    let newgroupHolder = {dbCollection: dbCollection, id: groupHolder}
    



    let groupIndex = state.findIndex(index => index.id === groupId)

console.log('[ sam_groupSlice ] groupIndex ', state)
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

export const selectGroups = state => state.sample.groups




// --- default Export reducers -----------------------------------

export default groupsSlice.reducer