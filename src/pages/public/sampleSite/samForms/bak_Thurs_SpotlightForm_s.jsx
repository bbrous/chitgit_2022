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
import{closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
import { selectSpotlights, 
        selectSpotlightFromArray,
        addSpotlightToStore, 
        addToTaskArray, 
        updateEditedSpotlight } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'
// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import { StyledSelector } from '../../../../forms/formComponents/X_StyledSelector';
import { StyledSelectMui } from '../../../../forms/formComponents/StyledSelectMui';
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





//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your spotlight is required'),


});







// ==============================

export default function SpotlightForm_s(props) {

  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
  let spotId = props.id
  console.log('[ Spotlight Form  00000000 ] spotId ', spotId);


  // --- set up react-select options and intial value-------------

  let spotlightArray = useSelector(selectSpotlights)
  

  // console.log('[ Spotlight Form ] REDUX store -  spotlightArray ', spotlightArray);

  let spotlightsOptionsArray = [
    { value: 'none', label: 'none' }
  ] //  defining an initial value in array

  let spotlightOption

  spotlightArray.map((spotlight, index) => {
    // code 
    spotlightOption = { value: spotlight.id, label: spotlight.title }
    spotlightsOptionsArray.push(spotlightOption)

    return spotlightsOptionsArray
  }) //end map
  


  // console.log('[ Spotlight Form ] spotlightsOptionsArray ', spotlightsOptionsArray);



  // --- Yup setup ----------

  let defaultValues

  if (!spotId) {
    
    defaultValues = {
      title: "",
      endEst: "",
      parentId: 'none'

    };

  } // end if !spotId

  



  if (spotId) {

    let spotlight = selectSpotlightFromArray(spotlightArray, spotId)

    let parentId

    spotlight.parentId ? parentId = spotlight.parentId : parentId = ''

    // - get index of spotlightsOptionArray === parentId
    let initialSpotlightOption = spotlightsOptionsArray.filter(option => option.value === parentId);

    console.log('[ S[pt;ogjtFpr,] ] spotlight.endEst ',spotlight.endEst);


    defaultValues = {
      title: spotlight.title,
      // endEst: new Date(spotlight.endEst),
      endEst: spotlight.endEst ? new Date(spotlight.endEst) : '',
      parentId: parentId

    };

  }// end if spotId


  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  const { handleSubmit, reset, control, watch } = methods;

  //======= SUBMIT =========================================================

  const submitForm = async (data) => {

    let submitData = data
    console.log('[ submitForm ] ~~~~~~~~~~~~~~~~~~~ data  ', submitData);

    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))

      let newSpotlightId = cuid() // create new Id for Sample Site only


      // --- New SPOTLIGHT -----------set up all fields in FB -------

      if (newSpotlightId) {

        // --- parentId from form can be = 'none' or 'a spotlightId'
        // if parentId is none - dispatch '' to store...else ... form parentId
        let parentId
        data.parentId === 'none' ? parentId = '' : parentId = data.parentId

        console.log('[ SPOTLGIHT FORM ] data.endEs ', data.endEs);
        let endDateEst
        data.endEst === undefined ? endDateEst = '' : endDateEst = data.endEst

        let newSpotlightData = {
          id: newSpotlightId,
          type: 'spotlight',
          parentId: parentId,
          currentTaskId: '',
          title: data.title,
          spotlightStatus: 'inactive',
          completedTimeStamp: '',
          completed: false,
          lastVisit: new Date().toISOString(),
          endEst: endDateEst.toString(),
          note: '',
          chitId: '',
          taskArray: []

        }



        // #### await Firebase  -- add + return newSpotlightId ############ 
        if(!spotId) {
        await dispatch(addSpotlightToStore(newSpotlightData))
        }
        if(spotId) {
          await dispatch(updateEditedSpotlight(newSpotlightData))
          }

        // --- if there is a parentId from form add new spotlightId to
        //     task array of the existing spotlight with the parentId

        if (data.parentId !== 'none') {



          // fetch spotlight with id = parentId
          dispatch(addToTaskArray(
            {
              spotId: data.parentId,
              id: newSpotlightId,
              type: "spotlight"
            }
          ))



        }


        // --- end spinner + reset form ---


        dispatch(changeLoadingStatus(false))
        reset()
      }// end if new spotlight
      //  FirebaseAuthService(data.email, data.password)

      reset(defaultValues)
      dispatch(closeModal())

    } catch (error) {

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)
    }

  } // end submitForm
    
  
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
              <StyledSelectMui
                name={"parentId"}
                control={control}
                label={"Parent"}
                options = {spotlightsOptionsArray}
                defaultValue = {defaultValues.parentId}
                 
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

