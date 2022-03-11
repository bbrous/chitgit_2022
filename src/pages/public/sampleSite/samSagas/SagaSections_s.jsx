/* function SagaSections(props) -------------------

    maps the saga sections  


  Children: ./SagaSection
 
    parent: ./JMain
------------------------------------*/


import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue} from '../../../../styles/colors'
import {selectAllSagaSections } from '../../../../app/redux/sagaRedux/sam_sagaSlice'

import Saga from './Saga_s'
 
//  ---- Material Ui ------------------
 
import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
//--- STYLES begin --------------------------

const Wrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


 
// ============================================

 
const sagaSections = (sagaArray) => 


 
  sagaArray.map((section, index) => {
   // code 
  return (
    <Saga
      id = {section.id}
      key = {section.id}
      title = {section.title}
      date = {section.date}
      content = {section.content}
      dateCreated = {section.dateCreated}
      chitId = {section.chitId}
      timeStamp = {section.timeStamp}
      keywordArray = {section.keywordArray}
      category = {section.category}
      people = {section.people}
     
    />
  )
  }
  ) //end map
 


export default function SagaSections() {

  const allSagaSelections = useSelector(selectAllSagaSections)
  // console.log('[ SagaSections ]  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ', allSagaSelections);

  return (
    <Wrapper>

   {sagaSections(allSagaSelections)}
    </Wrapper>
  )
}
