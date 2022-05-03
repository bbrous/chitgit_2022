/* function LogMain(props) -------------------
       parent: sampleSite/Plans_s

  Holds Logs, Section Form and sections ... includes  
  (a) info icon - to get help
  (a) Header - to get help
   
  (sec c) Section Form()
  (sec d) Sections
 

------------------------------------*/


import React , {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import{chitOrange, chitLightPink, veryLightGrey, backgroundBlue, chitBurgandy} from '../../../../styles/colors'

import{ selectLogs
  // selectSpotlightTaskArray
  
} from '../../../../app/redux/logRedux/sam_logsSlice'

import { closeLogForm, selectStatus } from '../../../../app/redux/statusRedux/sam_statusSlice'

import Log from './Log_s'
import LogSectionForm from '../samForms/LogSectionForm_s'
import LogForm from '../samForms/LogForm_s'
import LogHeader from './LogHeader_s'
import SliderComponent from '../../../../common_components/SliderComponent'
//  ---- Material Ui ------------------

import AddCircleIcon from '@mui/icons-material/AddCircle'
import Paper from '@mui/material/Paper'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------



// ===========================================

function LogMain(props) {

  let match = useParams()
  let urlId = match.id

  let status = useSelector(selectStatus)

  let logFormDisplay = status.view.log.sectionId
  let statusId = status.view.log.id
 

const [logId, setLogId] = useState(statusId)
useEffect(()=>{
setLogId(statusId)

},[statusId])

// console.log('[Log Main] logId', logId)





  

  return (
    <OuterContainer> 

{/* --- New Log Icon prssed --- puts 'newLog' in URL id param ---------*/}

      {urlId === 'newLog' &&
        <>

          {/* <LogHeader /> */}

          <MainWrapper>

            <HeaderWrapper>New Log</HeaderWrapper>

            <Container>

              <FormContainer>  <LogForm />  </FormContainer>

            </Container>

          </MainWrapper>

        </>
  
      }

{/* --- Something other than 'newLog' in URL id param ------------- */}

      {urlId !== 'newLog'  &&
        <>
          <LogHeader />

          <MainWrapper>




            <Container>

            {/* --- if Redux store has a sectionId,
                   Show new log section form on top of other logs
                    other wise - only show other logs
            */}

              {logFormDisplay === 'new' &&
                <FormContainer>  <LogSectionForm />  </FormContainer>
              }
              <SectionsContainer>
                <SectionWrapper>

                  <Log />
                </SectionWrapper>

              </SectionsContainer>



            </Container>

          </MainWrapper>
        </>}
    </OuterContainer>
    
  )
}

export default  LogMain





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
const MainWrapper= styled('div')({

  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // backgroundColor: 'green',
  width: '100%',
  height: '100%',

overflow: 'auto',
  [theme.breakpoints.down('sm')] : {
    // width: '100%'
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



const LeftTopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: '1%',
  color: backgroundBlue,
  fontSize: '1.2rem',
// backgroundColor: 'yellow',
  width: '33%',
  height: '3rem',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

})

const RightTopWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '33%',
  height: '3rem',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

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

const SectionsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  minHeight: '13rem',
  // backgroundColor: 'yellow',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const NewWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  
// backgroundColor: 'yellow',
  width: '99%',
  height: '3rem',
  paddingLeft: '2px',
 
  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})

const SectionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  

  width: '100%',
  minHeight: '13rem',
  // backgroundColor: 'orange',

  // minHeight: '10rem',
  // height: '90%',

  
  // overflowY: 'hidden',

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',

  },

 

})


const AddCircleIconWrapper= styled(AddCircleIcon)({

  color: 'grey',
  fontSize : '1.7rem',
  
  '&:hover' : {
    backgroundColor: 'lightGrey',
    borderRadius: '50px',
  },

})
 
