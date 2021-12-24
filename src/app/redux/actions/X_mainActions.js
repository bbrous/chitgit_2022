
import { delay } from '../../utils/util';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../reducers/asyncReducer';

import  {fetchSampleData, fetchInitialAccountInfo} from '../../api/mockApi'
 




// import {SET_INITIAL_VIEW, CHANGE_VIEW, CHANGE_DISPLAY_PERSON, CHANGE_DISPLAY_CATEGORY,CHANGE_DISPLAY_CHIT_TYPE, CHANGE_CHIT_DISPLAYED,

//   OPEN_MODAL, CLOSE_MODAL, 
  
//   SHOW_ACCORDION_DETAIL,CLOSE_ACCORDION_DETAIL, CHANGE_MONTH} from '../../app/store/storeConstants';

  import {OPEN_CLOSE_SIDE_PANEL, 
          SHOW_SPOTLIGHT, 
          CLOSE_SPOTLIGHT,
          OPEN_MODAL,
          CLOSE_MODAL,
          FETCH_ACCOUNT_INFO,
          FETCH_SPOTLIGHTS,

          CHANGE_DISPLAY_SPOTLIGHT,
          CHANGE_TASK_COMPLETED_STATUS,
          CHANGE_SPOTLIGHT_COMPLETED_STATUS,
          CHANGE_SPOTLIGHT_START_STATUS,
          
          OPEN_SPOTLIGHT_PAGE,
          CLOSE_SPOTLIGHT_PAGE,
          ADD_SPOTLIGHT,
          DELETE_SPOTLIGHT,
          DELETE_TASK,

          UPDATE_SPOTLIGHT,
          CHANGE_DISPLAY,
          UPDATE_TASK_ARRAY,
          ADD_TASK,
          CHANGE_TIMER_STATUS,

          UPDATE_NOTE,
          ADD_NOTE
          
          
        } from '../store/storeConstants';


export function  loadAccountInfo() {
  
  return async function(dispatch)
  {
    dispatch(asyncActionStart())
    try{
      const accountInfo = await fetchInitialAccountInfo()
      console.log('[fs MAIN ACTIONS] - loadAccountInfo')
      dispatch({type: FETCH_ACCOUNT_INFO, payload: accountInfo})
      dispatch(asyncActionFinish())
    }catch(error) {
      dispatch(asyncActionError)
    }
  } // end async function
}// end loadSpotlights

export function  loadSpotlights() {
  console.log('[fs MAIN ACTIONS] - loadSpotlights')
  return async function(dispatch)
  {
    dispatch(asyncActionStart())
    try{
      const spotlights = await fetchSampleData()
      dispatch({type: FETCH_SPOTLIGHTS, payload: spotlights})
      dispatch(asyncActionFinish())
    }catch(error) {
      dispatch(asyncActionError)
    }
  } // end async function
}// end loadSpotlights
        

        export const  openCloseSidePanel = (sidePanelState) => {
          console.log("[ACTION] - clicked : state is: ", sidePanelState)
          return {
            type: OPEN_CLOSE_SIDE_PANEL,
            payload: {
              displaySidePanel: sidePanelState
              
            }
          }
        }


        // export const  showSpotLight = () => {
  
        //   return {
        //     type: SHOW_SPOTLIGHT,
        //     payload: {
               
        //       spotLightViews: {

        //       displaySpotLight: 'show',
               
        //       defaultSpotLight: 'spot1',
        //       displayedSpotLightId: 'spot1',
        //       spotLightsArray: ['spot1','spot2','spot3','spot4','spot5'],  
        //       }
              
        //     }
        //   }
        // }
        
        export const  closeSpotLight = () => {
          
          return {
            type: CLOSE_SPOTLIGHT,
            payload: {
               
              spotLightViews: {
              displaySpotLight: 'seen'
              }
            }
          }
        }

        export const  updateSpotLightView = () => {
  
          return {
            type: SHOW_SPOTLIGHT,
            payload: {
               
              spotLightViews: {

      
               
              defaultSpotLight: 'spot1',
              displayedSpotLightId: 'all',
              spotLightsArray: ['spot1','spot2','spot3','spot4','spot5'],  
              }
              
            }
          }
        }

        export const  changeDisplaySpotlight= (newSpotlight) => {

          // console.log('[mainActions I be clicked - newSpotlight = ' , newSpotlight)
          return {
            type: CHANGE_DISPLAY_SPOTLIGHT,
            payload: {
           
              displayedSpotLightId: newSpotlight
            }
          }
        }
        

        export const  openModal = (modalType, spotlightId) => {

          // console.log('[mainActions I be clicked - type = ' , modalType)
          console.log('[mainActions OPEN_MODALOPEN_MODALOPEN_MODAL = ' , modalType)
          return {
            type: OPEN_MODAL,
            payload: {
              modalType: modalType, 
              spotlightFormId: spotlightId,
              modalDisplayed: true
              
            }
          }
        }
        
        
        export const  closeModal = () => {
          
          return {
            type: CLOSE_MODAL,
            payload: {
              modalType: '',
              spotlightDisplayed: '',
              modalDisplayed: false
              
            }
          }
        }

        export const  openSpotLightPage = (modalType, newChit) => {

          console.log('[mainActions I be clicked')

          return {
            type: OPEN_SPOTLIGHT_PAGE,
            payload: {
              displaySpotLightPage: true,
              
            }
          }
        }
        
        
        export const  closeSpotLightPage= () => {
          
          return {
            type: CLOSE_SPOTLIGHT_PAGE,
            payload: {
              
              displaySpotLightPage: false,
              
            }
          }
        }

        export const  changeDisplay = (newDisplay) => {
          return {
            type: CHANGE_DISPLAY,
            payload: {
              display: newDisplay
            }
          }
        }




        
        export const  updateTaskArray = (id, taskArray) => {

          console.log('[mainActions I be clicked - type, update = ' , taskArray)
          
          return {
            type: UPDATE_TASK_ARRAY,
            payload: {
              id: id, 
              taskArray: taskArray,
               
              
            }
          }
        }

        export const  addTask = (id, newTask, newTaskId) => {
          console.log('MAIN ACTIONS - add newTask clicked --- ', newTask)
          console.log('MAIN ACTIONS - add id clicked --- ', id)
          return {
            type: ADD_TASK,
            payload: {
              id: id,
              task: newTask,
              newTaskId: newTaskId
            }
          }
        }

        export const  addSpotLight = (spotlight, newSpotlightId) => {
          console.log('MAIN ACTIONS - add spotlight clicked')
          return {
            type: ADD_SPOTLIGHT,
            payload: {
              spotlight : spotlight,
              newSpotlightId: newSpotlightId
            }
          }
        }

        export const  updateSpotLight = (newSpotlightDetail) => {
          console.log('MAIN ACTIONS - updateSpotLight clicked', newSpotlightDetail)
          return {
            type: UPDATE_SPOTLIGHT,
            payload: {
               
              newSpotlightDetail: newSpotlightDetail
            }
          }
        }

        export const  deleteSpotlight = (spotlightDeleteObject) => {
          console.log('MAIN ACTIONS - deleteSpotLight clicked', spotlightDeleteObject)
          return {
            type: DELETE_SPOTLIGHT,
            payload: spotlightDeleteObject
            
          }
        }

        export const  deleteTask = (taskDeleteObject) => {
          console.log('MAIN ACTIONS - task Delete  clicked', taskDeleteObject)
          return {
            type: DELETE_TASK,
            payload: taskDeleteObject
            
          }
        }

        
        export const  changeTimerStatus= (spotId, taskId, newTimerObject) => {

          // console.log('[mainActions I be clicked - changeTimerStatus = ' , changeTimerStatus)
          return {
            type: CHANGE_TIMER_STATUS,
            payload: {
              spotId: spotId,
              taskId: taskId,
              newTimerObject: newTimerObject
              
            }
          }
        }
        // spotId, taskId, newTimerObject


        export const  changeTaskCompletedStatus = (spotId, taskId, newCompletedStatus, spotlightStatus) => {

          console.log('[mainActions...changeTaskCompletedStatus spotId= ' , spotId)
          console.log('[mainActions...changeTaskCompletedStatus taskId= ' , taskId)
          console.log('[mainActions...changeTaskCompletedStatus newCompletedStatus= ' , newCompletedStatus)
          console.log('[mainActions...================================= ' )

          return {
            type: CHANGE_TASK_COMPLETED_STATUS,
            payload: {
              spotId: spotId,
              taskId: taskId,
              completed: newCompletedStatus,
              spotlightStatus: spotlightStatus
 
              
            }
          }
        }


        export const  changeSpotlightCompletedStatus = (spotId, newSpotlightCompletedStatus, newSpotlightCompletedTime) => {

          console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , spotId)
          console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , newSpotlightCompletedStatus)

          return {
            type: CHANGE_SPOTLIGHT_COMPLETED_STATUS,
            payload: {
              spotId: spotId,
              spotlightStatus: newSpotlightCompletedStatus,
              completedTimeStamp: newSpotlightCompletedTime

              
            }
          }
        }

        export const  changeSpotlightStartStatus = (spotId, newSpotlightCompletedStatus, newSpotlightCompletedTime) => {

          console.log('[mainActions I be clicked - hi changeSpotlightCompletedStatus = ' , spotId)
          

          return {
            type: CHANGE_SPOTLIGHT_START_STATUS,
            payload: {
              spotId: spotId,

            }
          }
        }



        
        export const  updateNote = (noteObject) => {
          console.log('MAIN ACTIONS - Update Note clicked', noteObject)
          console.log('[MAIN ACTIONS - ===========================================')

          console.log('[MAIN ACTIONS] UPDATE-- passed noteId: ' , noteObject.noteId)
          console.log('[MAIN ACTIONS] UPDATE-- passed type: ' , noteObject.type)
          console.log('[MAIN ACTIONS] UPDATE-- passed spotlightData: ' , noteObject.spotlightData)
          console.log('[MAIN ACTIONS] UPDATE-- passed spotlightId: ' , noteObject.spotlightId)
          console.log('[MAIN ACTIONS] UPDATE-- passed taskId: ' , noteObject.taskId)
         
        
          console.log('[NOTE POPUP - ===========================================')


          return {
            type: UPDATE_NOTE,
            payload: {
               
              noteObject: noteObject
            }
          }
        }

        export const  addNote = (noteObject) => {
          console.log('MAIN ACTIONS - Add Note clicked', noteObject)

          // console.log('[MAIN ACTIONS - ===========================================')

 
          // console.log('[MAIN ACTIONS] ADD-- passed note: ' , noteObject.note)
          // console.log('[MAIN ACTIONS] ADD-- passed type: ' , noteObject.type)
          //  console.log('[MAIN ACTIONS] ADD-- passed spotlightId: ' , noteObject.spotlightId)
          // console.log('[MAIN ACTIONS] ADD-- passed taskId: ' , noteObject.taskId)
          // console.log('[MAIN ACTIONS] ADD-- passed noteHolderId: ' , noteObject.noteHolderId)
      
          // console.log('[MAIN ACTIONS - ===========================================')
          return {
            type: ADD_NOTE,
            payload: {
               
              noteObject: noteObject
            }
          }
        }

