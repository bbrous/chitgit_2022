import React  from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import{setPage} from '../../../app/redux/actions/X_landingActions'
import {JoinButtonNotification} from '../landingElements/Nav_buttons'

import{chitOrangeLight,  chitOrange} from '../../../styles/colors'

import {styled, createMuiTheme}  from '@material-ui/core/styles'
 
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button'; 


const theme = createMuiTheme(); // allows use of mui theme in styled component

const NotificationBox= styled(Paper)({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',

  width: '45rem',
  minHeight: '35rem',
  // marginTop: '1rem',
  margin: '1rem auto',
  

  backgroundColor: 'white' ,
  borderRadius: '20px',


  [theme.breakpoints.down('xs')] : {
    width: '25rem',
    height: '25rem',
  }


})

const FormWrapper= styled('form')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 

  '& input' : {
    backgroundColor: 'white',
    border: '1px solid #F58634',
    borderRadius: '5px',
    fontSize: '1rem',
    marginBottom: '1rem',
    padding: '.3rem',
    width: '15rem',

    [theme.breakpoints.down('sm')] : {
      fontSize: '.8rem',
      width: '15rem',
    },

    [theme.breakpoints.down('xs')] : {
      fontSize: '.9rem',
      width: '18rem',
      
    }

  },

  '& input:focus' : {

    outlineStyle: 'none',

  },

 



  [theme.breakpoints.down('sm')] : {
    // paddingBottom: 'rem'
  }


})

const InputButton= styled(Button)({



  fontSize: '1rem',
  marginBottom: '.3rem',
  padding: '.3rem',
  outline: 'none',

  backgroundColor: chitOrange ,
  color: 'white',
 

  '&:hover' :{
    backgroundColor: chitOrangeLight,
     
     
  },


  [theme.breakpoints.down('sm')] : {
    fontSize: '.7rem',

  },
  [theme.breakpoints.down('xs')] : {
    fontSize: '.8rem',

  }


})


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

const ButtonWrapper= styled('div')({

  display: 'block',
  
  position: 'absolute',
  right: '.75rem',
  top: '.75rem',

  

  [theme.breakpoints.down('sm')] : {
    // marginTop: '1rem',
    
  },
  
  [theme.breakpoints.down('xs')] : {
    // padding: '0 15% 0 5%',
    
  },

})

const StyledLink= styled(Link)({

  textDecoration: 'none',

})

// ============================================

const NotificationEmpty = (props) => {

  const handlePageChange = (evt)=>{
    evt.persist()
    // console.log('I BE CLICKED in TP :: ', evt.currentTarget.id)
    props.setPage( evt.currentTarget.id) //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     
  }

  return (

    <NotificationBox>
  



    <ButtonWrapper>

      <StyledLink to="/join" id = 'join' onClick = {handlePageChange}>
        <JoinButtonNotification/>
      </StyledLink>

    </ButtonWrapper>
    
    <FormWrapper>

    <Message>
    If you received an email that indicated someone
has shared a chit with you, enter the 
chit number  to view details.
   



    </Message>

    <input type="text" placeholder = 'Chit Number' id = 'chitId' />


    <InputButton type="input">Submit </InputButton>

  </FormWrapper>
  </NotificationBox>
  )
}
 

const actions = {
  setPage 
}

const mapState = state => ({
  page: state
});

export default connect(mapState, actions)(withRouter(NotificationEmpty))