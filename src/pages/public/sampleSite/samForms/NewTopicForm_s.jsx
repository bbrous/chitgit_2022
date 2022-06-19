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
import { chitBlueDull, darkGrey, lightGrey, chitBurgandyDull, veryLightGrey } from '../../../../styles/colors'

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
  // closeLogSectionForm, 
  // closeNewLogForm, 
  selectStatus, 
   


} from '../../../../app/redux/statusRedux/sam_statusSlice'

import { 
  selectTopics,
  addTopicToStore
} from '../../../../app/redux/topicRedux/sam_topicSlice'

// --- Form component imports ---------

import { ChronicleInput } from '../../../../forms/formComponents/ChronicleInput'
import { ChronicleSelectMui } from '../../../../forms/formComponents/ChronicleSelectMui'

import { ChronicleRadio } from '../../../../forms/formComponents/ChronicleRadio'
import { descendSorter, stripWhiteSpace } from '../../../../app/helpers/commonHelpers'

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { styled, createTheme} from '@mui/material/styles'
 

const theme = createTheme(); // allows use of mui theme in styled component


// ==============================================================
// ==== MAIN FUNCTION ===========================================

function NewTopicForm(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const status = useSelector(selectStatus)
  const allTopics = useSelector(selectTopics)

  //--- Dialog box functions ----

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
 
  };
    // --- form Schema tests   ------------------------------

  // --- does newTopic already exist in people collection

  const doesTopicExist = (inputValue) => {

    // to compare input value to existing values - clean both
    // so comparing "apples" to "apples"

    let topicsArray = []
    allTopics.map((topic, index) => {

      let cleanTopic = stripWhiteSpace(topic.topic).toLowerCase()
     
      topicsArray.push(cleanTopic)
  
    return topicsArray

    }) //end map

    let cleanInputValue = stripWhiteSpace(inputValue).toLowerCase()
   
    let topicExists = doesArrayIncludeItem(cleanInputValue, topicsArray)
    // returns true if exists ... schema test requires false to proceed
    // so return the opposite of person exists
   return topicExists
  
  
  }// end doeTopicExist

  const formSchema = object({

    newTopic: string().required('Your journal needs some content')


})// -- end formSchema --------------


// ----create default paramters if note exists ---------------------

let defaultValues 


// ##### Sample only  ###########
// logSectionId === 'new' ? sectionId = cuid()  : sectionId =  logSectionId  


  defaultValues = {
  
    newTopic: '',

  

  };


  // --- close / cancel form 
  const cancelNewForm = () => {
 
    // dispatch(closeNewTopicForm())
    navigate(`/sample/topicals`)
  }





// ===========  FORM  ==================================================

const methods = useForm({
  defaultValues: defaultValues,
  resolver: yupResolver(formSchema)
});
const { handleSubmit, reset, control, setValue, onChange, watch, ref , formState: { errors } } = methods;

const submitForm = async (data) => {

  const {newTopic} = data

  console.log('[NewTopicForm]...data ', data)
  console.log('[NewTopicForm]...newTopic ', newTopic)
 let topicExists= doesTopicExist(newTopic)
 console.log('[NewTopicForm]...new topic exists ', topicExists)

 if(topicExists){handleClickOpen()}
 if(!topicExists){
 
  try {

    let newTopicId = cuid()
    let cleanedNewTopic = stripWhiteSpace(data.newTopic)
    let newTopicObject  = {
      id: newTopicId,
      type: 'topics',
      topic: cleanedNewTopic

    }

    dispatch(addTopicToStore(newTopicObject))


    navigate(`/sample/topicals/${newTopicId}`)



    } catch (error) {
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)

    } // end catch
  }
    } // end async submit




// ------ main return ---------------------
return(
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
          <DialogContentText id="alert-dialog-description">
            The topic already exists.  Use existent topic or create a different topic name.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            
            variant="contained"
            color="primary"
            
          onClick={()=>handleClose()}
          >
            Try again
          </button>

          <button
            f 
            variant="contained"
            color="primary"

            onClick={()=>cancelNewForm()}
          >
            Cancel
          </button>

        </DialogActions>
      </Dialog> 



<FormProvider {...methods}>
        <FormWrapper id="submit-form" onSubmit={handleSubmit(submitForm)} >

    <MainWrapper>

<FormComponentWrapper>
  <ComponentName>
    Create a new topic for your topicals
  </ComponentName>



<ChronicleInput
  name={"newTopic"}
  control={control}
  label={"newTopic"}
  defaultValue={''}
  placeholder=' Add new topic'


/>
</FormComponentWrapper>


  </MainWrapper>
          {/* ------Submit ---------- -------------------------- */}
          <ButtonWrapper>


            <StyledButton

              variant="contained"
              color="primary"
              style={{ textTransform: 'none' }}
              onClick={() => cancelNewForm()}
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

)// end main return



} //--- end main function

export default NewTopicForm


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






