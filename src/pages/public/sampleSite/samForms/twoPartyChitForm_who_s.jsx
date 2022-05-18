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


import { StyledChitSelectMuiCreatable } from '../../../../forms/formComponents/StyledChitSelectMuiCreatable'

import { ChitRadio } from '../../../../forms/formComponents/ChitRadio'

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
  let id = props.id

  const status = useSelector(selectStatus)
  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)
  const allLogHolders = useSelector(selectlogHolders)

  let statusFormParameters = status.view.forms.twoPartyChitForm


  console.log('[ twoPartyChitForm - Who ] statusFormParameters ', statusFormParameters)
  const { twoPartyChitId, otherPartyId, person, group, otherPartyCollection } = statusFormParameters

  console.log('[ twoPartyChitForm - Who  ] person ', person);



  let newUpdate
  otherPartyId ? newUpdate = 'update' : newUpdate = 'new'

  let otherPartyType
  !otherPartyCollection ? otherPartyType = 'person' : otherPartyType = otherPartyCollection


  let statusFormViewPerson
  !person ? statusFormViewPerson = '' : statusFormViewPerson = person

  let statusFormViewGroup
  !group ? statusFormViewGroup = '' : statusFormViewGroup = group


  const formSchema = object({
    person: string().when(["otherPartyType" ], {
      is: (otherPartyType) => otherPartyType === 'person' ,
      then: string().required('You must choose a person')
      .nullable()
    })
    .nullable(),
   
    group: string().when(["otherPartyType" ], {
      is: (otherPartyType) => otherPartyType === 'group' ,
      then: string().required('You must choose a group')
      .nullable()
    })
    .nullable(),





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

 
 
 

// ----create default paramters if note exists ---------------------

let defaultValues
  defaultValues = {

    otherPartyType: otherPartyType,
    person: statusFormViewPerson,
    group: statusFormViewGroup,

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

    const {otherPartyType,   person, 
                          group  } = data

    console.log('[twoPartyChitForm]...data ', data)

 
    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))

    // --- create new logHolder ------------

    let newChitData = {}
 
             newChitData = {
            
              otherPartyType: otherPartyType, 
              person: person ,
              group: group
              }

              dispatch(updateTwoPartyViewData(
                {
                  pageType: 'twoPartyChitForm',
                  page: 'who',
                  data: newChitData
                }
              )) // end dispatch


          dispatch(changeLoadingStatus(false))


    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  } // end async submit

   

  const showOtherPartyTypeInput = watch('otherPartyType')
 

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>

      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >
{!twoPartyChitId && 
          <MainWrapper>

            <FormComponentWrapper>
              <ComponentName>
                Who is the other party ?
              </ComponentName>

              <ComponentWrapper>
                <RadiotWrapper>
                  <ChitRadio
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


            <FormComponentWrapperDoubleIndent>


              <ComponentWrapper>


                <SelectWrapper>
                  {showOtherPartyTypeInput === 'person' &&
                    <>

                      <StyledChitSelectMuiCreatable
                        name={'person'}
                        control={control}
                        options={peopleOptionsArray}
                        // defaultValue = {{ value: 'ge423', label: 'home'}}
                        defaultValue={defaultValues.person}
                        placeholder='select a person... or type in a new person'


                      />
                      {errors.person && <ErrorMessage>{errors.person.message} </ErrorMessage>}

                    </>
                  }


                  {showOtherPartyTypeInput === 'group' &&
                    <>

                      <StyledChitSelectMuiCreatable
                        name={'group'}
                        control={control}
                        options={groupsOptionsArray}
                        // defaultValue = {{ value: 'ge423', label: 'home'}}
                        defaultValue={defaultValues.group}
                        placeholder='select a group... or type in a new group'


                      />

                      {errors.group && <ErrorMessage>{errors.group.message} </ErrorMessage>}




                    </>
                  }
                </SelectWrapper>





              </ComponentWrapper>
            </FormComponentWrapperDoubleIndent>



          </MainWrapper>
        }
{/* end !twoPartyCHitId &&  */}

      {twoPartyChitId && 
        <MainWrapper>
          {person && 
        <EditNameWrapper>  <span>   otherParty: </span> {person} </EditNameWrapper>
        }

        {group && 
        <EditNameWrapper> <span>   otherParty: </span>{group} </EditNameWrapper>
        }
        </MainWrapper>
      }
{/* end twoPartyCHitId &&  */}

          {/* ------Submit ---------- -------------------------- */}
          <BottomWrapper>
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
  width: '80%',
 
 
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
  justifyContent: 'flex-end',
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


const EditNameWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: darkGrey,
  fontSize: '.9rem',
  marginLeft: '12px',

  '& span' :{
    color: chitBurgandy,
    marginRight: '.5rem',
    fontSize: '.85rem'
  },

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

 
// -----------------------------------






