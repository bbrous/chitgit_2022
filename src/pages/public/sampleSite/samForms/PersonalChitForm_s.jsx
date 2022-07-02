/*---- File - PersonalChitForm_s.jsx 
 
   
*/

import React, {useEffect, useState}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import { 

  checkIfWordExists, 
  cleanOptions ,
  optionDescendSorter,
  isArrayDifferent,
  doesArrayIncludeItem,
  cleanString,
  stripWhiteSpace
} from '../../../../app/helpers/commonHelpers'

import { ISOtoTraditional } from '../../../../app/helpers/dateHelper';
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
  selectCategories,
  getCategoryObjectFromId,
  getCategoryObjectFromName,
  addCategoryToStore
} from '../../../../app/redux/categoryRedux/sam_categorySlice';
import {
  selectAllPersonalChits,
  addPersonalChitToStore,
  updateEditedPersonalChit
} from '../../../../app/redux/personalChitRedux/sam_personalChitSlice'
import { 
  selectKeywords,
  addKeywordHolder, 
  deleteKeywordHolder, 
  addKeywordToStore
} from '../../../../app/redux/keywordRedux/sam_keywordSlice';

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
import { chitBurgandy, chitBurgandyDull, darkGrey, lightGrey, mediumGrey, veryLightGrey } from '../../../../styles/colors';

const theme = createTheme(); // allows use of mui theme in styled component



//  -- Input requirements for user for each component (if any)

const formSchema = object({

  // title: string().required('A title for your spotlight is required'),


});







// ==============================

export default function PersonalChitForm_s(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let sampleDate = new Date('2021-03-14T17:03:40.000Z') 

  const [popupMessage, setPopupMessage] = useState(false)
  function closeForm(){
    dispatch(closeModal())
  }

  
  // --- get arrays from collections
  let   allKeywords, allCategories, allPersonalChits

  allKeywords = useSelector(selectKeywords) // get all keywords
  allCategories = useSelector(selectCategories) // get all categories
  allPersonalChits = useSelector(selectAllPersonalChits)

  // retrieve chit elements if received from edit

  console.log('[ PASSED ID FROM EDIT ] Params ', props.params);



  let existentChitId, existentChit, existentChitDate, existentChitColor, existentChitType, existentCategoryId, existentWorkRelated, existentDetail, existentKeyWordArray


  if(props.params.id){
      existentChitId = props.params.id

      existentChit = allPersonalChits.find( (chit) => chit.id === existentChitId )

    
    // console.log('[ PASSED ID FROM EDIT ] existentChit Color ', existentChit.chitColor);

      existentChitDate =new Date(existentChit.chitDate)
      



  if(existentChit.chitColor === 'red'){

    console.log('[ PASSED ID FROM EDIT ] IGOT RED ' );

    existentChitType = 'awChit'
    existentChitColor = 'red'
  }else if(existentChit.chitColor === 'milestone'){

    console.log('[ PASSED ID FROM EDIT ] IGOT Milestone ' );

    existentChitType = 'milestone'
    existentChitColor = ''
  }else{

    console.log('[ PASSED ID FROM EDIT ] IGOT A color ', existentChit.chitColor );

    existentChitType = 'personal'
    existentChitColor = existentChit.chitColor
  }


     existentCategoryId =existentChit.category
    existentWorkRelated =existentChit.workRelated
    existentDetail =existentChit.detail 
      existentKeyWordArray =existentChit.keyWordArray
      console.log('[ PASSED ID FROM EDIT ] IGOT A color ', existentChit.detail );
  }

  //--- Create keyword select Options ----

    let keywordsOptionsArray = []

    allKeywords.map((keyword, index) => {

      keywordsOptionsArray.push(keyword.keyword)

      return keywordsOptionsArray
    }) //end map

  //--- Create categpru select Options ----

    let categoryOptionsArray = allCategories.map(category => category.category);
    let sortedCategoryOptions = optionDescendSorter(categoryOptionsArray)
 

  // ====  Yup setup ==================================

  //  --- default values conditioned on whether new or edit existing chit 

    let defaultValues, defaultCategoryName, id,   headerMessage, defaultChitDate, defaultDetail, defaultWorkRelated, noteKeywordArray,   defaultCategory ,  defaultKeywordOptions, defaultKeyWordArray, defaultChitColor, defaultChitType

    !existentChitId ? headerMessage = 'Create New Personal Chit'  : headerMessage = 'Edit Personal Chit'
  
    !existentChitId ? id = cuid() : id = existentChitId

    if(existentChitId){

      console.log('[ eeeeeeeeeeeeeee   ] existentChitId ', existentChitId);



      let categoryObject = getCategoryObjectFromId(allCategories,existentCategoryId)
      defaultCategoryName = categoryObject.category
    }

    !existentChitId ? defaultCategory  = '' : defaultCategory = defaultCategoryName 
    !existentChitId ? defaultChitColor  = 'copper' : defaultChitColor = existentChitColor

    !existentChitId ? defaultKeyWordArray = []  : defaultKeyWordArray = existentKeyWordArray

    !existentChitId ? defaultChitDate = sampleDate : defaultChitDate = existentChitDate
    !existentChitId ? defaultDetail  = '' : defaultDetail = existentDetail
    !existentChitId ? defaultWorkRelated  = 'notWorkRelated' : defaultWorkRelated = existentWorkRelated

    

    defaultValues = {
      newExisting: 'existing',
      existingCategory: '',
      newCategory: '',
      category: defaultCategory,
      chitDate: defaultChitDate,
      detail: defaultDetail,
      workRelated: defaultWorkRelated,
       
      chitColor: defaultChitColor,
      keywords: defaultKeyWordArray
       

    };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(formSchema)
  });

  //======= SUBMIT ================================ 

  const { handleSubmit, reset, control, watch , setValue} = methods;

  const submitForm = async (data) => {
  // console.log('[ Personal CHit Form ] data ', data);

    // get form data elements
    const {chitDate, chitColor, detail, workRelated, keywords, newExisting, existingCategory, category, chitType} = data

    // - replace the <p>s with <div>s in Quill editor to make it appear better
let noPtagContent = detail.replaceAll('<p>' , '<div>')
let cleanDetail = noPtagContent.replaceAll('</p>', '</div>')

    /* --- combine chitTYpe and chitColor 
           Reason - 
           To decide the coin uses  - chitHelper uses
                 gold, silver, copper, red...  or awChit,  milestone
              - form chitColor field gets colors
                form chitType field gets awChit or milestone
    */

    let formChitColor = chitColor
 

    /*  
        category and existing inputs in form pass category names
        cateogry field in personal chit in store / collection uses an id
       
        Convert name in existing category to id, 
            or make a new category id

    */

    let formCategoryId , categoryObject


    if(existentChit){
      formCategoryId = existentChit.category
    }else{

    if(newExisting === 'existing'){
     
 
      categoryObject = getCategoryObjectFromName(allCategories, existingCategory)
      formCategoryId = categoryObject.id
      }else{
        formCategoryId = cuid()
    }
 
  }
    // --- clean the keyword array of white space and caps

    let passedKeyWordArray = data.keywords
    let cleanKeywordArray =  []
    
    passedKeyWordArray.map((keyword, index) => {

      let strippedKeyword = stripWhiteSpace(keyword) 


      let cleanKeyword = strippedKeyword.toLowerCase()

      // console.log('[ TESTSTESTESTEESTD] cleanKeyword ', cleanKeyword);

      cleanKeywordArray.push(cleanKeyword)
    
    return cleanKeywordArray
    }
    ) //end map
 

    // --- try catch block -----------------------------------

    try {

      // --- start the loading spinner ---
      dispatch(changeLoadingStatus(true))



        // --- new data to be passed to store (firebase)

        let newPersonalChitData = {
          id: id,
          chitType: 'personalChit',
          dateCreated: chitDate.toISOString(),
          chitDate: chitDate.toISOString(),
          chitColor: formChitColor,
          category: formCategoryId,
          workRelated: workRelated,
          duplicate: '',
          detail: cleanDetail,
          keyWordArray: cleanKeywordArray
        

        }

      let newCategoryObject
      let newCategory = data.newCategory
      let cleanedNewCategory = cleanString(newCategory)

      if(newCategory) {
        newCategoryObject = {id: formCategoryId, category: cleanedNewCategory}
      }


      // -- if no existentChitId -- form is for new - else form is for edit/update

      if (!existentChitId) {

        // if a new category - first add new category to store

         

        
        if(newCategory){
        dispatch(addCategoryToStore(newCategoryObject))
        }

        // --- create new chit ------------
        dispatch(addPersonalChitToStore(newPersonalChitData))

      }

      // --- edit/ update personalChit ------------

      if (existentChitId) {
        
        
        if(newCategory){
          dispatch(addCategoryToStore(newCategoryObject))

          }

          dispatch(updateEditedPersonalChit({data: newPersonalChitData}))


      }

 
   //  === update Keywords ===================================

  //  let defaultKeyWordArray = defaultKeywordOptions
  //  let formKeywordArray = passedKeyWordArray // cleaned keyword array from form

  let allKeywordNames = []

  allKeywords.map((keyword, index) => {
    allKeywordNames.push(keyword.keyword)
    return allKeywordNames
}

) //end map


  let kewwordArrayDifference = isArrayDifferent(defaultKeyWordArray, cleanKeywordArray)


  console.log('[XXXXXXXXXXXXXXXXXXXXXX  ] kewwordArrayDifference ', kewwordArrayDifference)



  // --- only update keywords if keywordArrayDifference === [... someItems] ---

  if (kewwordArrayDifference.length > 0) {

    // map each keyword in the keyword difference array

    kewwordArrayDifference.forEach((item) => {

      // --- check if each keyword form data submitted is  different from default 

      let arrayItemInludedInDefault = doesArrayIncludeItem(item, defaultKeyWordArray)

      if (!arrayItemInludedInDefault) {  // then it was added

        let keywordExists = checkIfWordExists(item, allKeywords, 'keywords')


        // --- keyword from form is new  -------------------------------
        // --- brand new keyword - add to keyword collection

        if (!keywordExists) {

          // create new keyword 
          let keywordId = cuid() // #####   temp ############

          let newKeywordData = {
            id: keywordId,
            keyword: item,
            dbCollection: 'personalChits',
            keywordHolder: id

          }
          dispatch(addKeywordToStore(newKeywordData))

        } // end newKeywordData


        // --- keyword just new in form --- update keyword holders
        if (keywordExists) {
          let updatedKeywordData = {
            keywordId: keywordExists.id,
            keywordHolder: id,
            dbCollection: 'personalChits'

          }

          dispatch(addKeywordHolder(updatedKeywordData))


        }// end if keywordExists 


      }  // end if arrayItemInludedInDefault


      // --- keyword missing from default - delete  

      if (arrayItemInludedInDefault) {  // then it was deleted in form

        // delete id from keyword item

        let keywordHolderToBeDeleted = {
          keyword: item,
          keywordHolder: id,
          // id: noteId
        }


        dispatch(deleteKeywordHolder(keywordHolderToBeDeleted))

      }  // end if arrayItemInludedInDefault



    }) // end map kewwordArrayDifference


  } // end if kewwordArrayDifference --- 


//  ===== submit compete ====================================

      dispatch(changeLoadingStatus(false))
      reset()
       

      reset(defaultValues)
    setPopupMessage(true)



    } catch (error) {

      // --- alert error + navigate + end spinner + reset form ---
      alert(error.message)
      dispatch(changeLoadingStatus(false))

      reset(defaultValues)
    }// end try-catch

  } // end submitForm ------------------------------
    
  
      /* --- create form effects
          a. newExisting radio choice determines whether 
              a select field or input field is shown

      */
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

   
      /* --- exclude dates from datepicker  ==================
          In each specific category - for specific day -
             - only one chit is allowed for each day
          
          - So, create an array of days that already have a chit for
            that category

          - This only affects new (not edited) chits with
            existing categories.
      */

      let excludedDates =[]
  
      let cleanCategorySelected, categoryObject , categoryId, filteredCategories 

      // --- get category id from name----

      if (existingCategorySelected) {

        console.log('[ PERSONAL CHIT FORM ] existingCategorySelected ', existingCategorySelected);
        cleanCategorySelected = cleanOptions(existingCategorySelected)
        categoryObject = allCategories.find(category => category.category === cleanCategorySelected)

        categoryId = categoryObject.id


 
    // -- map through all personal chits filtered by category 
    //     to create dates with chits
 

    filteredCategories = allPersonalChits.filter(chit => chit.category === categoryId)

    filteredCategories.map((chit, index) => {
      let dateWithChit = chit.chitDate


      excludedDates.push(new Date(dateWithChit))

      return excludedDates
    }
    ) //end map


  } // end if existingCategory selected



   // --- Actual Form ---------------------------------------------

  return (
<> 
{!popupMessage && 
    <Wrapper>
      
      <HeaderWrapper> {headerMessage} </HeaderWrapper>
   
    {/* --- Form -------------------------- */}
    
    <FormProvider {...methods}>
    <Scrollbars >
          <FormWrapper onSubmit={handleSubmit(submitForm)}>

            {/* ------select Creatable (category) -------------------------- */}
            {existentChitId && <>
              <FormComponentWrapper>

                <ExistentRow>
                  <ExistentRowLeft>Category: </ExistentRowLeft>
                  <ExistentRowRight>{defaultCategoryName} </ExistentRowRight>
                </ExistentRow>

                <ExistentRow>
                  <ExistentRowLeft>ChitDate: </ExistentRowLeft>
                  <ExistentRowRight>{ISOtoTraditional(existentChitDate)} </ExistentRowRight>
                </ExistentRow>

              </FormComponentWrapper>
            </>}
            {!existentChitId && <>

              <FormComponentWrapper>
                <ComponentName>
                  Choose a category for your chit
                </ComponentName>
                <CategoryFormComponentWrapper>
                  <CategoryLeft>
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
                        defaultValue={defaultValues.newExisting}
                      />
                    </RadiotWrapper>

                  </CategoryLeft>


                  {newExisting === 'existing' &&
                    <CategoryRight>

                      <>

                        <StyledSelect
                          name={'existingCategory'}
                          control={control}
                          options={sortedCategoryOptions}
                          // or
                          // defaultValue = {{ value: 'ge423', label: 'home'}}
                          defaultValue={defaultValues.categories}
                          placeholder='select a category'

                        />

                        {/* {errors.group && <ErrorMessage>{ errors.group.message} </ErrorMessage>} */}


                      </>
                    </CategoryRight>
                  }

                  {newExisting === 'new' &&
                    <ComponentWrapper>


                      <StyledInput
                        name={"newCategory"}
                        control={control}
                        label={"newCategory"}
                        defaultValue={''}
                        placeholder='Add new category'


                      />

                    </ComponentWrapper>

                  }
                </CategoryFormComponentWrapper>
              </FormComponentWrapper>

            
  {/* ------DatePicker Component (endEst) -------------------------- */}

      
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
                        excludedDates={excludedDates}
                        maxDate={sampleDate}
                        ref={null} />
                    )}
                  />

                </ComponentWrapper>
                {/* {errors.chitDate && <ErrorMessage>{errors.chitDate.message} </ErrorMessage>} */}
              </FormComponentWrapper>
            </>}
            <>
              {/* ------Chit-------------------------- */}

              <FormComponentWrapper>
                <ComponentName>
                  Chit Type <StyledCalendarIcon />
                </ComponentName>

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

                        {
                          label: "awChit",
                          value: "red",
                        },

                        {
                          label: "milestone",
                          value: "milestone",
                        },


                      ]}
                      defaultValue={defaultValues.chitColor}
                    />
                  </RadiotWrapper>

                </ComponentWrapperIndent>

              </FormComponentWrapper>

          {/* ------Detail  -------------------------- */}

       
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
                        IniitalValue={defaultValues.detail}

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
    }

    {popupMessage && 
    
    <MessageWrapper> 
      <SuccessMessage> 
        
         Your new personal chit has been Created

      </SuccessMessage>

      <CloseFormButton onClick = {()=> dispatch(closeModal())}> 
      Got it - thanks
      
      </CloseFormButton>
    </MessageWrapper>
    }



    
    </>

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

const MessageWrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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

const SuccessMessage = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // zIndex: '95',
  // backgroundColor: 'red',
 
  marginBottom: '.5rem',
  color: chitBurgandy,


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },

})

const CloseFormButton = styled(Button)({
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

const CategoryFormComponentWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '4rem',
  margin: '.25rem',
  borderRadius: '5px',
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const CategoryLeft = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '30%',
//   margin: '.25rem',
//   padding: '1rem',
//   borderRadius: '5px',
// backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})


const CategoryRight = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '70%',
 
//   margin: '.25rem',
//   padding: '1rem',
//   borderRadius: '5px',
// backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ExistentRow = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
 
 
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ExistentRowLeft = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: mediumGrey,
  fontSize: '.9rem', 
  width: '6rem',
  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

})

const ExistentRowRight = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: chitBurgandy,
 
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

