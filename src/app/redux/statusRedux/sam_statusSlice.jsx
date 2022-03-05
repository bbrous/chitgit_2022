import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

export const statusSlice = createSlice({
  name: 'statusSample',

  initialState: {

    // &&&&&&&&  -  currentView   -  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  
    auth: {
     
      logStatus:  true,
      logFirstName: 'Bobby',
      logLastName: '',
      lastVisit: '', // date time
    },
  
      modal: {
     
        modalDisplayed: false,
        modalParams: {}
        // modalType: '', // info or form
        // dbCollection: '', // spotlight, twoParty, note, etc.
        // id: '',
      },
  
      initialMessage: {
     
        personalChits: false,
        twoPartyChits: false,
        spotlights: true,
        logs: true,
        journal: true,
        notes: true,
  
  
      },
  
    view: {
  
      // for Chits.jsx ----------------------------------
  
      chit: {
  
        type: 'personalChits',  // personalChits, workChits, twoPartyChits
        display: 'ledger',  // ledger or calendar
        chitId:  ''
      },
  
   // for Spotlights.jsx ----------------------------------

      spotlight: {
  
        spotId : '',
        spotFilter: 'all',  // all or active or completed (from sidebar Nav)
        display: 'tree'  // tree or detail
  
        
        // displaySpotLight: 'show',  //initial or ''  or 'show ' 
        // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
        // displaySpotLightPage: false,
      },
  
  
      // for Logs.jsx ----------------------------------
  
      log: {
  
        logId: '',  // if no logId -- all else logId stuff
        
      },
  
      // for journal.jsx ----------------------------------
  
      journal: {
  
        journalId: '',  // if no journalId -- all else journalId stuff
      },
  
      // for Notes.jsx ----------------------------------
  
      note: {
  
        noteFilter: '',
        display: 'ledger'  // ledger or block
         
      },
  
      // for Inspiration.jsx ----------------------------------
  
      inspire: {
          
          inspireFilter: 'story' , // quote or last (chit + log + etc) or picture or story
          inspireId: ''
        // TBD when you do inspiration ! 
      },
  
    } // end lastView
  }, // end Initial State

  reducers: {
    openModal: (state, action) => {
      console.log('REDUCER OpenModal here type: ', action.payload)
      // console.log('REDUCER OpenModal here dbCollection : ', action.payload.dbCollection)
      // console.log('REDUCER OpenModal here : id ', action.payload.modalType)
      // let id = action.payload.id ? action.payload.id : ''

      // state.modal.modalType = action.payload.modalType
      // state.modal.dbCollection = action.payload.dbCollection
      // state.modal.id = id

      state.modal.modalParams = action.payload.modalParams
      state.modal.modalDisplayed = true

      
    },

    closeModal: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

      state.modal.modalParams = {}
      state.modal.modalDisplayed = false

    },
    
    changeLastSpotlightDisplayed: (state, action) => {
      state.spotLightDisplay.displayedSpotLightId = action.payload.displayedSpotLightId
                   
    },

    changeStatusInitialMessage: (state, action) => {
      state.initialMessage[action.payload.pageType] = false
                   
    },


    updateStatusView: (state, action) => {
      state.view[action.payload.pageType].display = action.payload.pageView
      state.view[action.payload.pageType].type = action.payload.type
      
                   
    },

    closeJournalForm: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

       
      state.view.journal.journalId = ''

    },

    openJournalForm: (state, action) => {
      
      let newJournalId = action.payload

      console.log('[ sam_StatusSlice ] sectionId ', newJournalId);
      state.view.journal.journalId = newJournalId

    },



  }, //end reducers

}) // end slice statusSlice 


// --- Export actions ---------------------------------------------

export const { 

  openModal, 
  closeModal,
  changeStatusInitialMessage, 
  changeLastSpotlightDisplayed,
  updateStatusView,
  closeJournalForm,
  openJournalForm

  } = statusSlice.actions



// --- Export selectors ------------------------------------------

export const selectStatus = state => state.sample.status //Sample site

export const selectView = (page) => createSelector(
  [selectStatus],
  view => view[page].display
)


export const spotlightStatusId = (page) => createSelector(
  [selectStatus],
  view => view[page].spotFilter
)







// --- default Export reducers -----------------------------------

export default statusSlice.reducer