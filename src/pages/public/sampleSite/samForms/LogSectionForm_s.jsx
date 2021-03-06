




import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {

  checkIfWordExists,
  cleanOptions,
  stripWhiteSpace,
  optionDescendSorter,
  isArrayDifferent,
  doesArrayIncludeItem,
  descendSorter

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

import { 
  selectKeywords,
  addKeywordToStore, 
  addKeywordHolder,
  deleteKeywordHolder
 } from '../../../../app/redux/keywordRedux/sam_keywordSlice'
 
import { 
  selectPeople,
  addPersonToStore, 
  addPersonHolder,
  deletePersonHolder
} from '../../../../app/redux/peopleRedux/sam_peopleSlice'

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

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled, createTheme } from '@mui/material/styles'
import { chitBlueDull, mediumGrey, veryLightGrey, lightGrey, chitBurgandyDull } from '../../../../styles/colors'

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

  const [open, setOpen] = React.useState(false);
  
  const handleClickAway = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  console.log('[ where ]THIS SIS THE REDUX ID ', logSectionId);


  // (1) ---Retrieve all needed collections from Redux store -------
  let retrievedLogs = useSelector(selectLogs)
  const [allLogs, setAllLogs ] = useState(retrievedLogs)
  useEffect(()=>{
    setAllLogs(retrievedLogs)
  },[retrievedLogs])

  let retrievedKeywordsArray = useSelector(selectKeywords)
  const [allKeywordsArray, setAllKeywordsArray ] = useState(retrievedKeywordsArray)
  useEffect(()=>{
    setAllKeywordsArray(retrievedKeywordsArray)
  },[retrievedKeywordsArray])

  let retrievedPeopleArray = useSelector(selectPeople)
  const [allPeopleArray, setAllPeopleArray ] = useState(retrievedPeopleArray)
  useEffect(()=>{
    setAllPeopleArray(retrievedPeopleArray)
  },[retrievedPeopleArray])

 

  

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


 
logSectionId  === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  

log =  selectLogFromArray(allLogs, logSectionId)
 


logSectionId  === 'new' ? content = ''  : content =  log.detail 
logSectionId  === 'new' ? meta = ''  : meta =  log.meta 

logSectionId  === 'new' ? logDate = new Date('2021-03-14T17:03:40.000Z')  : logDate =   new Date(log.logDate)

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

  id: sectionId,
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

// --- logSectionId from Redux store view
  if (logSectionId === 'new') {

    console.log('[ LogSectionForm ] new Log dispatch here ', logSectionId);

    dispatch(addLogToStore(newLogData))

  }

//  === EDIT log ==============================================
//  ===========================================================

if (logSectionId !== 'new') {

  // console.log('[ LogSectionForm ] new Log dispatch here ', logSectionId);

  dispatch(updateEditedLog(newLogData))
  
  }


//  === update Keywords ===================================
  let defaultKeywordArray = defaultKeywordOptions
  let formKeywordArray = passedKeyWordArray // cleaned keyword array from form

  //  check if keyword form data submitted is different from default 
  let kewwordArrayDifference = isArrayDifferent(defaultKeywordArray, formKeywordArray)


  // --- only update keywords if keywordArrayDifference === [... someItems] ---

  if (kewwordArrayDifference.length > 0) {

    // map each keyword in the keyword difference array

    kewwordArrayDifference.forEach((item) => {

      // --- check if each keyword form data submitted is  different from default 

      let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultKeywordArray)

      if (!arrayItemInludedInDefault) {  // then it was added

        let keywordExists = checkIfWordExists(item, allKeywordsArray, 'keywords')


        // --- keyword from form is new  -------------------------------
        // --- brand new keyword - add to keyword collection

        if (!keywordExists) {

          // create new keyword 
          let keywordId = cuid() // #####   temp ############

          let newKeywordData = {
            id: keywordId,
            keyword: item,
            dbCollection: 'logs',
            keywordHolder: logSectionId

          }
          dispatch(addKeywordToStore(newKeywordData))

        } // end newKeywordData


        // --- keyword just new in form --- update keyword holders
        if (keywordExists) {
          let updatedKeywordData = {
            keywordId: keywordExists.id,
            keywordHolder: logSectionId,
            dbCollection: 'logs'

          }
          // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);



          dispatch(addKeywordHolder(updatedKeywordData))


        }// end if keywordExists 


      }  // end if arrayItemInludedInDefault


      // --- keyword missing from default - delete  

      if (arrayItemInludedInDefault) {  // then it was deleted in form

        // delete logSectionId from keyword item

        let keywordHolderToBeDeleted = {
          keyword: item,
          keywordHolder: logSectionId,
          // id: noteId
        }


        dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))




      }  // end if arrayItemInludedInDefault



    }) // end map kewwordArrayDifference


  } // end if kewwordArrayDifference --- 

//  ########################################### 


//  === update People ===================================

let defaultPeopledArray =defaultPeopleOptions
let formPeopledArray =passedPeopleArray


//  check if person form data submitted is different from default 
let peopleArrayDifference = isArrayDifferent(defaultPeopledArray, formPeopledArray)


// --- only update people if peopleArrayDifference === [... someItems] ---





if (peopleArrayDifference.length > 0) {

  // map each person in the person difference array

  peopleArrayDifference.forEach((item) => {

    // --- check if each person form data submitted is  different from default 

    let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultPeopledArray)

    if (!arrayItemInludedInDefault) {  // then it was added

      let personExists = checkIfWordExists(item, allPeopleArray, 'people')


      // --- person from form is new  -------------------------------
      // --- brand new person - add to person collection

      if (!personExists) {

        console.log('[ OOOOOOOO - LOG section FORM ] person does NOT exist ');

        // create new person 
        let personId = cuid() // #####   temp ############

        let newPersonData = {
          id: personId,
          name: item,
          dbCollection: 'logs',
          personHolder: logSectionId

        }
        dispatch(addPersonToStore(newPersonData))

      } // end newPersonData


      // --- person just new in form --- update person holders
      if (personExists) {

        console.log('[ OOOOOOOO +  LOG section FORM ] person EXISTS ', personExists);

        let updatedPersonData = {
          id: personExists.id,
          personHolder: logSectionId,
          dbCollection: 'logs'

        }
        // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);



        dispatch(addPersonHolder(updatedPersonData))


      }// end if personExists 


    }  // end if arrayItemInludedInDefault


    // --- person missing from default - delete  

    if (arrayItemInludedInDefault) {  // then it was deleted in form

      // delete logSectionId from keyword item

      let personHolderToBeDeleted = {
        person: item,
        personHolder: logSectionId,
        // id: noteId
      }

      console.log('[ LogSectionForm ] Person 2020202020 to be deleteed ', item);
      dispatch(deletePersonHolder(personHolderToBeDeleted))




    }  // end if arrayItemInludedInDefault



  }) // end map peopleArrayDifference


} // end if peopleArrayDifference --- 

















//  ########################################### 

    dispatch(changeLoadingStatus(false)) // stop spinner
    dispatch(closeLogSectionForm()) // close the form


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

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <div>
            You have a section currently being edited.
            Would you like to save your changes to that section?
          </div>
        </DialogContent>
        <DialogActions>
          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleClose}
          >
            Save Edits
          </StyledButton>

          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"

            onClick={handleClose}
          >
            Cancel
          </StyledButton>

        </DialogActions>
      </Dialog>
      

      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >

        <ClickAwayListener
          onClickAway={handleClickAway}
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
        >
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
                        IniitalValue={defaultValues.content} />
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
                    placeholder='select or type people'

                  />
                </PeopleWrapper>

                <KeyWordWrapper>
                  <StyledChronicleMultiselect
                    name={'keywords'}
                    control={control}
                    options={keywordsOptionsArray}
                    placeholder='select or type keywords'
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.keywords}


                  />
                </KeyWordWrapper>

              </SearchWrapper>
            </OuterContentWrapper>


          </MainWrapper>
</ClickAwayListener>
          {/* ------Submit ---------- -------------------------- */}
          <ButtonWrapper>

            <StyledButton

              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
              onClick={() => dispatch(closeLogSectionForm())}
            >
              Cancel
            </StyledButton>

            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
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
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  padding: ' 0 1rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})






