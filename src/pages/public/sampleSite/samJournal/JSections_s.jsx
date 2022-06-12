/* function Jsections(props) -------------------

    maps the journal sections  


  Children: ./JSection
 
    parent: ./JMain
------------------------------------*/


import React , {useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'



import{chitBurgandyDull, lightGrey, veryLightGrey, backgroundBlue} from '../../../../styles/colors'
import {selectJournals } from '../../../../app/redux/journalRedux/sam_journalSlice'

import JSection from './JSection_s'

import { descendSorter } from '../../../../app/helpers/commonHelpers'
 
//  ---- Material Ui ------------------
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

 
// ============================================

 
const journalSections = (journalArray) => 


 
  journalArray.map((section, index) => {
   // code 
  return (
    <JSection
      id = {section.id}
      key = {section.id}
      title = {section.title}
      journalDate = {section.journalDate}
      content = {section.content}
      dateCreated = {section.dateCreated}
      chitId = {section.chitId}
      timeStamp = {section.timeStamp}
      keywordArray = {section.keywordArray}
      category = {section.category}
      peopleArray = {section.peopleArray}
     
    />
  )
  }
  ) //end map
 

  let dateUnsorted = [
    {
      date: 'Mar 9',
     journalDate: '2021-03-09T06:08:53.000Z'
    },
    {
      date: 'Feb 18',
     journalDate: '2021-02-18T06:08:53.000Z'
    },

    {
      date: 'Jan 19',
     journalDate: '2021-01-19T06:08:53.000Z'
    },
    {
      date: 'Feb 22',
     journalDate:'2021-02-22T06:08:53.000Z'
    },
    {
      date: 'Jan 14',
     journalDate: '2021-01-14T06:08:53.000Z'
    },
  ]

  let dateSorted = descendSorter(dateUnsorted, 'journalDate')


export default function JSections() {

  console.log('[ where ] allJournalSelections unsorted', dateUnsorted);

  console.log('[ where ] allJournalSelections sorted', dateSorted);



  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const allJournalSelections = useSelector(selectJournals)
  let sortedJournalSelections = descendSorter(allJournalSelections, 'journalDate')

  useEffect(()=>{
    scrollToBottom()
  },[])
  
  // console.log('[ JSections ]  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ', allJournalSelections);

  return (
    <Wrapper>
     <ArrowWrapper>  
      <StyledButton ref={topRef} 
      onClick = {()=>scrollToBottom()}
      >
         Go to  bottom
      
      </StyledButton>
      </ArrowWrapper>
   

   {journalSections(sortedJournalSelections)}
   
 
<ArrowWrapper> 
   <StyledButton ref={bottomRef} 
   onClick = {()=>scrollToTop()}>
     
      Go to top
     </StyledButton>

   </ArrowWrapper>
    </Wrapper>
  )
}


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

 overflow: 'hidden',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const ArrowWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  padding: ' 0 .5rem',
  height: '1rem',
  fontSize: '.7rem',
  textTransform: 'none',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})