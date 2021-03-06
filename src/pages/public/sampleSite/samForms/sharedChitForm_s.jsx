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
 import { selectKeywords } from '../../../../app/redux/keywordRedux/sam_keywordSlice'

// --- Form component imports ---------
import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';
import {Editor} from '../../../../forms/formComponents/QuillEditor';
import { ChitRadio } from '../../../../forms/formComponents/ChitRadio'
import { StyledChitMultiselect } from '../../../../forms/formComponents/StyledChitMultiselect';

import { closeModal } from '../../../../app/redux/statusRedux/sam_statusSlice'
// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { styled, createTheme} from '@mui/material/styles'
import {withStyles} from '@mui/styles'


const theme = createTheme(); // allows use of mui theme in styled component



// ---functions --------------------------------------------




 


// ==============================================================
// ==== MAIN FUNCTION ===========================================

export default function SharedChitForm_s(props) {

  const dispatch = useDispatch()
 
  let match = useParams()
  const status = useSelector(selectStatus)
  const {person, group, workRelated, description, keyWordArray  }= status.view.forms.sharedChitForm

// console.log('[ Log FROM ] keywords ', statusFormViewKeywords);

  // --- form Schema tests   ------------------------------

  // --- does newPerson already exist in people collection

  
  const formSchema = object({
  

    });

 
   let initialChitDate = new Date('2021-03-14T17:03:40.000Z')
    
 

// ----create default paramters if note exists ---------------------

let defaultValues = {
  // workRelated: statusFormViewWorkRelated, 
 
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

    const {workRelated, description, keywords} = data
    
    // let modifiedDescription = description.replaceAll('<p>' , '<div>')
    // let modifiedCleanDescription = modifiedDescription.replaceAll('</p>', '</div>')
 
  //  try{

  //   let newSharedChitData = {}
  //   let newChitId

  //   newSharedChitData = {
  //     workRelated: workRelated,
  //     description: modifiedCleanDescription,
  //     keywords: keywords
      
  //   }

  //   dispatch(updateTwoPartyViewData( 
  //     {pageType: 'twoPartyChitForm'   , 
  //     page: 'details'   , 
  //     data: newSharedChitData
  //   } 
  //   )) // end dispatch
  //   dispatch(changeLoadingStatus(false))
  //   } catch (error) {
  //     alert(error.message)
  //     dispatch(changeLoadingStatus(false))

  //     reset(defaultValues)

  //   } // end catch
  // } // end async submit

   



  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>

      <FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >


          <MainWrapper>
 <div> SHARED CHIT FORM  </div>
 <div>The shared chit form is a wizard</div>

 <div> it contains 4 pages <br />

- message page - <br />
- form page   -- <br />
- preview and submit -- <br />
- link page 

 </div>
<div>
  The message page - is shown only after submit of a newly created chit. <br />
  From twoPartyChitForm_preview ... submit  data is sent that says "new chit" <br />
  - This sharedChit.jsx page takse the "new"  and displays message 
</div>
<div>
  The form page - get's most of it's data from the chitId - which will come in from the shared icon on a twoParty Chit or personal chit. <br />
  The form will have fields for: <br />
  - sender Name ... the default will be the sender ... but it can be changed <br />
                    to show a nick name <br />

  - receiver Name... same as send Name  <br />
  - sharedTitle <br />
  - sharedMessage
</div>
<div>
  The preview page - displays the info as it would be seen by the receiver <br />
   - submit button - creates a sharedChit in sharedChit 'root reducer' <br />
                    - updates the sender's chit
                    - takes user to link page
</div>
<div>
  The link page - gives the shared chit id and a "copy link" address
</div>






            {/* ------Work related -------------------------- */}

            {/* <FormComponentWrapper>
              <ComponentName>
                Is this chit work related ?
              </ComponentName>

              
              <ComponentWrapper>
                <RadiotWrapper>
                  <ChitRadio
                    name={"workRelated"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "yes",
                        value: "yes",
                      },
                      {
                        label: "no",
                        value: "no",
                      },

                    ]}
                    defaultValue = {defaultValues.workRelated}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>
            </FormComponentWrapper> */}



            {/* ------Description  -------------------------- */}

            {/* <FormComponentWrapper>
              <ComponentName>
                Description  of chit
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
                      IniitalValue= {defaultValues.description} />
                  )}

                />

</QuillWrapper>
              </QuillComponentWrapper>
            </FormComponentWrapper> */}











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
  )}
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
 
  padding: '6px 0',

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
border: '1px solid orange',
borderRadius: '5px',
backgroundColor: 'white',
 padding: '2px',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})
// -----------------------------------








 