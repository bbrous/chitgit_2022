import { createSlice } from '@reduxjs/toolkit'

let InitialStore = []

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


export const selectTasks = (state) => state.main.tasks



// --- default Export reducers -----------------------------------

export default tasksSlice.reducer