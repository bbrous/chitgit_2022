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
import { chitBlueDull, chitBurgandyDull, darkGrey, lightGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors'

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
  updateTwoPartyViewData


} from '../../../../app/redux/statusRedux/sam_statusSlice'
 
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
import { closeModal } from '../../../../app/redux/statusRedux/sam_statusSlice'
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

export default function TwoPartyChitForm_who_s(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let match = useParams()
  const status = useSelector(selectStatus)
  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)
  const allLogHolders = useSelector(selectlogHolders)

  let URLId = match.id
// console.log('[ Log FROM ] URLId ', URLId);

  // --- form Schema tests   ------------------------------

  // --- does newPerson already exist in people collection

  const doesPersonExist = (inputValue) => {

    let peopleNamesArray = []
    allPeople.map((person, index) => {

      let cleanPerson = stripWhiteSpace(person.name).toLowerCase()
     
      peopleNamesArray.push(cleanPerson)
  
    return peopleNamesArray

    }) //end map

    let cleanInputValue = stripWhiteSpace(inputValue).toLowerCase()
   
    let personExists = doesArrayIncludeItem(cleanInputValue, peopleNamesArray)
    // returns true if exists ... schema test requires false to proceed
    // so return the opposite of person exists
   return !personExists
  
  
  }// end doePersonExist



  // --- does newGroup already exist in groups collection

  const doesGroupExist = (inputValue) => {

    let groupsNamesArray = []
    allGroups.map((group, index) => {

      let cleanGroup = stripWhiteSpace(group.name).toLowerCase()
      groupsNamesArray.push(cleanGroup)
  
    return groupsNamesArray

    }) //end map

    let cleanInputValue = stripWhiteSpace(inputValue).toLowerCase()

    let groupExists = doesArrayIncludeItem(cleanInputValue, groupsNamesArray)

  // returns true if exists ... schema test requires false to proceed
  // so return the opposite of group exists
   return !groupExists
  
  }// end doeGroupExist




  const formSchema = object({
    person: string().when(["otherPartyType", "newExisting"], {
      is: (otherPartyType, newExisting) => otherPartyType === 'person' && newExisting === 'existing',
      then: string().required('You must choose a person')
      .nullable()
    })
    .nullable(),
   
    group: string().when(["otherPartyType", "newExisting"], {
      is: (otherPartyType, newExisting) => otherPartyType === 'group' && newExisting === 'existing',
      then: string().required('You must choose a group')
      .nullable()
    })
    .nullable(),

  
    newPerson: string().when(["otherPartyType", "newExisting"], {
      is: (otherPartyType, newExisting) => otherPartyType === 'person' && newExisting === 'new',
      then: string().required('You must enter a new person')
  })
  .test('test-name', 'Person exists - create new name - or - check existing box above', 
  doesPersonExist
  ) ,
  
  newGroup: string().when(["otherPartyType", "newExisting"], {
    is: (otherPartyType, newExisting) => otherPartyType === 'group' && newExisting === 'new',
    then: string().required('You must enter a new group')
  })
  .test('test-name', 'Group exists - create new name - or - check existing box above', 
  doesGroupExist
  ) ,




    });

 
   
    
 


   


// create selector Options -----------------------------
  let groupsIdArray = []

  allLogHolders.map((log, index) => {
    groupsIdArray.push(log.id)

    return groupsIdArray
  }
  ) //end map


// -- create Options for  people select ----- 
  let peopleObjectArray = []
  let peopleOptionsArray = []

 
  
  let sortedFilteredPeople = descendSorter(allPeople, 'name')

  sortedFilteredPeople.map((person, index) => {
    peopleObjectArray.push(person.name)


    return peopleObjectArray
  }
  ) //end map

  // console.log('[ LogForm ] sortedFilteredPeople ', sortedFilteredPeople);

  sortedFilteredPeople.map((person, index) => {

    let personExists = groupsIdArray.includes(person.id)
  //   let personObject = person.name
    if (personExists) {
      // console.log('[ LOG SECTION FORM  ] Yes INCLUDED', person.id);




    }
    if (!personExists) {
      // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED',  person.id);
      peopleOptionsArray.push(person.name)

    }

    return peopleOptionsArray
  }
  ) //end map


  // -- create Options for  group select ----- 
  let groupsObjectArray = []
  let groupsOptionsArray = []

 
   let validGroups = allGroups.filter(item => item.type !== 'company' &&  item.type !== 'organization')

   

    //  console.log('[ Two Party Chit Form  ] NO NO NO - Not INCLUDED', x)

 
  let sortedFilteredGroups = descendSorter(validGroups, 'name')

  sortedFilteredGroups.map((group, index) => {
    groupsOptionsArray.push(group.name)


    return groupsOptionsArray
  }
  ) //end map

 

  // sortedFilteredGroups.map((group, index) => {

  //   let groupExists = groupsIdArray.includes(group.id)
  // //   let groupObject = group.name
  //   if (groupExists) {
  //     // console.log('[ LOG SECTION FORM  ] Yes INCLUDED', group.id);




  //   }
  //   if (!groupExists) {
  //     // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED',  group.id);
  //     groupsOptionsArray.push(group.name)

  //   }

  //   return groupsOptionsArray
  // }
  // ) //end map
  // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED', groupsOptionsArray)

 
// ----create default paramters if note exists ---------------------

let defaultValues, sectionId


// ##### Sample only  ###########
// logSectionId === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  


  defaultValues = {
  
    meta: '',
    otherPartyType: 'person',
    newExisting: 'existing',
    person: null,
    group: null,
    newPerson: '',
    newGroup: '',
    groupType: 'charity',
    keywords: [],
    people: [],
  

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

  const submitForm = async (data) => {

    const {otherPartyType, newExisting,  person, newPerson, 
                          group, newGroup, groupType} = data

    console.log('[twoPartyChitForm]...data ', data)
    console.log('[twoPartyChitForm]...otherPartyType ', otherPartyType)
 
    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))

    // --- create new logHolder ------------

    let newChitData = {}
    let newChitId


          // --- 1.  is otherPartyType a person -----

          if (otherPartyType === 'person') {

            // --- 1a.  does the person exist already ---
    
            if (newExisting === 'existing') {
    
              /* 1. clean the form input - strip whitespace
                 2. find the person in the peopleArray
                 3. create the object to add to logHolders collection
                 4. dispatch to store 
              */
              let newPerson = stripWhiteSpace(data.person)
              
              let newPersonObject= allPeople.find( ( searchPerson ) => searchPerson.name === newPerson )
    
              newChitData = {id: newPersonObject.id, collection: 'people'}
              newChitId = newPersonObject.id



              dispatch(updateTwoPartyViewData( 
                {pageType: 'twoPartyChitForm'   , 
                page: 'who'   , 
                data: newChitData
              } 
              )) // end dispatch
    
            } // end person and existing

 // --- 1b  is it a new person ------------------
            if (newExisting === 'new') {

            /* 1. clean the form input - strip whitespace
             2. create new person Id in sample
                x - add newPerson to people collection in database
                x- get new person's Id back
             3. create the object to add to logHolders collection
             4. dispatch to store 
          */
             let newPersonId = cuid()
             let cleanedNewPerson = stripWhiteSpace(data.newPerson)
             let newPersonObject  = {
               id: newPersonId,
               type: 'person',
               name: cleanedNewPerson,
               meta: '',
               peopleHolders: [
                 {
                   id: newPersonId,
                   dbCollection: 'twoPartyChits'}
               ]
             }
             
             dispatch(addPersonToStore(newPersonObject))
             newChitData = {id: newPersonObject.id, collection: 'people'}

              dispatch(updateTwoPartyViewData(
                {
                  pageType: 'twoPartyChitForm',
                  page: 'who',
                  data: newChitData
                }
              )) // end dispatch

            } // person && new

          } // otherPartyType = person


          if (otherPartyType === 'group') {

            if (newExisting === 'existing') {

              /* 1. clean the form input - strip whitespace
                 2. find the group in the groupsArray
                 3. create the object to add to logHolders collection
                 4. dispatch to store 
              */

                 let newGroup = stripWhiteSpace(data.group)
            
                 let newGroupObject= allGroups.find( ( searchGroup ) => searchGroup.name === newGroup )

                 newChitData = {id: newGroupObject.id, collection: 'groups'}

                 dispatch(updateTwoPartyViewData(
                  {
                    pageType: 'twoPartyChitForm',
                    page: 'who',
                    data: newChitData
                  }
                )) // end dispatch


            }// end if newExisting === existing


          // --- 1b  is it a new group 
          if (newExisting === 'new') {

              /* 1. clean the form input - strip whitespace
               2. create new person Id in sample
                  x - add newPerson to people collection in database
                  x- get new person's Id back
               3. create the object to add to logHolders collection
               4. dispatch to store 
            */


               let newGroupId = cuid()
               let cleanedNewGroup = stripWhiteSpace(data.newGroup)
               let newGroupObject  = {
                 id: newGroupId,
                 type: 'data.groupType',
                 name: cleanedNewGroup,
                 meta: data.meta,
                 groupHolders: [
                   {
                     id: newGroupId,
                     dbCollection: 'twoPartyChits'}
                 ]
               }

               dispatch(addGroupToStore(newGroupObject))



               newChitData = {id: newGroupObject.id, collection: 'groups'}

               dispatch(updateTwoPartyViewData(
                {
                  pageType: 'twoPartyChitForm',
                  page: 'who',
                  data: newChitData
                }
              )) // end dispatch


            }// end if newExisting === new






          }// end otherPartyType = 'group

          dispatch(changeLoadingStatus(false))


    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  } // end async submit

   

  const showOtherPartyTypeInput = watch('otherPartyType')
  const showNewExisting = watch('newExisting')

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>



      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <MainWrapper>

            <FormComponentWrapper>
              <ComponentName>
                Who is the other party ?
              </ComponentName>

              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
                    name={"otherPartyType"}
                    control={control}
                    label={"otherPartyType"}
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
                    label={"otherPartyType"}
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

            
{showNewExisting === 'existing' && <>  


            <FormComponentWrapperDoubleIndent>


              <ComponentWrapper>
        
        
              <SelectWrapper>
                {showOtherPartyTypeInput === 'person' && 
                <>
                
                  <ChronicleSelectMui
                    name={'person'}
                    control={control}
                    options = {peopleOptionsArray}
                    // or
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.person}
                    placeholder='select a person'

                  />

                  {errors.person && <ErrorMessage>{ errors.person.message} </ErrorMessage>} 




                </>
                }


                {showOtherPartyTypeInput === 'group' &&
                  <>
                
                  <ChronicleSelectMui
                    name={'group'}
                    control={control}
                    options = {groupsOptionsArray}
                    // or
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.categories}
                    placeholder='select a group'

                  />

                  {errors.group && <ErrorMessage>{ errors.group.message} </ErrorMessage>}




                </>
                }
              </SelectWrapper>





              </ComponentWrapper>
            </FormComponentWrapperDoubleIndent>
            </>}




    {showNewExisting === 'new' &&

    <NewWrapper>
      


          <CreateNewWrapper>
            {showOtherPartyTypeInput === 'person' &&
              <NewWrapper>



               


                 


                    <NewInputContainer>


<ChronicleInput
                name={"newPerson"}
                control={control}
                label={"newPerson"}
                defaultValue= {''}
                placeholder = ' Add new person name'
                 
                 
              />

                    </NewInputContainer>
               
                    




                





              </NewWrapper>
            }

{/* ############################################################# */}
{showOtherPartyTypeInput === 'group' &&
              <NewWrapper>



              
                  


              <NewInputContainer>


                  <ChronicleInput
                    name={"newGroup"}
                    control={control}
                    label={"newGroup"}
                    defaultValue={''}
                    placeholder=' Add new group name'


                  />

                </NewInputContainer>


                <NewSelectContainer>


                  <ChronicleSelectMui
                    name={'groupType'}
                    control={control}
                    options={[
                      // 'agency',
                      'charity',
                      'church',
                      'club',
                      // 'company',
                      // 'firm',
                      'group',
                      'organization',
                      'other'
                    ]}
                    // or
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.groupType}
                    placeholder='choose a group type'

                  />

                </NewSelectContainer>
                <NewMetaContainer>
                <Controller

name="meta"
control={control}
initialNote={'hi quill description'}

render={({ field }) => (
  <EditorShort
    {...field}
    ref={null}
    IniitalValue={defaultValues.noteContent} 
    placeholder = {'add general group info - phone, address, etc'}
    
    />
)}

/>
                </NewMetaContainer>
                





                





              </NewWrapper>
            }
  </CreateNewWrapper>







</NewWrapper>

}















           

          </MainWrapper>

          {/* ------Submit ---------- -------------------------- */}
          <BottomWrapper>
            <StyledButton

              variant="contained"
              color="primary"
              style={{ 
                textTransform: 'none' ,

            }}
              onClick={() => cancelNewForm()}
 
            >
              Cancel
            </StyledButton>

            <ButtonWrapper>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Next
              </StyledButton>



              
            </ButtonWrapper>


          </BottomWrapper>
        </FormWrapper>

      </FormProvider>

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
  height: '100%',
  overflow: 'auto',
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

const NewInputContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '13rem',
  marginLeft: '9px',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const NewMetaContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '20rem',
  marginLeft: '9px',
  border: '1px solid grey',
  broderRadius: '5px',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const NewSelectContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '15.5rem',
 
 
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







const CreateNewWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 
 
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const NewWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '80%',
 
 
 
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
const BottomWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '95%',
  margin: '.75rem',

  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   

  
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




 
// -----------------------------------






