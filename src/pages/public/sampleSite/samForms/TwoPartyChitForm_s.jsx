/*---- File - PersonalChitForm_s.jsx 
 
   
*/

import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
 
import { Scrollbars } from 'react-custom-scrollbars';
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
import { StyledRadio } from '../../../../forms/formComponents/StyledRadio';
import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import {Editor} from '../../../../forms/formComponents/QuillEditor';


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'

const theme = createTheme(); // allows use of mui theme in styled component




//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your spotlight is required'),


});







// ==============================

export default function TwoPartyChitForm_s(props) {
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

  !personalChitId ? headerMessage = 'Create New Two Party Chit'  : headerMessage = 'Edit Personal Chit'
 
 

    
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
console.log('[ Two Party CHit Form ] data ', data);
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

       const myValue = watch("chitValue");
       let myColor

       if( myValue < 25 ) { myColor = 'copper' } 
       if (myValue > 24 && myValue < 60 ) { myColor = 'silver' } 
       if (myValue > 59 ){ myColor= 'gold' }



       // #############  TEMP ##############
let sortedCategoryOptions = ['red', 'blue','green']

  return (
    <>
    <Wrapper>
     
      <HeaderWrapper> {headerMessage} </HeaderWrapper>
      <Scrollbars>
    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Who -------------------------- */}

          <FormComponentWrapper>
          <ComponentName>
            Who is the other party?
          </ComponentName>

          <ComponentWrapper>
            <StyledInput name="title" control={control} label="Title" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

      {/* ------Who -------------------------- */}

            <FormComponentWrapper>
          <ComponentName>
            Who performed the action ? 
          </ComponentName>

          <ComponentWrapper>
                <RadiotWrapper>
                  <StyledRadio
                    name={"logType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "me",
                        value: "me",
                      },
                      {
                        label: "the other person",
                        value: "otherPerson",
                      },

                    ]}
                  />
                </RadiotWrapper>


              </ComponentWrapper>
            </FormComponentWrapper>
        {/* ------When  -------------------------- */}

        <FormComponentWrapper>
          <ComponentName>
            Description ? <StyledCalendarIcon/>
          </ComponentName>

          <QuillComponentWrapper>
          <Controller

name="meta"
control={control}
initialNote={'hi quill description'}

render={({ field }) => (
  <Editor
    {...field}
    ref={null}
    IniitalValue={defaultValues.meta} />
)}

/>


            </QuillComponentWrapper>
          </FormComponentWrapper>
      {/* ------When  -------------------------- */}

      <FormComponentWrapper>
          <ComponentName>
            When did the action occur ? <StyledCalendarIcon/>
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




        {/* ------Selector Component  (parentId) -------------------------- */}


        <FormComponentWrapper>
          <ComponentName>
            Slider - {myColor}
          </ComponentName>

          <SliderComponentWrapper>
          <StyledSliderMui name = "chitValue" control={control} label="Chit Value" type = "text" />

          </SliderComponentWrapper>
        </FormComponentWrapper>



      {/* ------Work related -------------------------- */}

      <FormComponentWrapper>
          <ComponentName>
            Is this chit work related ? 
          </ComponentName>

          <ComponentWrapper>
                <RadiotWrapper>
                  <StyledRadio
                    name={"logType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "yes",
                        value: "workRelated",
                      },
                      {
                        label: "no",
                        value: "notWorkRelated",
                      },

                    ]}
                  />
                </RadiotWrapper>


              </ComponentWrapper>
            </FormComponentWrapper>

 
          {/* ------select Creatable (categories) -------------------------- */}

          <FormComponentWrapper>
            <ComponentName>
              Add keywords
            </ComponentName>

            <ComponentWrapper>
              <StyledSelectMuiCreatable
                name={'keywords'}
                control={control}
                options={sortedCategoryOptions}
                // defaultValue = {{ value: 'ge423', label: 'home'}}
                defaultValue={defaultValues.categories}
                placeholder='select a category'


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
    </Scrollbars>
   
    </Wrapper>
 </>
  );
}

// ---------------------------------------------
const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',
  
  width: 'calc(100%-12px)',
  height: '100%',
  overflow: 'auto',
  paddingLeft: '16px',
backgroundColor: '#F6F7F8',

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

const QuillComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  border: '1px solid orange',
  backgroundColor: 'white',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const SliderComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 'calc(100%-1rem)',
  paddingLeft: '1rem',

 
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
const RadiotWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
 
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

