/* LoginForm.jsx

Form to join 
Parent: pages/public/Login.jsx
Children:  form components in -  ./formCompnents

*/

import React  from 'react'

import {useNavigate} from   'react-router-dom'

import { FormProvider, useForm} from "react-hook-form";

import { useDispatch } from 'react-redux';
import { changeLoadingStatus } from '../app/redux/statusRedux/statusSlice'

import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, array } from 'yup';
import {StyledInput} from './formComponents/StyledInput'

import {styled, createTheme}  from '@mui/material/styles'
import Button from '@mui/material/Button'; 
import FirebaseAuthService from '../app/firebase/FirebaseAuthService';
import {updateLastVisit} from '../app/firebase/FirebaseFirestoreService';
import { backgroundBlue, chitBurgandy, chitBurgandyDull, lightGrey } from '../styles/colors';

const theme = createTheme(); // allows use of mui theme in styled component



// ===================================================

// --- Yup setup ---
const defaultValues = {
  email: "",
  password: "",

};

//  -- Input requirements for user for each component (if any)

const formSchema = object({
  email: string().required('email is required').email('not an email'),
  password: string().max(10, 'no more than 10'),

});

// ===================================================

function LoginForm({existingUser}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
    const methods = useForm({
      defaultValues: defaultValues,
      resolver: yupResolver(formSchema)
    });
  
    const { handleSubmit, reset, control  } = methods;
 
  
    const submitForm = async (data ) => {
   
      // --- Login functions ---
      
      try {

        // --- start the spinner ---
        dispatch(changeLoadingStatus(true))

        // --- firebase login ---
        let userData = await FirebaseAuthService.loginUser(data.email, data.password)

        //  --- login successful ---

        if (userData) {

          // --- update the lastVisit field in user doc ---

          const userId = userData.user.uid
          await updateLastVisit(userId)
          
          // --- navigate + end spinner + reset form ---

          navigate('/home')
          dispatch(changeLoadingStatus(false))
          reset()
        }
        //  FirebaseAuthService(data.email, data.password)

        reset(defaultValues)

      } catch (error) {

        // --- alert error + navigate + end spinner + reset form ---
        alert(error.message)
        dispatch(changeLoadingStatus(false))
        navigate('/login')
        reset(defaultValues)
      }

    };
  
    // --- reset function - called in link below ---

    const goToReset = () => {
      navigate('/resetPassword')
    }
  
     // --- Actual Form ---------------------------------------------
  return (
    <>
    
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>


        {/* ------Input Component  -------------------------- */}

        <FormComponentWrapper>
          <ComponentName>
            email
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="email" control={control} label="Email" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

        {/* ------Input Component  -------------------------- */}

        <FormComponentWrapper>
          <ComponentName>
            Password
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="password" control={control} type = "password" label="Password" />

          </ComponentWrapper>
        </FormComponentWrapper>

       


        {/* ------Submit ---------- -------------------------- */}
        <ButtonWrapper>

          <StyledButton type="submit" variant="contained" color="primary">
            Submit
          </StyledButton>
        </ButtonWrapper>
      </FormWrapper>

      <ResetWrapper onClick = {goToReset} > I forgot my password </ResetWrapper>

    </FormProvider>



  </>
)// end return
}

export default LoginForm


// ----------------------
const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#fad3b6' ,
  
  height: '100vh',


})

const TitleWrapper= styled('h3')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '50%'
 
  
 


})

const FormWrapper = styled('form')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '30%',

 

  [theme.breakpoints.down('sm')]: {
    width: '100%',
     

  },

})
const FormComponentWrapper= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: '.5rem',
 
 
  [theme.breakpoints.down('sm')]: {
    width: '55%'

  },

})

const ComponentName= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: 'darkGrey',
 

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  // overflowY: 'hidden',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  margin: '.75rem',
 
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  padding: ' 0 1rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})
const ResetWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  margin: '.75rem',
 
  cursor: 'pointer',
  color: backgroundBlue,
  fontSize: '.85rem',
  textDecoration: 'underline',
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

