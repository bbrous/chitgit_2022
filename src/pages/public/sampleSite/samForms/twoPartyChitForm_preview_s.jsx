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
import { chitBlueDull, chitBurgandy, chitBurgandyDull, darkGrey, lightGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors'

import { 
  stripWhiteSpace ,
        checkIfWordExists, 
        cleanOptions ,
        optionDescendSorter,
        isArrayDifferent,
        doesArrayIncludeItem,
        doesArrayOfObjectsIncludeItem

      } from '../../../../app/helpers/commonHelpers'

      import { ISOtoTraditional } from '../../../../app/helpers/dateHelper'
      import { chooseTwoPartyChitColor } from '../../../../app/helpers/chitHelpers'

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
 
  closeNewLogForm, 
  selectStatus, 
  updateTwoPartyViewData


} from '../../../../app/redux/statusRedux/sam_statusSlice'
 
// --- imports to create options for selectors

import { 
  addTwoPartyChitToStore ,
  updateEditedTwoPartyChit

} from '../../../../app/redux/twoPartyChitRedux/sam_twoPartyChitSlice'

import { selectPeople, addPersonToStore, addPersonHolder } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups, addGroupToStore, addGroupHolder } from '../../../../app/redux/groupRedux/sam_groupSlice'
 
import { 
  selectKeywords,
  addKeywordHolder, 
  deleteKeywordHolder, 
  addKeywordToStore } from '../../../../app/redux/keywordRedux/sam_keywordSlice'
// --- Form component imports ---------
import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';



import { closeModal } from '../../../../app/redux/statusRedux/sam_statusSlice'
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------




 


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function TwoPartyChitForm_preview_s(props) {

  const dispatch = useDispatch()
  
  let match = useParams()
  let URLId = match.id

  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)
  const allKeywordsArray = useSelector(selectKeywords)
  const status = useSelector(selectStatus)
  let statusFormParameters = status.view.forms.twoPartyChitForm


  const {twoPartyChitId, otherPartyCollection, chitType, chitValue, chitBurden,chitDate, person, group, deedPerformedBy, workRelated, description, keyWordArray, otherPartyId} = statusFormParameters



  let otherPartyName 
  otherPartyCollection === 'person'? otherPartyName = person: otherPartyName = group
  let styledChitDate = ISOtoTraditional(chitDate)

 
 

  let whoPerformedDeed
  deedPerformedBy === 'otherParty' ? whoPerformedDeed = otherPartyName: whoPerformedDeed = 'me'

 


  let totalChitValue
  if (!chitBurden && !chitValue) {
    totalChitValue = 0
  } else {
    totalChitValue = parseInt(chitValue) + parseInt(chitBurden)
  }
  // choose chit color
  let chitColor = chooseTwoPartyChitColor(chitType, chitValue, chitBurden)


// --- keywords - strip whitespace and make lower case

  let passedKeyWordArray = keyWordArray
  let cleanKeywordArray =  []
  
  passedKeyWordArray.map((keyword, index) => {
    cleanKeywordArray.push(cleanOptions(keyword, 'keywords'))
  
  return cleanKeywordArray
  }
  ) //end map

 console.log('[ twoPartyChitForm_preview ] allKeywordsArray ', allKeywordsArray)
console.log('[ twoPartyChitForm_preview ] cleanKeywordArray ', cleanKeywordArray)

let keywordString = passedKeyWordArray.toString() // for display in preview





  // --- form Schema tests   ------------------------------

  // --- does newGroup already exist in people collection

  
  const formSchema = object({
  

    });

 
   let initialChitDate = new Date('2021-03-14T17:03:40.000Z')
    
 

// ----create default paramters if note exists ---------------------
let defaultValues, defaultKeywordOptions

!twoPartyChitId ? defaultKeywordOptions = []  : defaultKeywordOptions = statusFormParameters.keyWordArray




defaultValues = {
  chitDate: initialChitDate, 

  };

  // --- close / cancel form 
  const cancelNewForm = () => {

    dispatch(closeModal())
    // navigate(`/sample/twoPartyChits/allChits`)

    
  }
// ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });
  const { handleSubmit, reset, control, setValue, onChange, watch, ref , formState: { errors } } = methods;

  const submitForm = async (data, newGroupObject, newPersonObject, newGroup, newPerson) => {


    // const {otherPartyCollection, person, group, chitType, chitValue, chitBurden,chitDate,  deedPerformedBy, workRelated, description, keyWordArray, otherPartyId} 

    let modifiedChitDate = new Date(chitDate)
    let modifiedChitCreatedDate = new Date(chitDate)
    console.log('[ where ] BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB   GROUP ' , newPersonObject);
      console.log('[ OOOOOOOO - ChitColor ] person does NOT exist ', chitColor);

      // create new chit id 
      console.log('[Preview - before] twoPartyChitId ', twoPartyChitId);

      let newTwoPartyChitId 

      twoPartyChitId ? newTwoPartyChitId = twoPartyChitId : newTwoPartyChitId = cuid()
    
    



    try {

      // ====== IF NEW TWO PARTY CHIT (no otherPartyId) =======================   
      let dbCollection // convert group to groups... & person to people
      // --- add person if new ---------
      if (otherPartyCollection === 'person') {

        dbCollection = 'people'

        /*
          - clean person string
          - check if person exists in people collection
            - if yes 
               - get id of person
  
            - if no 
               - create person - return new personId
            - add new two party chit - return twoPartyChit id
            - update personId.personHolders with new twoPartyChitId        
                
        */

        // --- clean person string

        let cleanedPerson = stripWhiteSpace(person)

        // --- see if person exists already in people array
        let newPersonObject = allPeople.find((searchPerson) => searchPerson.name === cleanedPerson)

        // --- get id of existent person if exists set otherPartyId

        let newOtherPartyId
        if (newPersonObject) {
          newOtherPartyId = newPersonObject.id

        } // end if newPersonObject (person already exists)


        // --- person is new - so add new person to people collection
        //     then set otherPartyId

        if (!newPersonObject) {

          newOtherPartyId = cuid()
          dispatch(addPersonToStore({
            id: newOtherPartyId,
            name: person,

          }
          )) // end dispatach addPersonToStore


        } // end if person is new

        // --- create the new Chit data 

        let newTwoPartyChitData = {

          id: newTwoPartyChitId,
          description: description,
          keyWordArray: keyWordArray,
          chitDate: modifiedChitDate.toISOString(),
          dateCreated: modifiedChitCreatedDate.toISOString(),
          chitColor: chitColor,
          workRelated: workRelated,
          chitType: chitType,
          chitBurden: chitBurden,
          chitValue: chitValue,
          timeLock: '',
          otherPartyCollection: dbCollection,
          otherPartyId: newOtherPartyId

        }// end newPartyChitId

        // --- create the new chit and add it's Id to the person.personHolder
        //     in people collection


        if(!twoPartyChitId) {
        dispatch(addTwoPartyChitToStore(newTwoPartyChitData))
        dispatch(addPersonHolder(
          {
            id: newOtherPartyId,
            personHolder: newTwoPartyChitId,
            dbCollection: 'twoPartyChits'

          }
        )) // end dispatch addPersonHlder

      }else{
      
        dispatch(updateEditedTwoPartyChit({data: newTwoPartyChitData}))
      }

      } // end if otherPartyCollection === person


  // --- add group if new ---------
     if (otherPartyCollection === 'group') {

      console.log('[ !!!!!!!!!!!!!!!!!!! Two PartyChit Form Preview  ] otherPartyCollection ', otherPartyCollection);

      dbCollection = 'groups'

        /*
          - clean group string
          - check if group exists in people collection
            - if yes 
               - get id of group
  
            - if no 
               - create group - return new groupId
            - add new two party chit - return twoPartyChit id
            - update groupId.groupHolders with new twoPartyChitId        
                
        */

        // --- clean group string

        let cleanedGroup = stripWhiteSpace(group)
        
        console.log('[ !!!!!!!!!!!!!!!!!!! Two PartyChit Form Preview  ] cleanedGroup ', cleanedGroup);

        console.log('[ !!!!!!!!!!!!!!!!!!! Two PartyChit Form Preview  ] allGroups ', allGroups);


        // --- see if group exists already in groups array
        let newGroupObject = allGroups.find((searchGroup) => searchGroup.name === cleanedGroup)
   
        // --- get id of existent Group if exists set otherPartyId

        let newOtherPartyId
        if (newGroupObject) {
          newOtherPartyId = newGroupObject.id

        } // end if newGroupObject (Group already exists)


        // --- Group is new - so add new Group to people collection
        //     then set otherPartyId

        if (!newGroupObject) {

          newOtherPartyId = cuid()
          dispatch(addGroupToStore({
            id: newOtherPartyId,
            name: group,

          }
          )) // end dispatach addGroupToStore


        } // end if Group is new

        // --- create the new Chit data 

        let newTwoPartyChitData = {

          id: newTwoPartyChitId,
          chitType: chitType,
          chitBurden: chitBurden,
          chitValue: chitValue,
          chitColor: chitColor,
          dateCreated: modifiedChitCreatedDate.toISOString(),
          chitDate: modifiedChitDate.toISOString(),
          timeLock: '',
          otherPartyCollection: dbCollection,
          otherPartyId: newOtherPartyId,
          workRelated: workRelated,
          description: description,
          keyWordArray: [],
          


        }// end newPartyChitId

        // --- create the new chit and add it's Id to the group.groupHolder
        //     in people collection
if(!twoPartyChitId) {
        dispatch(addTwoPartyChitToStore(newTwoPartyChitData))
        dispatch(addGroupHolder(
          {
            id: newOtherPartyId,
            groupHolder: newTwoPartyChitId,
            dbCollection: 'twoPartyChits'

          }
        )) // end dispatch addGroupHlder


      }else{
       dispatch(updateEditedTwoPartyChit({data: newTwoPartyChitData}))
      }






     } // end if otherPartyCollection === group



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
            dbCollection: 'twoPartyChits',
            keywordHolder: newTwoPartyChitId

          }
          dispatch(addKeywordToStore(newKeywordData))

        } // end newKeywordData


        // --- keyword just new in form --- update keyword holders
        if (keywordExists) {
          let updatedKeywordData = {
            keywordId: keywordExists.id,
            keywordHolder: newTwoPartyChitId,
            dbCollection: 'twoPartyChits'

          }
          // console.log('[ NoteForm ] has Keyword Changed -yes ', hasKeywordChanged);


          
          dispatch(addKeywordHolder(updatedKeywordData))


        }// end if keywordExists 


      }  // end if arrayItemInludedInDefault


      // --- keyword missing from default - delete  

      if (arrayItemInludedInDefault) {  // then it was deleted in form

        // delete newTwoPartyChitId from keyword item

        let keywordHolderToBeDeleted = {
          keyword: item,
          keywordHolder: newTwoPartyChitId,
          // id: noteId
        }


        dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))




      }  // end if arrayItemInludedInDefault



    }) // end map kewwordArrayDifference


  } // end if kewwordArrayDifference --- 

//  ########################################### 




 // ====== IF Edit  TWO PARTY CHIT (otherPartyId exists) ======================= 
 
 
      //  ######################  update chitId




 // ====== IF Edit  TWO PARTY CHIT (otherPartyId exists) ======================= 
 
 

    dispatch(changeLoadingStatus(false))
    dispatch(closeModal())
    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  } // end async submit

  
 let noOtherParty
 if(!person &&  !group ){
  noOtherParty = 'no'
  
 }else{noOtherParty = 'yes'}
console.log('[ twoPartyChitForm -chit ] noOtherParty ', noOtherParty);

  
let noDate
if(!chitDate){
 noDate = 'no'
 
}else{noDate = 'yes'}
console.log('[ twoPartyChitForm -chit ] noDate ', noDate);


  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>

      {noOtherParty === 'no' &&
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">

            <div> No second party has been chosen by you yet. </div>
            <div> Click on "who" link above and choose the other party. </div>
          </Alert>

        </Stack>
      }

      {noDate === 'no' &&
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="warning">

            <div> No date has been chosen yet. </div>
            <div> Click on "when" link above and a date. </div>
          </Alert>

        </Stack>
      }

      

      {noOtherParty === 'yes' && noDate === 'yes' &&

        <FormProvider {...methods}>
          <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >
 {/* ------Submit ---------- -------------------------- */}
 <SubmitContainer>
              <StyledButton

                variant="contained"
                color="primary"
                style={{
                  textTransform: 'none',

                }}
                onClick={() => cancelNewForm()}

              >
                Cancel
              </StyledButton>

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Submit Form
              </StyledSubmitButton>

            </SubmitContainer>
            <MainWrapper>
              <FormSection>
                <FormLink> who </FormLink>
                <Line>
                  <LineTitle> other party type : </LineTitle>
                  <LineContent> {otherPartyCollection}</LineContent>
                </Line>

                <Line>
                  <LineTitle> name : </LineTitle>
                  <LineContent> {otherPartyName}</LineContent>
                </Line>
              </FormSection>

              <FormSection>
                <FormLink> when </FormLink>
                <Line>
                  <LineTitle> chit date : </LineTitle>
                  <LineContent> {styledChitDate} </LineContent>
                </Line>

              </FormSection>

              <FormSection>
                <FormLink> details </FormLink>


                <Line>
                  <LineTitle> description : </LineTitle>
                  <LineContentBlock dangerouslySetInnerHTML={{__html: description}}/>
                
                </Line>

                <Line>
                  <LineTitle> work related   : </LineTitle>
                  <LineContent> {workRelated} </LineContent>
                </Line>

                <Line>
                  <LineTitle> keywords : </LineTitle>
                  <LineContent> {keywordString}</LineContent>
                </Line>
              </FormSection>

              <FormSection>
                <FormLink> chit </FormLink>
                <Line>
                  <LineTitle> chit type  : </LineTitle>
                  <LineContent> {chitType} </LineContent>
                </Line>

                <Line>
                  <LineTitle> action performed by :  </LineTitle>
                  <LineContent> {whoPerformedDeed} </LineContent>
                </Line>

                <Line>
                  <LineTitle> chit value :  </LineTitle>
                  <LineContent> {chitValue} </LineContent>
                </Line>

                <Line>
                  <LineTitle> chit burden :  </LineTitle>
                  <LineContent> {chitBurden} </LineContent>
                </Line>

                <Line>
                  <LineTitle> karmic total :  </LineTitle>
                  <LineContent> {totalChitValue}</LineContent>
                </Line>

                <Line>
                  <LineTitle> chit color </LineTitle>
                  <LineContent> {chitColor} </LineContent>
                </Line>
              </FormSection>


            </MainWrapper>

            {/* ------Submit ---------- -------------------------- */}
            <SubmitContainer>
              <StyledButton

                variant="contained"
                color="primary"
                style={{
                  textTransform: 'none',

                }}
                onClick={() => cancelNewForm()}

              >
                Cancel
              </StyledButton>

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Submit Form
              </StyledSubmitButton>

            </SubmitContainer>
          </FormWrapper>

        </FormProvider>
      }
    </Wrapper>
  );
}

Yup.addMethod(Yup.string, 'customValidator', function() {
  return this.test({
    name: 'name',
    message: 'Input is not valid aaaaa',
    test: (score) => score !== 'red'


})
});
// ==== Styles ===========================================


const Wrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // zIndex: '95',

  width: '100%',
  // height: '400px',
   
// border: '2px solid #F285B5',
 

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

const FormSection= styled(Paper)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '95%',
  padding: '1.5rem 1rem 6px .5rem',
  marginBottom: '8px',
  // margin: '.25rem',
 
// backgroundColor: 'yellow',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})



const Line= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
  width: '100%',
  fontSize: '.8rem',



  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const LineTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '10rem',
  color: darkGrey,



  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const LineContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
  color: chitBlueDull,


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const LineContentBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  border: '1px solid grey',
 width: '70%',
  color: darkGrey,
padding: '4px',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const FormLink = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '.8rem',
  color: chitBurgandyDull,
  
  position: 'absolute',
  top: '6px',
  right: '10px',
  cursor: 'pointer',
 



  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
// #######################################


//  --- Buttons -----------
const SubmitContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '95%',
  margin: '.75rem',

  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})



const StyledButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 1.5rem 0 6px',
  width: '5rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})

const StyledSubmitButton= styled(Button)({
  backgroundColor: 'white',
  border: '1px solid #E6E7E8',
  color: chitBurgandyDull,
  margin: '0 8px',
  width: '8rem',
  height: '1.5rem',
  fontSize: '.8rem',
  '&:hover' :{
    backgroundColor: lightGrey
  }

})





 
// -----------------------------------






