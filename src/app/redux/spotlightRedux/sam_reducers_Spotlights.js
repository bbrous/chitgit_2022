import { DraftsOutlined } from '@material-ui/icons';
import produce from 'immer';
import cuid from 'cuid';

import InitialStore from '../store/sampleStore/ex_spot_initialStore'
import {calculateEstimatedTime, msToStringDisplay,  msToISO} from '../../../app/helpers/dateHelper'

import {  ADD_SPOTLIGHT_TO_STORE,
  UPDATE_SPOTLIGHT_IN_STORE,
          CHANGE_SPOTLIGHT_COMPLETED_STATUS,
          UPDATE_TASK_ARRAY,
          CHANGE_LAST_SPOTLIGHT_VISIT
        } from '../store/sampleStore/ex_storeConstants';


        // console.log('[reducerSpotlights] initial spotlights are: ', InitialStore)

let spotlightsArray = InitialStore

const initialState =  spotlightsArray



// ==============================================================

const reducer_Spotlights = produce((draft = initialState, action) => {
  const { type, payload } = action;
  
  /*  (1) draft gives spotlights array in store

      (2) In order to access a given spotlight, need to first find
          index of the object using spot Id

           let spotIndex = draft.findIndex(index => index.id === spotId)

      (3)  then use Array notation to specify the spotlight
          spotlight object = draft[spotIndex]
  */


  switch (type) {


// ################################################################
// ################################################################
// ################################################################

    case ADD_SPOTLIGHT_TO_STORE : 
    {
      let spotlight  = {
        id: cuid(),
        type: 'spotlight', 
        parent: '',
        lastVisit: msToISO(1647216060000),
        title: payload.spotlight.title,
        spotlightStatus: 'inactive', 
        completedTimeStamp: '',
        completed: false,
        endEst: payload.spotlight.endEst,
        note: '',
        chitId: '',
        taskArray: []
      }

      draft.push(spotlight)
      
      return draft;
         
    }// end ADD_SPOTLIGHT


    case UPDATE_SPOTLIGHT_IN_STORE : 
    {

    
     const {spotlightId, title, endEst} =  payload.newSpotlightDetail

    //  **** need to get Index and pass it
    // *** then replace the spotlight

    

     return draft;
     
   }// end UPDATE_SPOTLIGHT

// ###############################################################
// ################################################################
// ################################################################
      

    case CHANGE_SPOTLIGHT_COMPLETED_STATUS : 

        /* Changes in spotlight with passed id:
            - spotlightStatus
            - completedTimeStamp

        */
    {

      let spotId = payload.spotId
      let spotlightStatus = payload.spotlightStatus
      let spotlightTimeStamp = payload.completedTimeStamp

      let completedState = spotlightStatus === 'completed'? true: false

    //  get the index of the spotlight Object in store Spotlights Array
      let spotIndex = draft.findIndex(index => index.id === spotId)
  
      draft[spotIndex].spotlightStatus = spotlightStatus
      draft[spotIndex].completedTimeStamp = spotlightTimeStamp
      draft[spotIndex].completed = completedState
    return draft
     
   }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS


  

    case CHANGE_LAST_SPOTLIGHT_VISIT : 

        /* Changes in spotlight with passed id:
            - spotlightStatus
            - completedTimeStamp

        */
    {

      let spotId = payload.spotId
      let lastVisitDate = payload.lastVisitDate
      
      console.log('[sam_reducer_Spotlight] --- I got here')

    //  get the index of the spotlight Object in store Spotlights Array
      let spotIndex = draft.findIndex(index => index.id === spotId)
  
      draft[spotIndex].lastVisit = lastVisitDate

    return draft
     
   }// end CHANGE_SPOTLIGHT_COMPLETED_STATUS




   case UPDATE_TASK_ARRAY : 

   /* Changes in spotlight with passed id:
       - spotlightStatus
       - completedTimeStamp

   */
{

 let spotId = payload.spotId
 let taskArray= payload.taskArray
 

//  get the index of the spotlight Object in store Spotlights Array
 let spotIndex = draft.findIndex(index => index.id === spotId)


  // console.log('[REDUCER Spotlight] - aaCHANGE_SPOTLIGHT_COMPLETED_STATUS clicked reduce ', taskArray)
 //   console.log('REDUCER Spotlight -  spotlightIndex ',spotIndex )
 // console.log('REDUCER Spotlight -  spotlightStatus ',draft[spotIndex].spotlightStatus )

 draft[spotIndex].taskArray = taskArray
 

return draft

}// end CHANGE_SPOTLIGHT_COMPLETED_STATUS

              
              
              //   // --------------------------

              // // --------------------------
              //   case FETCH_SPOTLIGHTS:
              //     {

              //       // console.log('[REDUCER MAIN fs ] ||||||||||||||||||||||||||||||', payload)
              //       // draft.data.spotlightData.spotlights  = payload
              //       draft.data = payload

              //       return draft

              //     } // end FETCH_SPOTLIGHTS


              // // --------------------------





  //======= Cases Above Here ========================================

    default:
      return draft
      
  } // end default

});  //end Switch

export default reducer_Spotlights


