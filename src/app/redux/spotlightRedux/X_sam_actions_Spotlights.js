// import { delay } from '../../utils/util';
// import { asyncActionError, asyncActionFinish, asyncActionStart } from '../reducers/asyncReducer';

import {  
  ADD_SPOTLIGHT_TO_STORE,
  UPDATE_SPOTLIGHT_IN_STORE,
  CHANGE_SPOTLIGHT_COMPLETED_STATUS,
  UPDATE_TASK_ARRAY,
  CHANGE_LAST_SPOTLIGHT_VISIT,

// ################################
  CREATE_NEW_TOP_SPOTLIGHT,
  CREATE_NEW_CHILD_SPOTLIGHT,
  GET_LAST_SPOTLIGHT_IN_ARRAY

// #################################
  
  } from '../store/sampleStore/ex_storeConstants';


// ========== Spotlights ========================================

//--- CRUD -----

// ################################################################
// ################################################################
// ################################################################




export const  addSpotLightToStore = (spotlight) => {
  // console.log('MAIN ACTIONS - add spotlight clicked')
  return {
    type: ADD_SPOTLIGHT_TO_STORE,
    payload: {
      spotlight : spotlight,
      
    }
  }
}

export const  updateSpotLightInStore = (newSpotlightDetail) => (newSpotlightDetail) => {
  // console.log('MAIN ACTIONS - updateSpotLight clicked', newSpotlightDetail)
  return {
    type: UPDATE_SPOTLIGHT_IN_STORE,
    payload: {
       
      newSpotlightDetail: newSpotlightDetail
    }
  }
}




// ################################################################
// ################################################################
// ################################################################

//--- Sptolight Status Updates -----

  export const  changeSpotlightCompletedStatus = (spotId, newSpotlightCompletedStatus, newSpotlightCompletedTime) => {

    // console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , spotId)
    // console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , newSpotlightCompletedStatus)

    return {
      type: CHANGE_SPOTLIGHT_COMPLETED_STATUS,
      payload: {
        spotId: spotId,
        spotlightStatus: newSpotlightCompletedStatus,
        completedTimeStamp: newSpotlightCompletedTime

        
      }
    }
  }

  export const  changeSpotlightLastVisit = (spotId, lastVisitDate) => {

    // console.log('[sam_Actions_Spotlights] - hi spotId = ', spotId )
    // console.log('[sam_Actions_Spotlights] - hi lastVisitDate = ', lastVisitDate )
    // console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , newSpotlightCompletedStatus)

    return {
      type: CHANGE_LAST_SPOTLIGHT_VISIT,
      payload: {
        spotId: spotId,
        lastVisitDate: lastVisitDate
        // spotlightStatus: newSpotlightCompletedStatus,
        // completedTimeStamp: newSpotlightCompletedTime

        
      }
    }
  }

  // -------------TASKS -------------------------

  export const  updateTaskArray = (spotId, newTaskArray) => {

    // console.log('[mainActions I be clicked - hi updateTaskArray = ' , newTaskArray)
    // console.log('[mainActions I be clicked - id = ' , spotId)



    return {
      type: UPDATE_TASK_ARRAY,
      payload: {
        spotId: spotId,
        taskArray: newTaskArray

        
      }
    }
  }
  
  
