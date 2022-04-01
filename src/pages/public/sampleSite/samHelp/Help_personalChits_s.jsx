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

function PersonalChits() {
  return (
    <MainWrapper>

      <LinkWrapper>
         <a href="#intro">Introduction  </a>


         <a href="#twoPartyChits">Two party chits</a>
         <a href="#personalChits">Personal chits</a>
         <a href="#workChits">Work chits</a>
         <a href="#createNew">Creating new chits  </a>
         <a href="#chitWeights">Chit Weights</a>
         <a href="#timeLocks">Time locks</a>
      </LinkWrapper>
      <ContentWrapper>

      <HeaderWrapper name="intro"> Personal Chits Introduction</HeaderWrapper>


        <div><em> Chits Are</em> "tokens: <br />
        Tokens you create when someone does something for you, or for something you do for someone else... or, a token you can give yoursef for something you accomplish.
        </div>

        <div>There are 3 types of chits<br />
              <ul>
                <li>Two Party Chits</li>
                <li>Promise Chits</li>
                <li>Personal Chits</li>
              </ul>
        You create two party chits that involves a second person for some action that has already taken place.  A promise chit also involves a second person, but is for some futue action you promised them, or they promised you.  Personal chits are the tokens you give yourself.
      
        </div>

      {/* -------- twoPartyChits -------------------------------- */}
      
      <HeaderWrapper name="twoPartyChits"> Two Party Chits</HeaderWrapper>
 
      <div>
        Two Party chits are


      </div>

      {/* -------- personalChits -------------------------------- */}
      
      <HeaderWrapper name="personalChits"> Personal Chits</HeaderWrapper>
 
      <div>
        Personal chits are


      </div>


      {/* -------- workChits -------------------------------- */}
      
      <HeaderWrapper name="workChits"> work Chits</HeaderWrapper>
 
      <div>
        work can be any type of chit - personal, two party or promise.
      </div>




      {/* -------- createNew -------------------------------- */}
      
      <HeaderWrapper name="createNew"> Creating new Chits</HeaderWrapper>

      <div> New chits can be created in 2 basic ways </div>
      <IconWrapper>
          <AddCircleIconWrapper />
        </IconWrapper>
      <div>
        The first way to create a new chit is in the side panel 
        of any chit page using the + icon.  The form the icon opens 
        will create any kind of chit.
      </div>

      <div>
        The 2nd way to create a new chit is to click the "chit icon" that can 
        be found in every spotlight, task, log section or journal section.  
        Completing the chit form 
        
      </div>


      {/* -------- chitWeights -------------------------------- */}
      
      <HeaderWrapper name="chitWeights"> Chit Weights</HeaderWrapper>

      <div> 
        All 3 types of chits come in 3 colors... Plus there are 2 specialty chits - the awChit and the milestone chit.  

      </div>
      <IconWrapper>
          <AddCircleIconWrapper />
        </IconWrapper>
      <div>
        The first way to create a new chit is in the side panel 
        of any chit page using the + icon.  The form the icon opens 
        will create any kind of chit.
      </div>

      <div>
        The 2nd way to create a new chit is to click the "chit icon" that can 
        be found in every spotlight, task, log section or journal section.  
        Completing the chit form 
        
      </div>


       {/* -------- timeLocks -------------------------------- */}
      <HeaderWrapper name="timeLocks">Time Locks</HeaderWrapper>
      <div>
        Invoking a "Time Lock" on a chit means that it  can not be edited again.  You do this by clicking on the "lock icon". Once locked - there is a date-time stamp associated with the chit.  You can not unlock a locked chit... but it can be delted all together.
      </div>
      <div>
        You might want to lock a chit because you think you might possibly have to prove when you created it.  For instance - maybe you issue yourself a locked chit you come up with a new product idea.   Having an unalterable, time stamped chit could be helpful in a future patent dispute.
      </div>
   

      {/* ----------------- */}


      </ContentWrapper>
    </MainWrapper>

  )
}

export default PersonalChits
