/* function PersonalNav(props) -------------------

  Side bar navigation for Personal Chits


  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/

import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { lightGrey, veryLightGrey,   mediumGrey,   chitBurgandy, chitOrange} from '../../../../../styles/colors'

import { selectCategories } from '../../../../../app/redux/categoryRedux/sam_categorySlice'


import { ascendSorter, descendSorter} from '../../../../../app/helpers/commonHelpers'


import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'


import SliderComponent from '../../../../../common_components/SliderComponent'



// material UI imports ---------

import Paper from '@mui/material/Paper'; 

import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component


// =======================================================

function PersonalNav() {
  
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let match = useParams()


  // --- displayId for setting background color of Nav Link ---

  let displayId = match.id

  // --- define whether calendar or ledger display

  let initialStatus = useSelector(selectStatus)
 
  let personalView = initialStatus.view.personalChit.display
 
  const [display, setDisplay] = useState(personalView)
  useEffect(() => {
    setDisplay(personalView)

  }, [personalView])
  // console.log('[ PersonalNav ] initialStatus ', initialStatus);
  // console.log('[ PersonalNav ] personalView ', personalView);
   //  --- get and update all categories when new category added  ---  

  const allCategories = useSelector(selectCategories)

  const [categoryArray, setCategoryArray] = useState(allCategories)
  useEffect(() => {
    setCategoryArray(allCategories)
  }, [allCategories])


    /* --- set the order for filtered categories mapped (arrayOrder)  ---
    Default is latest first
    Uses Material UI's  slider component (boolean)
    Order is determined by last time the spotlight was visited
  */

  const [arrayOrder, setArrayOrder] = useState(true)

  let ascendingCategories= ascendSorter(categoryArray, 'category')
  let descendingCategories= descendSorter(categoryArray, 'category')

  let sortedCategories
  if (arrayOrder === false) { sortedCategories= ascendingCategories} else if (arrayOrder === true) { sortedCategories= descendingCategories}

// console.log('[ PersonalNav ] sortedCategories ', sortedCategories);

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)

  }

  // console.log('[PersonalChitNav] arrayOrder is', arrayOrder)

    
  const handleChangeCategory = (evt) => {
    let newCategory = evt.currentTarget.id
    navigate(`/sample/personalChits/${newCategory}`)
 
    dispatch(updateStatusView({
      pageType: 'personalChit',
      pageView: display,
     
      id: newCategory
    }))
  }




    // --- Map the categories for display in side panel

    const displayCategories =sortedCategories.map((category, index) => {


      let name =category.category
  
      
    /* func chooseDisplayType ---------------------------------
       desc: css changes highlight of person selected
    ---------------------------------------------------*/
    const chooseDisplayType =()=>{
      if(displayId !== category.id){
       
  // console.log('[ PERSONAL NAV] category.id ', category.id);

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
    <Wrapper>
  { allCategories.length ===  0 && <NoneMessage> 
Create a new Personal Chit Category
 </NoneMessage> }
 

 { allCategories.length > 0 && <> 

      {displayId !== 'milestones' &&
        <StaticWrapper elevation={1}
          id='milestones'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          All Milestones Only
        </StaticWrapper>

      }
      {displayId === 'milestones' &&
        <StaticWrapperSelected elevation={1}
          id='milestones'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          All Milestones Only
        </StaticWrapperSelected>

      }

      {displayId !== 'workChits' &&
        <StaticWrapper elevation={1}
          id='workChits'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
          Work Chits
        </StaticWrapper>

      }
      {displayId === 'workChits' &&
        <StaticWrapperSelected elevation={1}
          id='workChits'
          onClick={(evt) => {
            handleChangeCategory(evt)
          }}
        >
         Work Chits
        </StaticWrapperSelected>

      }
      <OrderWrapper>  
 <div>Categories</div>
    

        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='a-Z'
          rightLabel='z-A' 
        />

      </OrderWrapper>
      <DisplayWrapper>
       
        <CategoriesWrapper>
        {displayCategories}
        </CategoriesWrapper>
      </DisplayWrapper>

       </>
      } 
    </Wrapper>
    

  ) // end main Return
}// end PersonalNav

export default PersonalNav

// -----------------------------------------------------------------

const Wrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '98%',
  height: '100%',
  padding: '4px 2px 16px 2px',
  marginTop: '4px',
  backgroundColor: 'white',
  overflow: 'auto',

  
  [theme.breakpoints.down('xs')] : {
    // display: 'none', 
  }

})


const OrderWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: '3rem',
  fontSize: '.8em',
  color: chitBurgandy,
  margin: '8px 0 0 0',
  border: '1px solid purple',
  backgroundColor: 'white',
})

const DisplayWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
 
 
})


const StaticWrapper= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'black',
  
  
  cursor: 'pointer',
  width: '100%',
  height: '2rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',
  border: '1px solid #F6F7F8', 
 
    '&:hover' : {
      // backgroundColor: 'white',
        color: chitOrange,
    },


})
const StaticWrapperSelected= styled(Paper)({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
   
  color: 'white',
  backgroundColor: mediumGrey,
   
  

  width: '100%',
  height: '2rem' ,
  fontSize: '.85rem',
  marginTop: '.2rem',
  padding: '0 .5rem',
  borderRadius: '0',


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
      // backgroundColor: veryLightGrey,
      color: chitOrange,
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

  
})
