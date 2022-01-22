/*---- File - SpotlightForm_s.jsx 
   Creates new or edits existing Spotlight... depending on if 
   a detailId exists ... if yes - edit : if no - new

   Contains children:  input components from ./formCompnents

   parent: Modal.js  - src\pages\public\sampleSite\samComponents\Modal_s.jsx

   --- Edit map --- id and collection needed for update 

      Spotlight_s get's id and db collection (page) from URL sends to -
      Edit_s - sends id & dbCollection to -
      Modal_s - sends id & dbCollection to - SpotlightForm_s (this)
   
*/

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

// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledRadio } from '../../../../forms/formComponents/StyledRadio';
 


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
    color: 'white',
     height: '1.5rem'
  
  })






//  -- Input requirements for user for each component (if any)

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

export default function SpotlightTaskForm_s(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
  let spotId = props.id


  // --- set up options for the selector input (parentId) 

  let spotlightArray = useSelector(selectSpotlights) // get all spotlights
  
  // --- initial and fill  the options 

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
  


  // --- Yup setup ----------

  //  --- default values conditioned on whether new or edit existing spotlight 

  let defaultValues


 
    
    defaultValues = {
      title: '',
      type: ''

    };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch } = methods;

  const submitForm = async (data) => {

    // let submitData = data
    console.log('[ submitForm ] ~~~~~~~~~~~~~~~~~~~ data  ', data);

   

  } // end submitForm
    
  
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

