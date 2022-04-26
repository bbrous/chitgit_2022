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
 
// --- imports to create options for selectors

import { 
  selectlogHolders,
  addLogHolderToStore
} from '../../../../app/redux/logHolderRedux/sam_logHolderSlice'

import { selectPeople } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups } from '../../../../app/redux/groupRedux/sam_groupSlice'
 

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

export default function LogForm_s(props) {

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
    person: string().when(["logType", "newExisting"], {
      is: (logType, newExisting) => logType === 'person' && newExisting === 'existing',
      then: string().required('You must choose a person')
      .nullable()
    })
    .nullable(),
   
    group: string().when(["logType", "newExisting"], {
      is: (logType, newExisting) => logType === 'group' && newExisting === 'existing',
      then: string().required('You must choose a group')
      .nullable()
    })
    .nullable(),

  
    newPerson: string().when(["logType", "newExisting"], {
      is: (logType, newExisting) => logType === 'person' && newExisting === 'new',
      then: string().required('You must enter a new person')
  })
  .test('test-name', 'Person exists - create new name - or - check existing box above', 
  doesPersonExist
  ) ,
  
  newGroup: string().when(["logType", "newExisting"], {
    is: (logType, newExisting) => logType === 'group' && newExisting === 'new',
    then: string().required('You must enter a new group')
  })
  .test('test-name', 'Group exists - create new name - or - check existing box above', 
  doesGroupExist
  ) ,




    });

 
   
    
 


   


// create selector Options -----------------------------
  let logsIdArray = []

  allLogHolders.map((log, index) => {
    logsIdArray.push(log.id)

    return logsIdArray
  }
  ) //end map


// -- create Options for  people select ----- 
  let peopleObjectArray = []
  let peopleOptionsArray = []

  // -- get rid of "unknown" from all people
  let filteredPeople = allPeople.filter(item => item.id !== 'unknown')
  
  let sortedFilteredPeople = descendSorter(filteredPeople, 'name')

  sortedFilteredPeople.map((person, index) => {
    peopleObjectArray.push(person.name)


    return peopleObjectArray
  }
  ) //end map

  // console.log('[ LogForm ] sortedFilteredPeople ', sortedFilteredPeople);

  sortedFilteredPeople.map((person, index) => {

    let personExists = logsIdArray.includes(person.id)
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
  // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED', peopleOptionsArray)


  // -- create Options for  group select ----- 
  let groupsObjectArray = []
  let groupsOptionsArray = []

  // -- get rid of "unknown" from all people
  let filteredGroups = allGroups.filter(item => item.id !== 'unknown')
   
  
  let sortedFilteredGroups = descendSorter(filteredGroups, 'name')

  sortedFilteredGroups.map((group, index) => {
    groupsObjectArray.push(group.name)


    return groupsObjectArray
  }
  ) //end map

  // console.log('[ LogForm ] sortedFilteredGroups ', sortedFilteredGroups);

  sortedFilteredGroups.map((group, index) => {

    let groupExists = logsIdArray.includes(group.id)
  //   let groupObject = group.name
    if (groupExists) {
      // console.log('[ LOG SECTION FORM  ] Yes INCLUDED', group.id);




    }
    if (!groupExists) {
      // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED',  group.id);
      groupsOptionsArray.push(group.name)

    }

    return groupsOptionsArray
  }
  ) //end map
  // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED', groupsOptionsArray)

 
// ----create default paramters if note exists ---------------------

let defaultValues, sectionId


// ##### Sample only  ###########
// logSectionId === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  


  defaultValues = {
  
    meta: '',
    logType: 'person',
    newExisting: 'existing',
    person: null,
    group: null,
    newPerson: '',
    newGroup: '',
    groupType: 'other',
    keywords: [],
    people: [],
  

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

  const submitForm = async (data) => {

    const {logType, newExisting,  person, newPerson, 
                          group, newGroup, groupType} = data

    console.log('[LogSectionForm]...data ', data)
    console.log('[LogSectionForm]...logType ', logType)
 
    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))
      // --- create new logHolder ------------
  
        let newLogHolderData = {}

        // --- 1.  is logType a person -----

        if (logType === 'person') {

          // --- 1a.  does the person exist already ---

          if (newExisting === 'existing') {

            /* 1. clean the form input - strip whitespace
               2. find the person in the peopleArray
               3. create the object to add to logHolders collection
               4. dispatch to store 
            */
            let newPerson = stripWhiteSpace(data.person)
            
            let newPersonObject= allPeople.find( ( searchPerson ) => searchPerson.name === newPerson )

            newLogHolderData = {id: newPersonObject.id, collection: 'people'}

            dispatch(addLogHolderToStore(newLogHolderData))

          } // end person and existing

          // --- 1b  is it a new person ------------------

          if (newExisting === 'new') {




console.log('[ Log FORM ] newExisting  Person is new', newExisting);


      



          } // person && new



        } // logType = person


       
        if (logType === 'group') {

          // --- 1a.  does the group exist already 
          if (newExisting === 'existing') {

            /* 1. clean the form input - strip whitespace
               2. find the group in the groupsArray
               3. create the object to add to logHolders collection
               4. dispatch to store 
            */
               let newGroup = stripWhiteSpace(data.group)
            
               let newGroupObject= allGroups.find( ( searchGroup ) => searchGroup.name === newGroup )
   
               newLogHolderData = {id: newGroupObject.id, collection: 'groups'}
   
               dispatch(addLogHolderToStore(newLogHolderData))


          }// end group and existing

          // --- 1b  is it a new group 
          if (newExisting === 'new') {



      console.log('[ Log FORM ] newExisting  group is new', newExisting);



          } // end group && new



        } // end logType = group



        dispatch(changeLoadingStatus(false))
        reset()

        dispatch(closeLogSectionForm())
        reset(defaultValues)

 


    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  } // end async submit

   

  const showLogTypeInput = watch('logType')
  const showNewExisting = watch('newExisting')

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>



      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <MainWrapper>

            <FormComponentWrapper>
              <ComponentName>
                Choose or create a name for your log.
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

            
{showNewExisting === 'existing' && <>  


            <FormComponentWrapperDoubleIndent>


              <ComponentWrapper>
        
        
              <SelectWrapper>
                {showLogTypeInput === 'person' && 
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


                {showLogTypeInput === 'group' &&
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
            {showLogTypeInput === 'person' &&
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
{showLogTypeInput === 'group' &&
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
                      'agency',
                      'charity',
                      'church',
                      'club',
                      'company',
                      'firm',
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
    placeholder = {'add general log info - phone, address, etc'}
    
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






