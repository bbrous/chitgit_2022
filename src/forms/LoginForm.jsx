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
  width: '60%',
  margin: '.75rem',
  // overflowY: 'hidden',
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledButton= styled(Button)({
  color: 'yellow'

})

// ===================================================
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
  
    const { handleSubmit, reset, control, setValue, onChange, watch, ref } = methods;
  
    // const submitForm = async (data) => {
    //   console.log('[Responsive_Form]...data ', data)
    //   reset(defaultValues)
  
    // };
  
    const submitForm = async (data ) => {
      console.log('[Responsive_Form]...data ', data.email)
      
      // evt.preventDefault()
      const {email, password} = data
      try{
       
        dispatch(changeLoadingStatus(true))
       let userData = await FirebaseAuthService.loginUser(data.email, data.password)
       if(userData){
         navigate('/home')
         dispatch(changeLoadingStatus(false))
         reset()
        }
      //  FirebaseAuthService(data.email, data.password)
        console.log('[JoinForm ]...data ', data)
        reset(defaultValues)
    
      }catch (error){
  
        alert(error.message)
        dispatch(changeLoadingStatus(false))
        navigate('/join')
        reset(defaultValues)
      }
  
    };
  
    const handleLogout = () => {
      // FirebaseAuthService.logoutUser()
    }
  
     // --- Actual Form ---------------------------------------------
  return (
    <>
    <TitleWrapper> Login</TitleWrapper>
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

    </FormProvider>
    {existingUser && 
    <StyledButton  type = 'button' variant="contained" color="primary"
      onClick = {handleLogout}
    >
            Log Out
          </StyledButton>
          }
{!existingUser && 
    <StyledButton type = 'button' variant="contained" color="primary">
            Go to Log in
          </StyledButton>
          }

  </>
)// end return
}

export default LoginForm




