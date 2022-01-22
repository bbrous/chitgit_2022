import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_task_initialStore'

export const tasksSlice = createSlice({
  name: 'tasksSample',
  initialState: InitialStore,

  reducers: {
    addTaskToStore: (state, action) => {
  
      let task  = action.payload
 
      
      // {
      //   id: cuid(),
      //   type: 'spotlight', 
      //   parent: '',
      //   title: action.payload.title,
      //   spotlightStatus: 'inactive', 
      //   completedTimeStamp: '',
      //   completed: false,
      //   endEst: action.payload.endEst,
      //   note: '',
      //   chitId: '',
      //   taskArray: []
      // }

      state.push(task)
    },

  }, //end reducers

}) // end slice TasksSlice 


// --- Export actions ---------------------------------------------

export const { 

  addTaskToStore, 


} = tasksSlice.actions



// --- Export selectors ------------------------------------------


export const selectTasks = (state) => state.sample.tasks



// --- default Export reducers -----------------------------------

export default tasksSlice.reducer