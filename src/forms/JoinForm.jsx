/* JoinForm.jsx

Form to join 
Parent: pages/public/Join.jsx
Children:  form components in -  ./formCompnents

*/

import React  from 'react'

import {Navigate, useNavigate} from   'react-router-dom'

import { FormProvider, useForm, Controller } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { changeLoadingStatus } from '../app/redux/statusRedux/statusSlice'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf, string, object, array } from 'yup';
import {StyledInput} from './formComponents/StyledInput'

import {styled, createTheme}  from '@mui/material/styles'
import Button from '@mui/material/Button'; 
import FirebaseAuthService from '../app/firebase/FirebaseAuthService';
import {createUserProfileDocument} from '../app/firebase/FirebaseFirestoreService';

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
  firstName : "",
  lastName : ""


};

//  -- Input requirements for user for each component (if any)

const formSchema = object({

  firstName: string().required('last name required is required'),
  lastName: string().required('last name required is required'),
  email: string().required('email is required').email('not an email'),
  
  password: string()
            .required('Confirm Password is required')
            .max(10, 'no more than 10'),
  confirmPassword: string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match')

 

  
});
// ===================================================

function JoinForm({existingUser}) {
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
 
      
      // evt.preventDefault()
      const {email, password} = data
      try{
       
        dispatch(changeLoadingStatus(true))
       let userData = await FirebaseAuthService.registerUser(data.email, data.password)



       if(userData){

        const userId = userData.user.uid
        const userEmail = userData.user.email
        const firstName = data.firstName
        const lastName = data.lastName

        console.log('[ JoinForm ] firstName ', firstName);
        console.log('[ JoinForm ] lastName ', lastName);
        console.log('[ JoinForm ] data.user ', userData.user.email);
        console.log('[ JoinForm ] data.user.uid ', userData.user.uid);
        await createUserProfileDocument(userId, userEmail, firstName, lastName)
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
    <TitleWrapper> Join</TitleWrapper>
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Input Component  -------------------------- */}

          <FormComponentWrapper>
          <ComponentName>
            first name
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="firstName" control={control} label="First Name" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

         {/* ------Input Component  -------------------------- */}

        <FormComponentWrapper>
          <ComponentName>
            last name
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="lastName" control={control} label="Last Name" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>             


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

               {/* ------Input Component  -------------------------- */}

               <FormComponentWrapper>
          <ComponentName>
            Confirm Password
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="confirmPassword" control={control} type = "password" label="Password" />

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

export default JoinForm




