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


function HelpNotes() {
  return (
    <div>
           <p>Helper for notes</p>
      <p>in pages/public/sampleSite/samHelp </p>
    </div>
  )
}

export default HelpNotes
