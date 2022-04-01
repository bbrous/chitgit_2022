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

function TwoPartyChits() {
  return (
    <MainWrapper>

      <LinkWrapper>
         <a href="#intro">Introduction  </a>


         <a href="#types">Chit Types</a>
         <a href="#personalChits">Personal chits</a>
         <a href="#workChits">Work chits</a>
         <a href="#createNew">Creating new chits  </a>
         <a href="#chitWeights">Chit Weights</a>
         <a href="#timeLocks">Time locks</a>
         <a href="#karma">Karmic View</a>
      </LinkWrapper>
      <ContentWrapper>

      <HeaderWrapper name="intro"> Two Party Chits Introduction</HeaderWrapper>


        <div><em> Two Party Chits Are</em> "tokens: <br />
        Tokens you create when someone <em>did </em>something for you, or for something you <em> did </em>for someone else.  Chits can also be for something you <em>promise </em>to do for someone in the future, or something someone <em> promised </em>to do for you in the future. 
        </div>

        <div> Two party chits always involve someone else.  
        </div>


      {/* -------- shared -------------------------------- */}
      
      <HeaderWrapper name="shared"> Chit Sharing</HeaderWrapper>
 
      <div>
        You can create a two party chit in your account ledger regardless of whether or not you did something for someone else, or they did something for you.  
      </div>

      <div>
        All chits you create are for your personal use and are therefore  private.  However, you can choose to share (send) a chit you create with the other party.
      </div>

      <div>
        The default for chits is for them to be private.  Share a chit when you want the other party to know there is an implied obligation - or to show thanks.
      </div>

      <div>
        If someone else sends you a chit, you can choose whether or not you want to add it to your personal ledger.
      </div>

      {/* -------- CHit Types -------------------------------- */}
      
      <HeaderWrapper name="types">Chit Types</HeaderWrapper>
 
      <div>
        Two party chits are conceptually transactional by nature...  Someoene does something for you - there's an implicit obligation (or desire) to repay them in some equivalent way (quid pro quo).  The same holds true in reverse. 

      </div>
      <div>
        A chit is said to be given (owed BY you) when the other person does an action for you.  A chit is said to be received (owed TO you) when you perform some action for the other party.
      </div>
      <div>
      But not every action someone takes for someone else is transactional.  Sometimes you do something for someone else just "because".  
      </div>
      <div>That is why two party chits come various "flavors" (types).</div>
      <ul>
        <div>
          Standard chits - <br/>
          Standard chits are transactional.  They are actions already taken.  Give or receive a standard chit if you believe at least one party might have some sense of obligation to repay the action.
        </div>
        <div>
          Promise chits - 
          <br/> Promise chits are also transactional.  You give or receive them for actions promised in the future.
        </div>
        <div>
          Good Will chits - <br/>
          Good Will have no implied obligation by either party for an action taken.   They are most often given to you by you for some selfless act you take - like donating time or money to a charity.
        </div>

        <div>
          Aw chits - <br/>
          A two party Aw Chit is reserved specific actions done by someone else that negatively impact you. 
        </div>
      </ul>





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
        Two party chits come in 3 colors... plus the specialty chits "awChit". The colors represent a conceptual weight or importance.

      </div>
      <div> 
        Silver chits are for an implied "normal" importance... like someone paying for lunch.

      </div>
      <div> 
        Copper chits are for an implied "lesser" importance... like someone paying for coffee.

      </div>
      <div> 
        Gold chits are for an implied "exceptional" importance... like someone paying for a very expensive dinner.

      </div>

      <div> 
        Aw chits are for something you believe someone did that was bad, evil, or immoral. 

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



       {/* -------- karma -------------------------------- */}
       <HeaderWrapper name="karma">Karmic View</HeaderWrapper>
      <div>
        The karmic view is a graphical representation of all your two party chits from an impact perspective.  In other words - it depicts how much you do for others vs how much others do for you.
      </div>
      <div>
        When you create a two party chit for something you did for someone else - it is compiled with other like chits (chits owed to you) and displayed in green.
      </div>
      <div>
        When you create a two party chit for something someone did for  you - it is compiled with other like chits (chits owed to other parties) and displayed in red.
      </div>
      
      <div>
        The karmic view is truly subjective.  It is created by a weight you give to each two party chit you create... a value of between 1 and 100.
      </div>
      <div>
        How you determine the weight of a chit is up to you.  But you should assign a chit weight using 2 criteria.  (1) The impact of the person receiving the benefit of the action for which the chit was created.  And (2) the burden of the action on by the person who performs the action.  
      </div>

    <div>
      An example - a billionaire gives a struggling waitress a $10,000 tip for a meal.  The burden on the billionaire is small - but the impact on the waitress could be significant.
    </div>
    <div>
      Your karmic total is your life's balance.
    </div>

      {/* ----------------- */}
      </ContentWrapper>
    </MainWrapper>

  )
}

export default TwoPartyChits
