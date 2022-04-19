




import React, {useState, useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { chitBlueDull, mediumGrey, veryLightGrey } from '../../../../styles/colors'

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
 



// --- Form component imports ---------

import { Editor } from '../../../../forms/formComponents/ChronicleEditor'
import { EditorShort } from '../../../../forms/formComponents/ChronicleEditorShort'
import { StyledChronicleMultiselect } from '../../../../forms/formComponents/StyledChronicleMultiselect';

import { ChronicleSelectMuiCreatable } from '../../../../forms/formComponents/ChronicleSelectMuiCreatable'

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'

import { StyledDateTimePicker } from '../../../../forms/formComponents/StyledDateTimePicker'
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
  // person: string().required('Name is required'),
 
  person: string()
  .when('logType', {
    is: 'person',
    then: string().required('A person type is required.'),
  }),

 

group: string()
.when('logType', {
  is: 'group',
  then: string().required('A group type is required.'),
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

let defaultValues, log,  sectionId, logContent, logMeta, logKeywordArray, 
logPeopleArray, logDateTime


// ##### Sample only  ###########
logSectionId === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  

// logSectionId === 'new' ? log =  {} : log =  selectLogFromArray(logArray, logId)


// logSectionId === 'new' ? logContent = ''  : sectionId =  logSectionId  

    
  // !logId ? formlogHolderId = id  : formlogHolderId = log.logHolderId
  let keywordsOptionsArray = []
  let peopleOptionsArray = []


  defaultValues = {
    content: '',
    meta: '',
    logType: 'person',
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
<FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm) } >
  

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
                options = {[
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

<SelectWrapper>  
                {showLogTypeInput === 'person' && <>   
                                <ChronicleSelectMuiCreatable
                                name={'person'}
                                control={control}
                                options={['help', 'me']}
                                // defaultValue = {{ value: 'ge423', label: 'home'}}
                                defaultValue={defaultValues.categories}
                                placeholder = 'select or type person'
                
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
                    placeholder = 'select or type group'
    
                  />

                  {errors.group && <ErrorMessage>This field required.</ErrorMessage>}

                  </>
                }
</SelectWrapper>

            </ComponentWrapper>
          </FormComponentWrapper>




            <TopWrapper>
              <DateWrapper>

                <Controller

                  name="dateTime"
                  control={control}
                  defaultValue={defaultValues.dateTime}

                  render={({ field }) => (
                    <StyledDateTimePicker {...field} ref={null} />
                  )}
                /><CalendarTodayIcon style={{
                  color: '#A7A7A8',
                  fontSize: '1.2rem',
                  marginLeft: '5px'
                }}
                />

              </DateWrapper>

            </TopWrapper>

            <OuterContentWrapper>

              <ContentWrapper>

                <MetaWrapper>



                  <Controller

                    name="meta"
                    control={control}
                    initialNote={'hi quill description'}

                    render={({ field }) => (
                      <EditorShort
                        {...field}
                        ref={null}
                        IniitalValue={defaultValues.noteContent} />
                    )}

                  />


                </MetaWrapper>
        
     
        <Content>



              <Controller

                name="content"
                control={control}
                initialNote={'hi quill description'}
               
                render={({ field }) => (
                  <Editor 
                  {...field} 
                  ref={null}  
                  IniitalValue = {defaultValues.noteContent}/>
                )}
                
              />


        </Content>


      </ContentWrapper>
          <SearchWrapper>
            <SearchTitle>Add search termsaaa</SearchTitle>
            <PeopleWrapper>

            <StyledChronicleMultiselect
                name={'people'}
                control={control}
                options={peopleOptionsArray}
                // defaultValue = {{ value: 'ge423', label: 'home'}}
                defaultValue={defaultValues.people}
                placeholder = 'select or type people'

              />
            </PeopleWrapper>

            <KeyWordWrapper>
              <StyledChronicleMultiselect
                name={'keywords'}
                control={control}
                options={keywordsOptionsArray}
                placeholder = 'select or type keywords'
                // defaultValue = {{ value: 'ge423', label: 'home'}}
                defaultValue={defaultValues.keywords}


              />
            </KeyWordWrapper>

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
            onClick = {()=>cancelNewForm()}
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
  height: '2rem',
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
  width: '35%',
  padding: '2px 6px',

  fontSize: '.8rem',
  height: '.8rem',

  '& span': {
    color: mediumGrey,
    marginLeft: '6px',
     
  },

  [theme.breakpoints.down('sm')] : {
    width: '100%'
  },


})


const OuterContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'Column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',
  

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const ContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',

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

  width: '99%',
  padding: '2px 0',
  margin: '3px 0',
backgroundColor: veryLightGrey,
  fontSize: '.6rem',
  height: '2rem',
  color: mediumGrey,
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

const SearchTitle= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  marginRight: '1.5rem',
  fontSize: '.85rem',
  fontStyle: 'italic',
  height: '100%',
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
height: '100%',
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
  marginLeft: '8px',
  width: '40%',

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

   
  // borderLeft: '1px solid #E6E7E8',
  backgroundColor: 'white',
   
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






