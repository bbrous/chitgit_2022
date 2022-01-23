/*---- File - SpotlightTaskForm_s.jsx 
   Creates new task or new spotlight.. depending on  
   user radio button input

   Contains children:  input components from ./formCompnents

   parent: Modal.js  - src\pages\public\sampleSite\samSpots\SpotlightMain_s

   *note - Where SpotlightForm changes the status in store to display a
           new spotlight immediately - new spotlight created here stays
           on existing spotlight.
*/

import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'
 
// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';

import { selectSpotlights, 
        addSpotlightToStore, 
        addToTaskArray, 
        } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice'

import { addTaskToStore } from '../../../../app/redux/taskRedux/sam_tasksSlice';


// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledRadio } from '../../../../forms/formComponents/StyledRadio';
 


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

import { styled, createTheme} from '@mui/material/styles'

const theme = createTheme(); // allows use of mui theme in styled component

// ---------------------------------------------
  const Wrapper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: '95',
    backgroundColor: 'none',
    width: '100%',
    height: '100%',
    overflow: 'auto',


    [theme.breakpoints.down('sm')]: {
      // height: '1.25rem',
      // backgroundColor: 'red'
    },
  
  })



  const FormWrapper = styled('form')({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  
    height: '6rem',
  
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundColor: 'pink'
  
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
  
   
    [theme.breakpoints.down('sm')]: {
      // height: '1.25rem',
  
    },
  
  })
  

  
  const StyledButton= styled(Button)({
    color: 'white',
     height: '1.5rem'
  
  })


//  ----end styling --------------------------------------------------

//  -- setup functions - yup and radio button options

const formSchema = object({

  title: string().required('A title for your spotlight is required'),


});


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


// ==============================

export default function SpotlightTaskForm(props) {

  const dispatch = useDispatch()

  let match = useParams()
 
  // id from URL is used for parentId of new spotlight or new task

  const ParentSpotlightId = match.id


  //  --- default for radio button is for task 

  let defaultValues

    defaultValues = {
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

    // let submitData = data

    try {
     // --- start the loading spinner ---
     dispatch(changeLoadingStatus(true))


     //--- if new task is added as a Spotlight ----

     if(data.type === 'spotlight'){



              // --- new data to be passed to store (firebase)

              // ##### for SampleSite only - create id
              let newSpotId = cuid()

              let newSpotlightData = {
                id: newSpotId,
                type: 'spotlight',
                parentId: ParentSpotlightId,
                currentTaskId: '',
                title: data.title,
                spotlightStatus: 'inactive',
                completedTimeStamp: '',
                completed: false,
                lastVisit: new Date().toISOString(),
                endEst: '',
                note: '',
                chitId: '',
                taskArray: []
      
              }

       // --- create new spotlight ------------
       await dispatch(addSpotlightToStore(newSpotlightData))  
       await  dispatch(addToTaskArray(
              {
                spotId: ParentSpotlightId,
                id: newSpotId,
                type: "spotlight"
              }
            ))      

      // --- end spinner + reset form ---

      dispatch(changeLoadingStatus(false))
      reset()
       
     }

     if(data.type === 'task'){

      // ##### for SampleSite only - create id
      let newTaskId = cuid()

      console.log('[ Task Form ] Its a task  ', data.type );

      let newTaskData = {
        id: newTaskId,
        type: 'task',
        title: data.title,
        completed: false,
        currentTask: '',
        note: '',
        chitId: '',
        attachTo: ''
 

      }

        // --- create new task ------------
        await dispatch(addTaskToStore(newTaskData))  

        await dispatch(addToTaskArray(
              {
                spotId: ParentSpotlightId,
                id: newTaskId,
                type: "task"
              }
            ))      

      // --- end spinner + reset form ---

      dispatch(changeLoadingStatus(false))
      reset()
       

      }//end dispatch


    }catch(error) {

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)


    }// end try - catch ----
   


  } // end submitForm -----
    
  
       // --- Actual Form ---------------------------------------------


  return (
    <Wrapper>
      

   
    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Input Component (title) -------------------------- */}
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
           style={{textTransform: 'none'}}
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

