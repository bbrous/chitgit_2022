/* function Log(props) -------------------
       parent: ./LogMain

  Holds Logs, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, mediumLightGrey, veryLightGrey, chitBlueDull, mediumGrey} from '../../../../styles/colors'

import{ selectLogs
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/logRedux/sam_logsSlice'

import { ISOtoTraditional, ISOtoTraditionalTime } from '../../../../app/helpers/dateHelper'

import ChitIcon from '../samComponents/Chit_icon_s'
 
//  ---- Material Ui ------------------
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import LockClockIcon from '@mui/icons-material/LockClock';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';
 
import { styled, createTheme  } from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',
  marginBottom: '6px',
  paddingBottom: '6px',
overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const TopWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '100%',
  margin: '3px 0',
  borderRadius: '5px 5px 0 0',
  borderLeft: '1px solid #CFD0D1',
  borderTop: '1px solid #CFD0D1',
  borderRight: '1px solid #CFD0D1',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// Date input by user
const DateWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '50%',
  padding: '2px 6px',

  fontSize: '.8rem',
  height: '.8rem',

  '& span': {
    color: mediumGrey,
    marginLeft: '6px',
     
  },

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})



const IconWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '50%',
  padding: '2px 6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ----------------------------------
const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: veryLightGrey,
  width: '99%',
  padding: '2px 0',
  margin: '3px 0',
// backgroundColor: veryLightGrey,
  fontSize: '.6rem',
  height: '.8rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})
const OuterContentWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'Column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'aqua',
  width: '100%',
  borderLeft: '1px solid #CFD0D1',
  borderRight: '1px solid #CFD0D1',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const PeopleWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'aqua',
  width: '30%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const KeyWordWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'orange',
  width: '70%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})
const SearchTitle= styled('span')({

  fontStyle: 'italic',
  marginRight: '6px',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


// ----------------------------------
const ContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',

  backgroundColor: veryLightGrey,
  width: '100%',
  // marginTop:'6px',
  margin: 'auto',
  
  
  
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const MetaWrapper= styled('div')({
 
  display: 'flex',
 
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  fontSize: '.75rem',
  width: '30%',
  minHeight: '100%',
 
  padding: '6px',
  backgroundColor: veryLightGrey,

 

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// Date Times 
const TimesWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  width: '100%',
  padding: '2px 6px',

  fontSize: '.65rem',
  color: mediumGrey,

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const HeadlineWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitBlueDull,
  width: '99%',
  padding: '6px 0',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const Content= styled('div')({
  flexGrow: 1,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.85rem',
  width: '70%',

  padding: '6px',
  borderLeft: '1px solid #E6E7E8',
  backgroundColor: 'white',
  borderRadius: '0 5px 5px 0',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// -------------
const StyledEditIcon= styled(EditIcon)({
  backgroundColor: veryLightGrey,
  borderRadius: '5px',
  fontSize: '.9rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledLockClockIcon= styled(LockClockIcon)({
  backgroundColor: veryLightGrey,
  borderRadius: '5px',
  fontSize: '1.1rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

const StyledDeleteIcon= styled(DeleteIcon)({
  backgroundColor: veryLightGrey,
  borderRadius: '5px',
  fontSize: '.95rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const StyledAttachmentIcon= styled(AttachmentIcon)({
  backgroundColor: veryLightGrey,
  borderRadius: '5px',
  fontSize: '.95rem',
  color: chitOrange,
  margin: '0 .5rem .3rem .5rem',
  cursor: 'pointer',
  transform: 'rotate(90deg)' ,


  '&:hover': {
    color: mediumLightGrey
    // backgroundColor: mediumLightGrey
  },


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})


const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);





//  =====================================================================

export default function LogSection(props) {

  const {id, type, otherPartyId, logDate, lastEdit, timeLock, meta, title, detail, attachment, chitLink, keyWordArray, peopleArray} = props.data

 
   // convert Dates for display

   let styledLogDate = ISOtoTraditional(logDate)
   let styledLogTime = ISOtoTraditionalTime(logDate)
   let styledLastEdit = ISOtoTraditionalTime(lastEdit)
   let styledTimeLock
   timeLock ? styledTimeLock = ISOtoTraditional(timeLock): styledTimeLock = 'no'
 

  // format keywords
  let styledKeywords = ''

  if (keyWordArray.length > 0) {
    //    keyWordArray.map((keyword) => {
    //   styledKeywords = styledKeywords  + keyword + ' , '

    //   return styledKeywords
    // }
    // ) //end map

  for(let i = 0; i < keyWordArray.length; i++){
    if(i === keyWordArray.length - 1){
      styledKeywords += keyWordArray[i]  
    }else{
    styledKeywords += keyWordArray[i] + ' , '
    }
  }
 

  }//end if keyword.length > 0

  if (keyWordArray.length === 0) {
styledKeywords = 'none'
  }


  let styledPeople = ''

  if (peopleArray.length > 0) {
    //    peopleArray.map((keyword) => {
    //   styledPeople = styledPeople  + keyword + ' , '

    //   return styledPeople
    // }
    // ) //end map

  for(let i = 0; i < peopleArray.length; i++){
    if(i === peopleArray.length - 1){
      styledPeople += peopleArray[i]  
    }else{
    styledPeople += peopleArray[i] + ' , '
    }
  }
 

  }//end if keyword.length > 0

  if (peopleArray.length === 0) {
styledPeople = 'none'
  }


  return (
    <MainWrapper>
      <TopWrapper>
        <DateWrapper>{styledLogDate} : <span> {styledLogTime} </span></DateWrapper>
        <IconWrapper>

          <LightTooltip title='Edit' arrow>
            <StyledEditIcon />
          </LightTooltip>

          <ChitIcon />
          <LightTooltip title='Content Time Lock' arrow>
            <StyledLockClockIcon />
          </LightTooltip>

          <LightTooltip title='Attachment' arrow>
            <StyledAttachmentIcon />
          </LightTooltip>

          <LightTooltip title='Delete' arrow>
            <StyledDeleteIcon />
          </LightTooltip>
        </IconWrapper>
      </TopWrapper>
  
    <OuterContentWrapper> 

      <ContentWrapper>

        <MetaWrapper>
        {meta}
          <TimesWrapper>
            <div> timestamp:  {} </div>
            <div> last edit:  {styledLastEdit} : </div>
            
          </TimesWrapper>
        </MetaWrapper>
        
     
        <Content>
          <HeadlineWrapper> {title}</HeadlineWrapper>
    
          <div dangerouslySetInnerHTML={{__html: detail}}/>
        </Content>


      </ContentWrapper>
      <SearchWrapper>
        <PeopleWrapper><SearchTitle>people:</SearchTitle>{styledPeople}</PeopleWrapper>
        <KeyWordWrapper>  <SearchTitle> keywords:  </SearchTitle>{styledKeywords}</KeyWordWrapper>

      </SearchWrapper>
      </OuterContentWrapper>


    </MainWrapper>
  )
}
