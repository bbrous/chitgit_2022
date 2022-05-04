/*---- File - filename.jsx 
   What file does

   View Logic in LogForm read me ...
           src\readMe\LogForm_info.md


   Contains children: 
       input components
       src\forms\formComponents\ChronicleSelectMui.jsx
   parent: New 
*/




import React, {useState, useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'
import { chitBlueDull, darkGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors'
import { Scrollbars } from 'react-custom-scrollbars';
import { 

        checkIfWordExists, 
        cleanOptions ,
        optionDescendSorter,
        isArrayDifferent,
        doesArrayIncludeItem,
        doesArrayOfObjectsIncludeItem

      } from '../../../../app/helpers/commonHelpers'

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';
import * as Yup from 'yup';

// --- Redux slices imports ---------------------------------
import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice'
import {
  closeLogSectionForm, 
  closeNewLogForm, 
  selectStatus, 
   


} from '../../../../app/redux/statusRedux/sam_statusSlice'
 

// --- form components ---------------
import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledSliderMui } from '../../../../forms/formComponents/StyledSliderMui';
import { StyledRadio } from '../../../../forms/formComponents/StyledRadio';
import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import {Editor} from '../../../../forms/formComponents/QuillEditor';
// --- imports to create options for selectors

import { 
  selectlogHolders,
  addLogHolderToStore
} from '../../../../app/redux/logHolderRedux/sam_logHolderSlice'

import { selectPeople, addPersonToStore } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups, addGroupToStore } from '../../../../app/redux/groupRedux/sam_groupSlice'
 

// --- Form component imports ---------

import { ChronicleInput } from '../../../../forms/formComponents/ChronicleInput'
import { ChronicleSelectMui } from '../../../../forms/formComponents/ChronicleSelectMui'

 import { EditorShort } from '../../../../forms/formComponents/ChronicleEditorShort'
import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'
import { descendSorter, stripWhiteSpace } from '../../../../app/helpers/commonHelpers'

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------




 


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function TwoPartyChitForm_s(props) {


  let defaultValues, sectionId
 

  defaultValues = {
    otherParty: '', 
    deedPerformedBy: '', 
    description: '', 
    chitDate: '', 
    chitValue: '', 
    workRelated: '', 
    keywords: [], 
  

  };



    // --- close / cancel form 
    const cancelNewForm = () => {

      // dispatch(closeNewLogForm())
      // navigate(`/sample/logs`)
    }
// ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });
  const { handleSubmit, reset, control, setValue, onChange, watch, ref , formState: { errors } } = methods;

  const submitForm = async (data) => {

    const {logType, newExisting,  person, newPerson, 
                          group, newGroup, groupType} = data

    console.log('[LogSectionForm]...data ', data)
    console.log('[LogSectionForm]...logType ', logType)
 
   
  } // end  submit

  const myValue = watch("chitValue");
  let myColor

  if( myValue < 25 ) { myColor = 'copper' } 
  if (myValue > 24 && myValue < 60 ) { myColor = 'silver' } 
  if (myValue > 59 ){ myColor= 'gold' }

  const showLogTypeInput = watch('logType')
  const showNewExisting = watch('newExisting')
                      // #############  TEMP ##############
                      let sortedCategoryOptions = ['red', 'blue','green']
                      let peopleOptionsArray = ['Bob', 'Carol', 'Ted', 'Alice']
  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>

<HeaderWrapper> Create New Two Party Chit </HeaderWrapper>
                                <Scrollbars>
                              {/* --- Form -------------------------- */}

      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <>

            {/* ------Who -------------------------- */}

            <FormComponentWrapper>
              <ComponentName>
                Who is the other party?
              </ComponentName>

              <ComponentWrapper>
                <StyledSelectMuiCreatable
                  name={'otherParty'}
                  control={control}
                  options={peopleOptionsArray}
                  // or
                  // defaultValue = {{ value: 'ge423', label: 'home'}}
                  defaultValue={defaultValues.person}
                  placeholder='select a person'

                />

                {/* {errors.person && <ErrorMessage>{ errors.person.message} </ErrorMessage>}  */}






              </ComponentWrapper>
            </FormComponentWrapper>

            {/* ------DeedPerformed by ------------- */}

            <FormComponentWrapper>
              <ComponentName>
                Who performed the action ?
              </ComponentName>

              <ComponentWrapper>
                <RadiotWrapper>
                  <StyledRadio
                    name={"deedPerformedBy"}
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
                Description ? <StyledCalendarIcon />
              </ComponentName>

              <QuillComponentWrapper>
                <Controller

                  name="description"
                  control={control}
                  initialNote={'hi quill description'}

                  render={({ field }) => (
                    <Editor
                      {...field}
                      ref={null}
                      IniitalValue='hello there' />
                  )}

                />


              </QuillComponentWrapper>
            </FormComponentWrapper>
            {/* ------When  -------------------------- */}

            <FormComponentWrapper>
              <ComponentName>
                When did the action occur ? <StyledCalendarIcon />
              </ComponentName>

              <ComponentWrapper>
                <Controller

                  name="chitDate"
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
                <StyledSliderMui name="chitValue" control={control} label="Chit Value" type="text" />

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
                    name={"workRelated"}
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
                  defaultValue={defaultValues.keywords}
                  placeholder='select a category'


                />


              </ComponentWrapper>
            </FormComponentWrapper>

          </>

          {/* ------Submit ---------- -------------------------- */}
          <ButtonWrapper>

            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
            >
              Submit
            </StyledButton>

            <StyledButton

              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
              onClick={() => cancelNewForm()}
            >
              Cancel
            </StyledButton>

          </ButtonWrapper>
        </FormWrapper>

      </FormProvider>
      </Scrollbars>
    </Wrapper>
  );
}

const formSchema = object({
  


  });
// ==== Styles ===========================================


// ==== Styles ===========================================
const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',
  
  width: 'calc(100%-12px)',
  height: '100%',
  overflow: 'auto',
  padding: '0 0 3px 16px',
backgroundColor: '#F6F7F8',
borderRadius: '5px',
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
  color: darkGrey,


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
