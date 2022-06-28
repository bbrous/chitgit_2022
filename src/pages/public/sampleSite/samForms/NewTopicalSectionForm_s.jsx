import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Scrollbars } from 'react-custom-scrollbars';


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
    selectStatus, closeTopicalSectionForm


} from '../../../../app/redux/statusRedux/sam_statusSlice'

import {  
  selectTopicalSections,
  addTopicalSectionsToStore, 
  updateEditedTopicalSections,
  addTopicalSectionsHolder 
} from '../../../../app/redux/topicalRedux/sam_topicalSectionsSlice'



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


import { Editor } from '../../../../forms/formComponents/JournalEditor'

import { StyledChronicleMultiselect } from '../../../../forms/formComponents/StyledChronicleMultiselect';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

import { addJournalToStore } from '../../../../app/redux/journalRedux/sam_journalSlice'
import { StyledJournalDatePicker } from '../../../../forms/formComponents/StyledJournalDatePicker'

import { ChronicleInput } from '../../../../forms/formComponents/ChronicleInput';

// --- MUI imports ---------

import InfoIcon from '@mui/icons-material/Info';

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled, createTheme } from '@mui/material/styles'
import { chitBlueDull, mediumGrey, veryLightGrey, lightGrey, chitBurgandyDull, mediumLightGrey, chitLightBlueDull } from '../../../../styles/colors'
import TopicalSection from '../samTopicals/TopicalSection_s';

const theme = createTheme(); // allows use of mui theme in styled component

// ---functions --------------------------------------------

//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // journalContent: string().required('Your journal needs some content'),


});


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function NewTopicalSectionForm(props) {

  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const status = useSelector(selectStatus)

  let match = useParams()
  let urlId = match.id
 
  // --- open and closes form in JSecions_s
 

  // --- dialog box open and close
  const [open, setOpen] = React.useState(false);
  
  const handleClickAway = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// --- popover for search 
const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClosePopover = () => {
  setAnchorEl(null);
};

const openPopover = Boolean(anchorEl);
const id = openPopover ? 'simple-popover' : undefined;

  
  // (1) ---Retrieve all needed collections from Redux store -------

  let retrievedTopicalSections = useSelector(selectTopicalSections)
  const [allTopicalSections, setAllTopicalSections ] = useState(retrievedTopicalSections)
  useEffect(()=>{
    setAllTopicalSections(retrievedTopicalSections)
  },[retrievedTopicalSections])


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



    // --- set up defaultValues

    let defaultValues,   sectionId, detail, title, keywordArray, 
    peopleArray, sectionCreatedDate, dateTime, topic, topicalDate, defaultKeywordOptions, defaultPeopleOptions

    sectionId = cuid() 
    title = ''
    detail = ''
    topicalDate = new Date('2021-03-14T17:03:40.000Z') 
    dateTime = new Date('2021-03-14T17:03:40.000Z') 
    defaultKeywordOptions = []
    defaultPeopleOptions = []


    defaultValues = {
      detail: detail,
      title: title,
      keywords: defaultKeywordOptions,
      people: defaultPeopleOptions,
      sectionCreatedDate:  dateTime,  // used in last Edit (auto)
      topicalDate: topicalDate  // Bob's login time Mar 14 - used in input field  
  
    };

    
      // --- close / cancel form 
  const cancelNewForm = () => {

    dispatch(closeTopicalSectionForm())
    // navigate(`/sample/topical`)
  }


  // ####################################################

  // ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  const { handleSubmit, reset, control, setValue, onChange, watch, ref } = methods;

const submitForm = (data) => {
  console.log('[ Topical SECTION FORM FORM FORM ] data ',data);


  // - replace the <p>s with <div>s in Quill editor to make it appear better
  let noPtagDetail = data.detail.replaceAll('<p>' , '<div>')
  let cleanDetail = noPtagDetail.replaceAll('</p>', '</div>')


  /* --- clean the input data from multiselectors (people and keywords)
     --- keywords - strip whitespace and make lower case
     --- people - just strip whitespace

  */


     let passedkeywordArray = data.keywords
     let cleankeywordArray =  []
 
     passedkeywordArray.map((keyword, index) => {
       cleankeywordArray.push(cleanOptions(keyword, 'keywords'))
 
     return cleankeywordArray
     }
     ) //end map
 
     let passedPeopleArray = data.people
     let cleanPeopleArray =  []
 
     passedPeopleArray.map((person, index) => {
       cleanPeopleArray.push(stripWhiteSpace(person))
 
     return cleanPeopleArray
     }
     ) //end map


    try{

      let newTopicalSectionData = {

        id: sectionId,
        topic: urlId , 
        topicalDate: data.topicalDate.toISOString(),
        lastEdit: dateTime.toISOString(),
        timeLock: '',
        
        title: data.title,
        detail: cleanDetail,
        attachment: '',
        chitLink: {},
        peopleArray: cleanPeopleArray,
        keywordArray:  cleankeywordArray
      }

      // ######################################################### 
      // ######################################################### 
      // ######################################################### 



      dispatch(addTopicalSectionsToStore(newTopicalSectionData))



      
     // ######################################################### 
     // ######################################################### 

  //  === update Keywords ===================================

  let defaultkeywordArray = defaultKeywordOptions
  let formkeywordArray = passedkeywordArray // cleaned keyword array from form

  //  check if keyword form data submitted is different from default 
  let kewwordArrayDifference = isArrayDifferent(defaultkeywordArray, formkeywordArray)


  // --- only update keywords if keywordArrayDifference === [... someItems] ---

  if (kewwordArrayDifference.length > 0) {

    // map each keyword in the keyword difference array

    kewwordArrayDifference.forEach((item) => {

      // --- check if each keyword form data submitted is  different from default 

      let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultkeywordArray)

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
            dbCollection: 'journal',
            keywordHolder: sectionId

          }
          dispatch(addKeywordToStore(newKeywordData))

        } // end newKeywordData


        // --- keyword just new in form --- update keyword holders
        if (keywordExists) {
          let updatedKeywordData = {
            keywordId: keywordExists.id,
            keywordHolder: sectionId,
            dbCollection: 'journal'

          }
          // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);



          dispatch(addKeywordHolder(updatedKeywordData))


        }// end if keywordExists 



      }  // end if arrayItemInludedInDefault


      // --- keyword missing from default - delete  

      if (arrayItemInludedInDefault) {  // then it was deleted in form

        // delete sectionId from keyword item

        let keywordHolderToBeDeleted = {
          keyword: item,
          keywordHolder: sectionId,
          // id: noteId
        }


        dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))




      }  // end if arrayItemInludedInDefault



    }) // end map kewwordArrayDifference


  } // end if kewwordArrayDifference --- 

  //  ########################################### 


  //  === update People ===================================

  let defaultPeopledArray = defaultPeopleOptions
  let formPeopledArray = passedPeopleArray


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

          console.log('[ OOOOOOOO - Journal section FORM ] person does NOT exist ');

          // create new person 
          let personId = cuid() // #####   temp ############

          let newPersonData = {
            id: personId,
            name: item,
            dbCollection: 'journal',
            personHolder: sectionId

          }
          dispatch(addPersonToStore(newPersonData))

        } // end newPersonData


        // --- person just new in form --- update person holders
        if (personExists) {

          console.log('[ OOOOOOOO +  Jounal section FORM ] person EXISTS ', personExists);

          let updatedPersonData = {
            id: personExists.id,
            personHolder: sectionId,
            dbCollection: 'journal'

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
          personHolder: sectionId,
          // id: noteId
        }

        console.log('[ JournalSectionForm ] Person 2020202020 to be deleteed ', item);
        dispatch(deletePersonHolder(personHolderToBeDeleted))




      }  // end if arrayItemInludedInDefault



    }) // end map peopleArrayDifference


  } // end if peopleArrayDifference --- 


  dispatch(closeTopicalSectionForm()) 



    }catch(error){

    // --- alert error + navigate + end spinner + reset form ---
    alert(error.message)
    dispatch(changeLoadingStatus(false))

    reset(defaultValues)


    //  ########################################### 

    dispatch(changeLoadingStatus(false)) // stop spinner
    dispatch(closeTopicalSectionForm()) // close the form


    } //-- end catch of try-catch







  }// --- end submit form ---------------------


// === Main Return ===============================

  return (
    <Scrollbars>
      <Wrapper>

 

      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">

        </DialogTitle>
        <DialogContent>
          <div>
            Your new topical section section has not been saved.  
          </div>
        </DialogContent>
        <DialogActions>


          <StyledButton
            form="submit-form"
            variant="contained"
            color="primary"

            onClick={handleClose}
          >
            Got it
          </StyledButton>

        </DialogActions>
      </Dialog> */}


        <FormProvider {...methods}>

          <ClickAwayListener
            onClickAway={handleClickAway}
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
          >


            <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


              <MainWrapper>


              <ButtonWrapper>

                  <StyledButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ textTransform: 'none' }}
                  >
                    Save and Close

                  </StyledButton>

              <StyledButton onClick={() => cancelNewForm()}> Cancel</StyledButton>
              </ButtonWrapper>

                
                <DateContainer>
          <CalendarTodayIcon style={{
                  color: '#A7A7A8',
                  fontSize: '1.2rem',
                  marginLeft: '5px'
                }}
                />
            <DateWrapper>
 

              <Controller

                  name="topicalDate"
                  control={control}


                  render={({ field }) => (
                    <StyledJournalDatePicker {...field} ref={null} />
                  )} 
                />

            </DateWrapper>

          </DateContainer>



          <OuterContentWrapper>

            <TitleWrapper>

            <ChronicleInput
                name={"title"}
                control={control}
                label={"newPerson"}
                defaultValue= {''}
                placeholder = ' create a headline'
                 
                 
              />


                </TitleWrapper>


                <ContentWrapper>

{/* Quill here */}

                  <Controller

                    name="detail"
                    control={control}
                    initialNote={'hi quill description'}

                    render={({ field }) => (
                      <Editor
                        {...field}
                        ref={null}
                        IniitalValue={defaultValues.detail} />
                    )}

                  />


                </ContentWrapper>


    </OuterContentWrapper>



              </MainWrapper>
              <SearchWrapper>
                  <InfoIconWrapper aria-describedby={id}
                    // onMouseOver = {()=> openInfoModal(page, id)}
                    // onMouseOver = {()=> alert('hi')}
                    onClick={handleClick}
                  />



                  <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                  </Popover>



                  <PeopleWrapper>


                    <StyledChronicleMultiselect
                      name={'people'}
                      control={control}
                      options={peopleOptionsArray}

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

                      defaultValue={defaultValues.keywords}


                    />
                  </KeyWordWrapper>

                </SearchWrapper>

            </FormWrapper>
          </ClickAwayListener>
        </FormProvider>



      </Wrapper>
    </Scrollbars>
  )



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
  // overflow: 'auto',

 

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

//  --- Buttons Wrapper  ---------------------------------

const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '.25rem 0 6px  0',
  padding: '3px 0',

  backgroundColor: mediumLightGrey,
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
  textTransform: 'none',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

// ---- search Inputs ---------------------------------------

const SearchWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  padding: '2px 8px',
  margin: '0 0 3px o',
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
  fontSize: '.75rem',
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
  width: '98%',
  height: '100%',
  marginBottom: '6px',
  paddingBottom: '6px',
 
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const DateContainer= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 width: '98%',

 padding: '2px 8px',
  margin: '0 0 3px o',
  backgroundColor: veryLightGrey,
 


  width: '100%',
  margin: '3px 0',
 
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
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  width: '100%',
  

  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})

// ---- Content Wrapper -------------------------------------

const ContentWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  width: '100%',
  // marginTop:'6px',
  margin: 'auto',
  
  
  
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
  },


})


const TitleWrapper= styled('div')({

  display: 'flex',
 
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  fontSize: '.75rem',
  width: '100%',
  margin : '5px 0 8px 0',
  padding: '2px 8px',
  
   

 

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
 
const InfoIconWrapper= styled(InfoIcon)({

  color: mediumLightGrey,
  fontSize : '1.6rem',
  
  '&:hover' : {
    backgroundColor: chitLightBlueDull,
    borderRadius: '50px',
    cursor: 'pointer'
  },

})



  