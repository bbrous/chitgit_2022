




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
import { chitBlueDull, mediumGrey, veryLightGrey } from '../../../../styles/colors'

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

  const MainWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '100%',
    height: '100%',
    marginBottom: '6px',
    paddingBottom: '6px',
  overflow: 'auto',
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })
  
 
  const TopWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: veryLightGrey,
    width: '100%',
    margin: '3px 0',
    borderRadius: '5px 5px 0 0',
    borderLeft: '1px solid #CFD0D1',
    borderTop: '1px solid #CFD0D1',
    borderRight: '1px solid #CFD0D1',
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })

  const DateWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '50%',
    padding: '2px 6px',
  
    fontSize: '.8rem',
    height: '.8rem',
  
    '& span': {
      color: mediumGrey,
      marginLeft: '6px',
       
    },
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })


  const OuterContentWrapper= styled(Paper)({

    display: 'flex',
    position: 'relative',
    flexDirection: 'Column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'aqua',
    width: '100%',
    borderLeft: '1px solid #CFD0D1',
    borderRight: '1px solid #CFD0D1',
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })

  const ContentWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
  
    backgroundColor: veryLightGrey,
    width: '100%',
    // marginTop:'6px',
    margin: 'auto',
    
    
    
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })


  const MetaWrapper= styled('div')({
 
    display: 'flex',
   
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: '.75rem',
    width: '30%',
    minHeight: '100%',
   
    padding: '6px',
    backgroundColor: veryLightGrey,
  
   
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })

  const TimesWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  
    width: '100%',
    padding: '2px 6px',
  
    fontSize: '.65rem',
    color: mediumGrey,
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })
  
  const HeadlineWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: chitBlueDull,
    width: '99%',
    padding: '6px 0',
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })

  const SearchWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: veryLightGrey,
    width: '99%',
    padding: '2px 0',
    margin: '3px 0',
  // backgroundColor: veryLightGrey,
    fontSize: '.6rem',
    height: '.8rem',
    color: mediumGrey,
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })



  const PeopleWrapper= styled('div')({

    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'aqua',
    width: '30%',
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })
  
  const KeyWordWrapper= styled('div')({
  
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'orange',
    width: '70%',
  
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })



  const Content= styled('div')({
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '.85rem',
    width: '70%',
  
    padding: '6px',
    borderLeft: '1px solid #E6E7E8',
    backgroundColor: 'white',
    borderRadius: '0 5px 5px 0',
    [theme.breakpoints.down('sm')] : {
      // width: '100%'
    },
  
  
  })







//  --- Buttons -----------
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

<MainWrapper>
      <TopWrapper>
        <DateWrapper>date</DateWrapper>

      </TopWrapper>
  
    <OuterContentWrapper> 

      <ContentWrapper>

        <MetaWrapper>
       meta
          <TimesWrapper>
              timestamp:   
            
          </TimesWrapper>
        </MetaWrapper>
        
     
        <Content>
          <HeadlineWrapper> title</HeadlineWrapper>
    
          content
        </Content>


      </ContentWrapper>
      <SearchWrapper>
        <PeopleWrapper>people</PeopleWrapper>
        <KeyWordWrapper>  keywords</KeyWordWrapper>

      </SearchWrapper>
      </OuterContentWrapper>


    </MainWrapper>
  
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


