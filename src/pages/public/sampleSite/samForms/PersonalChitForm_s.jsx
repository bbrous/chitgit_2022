/*---- File - PersonalChitForm_s.jsx 
 
   
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


import { selectCategories } from '../../../../app/redux/categoryRedux/sam_categorySlice';



// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'

import { StyledSliderMui } from '../../../../forms/formComponents/StyledSliderMui';

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

  const HeaderWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '.5rem 0 .5rem 0',
    marginBottom: '.5rem',
    borderBottom: '2px solid #CFD0D1',
    boxShadow : '0 0 1px 0 #F6F7F8' ,
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
    color: 'white'
  
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
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
  let personalChitId = props.params.id


  // --- set up options for the selector input (parentId) 

  let categoriesArray = useSelector(selectCategories) // get all spotlights
  
  // --- initial and fill  the options 

  let categoriesOptionsArray = [
    { value: 'none', label: 'none' }
  ] //  defining an initial value in array

  let categoryOption

  categoriesArray.map((category, index) => {
    // code 
    categoryOption = { value: category.id, label: category.title }
    categoriesOptionsArray.push(categoryOption)

    return categoriesOptionsArray
  }) //end map
  


  // --- Yup setup ----------

  //  --- default values conditioned on whether new or edit existing spotlight 

  let defaultValues, category, id,title,  headerMessage

  !personalChitId ? headerMessage = 'Create New Personal Chit'  : headerMessage = 'Edit Personal Chit'
 
 

    
    defaultValues = {
      title: title,
      chitValue: 2
       

    };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch } = methods;

  const submitForm = async (data) => {
console.log('[ Personal CHit Form ] data ', data);
    // let submitData = data
    // console.log('[ submitForm ] ~~~~~~~~~~~~~~~~~~~ data  ', submitData);

    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))



        // --- new data to be passed to store (firebase)

        let newPersonalChitData = {
          id: id,
          type: 'personalChit',
        

        }


      // #### await Firebase  -- add + return newPersonalChitId ############ 

      // -- if no personalChitId -- form is for new - else form is for edit/update

      if (!personalChitId) {

        // --- create new chit ------------
        

      }

      // --- edit/ update personalChit ------------

      if (personalChitId) {
        
      }

 


        

      dispatch(changeLoadingStatus(false))
      reset()
       

      reset(defaultValues)
      dispatch(closeModal())

    } catch (error) {

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)
    }// end try-catch

  } // end submitForm
    
  
       // --- Actual Form ---------------------------------------------


  return (
    <Wrapper>
      
      <HeaderWrapper> {headerMessage} </HeaderWrapper>
   
    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Input Component (title) -------------------------- */}

          <FormComponentWrapper>
          <ComponentName>
            Title - Chit goal, objective or task
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="title" control={control} label="Title" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

          

        {/* ------Selector Component  (parentId) -------------------------- */}


        <FormComponentWrapper>
          <ComponentName>
            Slider
          </ComponentName>

          <ComponentWrapper>
          <StyledSliderMui name = "chitValue" control={control} label="Chit Value" type = "text" />

          </ComponentWrapper>
        </FormComponentWrapper>



        {/* ------DatePicker Component (endEst) -------------------------- */}

 
  


        {/* ------Submit ---------- -------------------------- */}
        <ButtonWrapper>

          <StyledButton 
            type="submit" 
            variant="contained" 
            color="primary"
            style={{textTransform: 'none'}}
            >
            Submit
          </StyledButton>
        </ButtonWrapper>
      </FormWrapper>

    </FormProvider>

    </Wrapper>
  );
}

