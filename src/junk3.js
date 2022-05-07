/*---- File - twoPartyChitForm.jsx 

   container for the form wizard pages


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
   


} from '../../../../app/redux/statusRedux/sam_statusSlice'
// ---mui imports 

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'
import { chitBlueDull, chitBurgandy } from '../../../../styles/colors'


const theme = createTheme(); // allows use of mui theme in styled component


// ==============================================================

export default function twoPartyChitForm_s(props) {
  let match = useParams()
  const dispatch = useDispatch()
  
  let URLId = match.id
  const status = useSelector(selectStatus)
  let formPage = status.view.forms.twoPartyChitForm.formPage

  console.log('[ twoPartyChitForm ] formPage ', formPage);

  let breadCrumbsArray = ['who', 'when', 'details', 'chit' , 'preview-submit']
  
  
  let breadCrumbPage = breadCrumbsArray.map((breadCrumb, index) => {
    if (breadCrumb === formPage) {
      return (
        <BreadCrumbDisabled key={breadCrumb}> {breadCrumb} </BreadCrumbDisabled>
      )
    } else {
      return (
        <BreadCrumb key={breadCrumb}> {breadCrumb} </BreadCrumb>

      )
    }
  }) // end if else


  function changePage(evt){

    console.log('[ twoPartyChitForm - change page function ] evt.currentTarget.id ', evt.currentTarget.id);
  }
  // === Main Return =====================================

  return (
    <Wrapper>
      <BreadCrumbsWrapper>
        {breadCrumbPage}
      </BreadCrumbsWrapper>

      <PageWrapper>
        Main wrapper form here
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
backgroundColor: 'red',

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

