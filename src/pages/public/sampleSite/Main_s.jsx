/*---- File - sampleSite/Main_s.jsx
    Main page of the sample site

     Main_s chooses views from URL 
     Two params from the URL in specific... xxx/pageView/detailId

     It also holds the empty side panel,  and
     the empty content wrapper

    Contains children: 
       Header_main
       New_s - button to launch modal with new Spotlight form
       Modal (hidden on load)
       Side panel Nav children - becomes hidden on phones 
           chitsNav_s, 
           spotlightNav_s, 
           etc.
       Colored Header with Info Icon
       Main Component Wrapper children
           reports_s,  
           chits_s, 
           spotlights_s, etc

      parent- Sample - src/pages/public/sample
*/


import React, { useState }  from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch,} from 'react-redux'

import {chitDarkLavendar, chitOrangeMedium,veryLightGrey, chitLightGreen, chitBright, chitLightPink, chitDullYellow, mediumGrey, lightGrey} from '../../../styles/colors'

import {capitalizeFirstLetter} from '../../../app/helpers/commonHelpers'
import{  openModal, selectStatus} from '../../../app/redux/statusRedux/sam_statusSlice'


import HeaderMain from './samComponents/Header_main'

// imports for main - pages Chits, Spotlights, etc  -----------------

import New from './samComponents/New_s'
import InfoIcon from './samComponents/Info_s'
import Chits from './samChits/Chits_s'

import Reports from './samReports/Reports_s'
import Journal from './samJournal/Journal_s'
import Logs from './samLogs/Logs_s'
import Topicals from './samTopicals/Topicals_s'
import Inspire from './samInspires/Inspires_s'
import Spotlights from './samSpots/Spotlights_s'

// imports for SideNav - pages Chits, Spotlights, etc  -----------------

import SpotlightNav from '../../navComponents/publicNav/sampleNav/sideBarNav/SpotlightNav_s'

import TwoPartyNav from '../../navComponents/publicNav/sampleNav/sideBarNav/TwoPartyNav_s'
import PersonalNav from '../../navComponents/publicNav/sampleNav/sideBarNav/PersonalNav_s'
import WorkNav from '../../navComponents/publicNav/sampleNav/sideBarNav/WorkNav_s'

import LogNav from '../../navComponents/publicNav/sampleNav/sideBarNav/LogNav_s'
import TopicalNav from '../../navComponents/publicNav/sampleNav/sideBarNav/TopicalNav_s'
import ReportsNav from '../../navComponents/publicNav/sampleNav/sideBarNav/ReportsNav_s'
import JournalNav from '../../navComponents/publicNav/sampleNav/sideBarNav/JournalNav_s'
import Modal from './samComponents/Modal_s.jsx'

// -------Material UI 

 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------


// =====================================

function Main_s(props) {
  let match = useParams()
  let dispatch = useDispatch

  const status = useSelector(selectStatus)
  const modalShow = status.modal.modalDisplayed
  let page, formattedPage
  page = match.pageView

  // console.log('[ PAGE in  MAIN ] page ', page);

  switch(page){

    case 'personalChits' : 
      formattedPage = 'Personal Chits'
      break

      case 'twoPartyChits' : 
      formattedPage = 'Two Party Chits'
      break

      case 'workChits' : 
      formattedPage = 'Work Chits'
      break
      
      
    default: formattedPage = capitalizeFirstLetter(page)
  }

  // console.log('MAIN S -- params ', match )
  



  


/*
   --- each page (chits, logs etc) has a different header color
   --- headerColor logic determines which color is displayed
   --- based on page variable in URL
*/
  const headerColor = (page) => {
    let background
     
    if (page === 'personal') { 
       background = {backgroundColor: chitDarkLavendar, fontColor: 'white'} }
    if (page === 'twoPartyChits') {
      background = {backgroundColor: chitDarkLavendar, fontColor: 'white'} }
    if (page === 'personalChits') {
      background = {backgroundColor: chitDarkLavendar, fontColor: 'white'} }
      if (page === 'workChits') {
        background = {backgroundColor: chitDarkLavendar, fontColor: 'white'} }
    if (page === 'logs') { 
      background =
      {backgroundColor: chitLightPink, fontColor: 'black'} }

    if (page === 'journal') { 
      background =
          {backgroundColor: chitLightGreen, fontColor: 'black'} }
    if (page === 'reports') { 
      background =
          {backgroundColor: chitBright, fontColor: 'black'} }

    if (page === 'topicals') {
      background =
          {backgroundColor: chitDullYellow, fontColor: 'black'} }

    if (page === 'spotlights') { 
      
      background =
          {backgroundColor: chitOrangeMedium, fontColor: 'black'} }


    return background
  }

  // ----side Panel logic ----- 


  const [viewSidePanel, setViewSidePanel] = useState('hide');
  const handleSidePanelChange = (evt) => {
    evt.persist()
    const newSidePanelView = (viewSidePanel === 'show') ? 'hide' : 'show'
    setViewSidePanel(newSidePanelView)
  }

  return (
    <BodyWrapper>

      {modalShow && <Modal />}

      <HeaderMain />
      {/* <TopSpacer /> */}


      <MainWrapper>

        <HeaderWrapper style={{ 
          backgroundColor: headerColor(page).backgroundColor, 
          color: headerColor(page).fontColor
          }}>
          <Header> {formattedPage}   </Header>
<InfoIconWrapper>


          <InfoIcon
          
          // onClick={() => openModal('help', page)} 
          />
</InfoIconWrapper>
        </HeaderWrapper>
        <MainContentWrapper>


          {/* #########   SIDE PANEL  ############################### */}

          <SidePanelWrapper className={viewSidePanel}>


            <Handle onClick={handleSidePanelChange}>

              {viewSidePanel === 'hide' &&
                <KeyboardArrowRightIcon style={{ color: 'white' }} />
              }

              {viewSidePanel === 'show' &&
                <KeyboardArrowLeftIcon style={{ color: 'white' }} />
              }
            </Handle>




            {/* {page === 'twoParty' &&  <TwoPartyNav />  }
              {page === 'personal' &&  <PersonalNav />  }
              {page === 'work' &&  <WorkNav  />  }
              {page === 'notes' &&  <NoteNav/>  }
              {page === 'logs' &&  <LogNav/>  }

              */}

            <New />
        
            {page === 'spotlights' && <SpotlightNav />}
            {page === 'logs' &&  <LogNav/>  }
            {page === 'journal' &&  <JournalNav/>  }
            {page === 'topicals' &&  <TopicalNav/>  }
            {page === 'reports' &&  <ReportsNav/>  }

            {page === 'personalChits' &&  <PersonalNav/>  }
            {page === 'twoPartyChits' &&  <TwoPartyNav/>  }
            {page === 'workChits' &&  <WorkNav/>  }
          </SidePanelWrapper>

         

          <ContentArea>

          {page === 'twoPartyChits' &&
              <Chits />
            }

            {page === 'workChits' &&
              <Chits />
            }

            {page === 'personalChits' &&
              <Chits />
            }

            {page === 'reports' &&
              <Reports />
            }

            {page === 'journal' &&
              <Journal />
            }

            {page === 'logs' &&
              <Logs />
            }
            {page === 'topicals' &&
              <Topicals />
            }
            {/* 
{page === 'inspire' &&
                <Inspire />
              }    */}

            {page === 'spotlights' &&
              <Spotlights />
            }


          </ContentArea>

        </MainContentWrapper>

      </MainWrapper>

    </BodyWrapper>


  ) // end return
} // --- end func Main_s


export default Main_s

// ---Styles ---------------------------------------
const BodyWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  // backgroundColor: bodyBlue,
  height: '100vh',
  width: '100vw',
  backgroundColor: veryLightGrey,
  // backgroundImage: 'linear-gradient(to  bottom, #3B30CC, #1B1625, #040952)',
  overflow: 'hidden',


})




const MainWrapper= styled('div')({

  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',
overflow: 'hidden',

  height: 'calc(100% - 3.4rem)',
  backgroundColor: veryLightGrey,
  

  [theme.breakpoints.down('md')] : {
    width: '100%'
  },

})
// ----- Content Area here -------------



const MainContentWrapper= styled('div')({

  display: 'block',
  height: 'calc(100% - 2rem)',
  position: 'relative',

  // paddingTop: '3rem',
  
 
  


  [theme.breakpoints.down('sm')] : {
    // paddingTop: '1.5rem',
    paddingLeft: '0',
    // height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    // paddingLeft: '3rem',

  }

})



const ContentArea = styled('div')({

  display: 'flex',
  marginLeft: '15rem',
  height: '100%',
overflow: 'auto',
position: 'relative',

  // paddingTop: '.5rem',
   
 

  [theme.breakpoints.down('md')] : {
    // display: 'block'
    marginLeft: '2rem',
  },

  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',

  }

})


// ---- Side Panel CSS

const SidePanelWrapper= styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',

  backgroundColor: 'white',
  width: '15rem',
  height: '100%',
  paddingTop: '3px',

paddingBottom: '2rem',
  zIndex: '31',


  [theme.breakpoints.down('md')] : {
    
    left: '3rem',
    '&.hide' : {
      left: '-15rem',
      borderRight: '4px solid #CFD0D1'
    },
  
    '&.show' : {
      left: '0rem',
      borderRight: '2px solid #CFD0D1'
    },
    
  },

  
  
  [theme.breakpoints.down('md')] : {
    marginLeft: '0',
    // display: 'none'

    '&.hide' : {
      left: '-15rem'
    },
  
    '&.show' : {
      left: '0rem'
    },
  },

})

const Handle = styled('div')({

  display: 'none',
  position: 'absolute',
  width: '1.5rem',
  height: '3rem',
  borderRadius: '0 5px 5px 0',


  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    right: '-1.5rem',
    top: '0',



    background: 'grey'
  },


})

// --- Side Panel Header



const HeaderWrapper = styled('div')({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '28px',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  margin: '0 auto 3px auto',

  [theme.breakpoints.down('sm')]: {
    borderRadius: 0
  }


})

const Header = styled('div')({

  display: 'block',
  fontSize: '1.1rem',

  // color: chitRedDark




})


const InfoIconWrapper= styled('div')({
   
 

  position: 'absolute',
  top: '2px',
  right: '24px',
  
  '&:hover' : {
    color: lightGrey,
    cursor: 'pointer'
  },

  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
