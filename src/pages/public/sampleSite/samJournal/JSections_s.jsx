/* function Jsections(props) -------------------

    maps the journal sections  


  Children: ./JSection
 
    parent: ./JMain
------------------------------------*/


import React , {useEffect, useRef, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'



import { selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'

import{chitBurgandy, lightGrey, veryLightGrey, backgroundBlue, chitLightGreen, darkGrey} from '../../../../styles/colors'
import {selectJournals } from '../../../../app/redux/journalRedux/sam_journalSlice'

import JSection from './JSection_s'

import { descendSorter } from '../../../../app/helpers/commonHelpers'
 import { monthArray } from '../../../../app/helpers/dateHelper'
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
 




export default function JSections() {

  let status = useSelector(selectStatus)

  let displayMonth = status.view.journal.monthId
  let displayYear = status.view.journal.year
  let dispalyYearNumeric = parseInt(displayYear)
  let displayMonthNumeric = monthArray.indexOf(displayMonth)

  console.log('[ JSections_s ] displayMonth', displayMonth);

  console.log('[ JSections_s ] a  displayYear', displayYear);





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



  let displayedJournalsForYear = allJournalSelections.filter(journal => new Date(journal.journalDate).getFullYear() === dispalyYearNumeric )

  let displayedJournalsForMonth = () =>{
    let journalsDisplayed
    if(displayMonth === 'all'){

      journalsDisplayed = displayedJournalsForYear
      if(journalsDisplayed.length > 0){
        return journalSections(journalsDisplayed)
      }else{
        return <NoneMessage> no journal sections for this year</NoneMessage>
      }

    }

    if(displayMonth !== 'all'){

      console.log('JSECTIONS INSIDE xxxxxx BULLAH xxxx')

      journalsDisplayed = displayedJournalsForYear.filter(journal => new Date(journal.journalDate).getMonth() === displayMonthNumeric)

      console.log('JSECTIONS INSIDE xxxxxx Journal Date xxxx')

      if(journalsDisplayed.length > 0){
        return journalSections(journalsDisplayed)
      }else{
        return <NoneMessage> no journal sections for this month</NoneMessage>
      }
    }
   
 

  }

  let x = displayedJournalsForMonth()

  console.log('JSECTIONS xxxxxxxxxxxxxxxxxx', x)






  useEffect(()=>{
    scrollToTop()
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
   

   {/* {journalSections(sortedJournalSelections)} */}
   {displayedJournalsForMonth()}
 
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
  backgroundColor: '#F0FFF6',
  border: '1px solid #96FFDC',
  color: darkGrey,
  margin: '0 8px',
  padding: ' 0 .5rem',
  height: '1rem',
  fontSize: '.7rem',
  textTransform: 'none',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

const NoneMessage= styled('div')({

  color: chitBurgandy
 
 
 })
