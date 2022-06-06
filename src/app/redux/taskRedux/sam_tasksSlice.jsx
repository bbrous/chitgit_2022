import { createSlice } from '@reduxjs/toolkit'

import InitialStore from '../store/sampleStore/ex_task_initialStore'

export const tasksSlice = createSlice({
  name: 'tasksSample',
  initialState: InitialStore,

  reducers: {
    addTaskToStore: (state, action) => {
  
      let task  = action.payload
 
      console.log('[ addTaskToStore ] task ', task);
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

    updateTaskNoteId: (state, action) => {


      let taskHolderId = action.payload.noteHolderId
      let noteId = action.payload.noteId

      let taskIndex = state.findIndex(index => index.id === taskHolderId)
      
      state[taskIndex].noteId = noteId
   
  
    }, // end updateTaskNoteId




    changeTaskCompletedStatus: (state, action) => {

   

      let taskId = action.payload.taskId
      let completed = action.payload.completed
      let completedTimeStamp = action.payload.completedTimeStamp
    
      
    
    //  get the index of the spotlight Object in store Spotlights Array
      let taskIndex = state.findIndex(index => index.id === taskId)
    
   
      state[taskIndex].completedTimeStamp = completedTimeStamp
      state[taskIndex].completed = completed
    
     
    
    }, // end CHANGE_SPOTLIGHT_COMPLETED_STATUS


      // ---------------

  deleteTask: (state, action) => {
    // console.log('[deleteTask] - action.payload' , action.payload)
    let taskId = action.payload.id
    let taskIndex = state.findIndex(index => index.id === taskId)
    // console.log('[deleteTask- taskId' , taskId)
    // console.log('[deleteTask- taskIndex' , taskIndex)

    state.splice(taskIndex, 1)

  
   
  } // deleteSpotlight

  }, //end reducers

}) // end slice TasksSlice 




// --- Export actions ---------------------------------------------

export const { 

  addTaskToStore, 
  updateTaskNoteId,
  changeTaskCompletedStatus,
  deleteTask


} = tasksSlice.actions



// --- Export selectors ------------------------------------------


export const selectTasks = (state) => state.sample.tasks



// --- default Export reducers -----------------------------------

export default tasksSlice.reducer