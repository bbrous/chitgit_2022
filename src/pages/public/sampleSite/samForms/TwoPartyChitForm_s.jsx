/*---- File - twoPartyChitForm.jsx 

   container for the form wizard pages

   -- gets the two party chit id from the modal if exists
      - if no id - then the modal was opened from the new Chit icon
      - if id yes - the modal was opened from the edit icon

   Contains children: 
       twoPartyChitForm pages 
   parent: modal 
*/


import React, {useState, useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'

import {
  closeLogSectionForm, 
  closeNewLogForm, 
  selectStatus, 
  updateFormPageView,
  initializeTwoPartyViewData

} from '../../../../app/redux/statusRedux/sam_statusSlice'

import { selectPeople } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups } from '../../../../app/redux/groupRedux/sam_groupSlice'
import { selectAllTwoPartyChits } from '../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice'
// --- page imports
import TwoPartyChitFormWho from './twoPartyChitForm_who_s'
import TwoPartyChitFormWhen from './twoPartyChitForm_when_s'
import TwoPartyChitFormChit from './twoPartyChitForm_chit_s'
import TwoPartyChitFormDetails from './twoPartyChitForm_details_s'
import TwoPartyChitFormPreview from './twoPartyChitForm_preview_s'
import TwoPartyChitFormCompleted from './sharedChitFormMessage_s'


// ---mui imports 

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'
import { chitBlueDull, chitBurgandy } from '../../../../styles/colors'


const theme = createTheme(); // allows use of mui theme in styled component


// ==============================================================

export default function TwoPartyChitForm_s(props) {
 
  const dispatch = useDispatch()

  // --  get id from modal if exists
  // if no id - new form :   if id yes - edit
  
  let passedId = props.params.id


 
  const status = useSelector(selectStatus)
  let formPage = status.view.forms.twoPartyChitForm.formPage

  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)
  let allTwoPartyChits = useSelector(selectAllTwoPartyChits)
// --- 

let chitToBeEdited = allTwoPartyChits.find(chit => chit.id === passedId)
  

let  id, chitType, chitBurden, chitValue, chitDate, otherPartyCollection, otherPartyId, deedPerformedBy, workRelated, description, keyWordArray, sharedId 

//  console.log('[ TwoPartyChitForm_s mmmmmmmmmmmmmmmmmmm ] otherPartyId ', chitToBeEdited.otherPartyId);
  
  chitToBeEdited ? id = passedId: id = ''
  chitToBeEdited ? chitType = chitToBeEdited.chitType: chitType = ''

  chitToBeEdited ? chitBurden = chitToBeEdited.chitBurden: chitBurden = 0
  chitToBeEdited ? chitValue = chitToBeEdited.chitValue: chitValue = 0
  chitToBeEdited ? chitDate = chitToBeEdited.chitDate: chitDate = ''
  chitToBeEdited ? otherPartyCollection = chitToBeEdited.otherPartyCollection: otherPartyCollection = ''
  chitToBeEdited ? otherPartyId = chitToBeEdited.otherPartyId: otherPartyId = ''
  chitToBeEdited ? deedPerformedBy = chitToBeEdited.deedPerformedBy: deedPerformedBy = ''
  chitToBeEdited ? workRelated = chitToBeEdited.workRelated: workRelated = ''
  chitToBeEdited ? description = chitToBeEdited.description: description = ''
  chitToBeEdited ? keyWordArray = chitToBeEdited.keyWordArray: keyWordArray = []
  chitToBeEdited ? sharedId = chitToBeEdited.sharedId: sharedId = ''

  
  let personNameDisplayed,groupNameDisplayed,  personObject, groupObject
  
  if(otherPartyCollection === 'people'){
    personObject = allPeople.find(person => person.id === otherPartyId)
  
    personNameDisplayed = personObject.name
  }
  
  
  if(otherPartyCollection === 'groups'){
  groupObject = allGroups.find(group => group.id === otherPartyId)
  groupNameDisplayed = groupObject.name
  }
  
  
  let formOtherPartyCollection
  if(otherPartyCollection === 'people'){formOtherPartyCollection = 'person'}
  if(otherPartyCollection === 'groups'){formOtherPartyCollection = 'group'}



  
 
 useEffect(()=> {


    console.log('[ twoPartyChitForm ] passedId ', passedId);
    let initialData =  {
      id: id,
      formPage: 'who',
      chitType: chitType,
      chitValue: chitValue,
      chitBurden: chitBurden,
      chitDate: chitDate,
      otherPartyCollection: formOtherPartyCollection,
      otherPartyId: otherPartyId,
      person: personNameDisplayed,
      group: groupNameDisplayed,
      deedPerformedBy: deedPerformedBy,
      workRelated: workRelated,
      description: description,
      keyWordArray: keyWordArray,
      sharedId: sharedId, 
      
    }
  
    dispatch(initializeTwoPartyViewData({pageType: 'twoPartyChitForm', data: initialData}))
  

  
 }, [])



  let breadCrumbsArray = ['who', 'when', 'details', 'chit' , 'preview']
  
  
  let breadCrumbPage = breadCrumbsArray.map((breadCrumb, index) => {
    if (breadCrumb === formPage) {
      return (
        <BreadCrumbDisabled key={breadCrumb} id={breadCrumb}> {breadCrumb} </BreadCrumbDisabled>
      )
    } else {
      return (
        <BreadCrumb 
        key={breadCrumb} 
        id={breadCrumb} 
        onClick = {(evt)=>changePage(evt)}
        
        > {breadCrumb} </BreadCrumb>

      )
    }
  }) // end if else


  function changePage(evt){
    let newPage = evt.currentTarget.id
    console.log('[ twoPartyChitForm - change page function ] evt.currentTarget.id ', evt.currentTarget.id);

    dispatch(updateFormPageView({pageType: 'twoPartyChitForm', page: newPage}))
  }
  // === Main Return =====================================

  return (
    <Wrapper>
      <BreadCrumbsWrapper>
        {breadCrumbPage}
      </BreadCrumbsWrapper>

      <PageWrapper>
  
        {formPage === 'who' &&
          <TwoPartyChitFormWho id = {passedId} />
        }  
        { formPage === 'when' &&
          <TwoPartyChitFormWhen />
        }  
        {formPage === 'details' &&
          <TwoPartyChitFormDetails />
        }  
        {formPage === 'chit' &&
          <TwoPartyChitFormChit />
        }  

        {formPage === 'preview' &&
          <TwoPartyChitFormPreview />
        }  



        {formPage === 'completed' &&
          <TwoPartyChitFormCompleted />
        }  


      </PageWrapper>
      


      
    </Wrapper>
  )
} // --- end breadCrumbPage


// ==== Styles ===========================================
const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',
  
  width: 'calc(100%-12px)',
  height: '100%',
  overflow: 'auto',
  padding: '0 0 3px 4px',
// backgroundColor: 'red',

borderRadius: '5px',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',
  backgroundColor: 'yellow',
  width: '100%',
  marginTop: '1rem',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const BreadCrumbsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.8rem',
  width: '100%',

  padding: '0 0 3px 16px',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const BreadCrumb = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: '1.5rem',
  color: chitBlueDull,
   

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const BreadCrumbDisabled = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitBurgandy,
  marginRight: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

