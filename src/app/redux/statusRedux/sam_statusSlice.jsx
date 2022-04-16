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

      accordionDisplay: {
     
        id: ''
        // modalType: '', // info or form
        // dbCollection: '', // spotlight, twoParty, note, etc.
        // id: '',
      },
  
      initialMessage: {
     
        personalChits: true,
        twoPartyChits: true,
        spotlights: true,
        logs: true,
        journal: true,
        notes: true,
  
  
      },
  
    view: {
  
      // for Chits.jsx ----------------------------------
  
      chit: {
  
        type: 'twoPartyChits',  // personalChits, workChits, twoPartyChits
        personalDisplay: 'calendar',  // ledger or calendar
        twoPartyDisplay: 'ledger',
        personalChitId:  'cat_8',
        id:  'allChits'
      },

      personalChit: {
        type: 'personalChits',
        display: 'calendar',
        id: 'cat_8'
      },

      
      twoPartyChit: {
        display: 'ledger',
        id: 'allChits'
      },
  
  
   // for Spotlights.jsx ----------------------------------

      spotlight: {
  
        id : '',
        spotFilter: 'all',  // all or active or completed (from sidebar Nav)
        display: 'tree'  // tree or detail
  
        
        // displaySpotLight: 'show',  //initial or ''  or 'show ' 
        // spotLightsArray: ['spot1','spot2','spot3','spot4','spot5',],  
        // displaySpotLightPage: false,
      },
  
  
      // for Logs.jsx ----------------------------------
  
      log: {
  
        id: 'group_3',  // if no logId -- all else logId stuff
        sectionId: ''
      },

      // for Topicals.jsx ----------------------------------

      topical: {

        id: 'allTopicals',  // if no logId -- all else logId stuff
        sectionId: ''
      },
  
      // for journal.jsx ----------------------------------
  
      journal: {
        // journal has no id - because only 1 journal
        sectionId: '',  // if no journalId -- all else journalId stuff
      },
  
      // for Notes.jsx ----------------------------------
  
      note: {
  
        noteFilter: '',
        display: 'ledger'  // ledger or block
         
      },
  
      // for Inspiration.jsx ----------------------------------
  
      inspire: {
          
          inspireFilter: 'story' , // quote or last (chit + log + etc) or picture or story
          id: ''
        // TBD when you do inspiration ! 
      },
  
    }, // end lastView

    calendarMonthDisplay: {
      utc: 1615705861000,
      monthName: 'March',
      monthYear: '2021'
    }

  }, // end Initial State

  reducers: {
    openModal: (state, action) => {
      // console.log('REDUCER OpenModal here type: ', action.payload)
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

      console.log('[ samStatus_slice ] pageType', action.payload.pageType);
      state.view[action.payload.pageType].display = action.payload.pageView
      // state.view[action.payload.pageType].type = action.payload.type
      state.view[action.payload.pageType].id = action.payload.id
                   
    },

    updateAccordionDisplay: (state, action) => {
      state.accordionDisplay.id = action.payload.id
    
      
                   
    },

    changeMonthView: (state, action) => {

      console.log('[ samStatusSlice ] changeMonthView ', action.payload);
      state.calendarMonthDisplay= action.payload
    
      
                   
    },

    closeJournalForm: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

       
      state.view.journal.sectionId = ''

    },

    openJournalForm: (state, action) => {
      
      let newJournalId = action.payload

      // console.log('[ sam_StatusSlice ] sectionId ', newJournalId);
      state.view.journal.sectionId = newJournalId

    },

    closeLogForm: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

       
      state.view.log.sectionId = ''

    },

    openLogForm: (state, action) => {
      
      let newLogId = action.payload

      // console.log('[ sam_StatusSlice ] sectionId ', newLogId);
      state.view.log.sectionId = newLogId

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
  openJournalForm,
  closeLogForm,
  openLogForm,
  updateAccordionDisplay,
  changeMonthView

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