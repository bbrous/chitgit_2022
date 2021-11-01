//    Sample Site Logs Primary Page

import {connect} from 'react-redux'
import {useHistory,   withRouter} from 'react-router-dom'
import{chitOrangeLight, veryLightGrey, chitOrange, chitLightPink, chitSkyBlue} from '../../../../styles/colors'

import {styled, createMuiTheme, makeStyles}  from '@material-ui/core/styles'


import InfoIcon from '@material-ui/icons/Info'
import Paper from '@material-ui/core/Paper'
const theme = createMuiTheme(); // allows use of mui theme in styled component



const Wrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: chitLightPink,

  [theme.breakpoints.down('xs')] : {
    // display: 'none',
 
  }

})




//--- STYLES begin --------------------------

const MainWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: chitOrangeLight,
  height: '100%',
  // maxWidth: '960px',
  // minHeight: '600px',

  // backgroundColor: 'red',

  width: '100%',

  [theme.breakpoints.down('sm')] : {
     
  },

})

const Container= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  color: chitOrange,
  width: '80%',

  // minHeight: '10rem',
  height: '90%',
  margin: '2rem 0 5% 0',
  
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

backgroundColor: veryLightGrey,


})



// ------------------------------------
const Info= styled(InfoIcon)({
  display: 'block',
   
  position: 'absolute',
  top: '6px',
  right: '6px',
  color: chitOrange,


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})

// -------------------------------
const TitleWrapper = styled(Paper)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '98%',
  height: '3.5rem',
  margin: '5px 0',
  fontSize: '1rem',

  color: chitSkyBlue,




  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const BreadCrumbs = styled('div')({
  display: 'block',
  position: 'absolute',
  top: '2px',
  left: '5px',
  color: 'black',
  
  
  fontSize: '.7rem',






  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

// -------------------------------
const LogsWrapper = styled(Paper)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '98%',
  height:   'calc(98% - 3.5rem)',
  margin: '5px 0',
  padding: '5px',

  fontSize: '1rem',

  overflowY: 'auto',

  backgroundColor: veryLightGrey,




  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

const LogItemWrapper = styled(Paper)({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '98%',
  height:   '3.5rem',
  margin: '5px 0',
  padding: '5px',

  fontSize: '1rem',

  overflowY: 'auto',

  backgroundColor: 'white',




  //  '&:hover' : {backgroundColor: chitOrangeVeryLight},


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },


})

// ===========================================================
function LogsMain_s() {





  return (
    <MainWrapper>

    <Info/>
    
    <Container>

    <TitleWrapper>  
       Log Title here
       <BreadCrumbs> Organization {">"} Lansbrook {'>'} </BreadCrumbs>
       
    </TitleWrapper>

    <LogsWrapper>
      <LogItemWrapper> log 1 </LogItemWrapper>
      <LogItemWrapper> log 1 </LogItemWrapper>
      <LogItemWrapper> log 1 </LogItemWrapper>
      <LogItemWrapper> log 1 </LogItemWrapper>
    </LogsWrapper>

    </Container>

  </MainWrapper>
  )
}

export default LogsMain_s
