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


         <a href="#views">Views</a>
          
         <a href="#chitWeights">Chit Weights</a>
      
         <a href="#timeLocks">Time locks</a>
      </LinkWrapper>
      <ContentWrapper>

      <HeaderWrapper name="intro"> Personal Chits Introduction</HeaderWrapper>


        <div><em>Personal Chits Are</em> "tokens: <br />
        Tokens you give yourself for something you accomplish or do that does not involve another person .
        </div>
        <div>
        Personal chits are assigned to categories you create.  Thigs like "diet", or "training", or "ideas", etc.
      
        </div>
       <div>
        Personal chits are good for tracking progress towards a a category's goal, or to document significant milestones in your life.
      
        </div>



      {/* -------- views -------------------------------- */}
      
      <HeaderWrapper name="views"> Personal Chit Views</HeaderWrapper>
 
       
      <div>There are 2 displays for personal chits<br />
              <ul>
                <li>Ledger View</li>
                <li>Calendar View</li>
                 
              </ul>
      </div>
      <div>
      The <em>Ledger View</em> is the primary view.  It is where you can create, edit or timelock individual chits.
      </div>

      <div>
      The <em>Calendar View</em> is for displaying and tracking your daily progress towards a given category's goals.  You can also quickly add a chit by clicking on the "+" icon for days that do not have a chit already.
      </div>

     {/* -------- chitWeights -------------------------------- */}
      
     <HeaderWrapper name="chitWeights"> Chit Weights</HeaderWrapper>

<div> 
 Personal chits come in 3 colors... plus the two specialty chits - the "awChit" and the "milestone". The colors represent a conceptual weight or importance.

</div>
<div> 
  Silver chits are for an implied "good" progress on a given day ... like working out for a half hour for your exercise category.

</div>
<div> 
  Copper chits are for an implied "ok" progress... like getting to the gym but only working out for 15 minutes for your exercise category.

</div>
<div> 
  Gold chits are for an implied "excellent" importance... like going to the gym twice in one day and working out for an hour.
</div>

<div> 
  Give yourself an "Aw chit"  when you blew off the gym on a day you thought you should go.

</div>

<div> 
  Finally the milestone is for achieving a significant goal. For the exercise category, you might have started out only being able to work out for 15 minutes in a day, but wanted to be able to work out for an hour each day.  Give yourself a milestone when you first achieve the hour work out.

</div>



       {/* -------- timeLocks -------------------------------- */}





       <HeaderWrapper name="timeLocks">Time Locks</HeaderWrapper>
      <div>
        Invoking a "Time Lock" on a chit means that it  can not be edited again.  You do this by clicking on the "lock icon". Once locked - there is a date-time stamp associated with the chit.  You can not unlock a locked chit... but it can be delted all together.
      </div>
 
      <div>
        You might want to lock a chit because you think you might possibly have to prove when you created something.  For instance - maybe you issue yourself a locked chit you come up with a new product idea.   Having an unalterable, time stamped chit could be helpful in a future patent dispute.
      </div>


      {/* ----------------- */}


      </ContentWrapper>
    </MainWrapper>

  )
}

export default PersonalChits
