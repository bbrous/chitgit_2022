/*---- File - SpotlightForm_s.jsx 
   Creates new or edits existing Spotlight... depending on if 
   a detailId exists ... if yes - edit : if no - new

   Contains children:  input components from ./formCompnents

   parent: Modal.js  - src\pages\public\sampleSite\samComponents\Modal_s.jsx

   --- Edit map --- id and collection needed for update 

      Spotlight_s get's id and db collection (page) from URL sends to -
      Edit_s - sends id & dbCollection to -
      Modal_s - sends id & dbCollection to - SpotlightForm_s (this)

   * note - creating a New spotlight changes the status in store to display a
           new spotlight immediately - updating existing spotlight does not
           change the status and keeps the spotlight being edited on display
           after changes
   
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
import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import { StyledSelectMui } from '../../../../forms/formComponents/StyledSelectMui';

import { StyledMUIDateTimePicker } from '../../../../forms/formComponents/StyledMUIDateTimePicker';
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import { chitBurgandyDull, lightGrey } from '../../../../styles/colors';

const theme = createTheme(); // allows use of mui theme in styled component


// ---functions --------------------------------------------


//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your spotlight is required'),


});



// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function SpotlightForm_s(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
  let spotId = props.params.id


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

  let defaultValues, spotlight, id,title, endEst, parentId, headerMessage

  !spotId ? headerMessage = 'Create New Spotlight'  : headerMessage = 'Edit Spotlight'

  !spotId ? spotlight = {} : spotlight = selectSpotlightFromArray(spotlightArray, spotId)
  !spotId ? id = cuid()  : id =  spotId
  !spotId ? title = ""  : title = spotlight.title


  // --- react-datepicker logic
  //  react-datepicker requires either "" or date
  // tempEndEst is case when database provides a "" initial value

  let tempEndEst
  !spotlight.endEst ? tempEndEst = "" : tempEndEst = new Date(spotlight.endEst) 
  !spotId ? endEst = ""  : endEst = tempEndEst

  !spotId ? parentId = "none"  : parentId = spotlight.parentId

  console.log('[ Spotlight Form  00000000 ] spotlight ', spotlight);
 

    
    defaultValues = {
      title: title,
      endEst: endEst,
      parentId: parentId

    };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch } = methods;

  const submitForm = async (data) => {

    // let submitData = data
    // console.log('[ submitForm ] ~~~~~~~~~~~~~~~~~~~ data  ', submitData);

    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))

        // --- parentId from form can be = 'none' or 'a spotlightId'
        // if parentId is none - dispatch '' to store...else ... form parentId

        let parentId, endDateEst

        data.parentId === 'none' ? parentId = '' : parentId = data.parentId
        data.endEst === undefined ? endDateEst = '' : endDateEst = data.endEst.toString()

        // --- new data to be passed to store (firebase)

        let newSpotlightData = {
          id: id,
          type: 'spotlight',
          parentId: parentId,
          currentTaskId: '',
          title: data.title,
          spotlightStatus: 'inactive',
          completedTimeStamp: '',
          // completed: false,
          lastVisit: new Date().toISOString(),
          endEst: endDateEst,
          noteId: '',
          chitId: '',
          taskArray: []

        }


      // #### await Firebase  -- add + return newSpotlightId ############ 

      // -- if no spotId -- form is for new - else form is for edit/update

      if (!spotId) {

        // --- create new spotlight ------------
        await dispatch(addSpotlightToStore(newSpotlightData))

        // ---- change status so new spotlight is displayed ---

        navigate(`/sample/spotlights/${id}`)
        dispatch(updateStatusView({
          pageType: 'spotlight',
          pageView: 'detail'
        }))

      }

      // --- edit/ update spotlight ------------

      if (spotId) {
        await dispatch(updateEditedSpotlight(newSpotlightData))
      }

      // --- if there is a parentId from form... add new spotlightId to
      //     task array of the existing spotlight with the parentId

      if (data.parentId !== 'none') {

        dispatch(addToTaskArray(
          {
            spotId: data.parentId,
            id: id,
            type: "spotlight"
          }
        ))

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
            Title - spotlight goal, objective or task
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="title" control={control} label="Title" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

          

        {/* ------Selector Component  (parentId) -------------------------- */}

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

        {/* ------DatePicker Component (endEst) -------------------------- */}

 
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


// ==== Styles ===========================================

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
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  width: '5rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})


const StyledCalendarIcon = styled(CalendarTodayIcon)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8px',
  width: '16px',
  color: '#F8C6A0',

 

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})