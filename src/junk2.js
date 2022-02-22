/*---- File - NoteForm_s.jsx 

   -- see NoteForm_info.md for logic detail 
   -- Comment #'s here correspond to NoteForm_info

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
 
import { 

        checkIfWordExists, 
        cleanOptions ,
        optionDescendSorter,
        isArrayDifferent,
        doesArrayIncludeItem

      } from '../../../../app/helpers/commonHelpers'

// --- Firebase imports ---------
import cuid from 'cuid'  // #### for sample site only ####

// --- React-hook-form imports ---------

import { FormProvider, useForm, Controller } from "react-hook-form";
 
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object  } from 'yup';

// --- Redux slices imports ---------------------------------

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'
import { 
          selectNotes,
          selectNoteFromArray,
          addNoteToStore,
          updateEditedNote

        } from '../../../../app/redux/noteRedux/sam_notesSlice';

import { updateSpotlightNoteId } from '../../../../app/redux/spotlightRedux/sam_spotlightsSlice';
import { updateTaskNoteId } from '../../../../app/redux/taskRedux/sam_tasksSlice';

import {
       selectKeywords,
       addKeywordToStore, 
       addKeywordHolder,
       deleteKeywordHolder
      } from '../../../../app/redux/keywordRedux/sam_keywordSlice';
import { 
        selectCategories, 
        addCategoryToStore,
        addCategoryHolder,
        deleteCategoryHolder
      } from '../../../../app/redux/categoryRedux/sam_categorySlice';


 import{ updateStatusView } from '../../../../app/redux/statusRedux/sam_statusSlice'



// --- Form component imports ---------

import { Editor } from '../../../../forms/formComponents/QuillEditor'

import { StyledAutocomplete } from '../../../../forms/formComponents/StyledAutocomplete';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';


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



//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // noteContent: string().required('Your note needs some content'),


});




// ==============================

export default function NoteForm_s(props) {

  const dispatch = useDispatch()

  // -- where the note originated ---
  const {dbCollection, noteHolderCollection, noteHolderId} = props.params

  // (1) ---Retrieve all needed collections from Redux store -------

    let noteArray, keywordsArray, categoriesArray, keywordOption

    noteArray = useSelector(selectNotes) // get all notes
    keywordsArray = useSelector(selectKeywords) // get all keywords
    categoriesArray = useSelector(selectCategories) // get all keywords


  // (2) --- Create form Options ---------------------------------------

    // --- create options array for Autocomplete multi-selector 

      let keywordsOptionsArray = []

      keywordsArray.map((keyword, index) => {
        // code 
        keywordOption = keyword.keyword
        keywordsOptionsArray.push(keywordOption)

        return keywordsOptionsArray
      }) //end map

    // --- create options array for Autocomplete multi-selector 

      let categoryOptionsArray = categoriesArray.map(category => category.category);
      let sortedCategoryOptions = optionDescendSorter(categoryOptionsArray)
  
  
  
  // (3) ----create default paramters if note exists ---------------------

    let defaultValues, headerMessage, id, note, noteHolderType, formNoteHolderId, noteContent,  noteKeywordArray,    defaultKeywordOptions, noteCategory

  
    let noteId = props.params.id
    !noteId ? id = cuid()  : id =  noteId   // ##### Sample only  ###########

    !noteId ? note =  {} : note =  selectNoteFromArray(noteArray, noteId)

    !noteId ? noteContent = ''  : noteContent = note.noteContent
    !noteId ? defaultKeywordOptions = []  : defaultKeywordOptions = note.noteKeywordArray
    !noteId ? noteHolderType = noteHolderCollection  : noteHolderType = note.noteHolderType
    !noteId ? noteCategory = ''  : noteCategory = note.noteCategory
    
    // !noteId ? formNoteHolderId = id  : formNoteHolderId = note.noteHolderId
    
      defaultValues = {
      noteContent: noteContent,
      keywords: defaultKeywordOptions,
      categories: noteCategory

    };
// ===========  FORM  ==================================================

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });
  const { handleSubmit, reset, control, setValue, onChange, watch, ref } = methods;

  const submitForm = async (data) => {
    console.log('[Dispatch_Form]...data ', data)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



    // let defaultKeywordArray = ['a' ,  'c', 'd', 'g', 'o', 'mm']
    // let formKeywordArray =   ['a' , 'b' ,  'd', 'c']
    // let kewwordArrayDifference = isArrayDifferent(defaultKeywordArray, formKeywordArray)

    // console.log('[Dispatch_Form]...ARRAY DIFFERENCE ', kewwordArrayDifference)

    // let arrayItemInluded = doesArrayIncludeItem('g', defaultKeywordArray)
    // console.log('[Dispatch_Form]...ARRAY Includes ', arrayItemInluded)

    // result ["c", "d", "q", "r", "s"]

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@





  // (4) --- retrieve data from form ---------------------------
    
    let newNoteContent = data.noteContent
    let newNoteCategory = data.categories
    let passedKeyWordArray = data.keywords
 
  
    // (4 a, b) --- clean the form data  - strip of white space, capitalize
    let cleanCategory = cleanOptions(newNoteCategory, 'categories')

    // console.log('[ NoteForm ] passedKeyWordArray ', passedKeyWordArray);
    let cleanKeywordArray =  []

    passedKeyWordArray.map((keyword, index) => {
      cleanKeywordArray.push(cleanOptions(keyword, 'keywords'))

    return cleanKeywordArray
    }
    ) //end map
    // console.log('[ NoteForm ] XXX cleanKeywordArray XXX ', cleanKeywordArray);








 // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))

    try{

      // === create new note if note does NOT exists ====================
      
      // --- define the Note data to create new note
      let newNoteData = {
        id: id,
        noteHolderType: noteHolderType,
        noteHolderId: noteHolderId,
        noteContent: newNoteContent,
        lastEdit: new Date().toISOString(), 
        noteKeywordArray: cleanKeywordArray,
        noteCategory: cleanCategory

      }

      // (5a) --- No note - create new note--------------------------
        if (!noteId) {

          await dispatch(addNoteToStore(newNoteData))


        // ---  update noteHolder if holder is a task or a spotlight -------

          if (noteHolderType === 'spotlights') {
            await dispatch(updateSpotlightNoteId(
              {
                noteId: id,
                noteHolderId: noteHolderId
              }
            ))
          }

        if (noteHolderType === 'tasks') {
          await dispatch(updateTaskNoteId(
            {
              noteId: id,
              taskHolderId: noteHolderId
            }
          ))
        }

      } // end !noteId ---------------------------------------------


      // (5b) --- Note Exists - update existent note ---------------

      if (noteId) {

        await dispatch(updateEditedNote(newNoteData))

      } // end !noteId -------------------------------------------




    // (6) --- create new or update category in categories collection ---

    // (6a) is form category different than default category  -----------------------
    //      if yes - then execute all category related functions --------------------
    //      if no - do nothing                               ------------------------

      let hasCategoryChanged = noteCategory !== cleanCategory // true - has changed


      if(hasCategoryChanged) {

            
        let categoryId 
        let categoryExists = checkIfWordExists(cleanCategory, categoriesArray , 'categories')

        console.log('[ NoteForm  **** Does category *******] ', categoryExists);
      

        // (6b) test if default category (noteCategory) === '' or ==== 'something'
        //                 if === '' - do nothing -  procede to add new category
        //                 if === 'something' - first delete note ID from 'something'
 
        if (noteCategory !== '') {

          


          let categoryToBeDeleted = noteCategory

          let categoryToBeDeletedData = {
            category: categoryToBeDeleted,
            categoryHolder: id,
            id: noteId
          }

          await dispatch(deleteCategoryHolder(categoryToBeDeletedData))


        } // end if neoteCategoryy !== ''





          // (6c) category from form already exists ------------------------

          if(categoryExists) { 
            let updatedCategoryData = {
              categoryId: categoryExists.id,
              categoryHolder: id,
              dbCollection: 'notes'

            }
          // console.log('[ NoteForm ] has Category Changed -yes ', hasCategoryChanged);



            await dispatch(addCategoryHolder(updatedCategoryData))


          }// end if categoryExists 

          // --- category from form is new  -----------------------------------------

          if (!categoryExists) {

            // create new category 
            categoryId = cuid() // #####   temp ############

            let newCategoryData = {
              id: categoryId,
              category: cleanCategory,
              dbCollection: 'notes',
              categoryHolder:  id 

            } // end newCategoryData

            await dispatch(addCategoryToStore(newCategoryData))

          } // end if !categoryExists

    } // end hasCategoryChanged---------------------------------------

 
    
    // 7. update keywords  ------------------------------------------
    
    let defaultKeywordArray = defaultKeywordOptions
    let formKeywordArray   = data.keywords

  // a. check if keyword form data submitted is different from default 

    let kewwordArrayDifference = await  isArrayDifferent(defaultKeywordArray, formKeywordArray)

    // --- only update keywords if keywordArrayDifference === [... someItems] ---
  
    if(kewwordArrayDifference.length > 0) {

      

      // map each keyword in the keyword difference array

      kewwordArrayDifference.map((item, index) => {

        //  7a. check if each keyword form data submitted is  different from default 

        let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultKeywordArray)


        if(arrayItemInludedInDefault) {  // then it was deleted

          // delete noteId from keyword item

          console.log('[Dispatch_Form]...... arrayItemInluded ...... DELETE noteId ')
          console.log('[Dispatch_Form]...... arrayItemInluded item...... ', item)
          console.log('[Dispatch_Form].----------------------------------------' )

           

          let keywordHolderToBeDeleted = {
            keyword: item,
            keywordHolder: id,
            id: noteId
          }





// XXXXXXXXXXXXX  problem here - ASYNC  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX





            // ASYNC dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))





// XXXXXXXXXXXXX  problem here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



        }  // end if arrayItemInludedInDefault

        if(!arrayItemInludedInDefault) {  // then it was added

          // delete noteId from keyword item

          console.log('[Dispatch_Form]...... arrayItemInluded ...... DECIDE -- ADD new KEYWORD or Update KEYWORD HOLDER')
          console.log('[Dispatch_Form]...... arrayItemInluded item...... ', item)
          console.log('[Dispatch_Form].----------------------------------------' )

          // if NOT new = update



          // if new
          //    // (4 a, b) --- clean the form data  - strip of white space, capitalize
          // let cleanKeyword = cleanOptions(newNoteKeyword, 'keywords')


                    //
                    //
                    //
                    //

        }  // end if arrayItemInludedInDefault

       }
       ) // end map kewwordArrayDifference





    

      


      
    } // end if kewwordArrayDifference --- 
      
      dispatch(changeLoadingStatus(false))
      reset()
       
      reset(defaultValues)
      dispatch(closeModal())

    }catch(error){

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

  reset(defaultValues)


    }// end try-catch

  
    reset(defaultValues)

  };

  // ==== return - Form JSX  ======================================

  return (
    <Wrapper>
      
      {/* <HeaderWrapper> {headerMessage} </HeaderWrapper> */}
   
    {/* --- Form -------------------------- */}
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(submitForm) } >

          {/* ------select Creatable (categories) -------------------------- */}

          <FormComponentWrapper>
            <ComponentName>
              Categories
            </ComponentName>

            <ComponentWrapper>
              <StyledSelectMuiCreatable
                name={'categories'}
                control={control}
                options={sortedCategoryOptions}
                // defaultValue = {{ value: 'ge423', label: 'home'}}
                defaultValue={defaultValues.categories}


              />


            </ComponentWrapper>
          </FormComponentWrapper>

          {/* ------Input Component (noteContent) -------------------------- */}

          <FormComponentWrapper>
            <ComponentName>
              NoteContent
            </ComponentName>

            <ComponentWrapper>


              <Controller

                name="noteContent"
                control={control}
                initialNote={'hi quill description'}
               
                render={({ field }) => (
                  <Editor 
                  {...field} 
                  ref={null}  
                  IniitalValue = {defaultValues.noteContent}/>
                )}
                
              />

            </ComponentWrapper>
          </FormComponentWrapper>

          
          {/* ------multiselect (keywords) -------------------------- */}

          <FormComponentWrapper>
            <ComponentName>
              Key Words
            </ComponentName>

            <ComponentWrapper>
            <StyledAutocomplete
                name= {'keywords'}
                control={control}
                options = {keywordsOptionsArray}
                // defaultValue = {{ value: 'ge423', label: 'home'}}
                defaultValue = {defaultValues.keywords}
               
                
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

          <StyledButton 
             
            variant="contained" 
            color="primary"
            style={{textTransform: 'none'}}
            onClick = {()=>dispatch(closeModal())}
            >
            Cancel
          </StyledButton> 

        </ButtonWrapper>
      </FormWrapper>

    </FormProvider>

    </Wrapper>
  );
}

