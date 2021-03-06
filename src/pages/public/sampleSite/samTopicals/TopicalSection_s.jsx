/* function TopicalSection(props) -------------------
       parent: ./topicalMain

  Holds  Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
 

import{chitOrange, mediumLightGrey, veryLightGrey, chitBurgandy, mediumGrey, chitDarkGreen} from '../../../../styles/colors'


import { ISOtoTraditional, ISOtoTraditionalTime } from '../../../../app/helpers/dateHelper'

import EditTopicalSectionForm from '../samForms/EditTopicalSectionForm_s'
// import topicalFormAlert from './topicalFormAlert'
 
import { 
  selectStatus,
  openTopicalSectionForm
} from '../../../../app/redux/statusRedux/sam_statusSlice'

import { ISOtoTraditionalWithDay } from '../../../../app/helpers/dateHelper'

import ChitIcon from '../samComponents/Chit_icon_s'
 
//  ---- Material Ui ------------------
import ClickAwayListener from '@mui/material/ClickAwayListener';


import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
 
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';
import LockClockIcon from '@mui/icons-material/LockClock';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { styled, createTheme  } from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component



//  =====================================================================

 

export default function TopicalSection(props) {

  let dispatch = useDispatch()
  const {id, lastEdit, topicalDate, timeLock,  title, detail, attachment, chitLink, keywordArray, peopleArray} = props.data

  let status = useSelector(selectStatus)

  let topicalViewId = status.view.topical.sectionId
 
  console.log('[ Topical Section] open  topicalViewId outside func', topicalViewId);
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  let styledTopicalDate = ISOtoTraditional(topicalDate)
  let styledTopicalTime = ISOtoTraditionalTime()
  let styledLastEdit = ISOtoTraditionalTime(lastEdit)
  let styledTimeLock
  timeLock ? styledTimeLock = ISOtoTraditional(timeLock): styledTimeLock = 'no'


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


  const openSectionForm = (id)=>{
 
    console.log('[ Topical Section] open  topicalViewId inside function ', topicalViewId);
     dispatch(openTopicalSectionForm(id))
     
   } 

  return (

      <>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have a section currently being edited.
            Would you like to save your changes to that section?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            form="submit-form"
            variant="contained"
            color="primary"
            type="submit"
          // onClick={handleClose}
          >
            Save Edits
          </button>

          <button
            form="submit-form"
            variant="contained"
            color="primary"

            onClick={handleClose}
          >
            Cancel
          </button>

        </DialogActions>
      </Dialog> */}
      
      
      {topicalViewId !== id &&
         
          <MainWrapper>
      
      
          
            <TopWrapper>
              <DateWrapper>{styledTopicalDate}</DateWrapper>
              
              <IconWrapper>
      
                <LightTooltip title='Edit' arrow>
                <StyledEditIcon id={id}
                  onClick={() => openSectionForm(id)}
                />
                </LightTooltip>
      
                <ChitIcon />
                <LightTooltip title='Convert to Chit' arrow>
                  <StyledConvertIcon />
                </LightTooltip>

                <LightTooltip title='Attachment' arrow>
            <StyledAttachmentIcon />
          </LightTooltip>
      
               
                <LightTooltip title='Delete' arrow>
                  <StyledDeleteIcon />
                </LightTooltip>
              </IconWrapper>
            </TopWrapper>
            
            <CategoryWrapper></CategoryWrapper>
            <ContentWrapper>
      
      
              <Content>
                <HeadlineWrapper dangerouslySetInnerHTML={{__html: title}}/>  
                <DetailContainer  dangerouslySetInnerHTML={{__html: detail}}/>
              </Content>
      
              <SearchWrapper>
            <PeopleWrapper>{styledPeople}</PeopleWrapper>
              
              <KeyWordWrapper>keywords:  {styledKeywords}</KeyWordWrapper>
      
            </SearchWrapper>
      
            </ContentWrapper>

          </MainWrapper>

      }


         
       {/* <ClickAwayListener 
       onClickAway={handleClickAway}
       mouseEvent="onMouseDown"
       touchEvent="onTouchStart"
       > */}
      
      {/* <topicalFormWrapper>  
      Form here
      <topicalForm id="submit-form"/>
      
      </topicalFormWrapper> */}
      
      {/* </ClickAwayListener> */}
      {topicalViewId === id &&
      <TopicalFormWrapper>
  
        <EditTopicalSectionForm/>
      </TopicalFormWrapper>

    }
      
          </>
        )

 
}

 // -----------------------------------------------------------------




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
// overflow: 'auto',

backgroundColor: 'white',
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
  width: '99%',
  marginTop: '6px',
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
  color: chitDarkGreen,
  // width: '50%',
  padding: '2px 6px',

  fontSize: '.8rem',
  height: '.8rem',

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
  // width: '50%',
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
  // backgroundColor: veryLightGrey,
  width: '97%',
  
  margin: '5px 0 0 8px',
// backgroundColor: veryLightGrey,
  fontSize: '.6rem',
  height: '.8rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const CategoryWrapper= styled('div')({

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

// ----------------------------------
const ContentWrapper= styled(Paper)({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  backgroundColor: veryLightGrey,
  width: '99%',
  // marginTop:'6px',
  margin: 'auto',

  
  
  
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
  color: chitBurgandy,
  width: '99%',
  padding: '6px 0',
  fontSize: '1rem',

  
  '& p' :{
    lineHeight: '.7'
   },
  
  '& .ql-size-small':{
    fontSize: '12px'
  },
  
  '& .ql-size-large' :{
    fontSize: '18px'
  },


  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})
const DetailContainer= styled('div')({


  fontSize: '.9rem',
  
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
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: '.85rem',
  width: '100%',

  padding: '6px',
  borderLeft: '1px solid #E6E7E8',
  backgroundColor: 'white',
  borderRadius: '0 5px 5px 0',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },
  textAlign: 'left',
  '& p' : {

    margin : '0 0 0 0',
    padding: 0,
    textAlign: 'left'
  },

})

const topicalFormWrapper= styled('div')({

  display: 'block',

  width: '100%',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },
  textAlign: 'left',
  '& p' : {

    margin : '0 0 0 0',
    padding: 0,
    textAlign: 'left'
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

const StyledConvertIcon= styled(LockClockIcon)({
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




const LightTooltip = withStyles({
  tooltip: {
    color: "grey",
    backgroundColor: "white",
    boxShadow: '2px 3px 3px black',
    border: '1px solid grey',
  }
})(Tooltip);



var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};


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

  const TopicalFormWrapper= styled('div')({

    display: 'block',
  
    width: '100%',
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
    textAlign: 'left',
    '& p' : {
  
      margin : '0 0 0 0',
      padding: 0,
      textAlign: 'left'
    },
  
  })