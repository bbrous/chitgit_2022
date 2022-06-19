
/* function TopicallNav(props) -------------------

  Side bar navigation for Topicals


  parent: Main_s - pages/public/sampleSite/Main_s
------------------------------------*/


import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { lightGrey, veryLightGrey,   mediumGrey,   chitBurgandy, chitOrange, chitOrangeMedium} from '../../../../../styles/colors'

import { selectTopics } from '../../../../../app/redux/topicalRedux/sam_topicsSlice'


import { ascendSorter, descendSorter} from '../../../../../app/helpers/commonHelpers'


import{ updateStatusView, selectStatus } from '../../../../../app/redux/statusRedux/sam_statusSlice'


import SliderComponent from '../../../../../common_components/SliderComponent'



// material UI imports ---------

import Paper from '@mui/material/Paper'; 
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { styled, createTheme} from "@mui/material/styles"
// import {withStyles} from '@mui/styles'
const theme = createTheme(); // allows use of mui theme in styled component





// =========================================

function TopicalNav() {

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let match = useParams()

  // --- displayId for setting background color of Nav Link ---

  let displayId = match.id

    // --- define whether calendar or ledger display

    let initialStatus = useSelector(selectStatus)
 
    let topicalView = initialStatus.view.topical.display
   
    const [display, setDisplay] = useState(topicalView)
    useEffect(() => {
      setDisplay(topicalView)
  
    }, [topicalView])

   //  --- get and update all topics when new topic added  ---  

   const allTopics = useSelector(selectTopics)

   const [topicArray, setTopicArray] = useState(allTopics)
   useEffect(() => {
     setTopicArray(allTopics)
   }, [allTopics])


    /* --- set the order for filtered Topics mapped (arrayOrder)  ---
    Default is latest first
    Uses Material UI's  slider component (boolean)
    Order is determined by last time the spotlight was visited
  */

    const [arrayOrder, setArrayOrder] = useState(false)

    let ascendingTopics= ascendSorter(topicArray, 'topic')
    let descendingTopics= descendSorter(topicArray, 'topic')
  
    let sortedTopics
    if (arrayOrder === false) { sortedTopics= ascendingTopics} else if (arrayOrder === true) { sortedTopics= descendingTopics}
  
  // console.log('[ PersonalNav ] sortedTopics ', sortedTopics);
  
    const handleSwitchState = (newState) => {
      setArrayOrder(newState)
  
    }
  

    
    const handleChangeTopic = (evt) => {
      let newTopic = evt.currentTarget.id
      navigate(`/sample/topicals/${newTopic}`)
   
      dispatch(updateStatusView({
        pageType: 'topical',
        pageView: display,
       
        id: newTopic
      }))
    }

    // --- Map the topics for display in side panel

    const displayTopics =sortedTopics.map((topic, index) => {


      let name =topic.topic
  
      
    /* func chooseDisplayType ---------------------------------
       desc: css changes highlight of person selected
    ---------------------------------------------------*/
    const chooseDisplayType =()=>{
      if(displayId !== topic.id){
       
  // console.log('[ PERSONAL NAV] topic.id ', topic.id);

      return(

        
  
        <TopicWrapper elevation={1}
          key = {index} 
          id = {topic.id}
          onClick = {(evt)=>{
            handleChangeTopic(evt)
          }}
        >
               {name}
              </TopicWrapper>
        
  
      )}
        
      if(displayId === topic.id){
  
        return(
  
          <TopicWrapperSelected elevation={1}
            key = {index} 
            id = {topic.id}
            onClick = {(evt)=>{
              handleChangeTopic(evt)
            }}
          >
                 {name}
                </TopicWrapperSelected>
          
    
        )}   
          }
          
      return chooseDisplayType()
  
  
      }) // end function displayTopic
  
  
  //  === Main Return ==============================

  return (


    <Wrapper>

      {allTopics.length === 0 && <NoneMessage>
        Create a new Topic
      </NoneMessage>}

      { allTopics.length > 0 && <> 



<OrderWrapper>  
 <div>Topics</div>
    

        <SliderComponent
          handleSwitchState={handleSwitchState} //gets new state from child switch
          leftLabel='z-A'
          rightLabel=  'a-Z'
        />

      </OrderWrapper>

      <DisplayWrapper>
      {displayId !== 'junkyard' &&
        <StaticWrapper elevation={1}
          id='junkyard'
          key ='junkyard'
          onClick={(evt) => {
            handleChangeTopic(evt)
          }}
        >
        Junkyard  <StyledViewModuleIcon/> 
        </StaticWrapper>

      }
      {displayId === 'junkyard' &&
        <StaticWrapperSelected elevation={1}
          id='junkyard'
          key ='junkyard'
          onClick={(evt) => {
            handleChangeTopic(evt)
          }}
        >
         JunkYard <StyledViewModuleIcon/>
        </StaticWrapperSelected>

      }
        <TopicsWrapper>
        {displayTopics}
        </TopicsWrapper>
      </DisplayWrapper>
     </> 
     }




    </Wrapper>

  )
}

export default TopicalNav

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

const TopicsWrapper= styled('div')({

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

const TopicWrapper= styled(Paper)({

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

  
const TopicWrapperSelected= styled(Paper)({

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

const StyledViewModuleIcon= styled(ViewModuleIcon)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: chitOrangeMedium,
  marginLeft: '8px',
 

  
})
