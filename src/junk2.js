/* function SpotlightTaskForm
    
Task / Spotlight Form in middle of Task Array

parent: SpotlightMain - pages/public/sampleSite/samSpots/SpotlightMain
------------------------------------*/

import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'

 // --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
import { selectSpotlights, 
        selectSpotlightFromArray,
        addSpotlightToStore, 
        addToTaskArray, 
        updateEditedSpotlight } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledRadio } from '../../../../forms/formComponents/StyledRadio';

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'


import { styled, createTheme} from '@mui/material/styles'

const theme = createTheme(); // allows use of mui theme in styled component

// ---------------------------------------------

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

   
  width: '100%',
  


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const FormWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
   height: '6rem',
  width: '100%',
   


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const InputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 
   
  width: '75%',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})



const SubmitWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
   
  width: '25%',
  


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const Spacer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
   
  width: '25%',
  backgroundColor: 'red',


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const RadioWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 
   
  width: '75%',
 


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

const StyledButton= styled(Button)({
  color: 'white',
   height: '1rem'

})


// ------------------------------------------------

//  Radio button Options

const typeOptions = [
  {
    label: "Add as task",
    value: "task",
  },
  {
    label: "Add as spotlight",
    value: "spotlight",
  },
 
];


//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your task or spotlight  is required'),


});

// ===============================================

export default function SpotlightTaskForm_s(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // --- Yup setup ----------

  let defaultValues = {
    title: '',
    type: 'task'

  };
  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch } = methods;

  const submitForm = async (data) => {

    console.log('[ NEW TASK ] data ', data);

    try {
      if(data.type === 'task' ) {

          // task stuff here
          console.log('[ NEW TASK ] data task ', data);
      } 

      if(data.type === 'spotlight') {

        // Spotlight stuff here
        console.log('[ NEW TASK ] data spotlight ', data);
    } 

     
    } catch (error) {




    }// end try catch


    } // end submitForm
    
  
       // --- Actual Form ---------------------------------------------


  return (
    
    <Wrapper>
      <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>
        <InputWrapper> 
         
          <StyledInput name="title" control={control} label="Title" type = "text"
            placeholder = 'add task title'
          />
          
          <SubmitWrapper>
            
          <StyledButton 
            type="submit" 
            variant="contained" 
            color="primary"
            size = 'small'
            
            >
            Add
          </StyledButton>


          </SubmitWrapper>
        
        </InputWrapper>

        <RadioWrapper> 
      
        <ComponentWrapper>
              <StyledRadio
                name={"type"}
                control={control}
                options = {typeOptions}
              />

            </ComponentWrapper> 
        </RadioWrapper>
        <Spacer/>
      </FormWrapper>
      </FormProvider>
    </Wrapper>
  );
}



