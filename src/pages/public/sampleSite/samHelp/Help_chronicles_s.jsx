/* Help_spotlights_s.jsx

  Contains navigation buttons to parts of the Sample Site:
     Spotlights, Chits, Logs etc.
  
  Also contains the opening description about Bob and how
  he uses the sample site.

   contains child  components: 
      none

    parent: Main_help_s - pages/public/sample/samHelp/mainHelp

*/




import React from 'react'
import { backgroundBlue, mediumGrey } from '../../../../styles/colors';



import CheckIcon from '@mui/icons-material/Check';
import AddCircleIcon from '@mui/icons-material/AddCircle'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  overflow: 'auto',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const ContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  width: '69%',
  height: '100%',
  padding: '.75rem',
  overflow: 'auto',
  fontSize: '.8rem',

  '& div' :{
    margin: '0 0 .75rem 0'
  },
  '& em' :{
    fontWeight: 'bold'
  },

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const LinkWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: 'lightgrey',
  width: '29%',
  padding: '.35rem',
  height: '100%',
  fontSize: '.65rem',

  '& a': {color: backgroundBlue},
  '& a:visited': {color: backgroundBlue},

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const HeaderWrapper = styled('a')({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'center',
   
  color: backgroundBlue,
  marginBottom: '.5rem',
  width: '100%',

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ----Icons -------------------------
const IconWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  

})

const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: 'grey',
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: 'lightGrey',
    borderRadius: '50px',
  },

})

const CheckCircleCompleted = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '1.05rem',
  height: '1.05rem',
  border: '1px solid #CFD0D1',
  borderRadius: '200px',
   
  color: 'white' ,
  backgroundColor: mediumGrey,


  


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// =======================================================

function HelpChronicles() {
  return (
    <MainWrapper>

      <LinkWrapper>
         <a href="#intro">Introduction  </a>
         <a href="#journalApp">Journal</a>
         <a href="#logApp">Logs</a>
         <a href="#sagaApp">Sagas</a>
         <a href="#createNew">Creating new logs, sagas  </a>
         <a href="#addingSections">Adding sections</a>
         <a href="#converting">Converting Journal sections to logs or sagas</a>
         <a href="#timeLocks">Time locks</a>
      </LinkWrapper>
      <ContentWrapper>

      <HeaderWrapper name="intro"> Introduction</HeaderWrapper>


        <div><em> Journal, Logs and Sagas are </em>  all chronicles of your activities and thoughts. Logs and Sagas can be thought of as being a more specific type of Journal, each with a different focus.  
        
         <p/>
         <em>Similiarities</em>
         <br/>
        All three apps are made up of segmented content called sections.  
        <br/>
        All three apps can have keywords or people attached to a section so that you can easily filter and sort the sections in order to easily find content later.  
        <br/>
        Thesections of all three apps are ordered by dates.
        <p/>
        Any section, whether in any of the  3 apps can be easily converted into a chit.   

        <p/>
         <em>Differences</em>
     
        <ul>
          <li> Journals are chronicles of everything (anything) </li>
          <li> Logs are chronicles of your interactions with others </li>
          <li> Sagas are topic related chronicles </li>
        </ul>
        <br/>
        You can add a section you create in your Journal to a Log or Saga.  The reverse is not true.  Log or Saga sections can not be added to Journal.   

        <br/>
        You can add a section you create in your Journal to a Log or Saga.  The reverse is not true.  Log or Saga sections can not be added to Journal. 

        <br/>
        Log and Saga sections can be time-locked (see "Time Locks").  Journals can not be locked.  

        
     

        
      
      
     
        
      
        </div>

      {/* -------- Journal  -------------------------------- */}
      
      <HeaderWrapper name="journalApp"> Journal</HeaderWrapper>
       Begin your chronicling with the Journal unless you know you want to add to a specific Log or Saga before hand.  You can always easily convert a Journal section into a Log section or Saga section.
      <p/>
      Your Journal is your go-to stream of consciousness writing tool.
      <p/>
         Use the Journal to chronicle your day - your activities, your interactions, your thoughts, your feelings ... anything... everything.  If you meet someone interesting for the first time - write down what you learned about them.  Accomplished something - write it down.  Had a bad day - vent.  
         <p/>



      {/* -------- Logs  -------------------------------- */}
      
      <HeaderWrapper name="logApp"> Logs</HeaderWrapper>
 
      <div>
      Use Logs to chronicle interactions between you and others - other people, companies, agencies or  groups.  
      
      <p/>The main reason to create a log is to document conversations, or accumulate information to make a case. For instance, create a log for a difficult coworker or neighbor should you need it later in a dispute resolution.


      </div>
      


      {/* -------- Sagas -------------------------------- */}
      
      <HeaderWrapper name="sagaApp"> Sagas</HeaderWrapper>
 
      <div>
      Use Sagas to chronicle topic related stories.
      </div>




      {/* -------- createNew -------------------------------- */}
      
      <HeaderWrapper name="createNew"> Creating new Logs or Sagas</HeaderWrapper>

      <div> Creating new logs or sagas ... </div>
      <IconWrapper>
          <AddCircleIconWrapper />
        </IconWrapper>
      <div>
   ............
      </div>

      <div>
        ..............
        
      </div>


      {/* -------- addingSections -------------------------------- */}
      
      <HeaderWrapper name="addingSections"> Adding Sections</HeaderWrapper>

      <div> 
        adding sections .... 

      </div>
      <IconWrapper>
          <AddCircleIconWrapper />
        </IconWrapper>
      <div>
         adding sections

      </div>


       {/* -------- timeLocks -------------------------------- */}
      <HeaderWrapper name="timeLocks">Time Locks</HeaderWrapper>

      <div>
        Time locks are specific to log or saga sections (and chits), but not available in journal sections 
        </div>
      <div>
        Invoking a "Time Lock" on a section means that it  can not be edited again.  You do this by clicking on the "lock icon". Once locked - there is a date-time stamp associated with the section.  You can not unlock a locked section... but it can be delted all together.
      </div>
      <div>
        You might want to lock a section because you think you might possibly have to prove when you created it.  For instance - maybe you lock a saga section when you tell someone about a product idea you've been working on.    Having an unalterable, time stamped log of the conversation could be helpful in a future patent dispute.
      </div>
   

      {/* ----------------- */}


      </ContentWrapper>
    </MainWrapper>

  )
}

export default HelpChronicles
