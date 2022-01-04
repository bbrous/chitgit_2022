/* LoginForm.jsx

Form to join 
Parent: pages/public/Join.jsx
Children:  form components in -  ./formCompnents

*/

import React  from 'react'

import {Navigate, useNavigate} from   'react-router-dom'

import { FormProvider, useForm, Controller } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { changeLoadingStatus } from '../app/redux/statusRedux/statusSlice'

import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, string, object, array } from 'yup';
import {StyledInput} from './formComponents/StyledInput'

import {styled, createTheme}  from '@mui/material/styles'
import Button from '@mui/material/Button'; 
import FirebaseAuthService from '../app/firebase/FirebaseAuthService';
import {updateLastVisit} from '../app/firebase/FirebaseFirestoreService';

const theme = createTheme(); // allows use of mui theme in styled component

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
    backgroundColor: 'pink'

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
  // overflowY: 'hidden',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ComponentName= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: 'darkGrey',
  // overflowY: 'hidden',

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
  width: '80%',
  margin: '.75rem',
  // overflowY: 'hidden',
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledButton= styled(Button)({
  color: 'yellow',
  fontSize: '.85rem',
textTransform: 'none'
})

// ===================================================

// --- Yup setup ---

const defaultValues = {
  email: "",
};

//  -- Input requirements for user for each component (if any)

const formSchema = object({
  email: string().required('email is required').email('not an email'),
});

// ===================================================

function PasswordReset() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
    const methods = useForm({
      defaultValues: defaultValues,
      resolver: yupResolver(formSchema)
    });
  
    const { handleSubmit, reset, control} = methods;
  

  
    const submitForm = async (data ) => {
      console.log('[Responsive_Form]...data ', data.email)
      

      try {

        // --- start the spinner ---
        dispatch(changeLoadingStatus(true))

        //  --- send request for password reset - auth will send email
        await FirebaseAuthService.sendPasswordResetEmail(data.email)

         // --- navigate + end spinner + reset form ---

        reset(defaultValues)
        dispatch(changeLoadingStatus(false))
        alert('Check your email to complete password reset')
        navigate('/login')

      } catch (error) {

        // --- alert error + navigate + end spinner + reset form ---
        alert(error.message)
        dispatch(changeLoadingStatus(false))
        navigate('/login')
        reset(defaultValues)
      }

    };

  
     // --- Actual Form ---------------------------------------------
  return (
    <>
    <TitleWrapper> Reset Password</TitleWrapper>
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>


        {/* ------Input Component  -------------------------- */}

        <FormComponentWrapper>
          <ComponentName>
            Enter email
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="email" control={control} label="Email" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>



       


        {/* ------Submit ---------- -------------------------- */}
        <ButtonWrapper>

          <StyledButton type="submit" variant="contained" color="primary">
            Reset Password
          </StyledButton>
        </ButtonWrapper>
      </FormWrapper>

    </FormProvider>




  </>
)// end return
}

export default PasswordReset




