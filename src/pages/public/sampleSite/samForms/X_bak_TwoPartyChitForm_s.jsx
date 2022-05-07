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
import { chitBurgandy, darkGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors'
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

import { chooseTwoPartyChitCoin } from '../../../../app/helpers/chitHelpers';
 

// --- form components ---------------

import { StyledSliderMui } from '../../../../forms/formComponents/StyledSliderMui';

import { StyledChronicleMultiselect } from '../../../../forms/formComponents/StyledChronicleMultiselect';

import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import {Editor} from '../../../../forms/formComponents/QuillEditor';

import { ChronicleInput } from '../../../../forms/formComponents/ChronicleInput'
import { ChronicleSelectMui } from '../../../../forms/formComponents/ChronicleSelectMui'

 import { EditorShort } from '../../../../forms/formComponents/ChronicleEditorShort'
import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'



// --- imports to create options for selectors

import { 
  selectlogHolders,
  addLogHolderToStore
} from '../../../../app/redux/logHolderRedux/sam_logHolderSlice'

import { selectPeople, addPersonToStore } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups, addGroupToStore } from '../../../../app/redux/groupRedux/sam_groupSlice'
 

 


import { descendSorter, stripWhiteSpace } from '../../../../app/helpers/commonHelpers'

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
 

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------




 


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function TwoPartyChitForm_s(props) {
  let match = useParams()
  const dispatch = useDispatch()
  const allPeople = useSelector(selectPeople)

  const popoverMessage = () => {
    return <div>  

      <div>Come and get it</div>
      <div>Come and get it</div>
    </div>
  }

  let URLId = match.id


// --- popovers ---

const [anchorEl, setAnchorEl] = React.useState(null);

const handlePopoverOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handlePopoverClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);

// let coinAddress = chooseTwoPartyChitCoin(chitType, chitColor)
let coinAddress = chooseTwoPartyChitCoin('standard', 'silver')
const pathToCoinImages = '../../../'
const coinDisplayed = pathToCoinImages + coinAddress


  let defaultValues, sectionId
 

  defaultValues = {
    person: '',
    newPerson: '', 
    newExisting: 'existing',
    chitType: 'done',
    deedPerformedBy: '', 
    description: '', 
    chitDate: '', 
    chitValue: 10, 
    chitBurden: 10,
    workRelated: 'notWorkRelated', 
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
    console.log('[LogSectionForm]...logType ', typeof data.chitValue)
 
   
  } // end  submit

  const totalChitValue = watch("chitValue");
  const burden = watch('chitBurden')
  const promise = watch('chitType')
  let myColor

  if( totalChitValue < 25 ) { myColor = 'copper' } 
  if (totalChitValue > 24 && totalChitValue < 60 ) { myColor = 'silver' } 
  if (totalChitValue > 59 ){ myColor= 'gold' }


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

sortedFilteredPeople.map((person, index) => {
 
    // console.log('[ LOG SECTION FORM  ] NO NO NO - Not INCLUDED',  person.id);
    peopleOptionsArray.push(person.name)

 

  return peopleOptionsArray
}
) //end map


  const when = watch('chitType')
  const showLogTypeInput = watch('logType')
  const showNewExisting = watch('newExisting')
                      // #############  TEMP ##############
                      let sortedCategoryOptions = ['red', 'blue','green']
                      // let peopleOptionsArray = ['Bob', 'Carol', 'Ted', 'Alice']
                      let keywordsOptionsArray = ['ideas', 'work']
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
                        label: "new person",
                        value: "new",
                      },

                    ]}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>
           
            {showNewExisting === 'existing' && 
  

              <ComponentWrapper>
                
                <ChronicleSelectMui
                    name={'person'}
                    control={control}
                    options = {peopleOptionsArray}
                    disabled='disabled'
                    defaultValue={defaultValues.person}
                    placeholder='select a person'

                  />

                  {/* {errors.person && <ErrorMessage>{ errors.person.message} </ErrorMessage>}  */}


              </ComponentWrapper>
       
} 

{showNewExisting === 'new' &&


<ComponentWrapper>
  
<NewInputContainer>


<ChronicleInput
                name={"newPerson"}
                control={control}
                label={"newPerson"}
                defaultValue= {''}
                placeholder = ' Add new person name'
                 
                 
              />

                    </NewInputContainer>
    {/* {errors.person && <ErrorMessage>{ errors.person.message} </ErrorMessage>}  */}


</ComponentWrapper>


}

</FormComponentWrapper>

            {/* ------DeedPerformed by ------------- */}

            <FormComponentWrapper>
              <ComponentName>
                 Choose a chit type 
            
        
                <Question  
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                
                />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          {popoverMessage()}
          
          
          </Typography>
      </Popover>
              </ComponentName>


              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
                    name={"chitType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "standard",
                        value: "standard",
                      },
                      {
                        label: "promise",
                        value: "promise",
                      },

                      {
                        label: "good will",
                        value: "good will",
                      },

                    ]}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>
            </FormComponentWrapper>
            {/* ------When  -------------------------- */}



            {/* ------DeedPerformed by ------------- */}

            <FormComponentWrapper>
              <ComponentName>
                {when === 'done' && 
                <>
                Who performed the action ?
                </>
                }
                {when === 'promised' && 
                <>
                Who will perform the action ?
                </>
                }
                
              </ComponentName>


              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
                    name={"deedPerformedBy"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "me",
                        value: "me",
                      },
                      {
                        label: "other party",
                        value: "otherParty",
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
                <QuillWrapper>

               
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

</QuillWrapper>
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

            {/* ------Chit Value -------------------------- */}


            <FormComponentWrapper>
              <ComponentName>
                How valuable was this action to you - {myColor}
              </ComponentName>

              <SliderComponentWrapper>
                <StyledSliderMui 
                name="chitValue" 
                control={control} 
                label="Chit Value" 
                type="text" 
                defaultValue = {defaultValues.chitValue}
                />
<div> Life changing </div>
              </SliderComponentWrapper> 
            </FormComponentWrapper>

                        {/* ------Chit Value -------------------------- */}


                        <FormComponentWrapper>
              <ComponentName>
                How much of a burden or imposition was this action to Mark B - {myColor}
              </ComponentName>

              <SliderComponentWrapper>
                <StyledSliderMui 
                name="chitBurden" 
                control={control} 
                label="Chit Burden" 
                type="text" 
                defaultValue = {defaultValues.chitBurden}
                />
<div>huge</div>
              </SliderComponentWrapper>
            </FormComponentWrapper>
            {/* ------Work related -------------------------- */}

            <FormComponentWrapper>
              <ComponentName>
                Is this chit work related ?
              </ComponentName>

              
              <ComponentWrapper>
                <RadiotWrapper>
                  <ChronicleRadio
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
                    defaultValue = {defaultValues.workRelated}
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
              <StyledChronicleMultiselect
                    name={'keywords'}
                    control={control}
                    options={keywordsOptionsArray}
                    placeholder='select or type keywords'
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.keywords}


                  />


              </ComponentWrapper>
            </FormComponentWrapper>

          </>

          {/* ------Submit ---------- -------------------------- */}
          <BottomWrapper> 

            <ChitWrapper>
              <Preview>preview</Preview>
              <ChitInnerWrapper>

              
              <Chit>
              <StyledImage src={coinDisplayed} alt="coin" />



              </Chit>
              <ChitTitle> owed to Brad</ChitTitle>

              </ChitInnerWrapper>

              <Preview>kindness chit</Preview>
            </ChitWrapper>
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

          </BottomWrapper>
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
backgroundColor: 'white',

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
  color: chitBurgandy,
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
  width: '95%',



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
  borderBottom: '4px solid lightgrey',

 
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
// border: '1px solid grey',
borderRadius: '5px',
// backgroundColor: 'white',
 padding: '10px',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})

const QuillWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '95%',
  height: '95%',
border: '1px solid grey',
borderRadius: '5px',
backgroundColor: 'white',
 padding: '2px',
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
const BottomWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
 
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
const ButtonWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  

  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ChitWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '48%',
  paddingLeft: 's%',
 
 
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const Preview= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  fontSize: '.8rem',
  color: 'grey',
  backgroundColor: 'white',
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})
const ChitInnerWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 width: '100%',
 
 
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})


const Chit= styled('div')({
  width: '3rem',
  height: '3rem',
 
  
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ChitTitle= styled('div')({
  width: '70%',
   
  fontSize: '.8rem',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const StyledImage = styled('img')({

 
  display: 'flex',
 
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '2.5rem',
  height: '2.5rem',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const StyledButton= styled(Button)({
  color: 'white',
  margin: '0 8px'
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



const Question = styled(HelpOutlineIcon)({
 
  color: mediumGrey , 
  fontSize: '1.1rem',
  marginLeft: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

