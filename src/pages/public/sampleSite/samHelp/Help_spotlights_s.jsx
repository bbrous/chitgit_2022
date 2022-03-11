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

function HelpSpotlights() {
  return (
    <MainWrapper>

    <LinkWrapper>
     <a href="#intro">Introduction  </a>
       <a href="#createNew">Creating new spotlights  </a>
       <a href="#delete">Deleting</a>
       <a href="#complete">Completing</a>
</LinkWrapper>
<ContentWrapper>
<HeaderWrapper name="intro"> Introduction</HeaderWrapper>


        <div><em> Spotlights</em> is a "decomposition" tool. <br />
        As used here, a "decomposition" tool is a cross between a to-do list and a project manager.
        </div>
        <div>
          The  tool is designed for you to break down a large goal, objective or activity 
          into smaller, more manageable chunks...
          and then to place those in the order that they
          are  to be executed  to complete the prmary undertaking.
        </div>
        <div>
          A "spotlight" is comprised of "tasks" ... and may also contain child
          spotlights.  In Chit Git world, the difference between a task and a spolight is -- A spotlight can be broken into smaller tasks or activities &#40;decompisition&#41;, 
          but a task can not be broken down any further.
          
        </div>
        <div>
          Thus a top-tier spotlight can contain any number of child tasks and
          child spotlights...
          with each child spotlight containing it's own child tasks and child spotlights... etc., etc.    </div>
        <div>This creates a
          a tree of spotlights &#40;see tree view&#41;
        </div>
        <div>
          Spotlights can also have a target end date goal, whereas tasks cannot.
        </div>
      


      {/* -------- createNew -------------------------------- */}
      
      <HeaderWrapper name="createNew"> Creating new Spotlights</HeaderWrapper>

      <div> New spotlights can be created in 3 ways </div>
      <IconWrapper>
          <AddCircleIconWrapper />
        </IconWrapper>
      <div>
        The first way to create a new spotlight is in the side panel 
        using the + icon.  This creates a top level spotlight... meaning that
        it is not the child of another spotlight.
      </div>

      <div>
        The 2nd way to create a new spotlight in the task form that is located in  
        the body of an existing spotlight.  This will create a new spotlight that 
        has the existing spotlight as it's parent.
        
      </div>

      <div>
        The 3rd way to create a new spotlight is to convert a task you already 
        created in an existing spotlight into a new spotlight.  The newly created
         spotlight will replace the converted task and will become the child 
         spotlight of the &#40;primary&#41; spotlight.
        
      </div>


      
      <HeaderWrapper name="delete">Editing, deleting tasks and spotlights </HeaderWrapper>
      <div>
        Tasks can not be edited.  They can only be deleted,  marked as 
        completed, or converted to a spotlight. 
      </div>
      <div>
        Spotlights can be edited or deleted. However deleting a spotlight 
        has a permenant, cascading impact on all it's children and it's parent 
        spotlight if it has one.  
      </div>
      <div>
        When a spotlight is deleted ... all it's tasks will also be deleted.  Also all child tasks and child spotlights will be deleted.  In fact, the entire
         tree below the deleted spotlight will be lost completely.
      </div>

      <div>
        The deleted spotlight, if it has a parent, will also be removed from 
        the parent's task list.
      </div>

      <div>
        If you wish to keep any part of the spotlight tree of the spotlight you are 
        considering to delete, it is best to not delete it... Just mark the spotlight as completed.  This will archive it, along with it's children and children's children, etc.  &#40;see Completing &#41;
      </div>

      {/* ----------------- */}
      <HeaderWrapper name="complete">Completing tasks and Spotlights </HeaderWrapper>
      <div>
          Completing tasks .....
        </div>
        <IconWrapper>
          <CheckCircleCompleted><CheckIcon fontSize={'small'} /> </CheckCircleCompleted>
        </IconWrapper>

        <div>
          Completing tasks .....
        </div>


      </ContentWrapper>
    </MainWrapper>

  )
}

export default HelpSpotlights
