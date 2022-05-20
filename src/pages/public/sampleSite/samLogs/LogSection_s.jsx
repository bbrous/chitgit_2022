/* function Log(props) -------------------
       parent: ./LogMain

  Holds Logs, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'

import{chitOrange, mediumLightGrey, veryLightGrey, chitBlueDull, mediumGrey, mediumMediumGrey} from '../../../../styles/colors'

import{ 
  selectLogs,
  deleteLogSection
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/logRedux/sam_logsSlice'

import { ISOtoTraditional, ISOtoTraditionalTime } from '../../../../app/helpers/dateHelper'

import LogSectionForm from '../samForms/LogSectionForm_s'

import { selectStatus, openLogForm } from '../../../../app/redux/statusRedux/sam_statusSlice'
import ChitIcon from '../samComponents/Chit_icon_s'
 
//  ---- Material Ui ------------------
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import LockClockIcon from '@mui/icons-material/LockClock';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 
import { styled, createTheme  } from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


//  =====================================================================

export default function LogSection(props) {
let dispatch = useDispatch()
  const {id, type, otherPartyId, logDate, lastEdit, timeLock, meta, title, detail, attachment, chitLink, keywordArray, peopleArray} = props.data

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (evt) => {
    
    dispatch(deleteLogSection(evt.currentTarget.id))
    setOpen(false);
  };

//  console.log('[ LogSection  ] props ', props);
 let sectionViewId = useSelector(selectStatus).view.log.sectionId
 
   // convert Dates for display

   let styledLogDate = ISOtoTraditional(logDate)
   let styledLogTime = ISOtoTraditionalTime(logDate)
   let styledLastEdit = ISOtoTraditionalTime(lastEdit)
   let styledTimeLock
   timeLock ? styledTimeLock = ISOtoTraditional(timeLock): styledTimeLock = 'no'
 

  // format keywords
  let styledKeywords = ''

  if (keywordArray.length > 0) {
    

  for(let i = 0; i < keywordArray.length; i++){
    if(i === keywordArray.length - 1){
      styledKeywords += keywordArray[i]  
    }else{
    styledKeywords += keywordArray[i] + ' , '
    }
  }
 

  }//end if keyword.length > 0

  if (keywordArray.length === 0) {
styledKeywords = 'none'
  }


  let styledPeople = ''

  if (peopleArray.length > 0) {
       

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

  const handleClick = (id)=>{
 
    let sectionId = id
  //  console.log('[ 00000000000000000000000000000000000000] myVar ', sectionId);
    dispatch(openLogForm(sectionId))
    
  }
  return (
    <> 

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are your sure you want to delete this section?
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"
            id={id}
            onClick={(evt) => handleDelete(evt)}
          >
            Yes
          </StyledButton>

          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClose}
          >
            No
          </StyledButton>

        </DialogActions>
      </Dialog>






    {sectionViewId !== id &&
    <MainWrapper>
      <TopWrapper>
        <DateWrapper>{styledLogDate} : <span> {styledLogTime} </span></DateWrapper>
        <IconWrapper>


        <LightTooltip title='Edit' arrow>
            <StyledEditIcon id = {id} 
            onClick={()=>handleClick(id)}
            />
          </LightTooltip>


          <ChitIcon />
          <LightTooltip title='Content Time Lock' arrow>
            <StyledLockClockIcon  sx ={{color: mediumMediumGrey}}/>
          </LightTooltip>

          <LightTooltip title='Attachment' arrow>
            <StyledAttachmentIcon sx ={{color: mediumMediumGrey}}/>
          </LightTooltip>

          <LightTooltip title='Delete' arrow>
            <StyledDeleteIcon  onClick = {()=>handleClickOpen()} />
          </LightTooltip>
        </IconWrapper>
      </TopWrapper>
  
    <OuterContentWrapper> 

      <ContentWrapper>

        <MetaWrapper>
    
        <QuillMetaDiv dangerouslySetInnerHTML={{__html: meta}}/>
          <TimesWrapper>
            <div> timestamp:  {} </div>
            <div> last edit:  {styledLastEdit} : </div>
            
          </TimesWrapper>
        </MetaWrapper>
        
     
        <Content>
 
    
          <QuillDiv dangerouslySetInnerHTML={{__html: detail}}/>
        </Content>


      </ContentWrapper>
      <SearchWrapper>
        <PeopleWrapper><SearchTitle>people:</SearchTitle>{styledPeople}</PeopleWrapper>
        <KeyWordWrapper>  <SearchTitle> keywords:  </SearchTitle>{styledKeywords}</KeyWordWrapper>

      </SearchWrapper>
      </OuterContentWrapper>


    </MainWrapper>

    }

{sectionViewId === id &&
<LogSectionForm/>
 
}

    </>
  )
}



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
  flexDirection: 'column',
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
  fontSize: '.8rem',
  width: '30%',
  minHeight: '100%',
  borderRight: '1px solid  #CFD0D1',
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

const QuillDiv= styled('div')({

fontSize: '14px',

 '& p' :{
  lineHeight: '.7'
 },

'& .ql-size-small':{
  fontSize: '12px'
},

'& .ql-size-large' :{
  fontSize: '18px'
}

})

const QuillMetaDiv= styled('div')({

  fontSize: '14px',
  
   '& p' :{
    lineHeight: '.7'
   },
  
  '& .ql-size-small':{
    fontSize: '12px'
  },
  
  '& .ql-size-large' :{
    fontSize: '18px'
  }
  
  })



const Content= styled('div')({
  flexGrow: 1,
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
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

const StyledButton= styled(Button)({
  color: 'white',
  margin: '0 8px',
  fontSize: '.8rem',
  padding: '2px'


})

const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);



