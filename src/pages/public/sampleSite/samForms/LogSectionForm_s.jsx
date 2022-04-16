




import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
 
import { 

        checkIfWordExists, 
        cleanOptions ,
        optionDescendSorter,
        isArrayDifferent,
        doesArrayIncludeItem

      } from '../../../../app/helpers/commonHelpers'

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports ---------------------------------

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {
  closeLogForm


} from '../../../../app/redux/statusRedux/sam_statusSlice'
 



// --- Form component imports ---------

import { Editor } from '../../../../forms/formComponents/QuillEditor'

import { StyledAutocomplete } from '../../../../forms/formComponents/StyledAutocomplete';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import { veryLightGrey } from '../../../../styles/colors'

const theme = createTheme(); // allows use of mui theme in styled component

// ---------------------------------------------
  const Wrapper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: '95',
  
    width: '100%',
    height: '100%',
    overflow: 'auto',
border: '2px solid #33CC99',
backgroundColor: veryLightGrey,

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
    width: '98%',
    margin: '5px 0',
    backgroundColor: 'white',
  

  
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
    color: 'white',
    margin: '0 8px'
  
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

  // logContent: string().required('Your log needs some content'),


});




// ==============================

export default function LogForm_s(props) {

  const dispatch = useDispatch()

  const cancelForm = ()=>{
 
   
    console.log('[ LOG HEADER] open new form ');
     dispatch(closeLogForm())
     
   }
    
    // !logId ? formlogHolderId = id  : formlogHolderId = log.logHolderId
    
      let defaultValues = {
      logContent:'',
      keywords: [],
      categories: ''

    };
// ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });
  const { handleSubmit, reset, control, setValue, onChange, watch, ref } = methods;

  const submitForm = (data) => {

    
    console.log('[Dispatch_Form]...data ', data)


    dispatch(closeLogForm())

  };

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>
      
     

<FormProvider>
<FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm) } >

<div>  Log Form Here </div>
  
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

          <StyledButton 
             
            variant="contained" 
            color="primary"
            style={{textTransform: 'none'}}
            onClick = {()=>dispatch(closeLogForm())}
            >
            Cancel
          </StyledButton> 

        </ButtonWrapper>
      </FormWrapper>

    </FormProvider>

    </Wrapper>
  );
}


