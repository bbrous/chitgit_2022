/*---- File - NoteForm_s.jsx 
   Creates new or edits existing Note... depending on if 
   a noteId exists ... if yes - edit : if no - new

   Contains children:  input components from ./formCompnents

   parent: Modal.js  - src\pages\public\sampleSite\samComponents\Modal_s.jsx

   --- Edit map --- id and collection needed for update 

      Note_icon get's id and db collection (page) from URL of originator-
         - sends id & dbCollection + noteId if exists to modal as params -
      Modal_s - forwards all params to NoteForm

   * note - id and dbCollection var names are swapped 
   
*/

import React  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
 

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
import { 
          selectNotes,
          selectNoteFromArray

        } from '../../../../app/redux/noteRedux/sam_notesSlice';


 import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'

// --- Form component imports ---------

import { Editor } from '../../../../forms/formComponents/QuillEditor'

import { StyledMultiSelect } from '../../../../forms/formComponents/StyledMultiSelect';


// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'

const theme = createTheme(); // allows use of mui theme in styled component

// ---------------------------------------------
  const Wrapper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // zIndex: '95',
    backgroundColor: 'none',
    width: '100%',
    height: '100%',
    overflow: 'auto',


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
    width: '80%',
  

  
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
    color: 'white'
  
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



//  -- Input requirements for user for each component (if any)

const formSchema = object({

  title: string().required('A title for your spotlight is required'),


});







// ==============================

export default function NoteForm_s(props) {

  console.log('[ ----- NOTE FORM -------- ] props.params ', props.params);
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let noteArray = useSelector(selectNotes) // get all notes

console.log('[ ----- NOTE FORM -------- ] noteArray ', noteArray);
  const {dbCollection, noteHolderCollection, noteHolderId} = props.params
  let noteId = props.params.id



  


  // --- Yup setup ----------

  //  --- default values conditioned on whether new or edit existing note 

// ##############################################################################
// ##############################################################################
  let defaultValues, headerMessage, id, note, noteHolderType, newNoteHolderId, noteContent, lastEdit, noteKeywordArray
  !noteId ? note =  {} : note =  selectNoteFromArray(noteArray, noteId)

  console.log('[ ----- NOTE FORM -------- ] note ', note);



  !noteId ? headerMessage = 'Create New Note'  : headerMessage = 'Edit Note'
  !noteId ? id = cuid()  : id =  noteId
  
  !noteId ? noteHolderType = noteHolderCollection  : noteHolderType = note.noteHolderType

  !noteId ? newNoteHolderId = id  : newNoteHolderId = note.noteHolderId
  !noteId ? noteContent = ''  : noteContent = note.noteContent
  !noteId ? noteKeywordArray = []  : noteKeywordArray = note.noteKeywordArray
  


// ##############################################################################
    
    defaultValues = {

      noteHolderType: noteHolderType, 
      noteHolderId: newNoteHolderId ,
      noteContent: noteContent ,
      lastEdit: new Date().toISOString(), 
      noteKeywordArray: noteKeywordArray, 

    };

// ##############################################################################
// ##############################################################################


  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch } = methods;

  const submitForm = async (data) => {

    let submitData = data
    console.log('[ submitForm ] ~~~~~~~~~~~~~~~~~~~ data  ', submitData);






        



  } // end submitForm
    
  
       // --- Actual Form ---------------------------------------------


  return (
    <Wrapper>
      
      <HeaderWrapper> {headerMessage} </HeaderWrapper>
   
    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------Input Component (title) -------------------------- */}

          <FormComponentWrapper>
          <ComponentName>
            NoteContent
          </ComponentName>

          <ComponentWrapper>
            <Editor name="content" control={control} label="content" type = "text"/>

          </ComponentWrapper>
        </FormComponentWrapper>

          

        {/* ------Selector Component  (parentId) -------------------------- */}

        <FormComponentWrapper>
            <ComponentName>
              Add keywords 
            </ComponentName>

            <ComponentWrapper>
              <StyledMultiSelect
                name={"keywords"}
                control={control}
                label={"keywords"}
               
                 
              />

            </ComponentWrapper>
          </FormComponentWrapper>


        {/* ------Submit ---------- -------------------------- */}
        <ButtonWrapper>

          <StyledButton 
            type="submit" 
            variant="contained" 
            color="primary"
            style={{textTransform: 'none'}}
            >
            Submit
          </StyledButton>
        </ButtonWrapper>
      </FormWrapper>

    </FormProvider>

    </Wrapper>
  );
}

