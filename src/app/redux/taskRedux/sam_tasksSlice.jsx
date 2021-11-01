import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_task_initialStore'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: InitialStore,

  reducers: {
    // addTask: state => {
    //   ... do stuff here
    // },

    // editTask: (state, action, id) =>{
    //   ... do stuff here
    // }

  }, //end reducers

}) // end slice TasksSlice 


// --- Export actions ---------------------------------------------

// export const { addTask, editTask } = TasksSlice.actions



// --- Export selectors ------------------------------------------


export const selectTasks = (state) => state.sample.tasks



// --- default Export reducers -----------------------------------

export default tasksSlice.reducer