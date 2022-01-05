/*---- File - SpotlightForm_s.jsx 
   Creates new or edits existing Spotlight... depending on if 
   a detailId exists ... if yes - edit : if no - new


   Contains children: 
      ./formCompnents

   parent: Modal.js  - src\pages\public\sampleSite\samComponents\Modal_s.jsx
   detailId for edit passed from - 
                      src\pages\public\sampleSite\samComponents\New_s.jsx
*/

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { chitBlueLight, chitOrangeLight, } from '../../../../styles/colors'

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, array } from 'yup';

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';

// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import { StyledSelector } from '../../../../forms/formComponents/StyledSelector';

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// ---------------------------------------------
  const Wrapper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: '95',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    overflow: 'auto',


    [theme.breakpoints.down('sm')]: {
      // height: '1.25rem',
      // backgroundColor: 'red'
    },
  
  })

  const HeaderWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: '95',

    width: '100%',

    [theme.breakpoints.down('sm')]: {
      // height: '1.25rem',
      // backgroundColor: 'red'
    },
  
  })



  const FormWrapper = styled('form')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
  
   
  
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
    color: 'yellow'
  
  })


  const StyledCalendarIcon = styled(CalendarTodayIcon)({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8px',
    width: '16px',
    color: '#CFD0D1',
  
   
  
    [theme.breakpoints.down('sm')]: {
      // height: '1.25rem',
  
    },
  
  })



// --- Yup setup ---

const defaultValues = {
  title: "",
  endEst: "",
  parentId: ""

};

//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your spotlight is required'),

  
});


// ############## TEMP ##################

let spotlightArray = [
  {value: 'spot22', label: 'Spot 22 Title' },
  {value: 'spot33', label: 'Spot 33 Title' },
  {value: 'spot44', label: 'Spot 44 Title' },
  {value: 'spot55', label: 'Spot 55 Title' }
]

// ####################################

// ==============================

export default function SpotlightForm_s(props) {

  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
    let spotId = props.detailId

  
    const methods = useForm({
      defaultValues: defaultValues,
      resolver: yupResolver(formSchema)
    });
  
    const { handleSubmit, reset, control, watch} = methods;

    const submitForm = async (data) => {

      // --- Join functions --- 
      try {
  
        // --- start the spinner ---
        dispatch(changeLoadingStatus(true))
  
        // await Firebase add + return newSpotlightId
        let newSpotlightId = cuid()
  
        //  --- register succssful  successful ---
        if (newSpotlightId) {
  
          const title = data.title
          const endEst = data.endEst
          const parentId = data.parentId
       
  
          console.log('[ SpotlightForm ] title ', title);
          console.log('[ SpotlightForm ] endEst ', endEst);
          console.log('[ SpotlightForm ] parentId ', parentId);
  
  /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




     Dispatch data to Redux here  with await

  */

  
          // --- end spinner + reset form ---
  
          
          dispatch(changeLoadingStatus(false))
          reset()
        }
        //  FirebaseAuthService(data.email, data.password)
    
        reset(defaultValues)
  
      } catch (error) {
  
        // --- alert error + navigate + end spinner + reset form ---
        alert(error.message)
        dispatch(changeLoadingStatus(false))
        
        reset(defaultValues)
      }
  
    };
    
  
       // --- Actual Form ---------------------------------------------


  return (
    <Wrapper>
      {!spotId && 
      <HeaderWrapper> Create New Spotlight </HeaderWrapper>
    }
      {spotId && 
      <HeaderWrapper> Edit Spotlight </HeaderWrapper>
    }

    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Input Component  -------------------------- */}

          <FormComponentWrapper>
          <ComponentName>
            Title - spotlight goal, objective or task
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="title" control={control} label="Title" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

          



        {/* ------Input Component  -------------------------- */}

        <FormComponentWrapper>
            <ComponentName>
              Make this spotlight the child of: 
            </ComponentName>

            <ComponentWrapper>
              <StyledSelector
                name={"parentId"}
                control={control}
                label={"Parent"}
                options = {spotlightArray}
              />

            </ComponentWrapper>
          </FormComponentWrapper>

        {/* ------Input Component  -------------------------- */}

 
        <FormComponentWrapper>
            <ComponentName>
              <div> Target date - when you hope to get it done by:  <StyledCalendarIcon/></div>
              
            </ComponentName>

            <ComponentWrapper>
              <Controller

                name="endEst"
                control={control}
                initialNote={'hi'}

                render={({ field }) => (
                  <StyledDatePicker {...field} ref={null} />
                )}
              />

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

    </Wrapper>
  );
}

