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

            // for Notes.jsx ----------------------------------
  
      forms: {

        twoPartyChitForm: {
          
          twoPartyChitId: '',
          formPage: 'who',
          chitType: '',
          chitValue: 0,
          chitBurden: 0,
           
          
          chitDate: '',
           
          otherPartyCollection: '',
          otherPartyId: '',

         
          person: '',
          
          group: '',
         
         
          deedPerformedBy: '',
          workRelated: 'notWorkRelated',
          description: '',
          keyWordArray: [],
 

        },

        
        sharedChitForm: {
          sharedId: '',
          sharedLinkAddress: '',

          receiverId: '',
          receiverName: '',

          senderId: '',
          chitCategory: '', // twoParty , personal
          chitId: '',
          deedPerformedBy: '',

          chitType: '', //kindness, awChit, etc
          chitColor: '',

          chitDate: '',
          sharedDate: '',
           
          sharedTitle: '',
          message: '',

        }

        
          
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

    updateFormPageView: (state, action) => {

      let pageType = action.payload.pageType
      let page = action.payload.page

  
      state.view.forms[pageType].formPage = page
  
                   
    },

    updateTwoPartyViewData: (state, action) => {

      let BobsLoginDate = new Date('2021-03-14T17:03:40.000Z') 

      console.log('[ samStatus_slice #################### ] updateTwoPartyViewData - - data', action.payload.data);

      let pageType = action.payload.pageType
      let page = action.payload.page
      let data = action.payload.data

      let otherPartyType,  chitDate, workRelated, description, keywords, chitType, chitValue, chitBurden, deedPerformedBy, person, group


      switch(page){
        case 'who': 
        otherPartyType = data.otherPartyType
        
        person = data.person
      
        group = data.group
    
        console.log('[ samStatus_slice #################### ] updateTwoPartyViewData - -who TEST TEST  data', action.payload.data.test);
          
      
          state.view.forms[pageType].formPage = 'when'
          state.view.forms[pageType].otherPartyCollection = otherPartyType
         
          state.view.forms[pageType].person = person
          
          state.view.forms[pageType].group = group
          
           
          
          
           

          break;
    
        case 'when': 
         chitDate = data.chitDate
         state.view.forms[pageType].formPage = 'details'
         state.view.forms[pageType].chitDate = chitDate
         state.view.forms[pageType].dateCreated = BobsLoginDate.toISOString()
        

         

          break;

        case 'details': 

        console.log('[ samStatus_slice $$$$$$$$$$$$$$$$$ ] updateTwoPartyViewData - -detail data keywords', action.payload.data.keywords);
       

          workRelated = data.workRelated
          description = data.description
          keywords = data.keywords
          state.view.forms[pageType].formPage = 'chit'
          state.view.forms[pageType].workRelated = workRelated
          state.view.forms[pageType].description = description
          state.view.forms[pageType].keyWordArray = keywords
         
  
 
           break;


           case 'chit': 

          //  console.log('[ samStatus_slice $$$$$$$$$$$$$$$$$ ] updateTwoPartyViewData - -detail data keywords', action.payload.data.keywords);
          
   
             chitType = data.chitType
             chitValue = data.chitValue
             chitBurden = data.chitBurden
 

             deedPerformedBy = data.deedPerformedBy
             state.view.forms[pageType].formPage = 'preview'
             state.view.forms[pageType].chitType = chitType
             state.view.forms[pageType].chitValue = chitValue
             state.view.forms[pageType].chitBurden = chitBurden
             state.view.forms[pageType].deedPerformedBy = deedPerformedBy
            
     
    
              break;

        default:
          console.log('[ samStatus_slice $$$$$$$$$$$$$$$$$ ] no data');

        }


   

      console.log('[ samStatus_slice ] updateTwoPartyViewData -page type', action.payload.pageType);
      console.log('[ samStatus_slice] updateTwoPartyViewData - just page', action.payload.page);
    



      // state.view.forms[pageType].formPage = page
      // state.view[action.payload.pageType].sectionId = action.payload.sectionId
      // state.view[action.payload.pageType].id = action.payload.id
                   
    },

    initializeTwoPartyViewData: (state, action) => {

      let BobsLoginDate = new Date('2021-03-14T17:03:40.000Z') 

      console.log('[ samStatus_slice 9999999999999999999999] initializeTwoPartyViewData ', action.payload.data);

      let pageType = action.payload.pageType
      let data = action.payload.data

      const {id, chitType,   chitDate, workRelated, description, keyWordArray, chitValue, chitBurden, otherPartyId,  deedPerformedBy, person, group, otherPartyCollection } = data

    


   

    
    
          
      state.view.forms[pageType].twoPartyChitId = id
      
      state.view.forms[pageType].chitType = chitType
      state.view.forms[pageType].otherPartyCollection = otherPartyCollection
      state.view.forms[pageType].chitDate = chitDate
      state.view.forms[pageType].chitValue = chitValue
      state.view.forms[pageType].chitBurden = chitBurden
      state.view.forms[pageType].otherPartyId = otherPartyId
      state.view.forms[pageType].deedPerformedBy = deedPerformedBy
      state.view.forms[pageType].workRelated = workRelated
      state.view.forms[pageType].description = description
      state.view.forms[pageType].keyWordArray = keyWordArray
      state.view.forms[pageType].person = person
      state.view.forms[pageType].group = group
    
                  
    },


    updateChronicleView: (state, action) => {

      console.log('[ samStatus_slice $$$$$$$$$$$$$$$$$ ] pageType', action.payload.pageType);
  
      state.view[action.payload.pageType].sectionId = action.payload.sectionId
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

    openLogForm: (state, action) => {
      
      let newLogId = action.payload

      // console.log('[ sam_StatusSlice ] sectionId ', newJournalId);
      state.view.log.sectionId = newLogId

    },


    closeLogSectionForm: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

       
      state.view.log.sectionId = ''

    },

    closeNewLogForm: (state, action) => {
      // state.modal.modalType = ''
      // state.modal.dbCollection = ''
      // state.modal.id = ''

       
      state.view.log.id = ''

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
  updateChronicleView,
  closeJournalForm,
  openJournalForm,
  
  updateFormPageView,
  initializeTwoPartyViewData,
  updateTwoPartyViewData,

  closeLogSectionForm,
  closeNewLogForm,
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