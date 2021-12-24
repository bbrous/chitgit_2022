import React , {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'

import{chitBlueDull, chitOrangeLight, chitRedDark, chitOrange} from '../../../styles/colors'

import {styled, createMuiTheme}  from '@material-ui/core/styles'
 
import Button from '@material-ui/core/Button'; 


const theme = createMuiTheme(); // allows use of mui theme in styled component






const Message= styled('div')({

  display: 'block',
  width: '16rem',
  textAlign: 'justify',
  
 
 
 
  
  marginTop: '.5rem',
  marginBottom: '1rem',
   
 
  color: 'black',
  fontSize: '.9rem',


  [theme.breakpoints.down('sm')] : {
    // fontSize: '1.25rem'
  },

  [theme.breakpoints.down('xs')] : {
   
    // fontSize: '1.25rem'
  }


})


// ============================================

const NotificationSent = () => {
  return (
    <Fragment>

    <Message>
    Your message has been sent.  <br/>
    Thank you
   



    </Message>
 

  </Fragment>
  )
}

export default NotificationSent