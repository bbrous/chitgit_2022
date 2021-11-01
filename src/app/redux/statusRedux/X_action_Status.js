import { delay } from '../../utils/util';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../reducers/asyncReducer';

import {  
  CHANGE_LAST_SPOTLIGHT_DISPLAYED,
  OPEN_MODAL,
  CLOSE_MODAL,
  
  } from '../store/sam_storeConstants';



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

        export const  changeLastSpotlightDisplayed= (newSpotlight) => {

          console.log('[ACTION_Status  I be clicked - newSpotlight = ' , newSpotlight)
          return {
            type: CHANGE_LAST_SPOTLIGHT_DISPLAYED,
            payload: {
           
              displayedSpotLightId: newSpotlight
            }
          }
        }
