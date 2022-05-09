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

import { chooseTwoPartyChitCoin } from '../../../../app/helpers/chitHelpers';


import { selectPeople, addPersonToStore } from '../../../../app/redux/peopleRedux/sam_peopleSlice'
import { selectGroups, addGroupToStore } from '../../../../app/redux/groupRedux/sam_groupSlice'
 

// --- form components ---------------

import { StyledSliderMui } from '../../../../forms/formComponents/StyledSliderMui';
import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'
import { ChronicleSelectMui } from '../../../../forms/formComponents/ChronicleSelectMui'



import { closeModal } from '../../../../app/redux/statusRedux/sam_statusSlice'
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------




 


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function TwoPartyChitForm_chit_s(props) {

  const dispatch = useDispatch()
 
  let match = useParams()
  const status = useSelector(selectStatus)
  const allPeople = useSelector(selectPeople)
  const allGroups = useSelector(selectGroups)

  let otherPartyId = status.view.forms.twoPartyChitForm.otherPartyId
  let otherPartyCollection = status.view.forms.twoPartyChitForm.otherPartyCollection
  console.log('[ TwoPartyChitForm - CHIT ] otherPartyId ', otherPartyId);
  console.log('[ TwoPartyChitForm - CHIT ] otherPartyCollection ', otherPartyCollection);



  let URLId = match.id
// console.log('[ Log FROM ] URLId ', URLId);

// --- popovers ---

const [anchorEl, setAnchorEl] = React.useState(null);

const handlePopoverOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handlePopoverClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);

const popoverMessage = () => {
  return <div>  

    <div>Come and get it</div>
    <div>Come and get it</div>
  </div>
}

  
  //--- get Name to be displayed  ---
  let nameDisplayed, personObject, groupObject

  if(otherPartyCollection === 'people'){
    personObject = allPeople.find(person => person.id === otherPartyId)

    nameDisplayed = personObject.name
  }


 
  if(otherPartyCollection === 'groups'){
  groupObject = allGroups.find(group => group.id === otherPartyId)
 
  nameDisplayed = groupObject.name
}


  // --- set up IOU arrow color and message ---
  let  youOwe 
  
  // otherPartyId === deedPerformedBy? youOwe = true: youOwe = false



  // --- form Schema tests   ------------------------------

  // --- does newPerson already exist in people collection

  
  const formSchema = object({
  

    });

 

    
 

// ----create default paramters if note exists ---------------------

let defaultValues = {
  // chitDate: initialChitDate, 
  chitValue: 0,
  burden: 0,
  chitType: 'standard'

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

  const when = watch('deedPerformedBy')
  const type = watch('chitType')
  const submitForm = async (data) => {

    const {otherPartyType, newExisting,  person, newPerson, 
                          group, newGroup, groupType, chitDate} = data
                          console.log('[LogSectionForm]...data ', data)
   try{

    let newChitData = {}
    let newChitId

    newChitData = {
      chitDate: chitDate.toISOString(),
    }

    dispatch(updateTwoPartyViewData( 
      {pageType: 'twoPartyChitForm'   , 
      page: 'when'   , 
      data: newChitData
    } 
    )) // end dispatch

    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  } // end async submit

  const chitValue = watch("chitValue");
  const burden = watch('chitBurden')
  const promise = watch('chitType')

 
  
 

  console.log('[ twoPartyChitForm -- CHIT ] chitValue ',  chitValue);
console.log('[ twoPartyChitForm -- CHIT ] chitBurden ',  burden);

  let chitColor,  totalChitValue
  if(!burden && !chitValue) {
    totalChitValue = 0
  }else{
  totalChitValue = parseInt(chitValue) + parseInt(burden)
}
  console.log('[ twoPartyChitForm -- CHIT ] chitValue ',  chitValue);
  console.log('[ twoPartyChitForm -- CHIT ] burden ',  burden);
  console.log('[ twoPartyChitForm -- CHIT ] totalChitValue ',  totalChitValue);
  
  if( totalChitValue < 25 ) { chitColor = 'copper' } 
  else if (totalChitValue > 24 && totalChitValue < 55 ) { chitColor = 'silver' } 
  else if (totalChitValue > 54 ){ chitColor= 'gold' }
  else{chitColor = 'copper'}

  const showOtherPartyTypeInput = watch('otherPartyType')
  const showNewExisting = watch('newExisting')

  //  --- define which coin is displayed

  //  ### TEMP 
 
  let chitType = 'standard'

  let coinAddress = chooseTwoPartyChitCoin(chitType, chitColor)
 
  const pathToCoinImages = '../../../'
  const coinDisplayed = pathToCoinImages + coinAddress

  let chitDescription
  type ==='kindness'? chitDescription = 'good will': chitDescription = type


  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>

{!otherPartyId &&
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">

              <div> No second party has been chosen by you yet. </div>
              <div> Click on "who" link above and choose the other party. </div>
            </Alert>

          </Stack>
        }
{otherPartyId &&
      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <MainWrapper>

        {/* --- warning that no other party was chosen --- */}

 



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
                    defaultValue = {defaultValues.chitType}
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








      {/* ------Chit Value -------------------------- */}


      <FormComponentWrapper>
              <ComponentName>
                How valuable was this action to you - {chitColor}
              </ComponentName>

              <SliderComponentWrapper>
                <StyledSliderMui 
                name="chitValue" 
                control={control} 
                label="Chit Value" 
                type="text" 
                defaultValue = {defaultValues.chitValue}
                />
<div> Huge value </div>
              </SliderComponentWrapper> 
            </FormComponentWrapper>

                        {/* ------Chit Value -------------------------- */}


                        <FormComponentWrapper>
              <ComponentName>
                How much of a burden or imposition was this action to Mark B - {chitColor}
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

<PreviewContainer>
  <div> preview</div>

<PreviewWrapper>



              <ChitContainer>

          <StyledImage src={coinDisplayed} alt="coin" />
          <ChitTypeWrapper> {chitDescription} </ChitTypeWrapper>

            
          </ChitContainer>
          <div>
<div>You owe Mike</div>
<div>karmic value = {totalChitValue}</div>
</div>
          </PreviewWrapper>
          </PreviewContainer>
           

          </MainWrapper>

          {/* ------Submit ---------- -------------------------- */}
          {/* ----Disabled if no other party selected warnint -- */}
 
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
 

const Question = styled(HelpOutlineIcon)({
 
  color: mediumGrey , 
  fontSize: '1.1rem',
  marginLeft: '1.5rem',
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
const PreviewWrapper = styled('div')({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
 
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const PreviewContainer = styled(Paper)({
 
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
 
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})


const StyledImage = styled('img')({

 
  display: 'flex',
 
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
  width: '3.5rem',
  height: '3.5rem',
   
 




  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitContainer = styled('div')({

  // backgroundColor: 'red',
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4.5rem',
  height: '4.5rem'
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

const ChitTypeWrapper = styled('div')({

  // backgroundColor: 'red',
  fontSize: '.65rem',
  color: mediumGrey
  


  //   [theme.breakpoints.down('sm')] : {
  //     // width: '100%'
  //   },

})

// -----------------------------------






