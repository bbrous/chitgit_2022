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

      import { ISOtoTraditional } from '../../../../app/helpers/dateHelper'

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
  const status = useSelector(selectStatus)
  let formParameters = status.view.forms.twoPartyChitForm

  console.log('[ Here there Preview ] formParameters ', formParameters);
  const {otherPartyCollection, chitType, chitValue, chitBurden,chitDate, person, group, deedPerformedBy, workRelated, description, keywordArray} = formParameters

  
  let otherPartyName 
  otherPartyCollection === 'person'? otherPartyName = person: otherPartyName = group
  let styledChitDate = ISOtoTraditional(chitDate)

  let workRelatedAnswer
  workRelated === 'workRelated'? workRelatedAnswer = 'yes': workRelatedAnswer = 'no'

  let whoPerformedDeed
  deedPerformedBy === 'otherParty' ? whoPerformedDeed = otherPartyName: whoPerformedDeed = 'me'

 


  let chitColor,  totalChitValue
  if(!chitBurden && !chitValue) {
    totalChitValue = 0
  }else{
  totalChitValue = parseInt(chitValue) + parseInt(chitBurden)
}
 
  
  

  if(chitType === 'awChit'){chitColor = 'red'}else{

  if( totalChitValue < 25 ) { chitColor = 'copper' } 
  else if (totalChitValue > 24 && totalChitValue < 55 ) { chitColor = 'silver' } 
  else if (totalChitValue > 54 ){ chitColor= 'gold' }
  else{chitColor = 'copper'}
  }







  let URLId = match.id
// console.log('[ Log FROM ] URLId ', URLId);

  // --- form Schema tests   ------------------------------

  // --- does newPerson already exist in people collection

  
  const formSchema = object({
  

    });

 
   let initialChitDate = new Date('2021-03-14T17:03:40.000Z')
    
 

// ----create default paramters if note exists ---------------------

let defaultValues = {
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

  const submitForm = async (data) => {

    const {otherPartyCollection, newExisting,  person, newPerson, 
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
    dispatch(changeLoadingStatus(false))
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
                  <LineTitle> work related ?  : </LineTitle>
                  <LineContent> {workRelatedAnswer} </LineContent>
                </Line>

                <Line>
                  <LineTitle> description : </LineTitle>
                  <LineContent>{description} </LineContent>
                </Line>

                <Line>
                  <LineTitle> keywords : </LineTitle>
                  <LineContent> schmuck, me </LineContent>
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

              <StyledSubmitButton
                type="submit"
                variant="contained"
                color="primary"
                style={{ textTransform: 'none' }}
              >
                Submit Form
              </StyledSubmitButton>

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






