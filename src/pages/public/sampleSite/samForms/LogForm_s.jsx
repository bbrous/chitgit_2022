




import React, {useState, useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { chitBlueDull, darkGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors'

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
  closeLogSectionForm, closeNewLogForm, selectStatus


} from '../../../../app/redux/statusRedux/sam_statusSlice'
 
// --- imports to create options for selectors

import { selectLogs } from '../../../../app/redux/logRedux/sam_logsSlice'
import { selectPeople } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups } from '../../../../app/redux/groupRedux/sam_groupSlice'


// --- Form component imports ---------


import { ChronicleSelectMuiCreatable } from '../../../../forms/formComponents/ChronicleSelectMuiCreatable'

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------


//  -- Input requirements for user for each component (if any)

const formSchema = object({


  person: string().when(["logType", "newExisting"], {
    is: (logType, newExisting) => logType === 'person' && newExisting === 'existing',
    then: string().required('I am required now that both checkboxes are checked')
}),

 

group: string().when(["logType", "newExisting"], {
  is: (logType, newExisting) => logType === 'group' && newExisting === 'existing',
  then: string().required('I am required now that both checkboxes are checked')
}),

});

// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function LogForm_s(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(selectStatus)
  const logSectionId = status.view.log.sectionId
  const logId = status.view.log.id

  console.log('[ LOG SECTION FORM FORM FORM ] logId ', logId);

// ----create default paramters if note exists ---------------------

let defaultValues, sectionId


// ##### Sample only  ###########
// logSectionId === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  


  defaultValues = {
    content: '',
    meta: '',
    logType: 'person',
    newExisting: 'existing',
    person: '',
    group: '',
    keywords: [],
    people: [],
    dateTime: 1615741420000  // Bob's login time Mar 14

  };

  // --- close / cancel form 
  const cancelNewForm = () => {

    dispatch(closeNewLogForm())
    navigate(`/sample/logs`)
  }
// ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });
  const { handleSubmit, reset, control, setValue, onChange, watch, ref , formState: { errors } } = methods;

  const submitForm = (data) => {

    
    console.log('[LogSectionForm]...data ', data)


    /* ###########################################

if newLog --- 
   1. if person or group is new 
      a) add person or group
      b)async get id
      c) create new log section 

   2. if person or group exists
       create new log section

   3. dispatch(closeNewLogForm) with update to status view with
      person or group id



    ########################################### */

    dispatch(closeLogSectionForm())

  };

  const showLogTypeInput = watch('logType')

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>



      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <MainWrapper>

            <FormComponentWrapper>
              <ComponentName>
                New Log Type
              </ComponentName>

              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
                    name={"logType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "person",
                        value: "person",
                      },
                      {
                        label: "group",
                        value: "group",
                      },

                    ]}
                  />
                </RadiotWrapper>


              </ComponentWrapper>
            </FormComponentWrapper>


            <FormComponentWrapperIndent>
 

              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
                    name={"newExisting"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "existing",
                        value: "existing",
                      },
                      {
                        label: "new",
                        value: "new",
                      },

                    ]}
                  />
                </RadiotWrapper>


              </ComponentWrapper>
            </FormComponentWrapperIndent>

            


            <FormComponentWrapperDoubleIndent>


              <ComponentWrapper>
        
        
              <SelectWrapper>
                {showLogTypeInput === 'person' && <>
                  <ChronicleSelectMuiCreatable
                    name={'person'}
                    control={control}
                    options={['help', 'me']}
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.categories}
                    placeholder='select or type person'

                  />

                  {errors.person && <ErrorMessage> This field required.</ErrorMessage>}
                </>
                }


                {showLogTypeInput === 'group' &&
                  <>
                    <ChronicleSelectMuiCreatable
                      name={'group'}
                      control={control}
                      options={['angels', 'on my shoulder']}
                      // defaultValue = {{ value: 'ge423', label: 'home'}}
                      defaultValue={defaultValues.categories}
                      placeholder='select or type group'

                    />

                    {errors.group && <ErrorMessage>This field required.</ErrorMessage>}

                  </>
                }
              </SelectWrapper>





              </ComponentWrapper>
            </FormComponentWrapperDoubleIndent>

           

          </MainWrapper>

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

  width: '100%',
  height: '100%',
  overflow: 'auto',
border: '2px solid #F285B5',
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
  height: '100%',
  margin: '5px 0',
  padding: '4px',
  backgroundColor: 'white',



  [theme.breakpoints.down('sm')]: {
    width: '100%',
  

  },

})

const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '98%',
  height: '100%',
  marginBottom: '6px',
  paddingBottom: '6px',
 
  // backgroundColor: 'green',


  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})







// ##############################################

const FormComponentWrapper= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '90%',
  // margin: '.25rem',
 
// backgroundColor: 'yellow',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const FormComponentWrapperIndent= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '90%',
  marginLeft: '2rem',

// backgroundColor: 'yellow',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const FormComponentWrapperDoubleIndent= styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '90%',
  marginLeft: '3rem',

// backgroundColor: 'yellow',

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
  fontSize: '.9rem',


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

const SelectWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '60%',
 
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ErrorMessage= styled('div')({
  fontSize: '.8rem',
  color: 'red',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
// #######################################


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


 
// -----------------------------------






