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
  updateFormPageView

} from '../../../../app/redux/statusRedux/sam_statusSlice'


// --- page imports
import TwoPartyChitFormWho from './twoPartyChitForm_who_s'
import TwoPartyChitFormWhen from './twoPartyChitForm_when_s'
import TwoPartyChitFormChit from './twoPartyChitForm_chit_s'
import TwoPartyChitFormDetails from './twoPartyChitForm_details_s'
import TwoPartyChitFormPreview from './twoPartyChitForm_preview_s'


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
  
  let id = props.params.id


 
  const status = useSelector(selectStatus)
  let formPage = status.view.forms.twoPartyChitForm.formPage

  console.log('[ twoPartyChitForm ] formPage ', formPage);
  console.log('[ twoPartyChitForm ] id ', id);

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
          <TwoPartyChitFormWho id = {id} />
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

