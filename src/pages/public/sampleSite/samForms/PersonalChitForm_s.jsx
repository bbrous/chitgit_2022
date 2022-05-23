/*---- File - PersonalChitForm_s.jsx 
 
   
*/

import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
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

// --- Redux slices imports

import { changeLoadingStatus } from '../../../../app/redux/statusRedux/statusSlice';
import {closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'


import { selectCategories } from '../../../../app/redux/categoryRedux/sam_categorySlice';
import {selectAllPersonalChits } from '../../../../app/redux/personalChitRedux/sam_personalChitSlice'
import { selectKeywords } from '../../../../app/redux/keywordRedux/sam_keywordSlice';

// --- Form component imports ---------

import { StyledInput } from '../../../../forms/formComponents/StyledInput'
import { StyledSelect } from '../../../../forms/formComponents/StyledSelect';
import { StyledSliderMui } from '../../../../forms/formComponents/StyledSliderMui';
import { ChitRadio } from '../../../../forms/formComponents/ChitRadio'

import { StyledDatePicker } from '../../../../forms/formComponents/StyledDatePicker';

import { Editor } from '../../../../forms/formComponents/QuillEditor'

import { StyledAutocomplete } from '../../../../forms/formComponents/StyledAutocomplete';

import { StyledSelectMuiCreatable } from '../../../../forms/formComponents/StyledSelectMuiCreatable';

// --- MUI imports ---------

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { styled, createTheme} from '@mui/material/styles'
import { chitBurgandyDull, lightGrey, veryLightGrey } from '../../../../styles/colors';

const theme = createTheme(); // allows use of mui theme in styled component



//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // title: string().required('A title for your spotlight is required'),


});







// ==============================

export default function PersonalChitForm_s(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // retrieve spot id if passed from edit
  let personalChitId = props.params.id


  // --- set up options for the selector input (parentId) 
  let noteArray, keywordsArray, categoriesArray, keywordOption, allPersonalChitsArray

  keywordsArray = useSelector(selectKeywords) // get all keywords
  categoriesArray = useSelector(selectCategories) // get all keywords
  allPersonalChitsArray = useSelector(selectAllPersonalChits)

  // (2) --- Create form Options ---------------------------------------

    // --- create options array for Autocomplete multi-selector 

    let keywordsOptionsArray = []

    keywordsArray.map((keyword, index) => {
      // code 
      keywordOption = keyword.keyword
      keywordsOptionsArray.push(keywordOption)

      return keywordsOptionsArray
    }) //end map

  // --- create options array for StledSelectMuiCreatable (category options)

    let categoryOptionsArray = categoriesArray.map(category => category.category);
    let sortedCategoryOptions = optionDescendSorter(categoryOptionsArray)
console.log('[ PersonalChit Form ] sortedCategoryOptions ', sortedCategoryOptions);

  // --- Yup setup ----------

  //  --- default values conditioned on whether new or edit existing spotlight 

  let defaultValues, category, id,title,  headerMessage, chitDate, detail, workRelated, noteKeywordArray,    defaultKeywordOptions, noteCategory

  !personalChitId ? headerMessage = 'Create New Personal Chit'  : headerMessage = 'Edit Personal Chit'

  // !personalChitId ? defaultKeywordOptions = []  : defaultKeywordOptions = note.noteKeywordArray
 
 
let logDate = new Date('2021-03-14T17:03:40.000Z') 
    
    defaultValues = {
      newExisting: 'existing',
      existingCategory: '',
      newCategory: '',
      category: '',
      chitDate: logDate,
      detail: '',
      workRelated: 'notWorkRelated',
      chitType: '',
      chitColor: 'copper',
      keywords: []
       

    };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT =========================================================

  const { handleSubmit, reset, control, watch , setValue} = methods;

  const submitForm = async (data) => {
console.log('[ Personal CHit Form ] data ', data);
    // let submitData = data


    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))



        // --- new data to be passed to store (firebase)

        let newPersonalChitData = {
          id: id,
          chitType: 'personalChit',
          dateCreated: '',
          chitDate: '',
          chitColor: '',
          category: '',
          workRelated: '',
          duplicate: '',
          detail: '',
          keyWordArray: []
        

        }


      // #### await Firebase  -- add + return newPersonalChitId ############ 

      // -- if no personalChitId -- form is for new - else form is for edit/update

      if (!personalChitId) {

        // --- create new chit ------------
        

      }

      // --- edit/ update personalChit ------------

      if (personalChitId) {
        
      }

 


        

      dispatch(changeLoadingStatus(false))
      reset()
       

      reset(defaultValues)
      dispatch(closeModal())

    } catch (error) {

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)
    }// end try-catch

  } // end submitForm
    
  
       // --- Actual Form ---------------------------------------------
       const newExisting = watch("newExisting");
       const existingCategorySelected = watch("existingCategory");
       const chitTypeSelected = watch("chitType");

       useEffect(() => {
        if (newExisting === 'existing') {
          setValue('newCategory', '')
        }
      }, [newExisting, setValue]);
    
      useEffect(() => {
        if (newExisting === 'new') {
          setValue('existingCategory', '')
        }
      }, [newExisting, setValue]);



       /*
        1. filter all chits by category
        2. create array



       */

   
    // --- get dates that already have chits
    let excludedDates =[]
    // excludedDates = [
    //   new Date('2021-03-06T10:45:10.000Z'),
    //   new Date('2021-03-08T10:41:10.000Z'),
    //   new Date('2021-03-08T12:45:10.000Z'),
    
    // ];

    let cleanCategorySelected, categoryObject , categoryId, filteredCategories 


    // --- get category id from name----

    if(existingCategorySelected){ 

      console.log('[ PERSONAL CHIT FORM ] existingCategorySelected ', existingCategorySelected);
      cleanCategorySelected = cleanOptions(existingCategorySelected)
    categoryObject = categoriesArray.find(category => category.category === cleanCategorySelected)

    categoryId = categoryObject.id





    /*
     -- map through all personal chits filtered by category to create dates with chits
    */
 
    filteredCategories = allPersonalChitsArray.filter(chit => chit.category === categoryId)

    filteredCategories.map((chit, index) => {
      let dateWithChit = chit.chitDate


      excludedDates.push(new Date(dateWithChit))
      console.log('[ PERSONAL CHIT FORM ] excludedDates ', excludedDates)
      return excludedDates
    }
    ) //end map


  }





  return (

    <Wrapper>
      
      <HeaderWrapper> {headerMessage} </HeaderWrapper>
   
    {/* --- Form -------------------------- */}
    
    <FormProvider {...methods}>
    <Scrollbars >
      <FormWrapper onSubmit={handleSubmit(submitForm)}>

          {/* ------select Creatable (category) -------------------------- */}
 


          <FormComponentWrapper>
              <ComponentName>
                Choose a category for your chit
              </ComponentName>
              
              <ComponentWrapper>
                <RadiotWrapper  >
                  <ChitRadio
                    name={"newExisting"}
                    control={control}
                    label={"newExisting"}
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
                    defaultValue = {defaultValues.newExisting}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>
              {newExisting === 'existing' && 
              <ComponentWrapper>

              <>
                
                <StyledSelect
                  name={'existingCategory'}
                  control={control}
                  options = {sortedCategoryOptions}
                  // or
                  // defaultValue = {{ value: 'ge423', label: 'home'}}
                  defaultValue={defaultValues.categories}
                  placeholder='select a category'

                />

                {/* {errors.group && <ErrorMessage>{ errors.group.message} </ErrorMessage>} */}




              </>
              </ComponentWrapper>
            }

{newExisting === 'new' && 
<ComponentWrapper>


<StyledInput
                name={"newCategory"}
                control={control}
                label={"newCategory"}
                defaultValue= {''}
                placeholder = 'Add new category'
                 
                 
              />




</ComponentWrapper>

          }

            </FormComponentWrapper>































  {/* ------DatePicker Component (endEst) -------------------------- */}

          <> 
          <FormComponentWrapper>
              <ComponentName>
                Chit date ? <StyledCalendarIcon />
              </ComponentName>

              <ComponentWrapper>
                <Controller

                  name="chitDate"
                  control={control}
                  initialNote={'hi'}
                  
                  render={({ field }) => (
                    <StyledDatePicker 
                    {...field} 
                    excludedDates = {excludedDates} 
                    maxDate = {logDate}
                    ref={null} />
                  )}
                />
                
              </ComponentWrapper>
              {/* {errors.chitDate && <ErrorMessage>{errors.chitDate.message} </ErrorMessage>} */}
            </FormComponentWrapper> 


            {/* ------Chit-------------------------- */}

            <FormComponentWrapper>
              <ComponentName>
                Chit 
              </ComponentName>

              
              <ComponentWrapper>
                <RadiotWrapper>
                  <ChitRadio
                    name={"chitType"}
                    control={control}
                    label={"logType"}
                    options={[
                      {
                        label: "personal chit",
                        value: "personal",
                      },
                     
 
                      {
                        label: "milestone",
                        value: "milestone",
                      },
                      {
                        label: "awChit",
                        value: "awChit",
                      },



                    ]}
                    defaultValue = {defaultValues.chitType}
                  />
                </RadiotWrapper>


                


              </ComponentWrapper>

              {chitTypeSelected === 'personal' && 

           
 
<ComponentWrapperIndent>
  <RadiotWrapper>
    <ChitRadio
      name={"chitColor"}
      control={control}
      label={"logType"}
      options={[

        {
          label: "copper",
          value: "copper",
        },
        {
          label: "silver",
          value: "silver",
        },

        {
          label: "gold",
          value: "gold",
        },





      ]}
      defaultValue = {defaultValues.chitColor}
    />
  </RadiotWrapper>


  


</ComponentWrapperIndent>

    }



            </FormComponentWrapper>




          {/* ------Detail  -------------------------- */}

          {chitTypeSelected &&   <>
              <QuillComponentWrapper>
                <ComponentName>
                  Description  of chit
                </ComponentName>

                <QuillWrapper>


                  <Controller

                    name="detail"
                    control={control}
                    initialNote={'hi quill description'}

                    render={({ field }) => (
                      <Editor
                        {...field}
                        ref={null}
                        IniitalValue={defaultValues.description}

                      />
                    )}

                  />

                </QuillWrapper>
              </QuillComponentWrapper>



              {/* ------Work related -------------------------- */}

              <FormComponentWrapper>
                <ComponentName>
                  Is this chit work related ?
                </ComponentName>


                <ComponentWrapper>
                  <RadiotWrapper>
                    <ChitRadio
                      name={"workRelated"}
                      control={control}
                      label={"workRelated"}
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
                      defaultValue={defaultValues.workRelated}
                    />
                  </RadiotWrapper>





                </ComponentWrapper>
              </FormComponentWrapper>

              {/* ------multiselect (keywords) -------------------------- */}

              <FormComponentWrapper>
                <ComponentName>
                  Key Words
                </ComponentName>

                <ComponentWrapper>
                  <StyledAutocomplete
                    name={'keywords'}
                    control={control}
                    options={keywordsOptionsArray}
                    // defaultValue = {{ value: 'ge423', label: 'home'}}
                    defaultValue={defaultValues.keywords}


                  />


                </ComponentWrapper>
              </FormComponentWrapper>
              
              </>
                    }
            </>


            {/* ------Submit ---------- -------------------------- */}
            <SubmitContainer>
              <StyledButton

                variant="contained"
                color="primary"
                style={{
                  textTransform: 'none',

                }}
              // onClick={() => cancelNewForm()}

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

            </SubmitContainer>
          </FormWrapper>
        </Scrollbars>
      </FormProvider>

    </Wrapper>

  );
}


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
  boxShadow: '0 0 1px 0 #F6F7F8',
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
  width: '98%',
  padding: '0 5%',

 backgroundColor: veryLightGrey,
  [theme.breakpoints.down('sm')]: {
    width: '100%',


  },

})
const FormComponentWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: '.25rem',
  padding: '1rem',
  borderRadius: '5px',
backgroundColor: 'white',
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
  width: '80%',
  margin: '0 0 .75rem 5%',

 
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

const ComponentWrapperIndent= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '95%',
  marginLeft: '1.5rem',

 
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

//  --- Buttons -----------
const SubmitContainer= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
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

const DetailComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
border: '1px solid orange',
borderRadius: '5px',
 padding: '2px',
 
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
 
//  backgroundColor: 'yellow',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const QuillComponentWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  
  margin: '.25rem',
  padding: '1rem',
 
backgroundColor: 'white',
borderRadius: '5px',
// backgroundColor: 'red',
  
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

