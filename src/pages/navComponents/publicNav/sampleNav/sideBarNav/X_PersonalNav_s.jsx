/* function PersonalNav(props) -------------------

  


  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { lightGrey, darkGrey, chitRedDark, mediumLightGrey,chitBlueDull, veryLightGrey, chitOrangeMedium, mediumGrey, chitOrangeLight, chitBurgandy} from '../../../../../styles/colors'

import { selectCategories } from '../../../../../app/redux/categoryRedux/sam_categorySlice'

import { unformattedUTCtoDate, DatetoUTC} from '../../../../../app/helpers/dateHelper'
import { ascendSorter, descendSorter} from '../../../../../app/helpers/commonHelpers'


import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'


import{ 
  // selectSpotlights, 
  // selectFilteredParentSpotlights,
  // selectFilteredCompletedSpotlights,
  // selectFilteredBegunSpotlights,
  // selectFilteredInactiveSpotlights,
  // selectFilteredUnCompletedSpotlights

 } from '../../../../../app/redux/personalChitRedux/sam_personalChitSlice'



import SliderComponent from '../../../../../common_components/SliderComponent'



// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------
const OrderWrapper= styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  fontSize: '.8em',

  margin: '8px 0 8px 0'

})

const DisplayWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
  borderTop: '2px solid grey',
  
})


const StaticWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   
  color: 'black',
  
  
  
  width: '100%',
  height: '2rem' ,
  fontSize: '.95rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  border: '1px solid #F6F7F8', 
  backgroundColor: veryLightGrey,
    '&:hover' : {
      backgroundColor: 'white',
      
    },


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})
const StaticWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
   
  color: 'white',
  backgroundColor: ' #606062 ',
   
  

  width: '100%',
  height: '2rem' ,
  fontSize: '.95rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',



  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const CategoriesWrapper= styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  marginTop: '5px',
  maxHeight: '65vh' ,
  overflowY: 'auto',
  paddingBottom: '3px',

  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})

const CategoryWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',

  cursor: 'pointer',
  borderRadius: '0',
    '&:hover' : {
      backgroundColor: veryLightGrey,
      
    },
  })

  
const CategoryWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
  width: '100%',
  height: '1.7rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  color: 'white',
  backgroundColor: mediumGrey,


  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const NoneMessage= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1.5rem 0',
  width: '80%',
  height: '8rem',
  backgroundColor: 'white',
  marginTop: '3rem',
  borderRadius: '10px',
  textAlign: 'center',
  color: chitBurgandy,



  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
   
  },
  
})
// =======================================================

function PersonalNav() {
  
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let match = useParams()
  let displayId = match.id
  // --- define whether calendar or ledger display
  let initialStatus = useSelector(selectStatus)
  let personalView = initialStatus.view.chit.display

  const[display, setDisplay] = useState(personalView)
  useEffect(()=>{
    setDisplay(personalView)

  }, [personalView])



  //  --- get all categories --------

  const allCategories = useSelector(selectCategories)



  const [categoryArray, setCategoryArray] = useState(allCategories)
  useEffect(() => {
    setCategoryArray(allCategories)
  }, [allCategories])

  const [arrayOrder, setArrayOrder] = useState(false)

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)

  }

  console.log('[PersonalChitNav] arrayOrder is', arrayOrder)

    
  const handleChangeCategory = (evt) => {
    let newCategory = evt.currentTarget.id
    navigate(`/sample/personalChits/${newCategory}`)
 
    dispatch(updateStatusView({
      pageType: 'chit',
      pageView: display,
      type: 'personalChits',
      id: newCategory
    }))
  }

// ##################  TEMP VARIABLES ###########################
let stateCategoryId = 'temp'
// let categoryArray = [
//   {id:  "1", title: 'tempDiet' } ,
//   {id:  "2", title: 'tempExercise' } ,
//   {id:  "f", title: 'tempEtc' } ,
// ]

// #########################################################


    // 3_ Map the people for display

    const displayCategories =categoryArray.map((category, index) => {


      let name =category.category
  
      
    /* func chooseDisplayType ---------------------------------
       desc: css changes highlight of person selected
    ---------------------------------------------------*/
    const chooseDisplayType =()=>{
      if(displayId !== category.id){
        console.log('[ whePERSONAL NAV]re ]@@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log('[ PERSONAL NAV] stateCategoryId ', stateCategoryId);
  console.log('[ PERSONAL NAV] category.id ', category.id);
      return(

        
  
        <CategoryWrapper elevation={1}
          key = {index} 
          id = {category.id}
          onClick = {(evt)=>{
            handleChangeCategory(evt)
          }}
        >
               {name}
              </CategoryWrapper>
        
  
      )}
        
      if(displayId === category.id){
  
        return(
  
          <CategoryWrapperSelected elevation={1}
            key = {index} 
            id = {category.id}
            onClick = {(evt)=>{
              handleChangeCategory(evt)
            }}
          >
                 {name}
                </CategoryWrapperSelected>
          
    
        )}   
          }
          
      return chooseDisplayType()
  
  
      }) // end function displayCategory
  
  



// --- Main Return ----------------
  return (
    <>
  { allCategories.length ===  0 && <NoneMessage> 
Create a new Personal Chit Category
 </NoneMessage> }

 { allCategories.length > 0 && <> 

      {stateCategoryId !== 'milestones' &&
        <StaticWrapper elevation={1}
          id='milestones'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          Milestones Only
        </StaticWrapper>

      }
      {stateCategoryId === 'milestones' &&
        <StaticWrapperSelected elevation={1}
          id='milestones'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          Milestones Only
        </StaticWrapperSelected>

      }

      {stateCategoryId !== 'work' &&
        <StaticWrapper elevation={1}
          id='work'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          Work Only
        </StaticWrapper>

      }
      {stateCategoryId === 'work' &&
        <StaticWrapperSelected elevation={1}
          id='work'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          Work Only
        </StaticWrapperSelected>

      }
      <OrderWrapper>  
 <div>categories:</div>
    

        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='desc'
          rightLabel='asc'
        />

      </OrderWrapper>
      <DisplayWrapper>
       
        <CategoriesWrapper>
        {displayCategories}
        </CategoriesWrapper>
      </DisplayWrapper>

       </>
      } 
    </>
    

  ) // end main Return
}// end PersonalNav

export default PersonalNav
