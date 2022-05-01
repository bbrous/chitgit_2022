




import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {

  checkIfWordExists,
  cleanOptions,
  stripWhiteSpace,
  optionDescendSorter,
  isArrayDifferent,
  doesArrayIncludeItem

} from '../../../../app/helpers/commonHelpers'

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup';


// ---Retrieve all needed collections from Redux store -------


import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {
  closeLogSectionForm, closeNewLogForm, selectStatus


} from '../../../../app/redux/statusRedux/sam_statusSlice'


import { selectLogs, selectLogFromArray, updateEditedLog } from '../../../../app/redux/logRedux/sam_logsSlice'
import { selectKeywords } from '../../../../app/redux/keywordRedux/sam_keywordSlice'
import { selectPeople } from '../../../../app/redux/peopleRedux/sam_peopleSlice'

import { descendSorter } from '../../../../app/helpers/commonHelpers'
// --- Form inputcomponent imports ---------


import { Editor } from '../../../../forms/formComponents/ChronicleEditor'
import { EditorShort } from '../../../../forms/formComponents/ChronicleEditorShort'
import { StyledChronicleMultiselect } from '../../../../forms/formComponents/StyledChronicleMultiselect';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

import { StyledInput } from '../../../../forms/formComponents/StyledInput'

import { addLogToStore } from '../../../../app/redux/logRedux/sam_logsSlice'
import { StyledDateTimePicker } from '../../../../forms/formComponents/StyledDateTimePicker'
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme } from '@mui/material/styles'
import { chitBlueDull, mediumGrey, veryLightGrey } from '../../../../styles/colors'

const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------


//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // logContent: string().required('Your log needs some content'),


});

// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function LogSectionForm_s(props) {
  let match = useParams()

  let logURLId = match.id

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(selectStatus)
  const logSectionId = status.view.log.sectionId
  const logId = status.view.log.id

  // (1) ---Retrieve all needed collections from Redux store -------

  let allLogs, allKeywordsArray, allPeopleArray

  allLogs = useSelector(selectLogs)
  allKeywordsArray = useSelector(selectKeywords) // get all keywords
  allPeopleArray = useSelector(selectPeople) // get all keywords

  // (2) --- Create form Options for Autocomplete multi-selectors --

  let keywordOption, personOption


    let keywordsOptionsArray = []
    let peopleOptionsArray = []

    // --- create keyword options array --

    allKeywordsArray.map((keyword, index) => {
      
      keywordOption = keyword.keyword
      keywordsOptionsArray.push(keywordOption)

      return keywordsOptionsArray
    }) //end map

    // --- create people options array --

    // eliminate "unknown from list of people"
    let filteredPeople = allPeopleArray.filter(item => item.id !== 'unknown')

    filteredPeople.map((person, index) => {

      personOption = person.name
      peopleOptionsArray.push(personOption)

      return peopleOptionsArray
    }) //end map



// ----create default paramters if log exists ---------------------

let defaultValues,   sectionId, content, meta, keywordArray, 
peopleArray, sectionCreatedDate, dateTime, log, logDate, defaultKeywordOptions, defaultPeopleOptions


 
logId === 'newLog' ? sectionId = cuid()  : sectionId =  logSectionId  
log =  selectLogFromArray(allLogs, logSectionId)


console.log('[ Form Section ] logObject ----------    ', allLogs );

logSectionId  === 'new' ? content = ''  : content =  log.detail 
logSectionId  === 'new' ? meta = ''  : meta =  log.meta 

logSectionId  === 'new' ? logDate = new Date('2021-03-14T17:03:40.000Z')  : logDate =  new Date('2021-03-14T17:03:40.000Z')

logSectionId  === 'new' ? defaultKeywordOptions = []  : defaultKeywordOptions = log.keywordArray

logSectionId  === 'new' ? defaultPeopleOptions = []  : defaultPeopleOptions = log.peopleArray




  defaultValues = {
    content: content,
    meta: meta,
    keywords: defaultKeywordOptions,
    people: defaultPeopleOptions,
    sectionCreatedDate:  logDate,  // used in last Edit (auto)
    dateTime: logDate  // Bob's login time Mar 14 - used in input field  

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
  const { handleSubmit, reset, control, setValue, onChange, watch, ref } = methods;

  const submitForm = (data) => {
    console.log('[ LOG SECTION FORM FORM FORM ] data ',data);

//  --- retrieve data from form ---------------------------

    const {content, meta,  keywords, people, dateTime} = data
 

// - replace the <p>s with <div>s in Quill editor to make it appear better
let noPtagContent = content.replaceAll('<p>' , '<div>')
let cleanContent = noPtagContent.replaceAll('</p>', '</div>')

// --- clean the input data from multiselectors (people and keywords)
// --- keywords - strip whitespace and make lower case
// --- people - just strip whitespace

let noPtagMeta = meta.replaceAll('<p>' , '<div>')
let cleanMeta = noPtagMeta.replaceAll('</p>', '</div>')

let passedKeyWordArray = data.keywords
let cleanKeywordArray =  []

passedKeyWordArray.map((keyword, index) => {
  cleanKeywordArray.push(cleanOptions(keyword, 'keywords'))

return cleanKeywordArray
}
) //end map

let passedPeopleArray = data.people
let cleanPeopleArray =  []

passedPeopleArray.map((person, index) => {
  cleanPeopleArray.push(stripWhiteSpace(person))

return cleanPeopleArray
}
) //end map


// console.log('[ LOG SECTION FORM FORM FORM ] ---- CLEANED Keyword ARRAY',cleanKeywordArray);

// console.log('[ LOG SECTION FORM FORM FORM ] ---- CLEANED people ARRAY',cleanPeopleArray);





 // --- start the loading spinner ---
//  dispatch(changeLoadingStatus(true))

try{

// === create new log if log does NOT exists ====================

// --- define the log data to create new log

let newLogData = {

  id: logSectionId,
  type: 'person',
  otherPartyId: logURLId,
  logDate: dateTime.toISOString(),
  lastEdit: dateTime.toISOString(),
  timeLock: '',
  meta: cleanMeta,
  title: 'test title',
  detail: cleanContent,
  attachment: '',
  chitLink: {},
  peopleArray: cleanPeopleArray,
  keywordArray:  cleanKeywordArray
}

//  === New  log ======================================

if (logSectionId === 'new') {

  console.log('[ LogSectionForm ] new Log dispatch here ', logSectionId);

dispatch(addLogToStore(newLogData))

}

//  === EDIT log ======================================

if (logSectionId !== 'new') {

  console.log('[ LogSectionForm ] new Log dispatch here ', logSectionId);








  dispatch(updateEditedLog(newLogData))
  
  }



//  ########################################### 

    dispatch(closeLogSectionForm())








    

  // end try ----------------------------------------------
  }catch(error){

    // --- alert error + navigate + end spinner + reset form ---
    alert(error.message)
    dispatch(changeLoadingStatus(false))

reset(defaultValues)


  }// end try-catch ---------------------------------------


  };

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>
      
     

      <FormProvider {...methods}>
<FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm) } >
  

          <MainWrapper>
            <TopWrapper>
              <DateWrapper>

                <Controller

                  name="dateTime"
                  control={control}
                  

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
                        IniitalValue={defaultValues.meta} />
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
                  IniitalValue = {defaultValues.content}/>
                )}
                
              />


        </Content>


      </ContentWrapper>
          <SearchWrapper>
            <SearchTitle>Add search termsxxx Section Form</SearchTitle>
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
            onClick = {()=>dispatch(closeLogSectionForm())}
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






