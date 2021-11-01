import { delay } from '../../utils/util';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../reducers/asyncReducer';

import {
  CHANGE_LAST_SPOTLIGHT_DISPLAYED,
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_STATUS_INITIAL_MESSAGE,
  UPDATE_STATUS_VIEW,

// ################# You Are Here ###################


  UPDATE_STATUS_SPOTLIGHT


// #######################################################


} from '../store/sampleStore/ex_storeConstants';


  export const  openModal = (modalType, detailId) => {

    // console.log('[mainActions I be clicked - type = ' , modalType)
    console.log('[StatusActions OPEN_MODAL  modal type = ' , modalType)
    console.log('[StatusActions OPEN_MODAL detail id = ' , detailId)
    return {
      type: OPEN_MODAL,
      payload: {
        modalType: modalType, 
        detailId: detailId,
        modalDisplayed: true
        
      }
    }
  }

        export const  changeStatusInitialMessage = (pageType) => {

          console.log('[changeStatusInitialMessage I be clicked - pageType = ' , pageType)
          
          return {
            type: CHANGE_STATUS_INITIAL_MESSAGE,
            payload: {
              pageType: pageType,
            }
          }
        }


        export const  updateStatusView = (pageType, pageView) => {

          // console.log('[sam_action_status I be clicked - pageType = ' , pageType)
          // console.log('[sam_action_status I be clicked - pageView = ' , pageView)
          
          return {
            type: UPDATE_STATUS_VIEW,
            payload: {
              pageType: pageType,
              pageView: pageView
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

        export const  changeLastSpotlightDisplayed= (newSpotlight) => {

          console.log('[ACTION_Status  I be clicked - newSpotlight = ' , newSpotlight)
          return {
            type: CHANGE_LAST_SPOTLIGHT_DISPLAYED,
            payload: {
           
              displayedSpotLightId: newSpotlight
            }
          }
        }
