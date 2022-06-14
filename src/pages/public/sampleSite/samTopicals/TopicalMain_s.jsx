/* function TopicalsMain(props) -------------------
       parent: sampleSite/Topicalss_s

  Holds Topicals,

  parent: Topicals - pages/public/sampleSite/samSpots/Topicals
------------------------------------*/

import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue, chitBurgandy} from '../../../../styles/colors'

import { useParams, useNavigate } from 'react-router-dom'

import TopicalHeader from './TopicalHeader_s'
// import TopicalDetail from './TopicalsContent_s'

import Topical from './Topical_s'


import{ 
  selectStatus,
 
} from '../../../../app/redux/statusRedux/sam_statusSlice'
// import TopicalsTaskForm from '../samForms/TopicalsTaskForm_s'



//  ---- Material Ui ------------------

import Paper from '@mui/material/Paper'



import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// ====================================================

function TopicalMain(props) {
  let match = useParams()
  let urlId = match.id
 

  // console.log('@@@ [TopicalMAIN]- params topicalPage' , topicalPage)

  let status = useSelector(selectStatus)

  let topicalFormDisplay = status.view.topical.sectionId
  let statusId = status.view.topical.id
 

  const [topicalId, setTopicalId] = useState(statusId)
  useEffect(()=>{
    setTopicalId(statusId)

  },[statusId])

  const [arrayOrder, setArrayOrder] = useState(false)

  const handleSwitchState = (newState) => {
    setArrayOrder(newState)
    // console.log('[Inside Spotlight Nav] new state is', newState)
  }


  return (
    <OuterContainer>

     {/* --- New Log Icon prssed --- puts 'newLog' in URL id param ---------*/}

     {urlId === 'newTopical' &&
        <>

          {/* <LogHeader /> */}

          <MainWrapper>

            <HeaderWrapper>New Log</HeaderWrapper>

            <Container>

              <FormContainer>
                  {/* <LogForm />   */}
                  <div> PUT TOPICAL FORM HERE</div>
                  
                  </FormContainer>

            </Container>

          </MainWrapper>

        </>
  
      } 
  {urlId !== 'newTopical'  &&
        <>
    <TopicalHeader/>
      <MainWrapper>
    
      


          

          <Topical/>



      </MainWrapper>
      
      </>}
    </OuterContainer>
  )
}// end func TopicalMain


 export default TopicalMain

 
// -----------------------------------------------------------------

const OuterContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
position: 'relative',

  backgroundColor: 'white',
 

  // minHeight: '10rem',
  // height: '90%',
 width: '100%',
 height: '100%',
 overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },


})


const MainWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
position: 'relative',

  backgroundColor: 'white',
 

  // minHeight: '10rem',
  // height: '90%',
 width: '100%',
 height: '100%',
 overflow: 'auto',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },


})



const FormWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  
backgroundColor: 'lightgrey',
  width: '95%',
  height: '8rem',
  paddingBottom: '6rem',
 


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})
 

 
const Container= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',


  color: 'charcoal',
  width: '95%',

  // minHeight: '10rem',
  // height: '90%',
  margin: '0 0 5% 0',

  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },

  backgroundColor: 'white',


})


const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  
  backgroundColor: 'lightGrey',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})
const HeaderWrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '.2rem  0 2rem 0',
  padding: '0 0 .5rem 2rem',
  height: '4rem',
  color: chitBurgandy,
  fontSize: '1.3rem',


  width: 'calc(98% - 2rem)',
 


  [theme.breakpoints.down('sm')]: {
    // height: '1.25rem',

  },
})