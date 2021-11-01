import React, {useState, useEffect}  from 'react'
import {useHistory, useRouteMatch, match} from 'react-router-dom'
import {connect, useSelector, useDispatch} from 'react-redux'

import {sample_selectStatus} from '../../../app/redux/statusRedux/sam_selectors_Status'

import SampleNav from '../../navComponents/publicNav/sampleNav/Sample_nav'
import HeaderMain from './samComponents/Header_main'
import IconNav from '../../navComponents/publicNav/sampleNav/IconNav_public'

import Modal from './samComponents/Modal.jsx'

// imports for main - pages Chits, Spotlights, etc  -----------------

import ChitsMain from './samChits/Chits_s'
import TwoPartyMain from './samChits/TwoParty_s'
import PersonalMain from './samChits/Personal_s'
import WorkMain from './samChits/Work_s'
import Spotlights from './Spotlights_s'
import NotesMain from './samNotes/Notes_s'
import Logs from './Logs_s'

// imports for side bar for Chits, Spotlights, etc. ------------------

import TwoPartyNav from '../../navComponents/publicNav/sampleNav/sideBarNav/TwoPartyNav_s'
import PersonalNav from '../../navComponents/publicNav/sampleNav/sideBarNav/PersonalNav_s'
import WorkNav from '../../navComponents/publicNav/sampleNav/sideBarNav/WorkNav_s'
import SpotlightNav from '../../navComponents/publicNav/sampleNav/sideBarNav/SpotlightNav_s'
import NoteNav from '../../navComponents/publicNav/sampleNav/sideBarNav/NoteNav_s'
import LogNav from '../../navComponents/publicNav/sampleNav/sideBarNav/LogNav_s'


import {veryDarkBlue, chitOrange,veryLightGrey, chitRedDark, chitOrangeLight,chitBlueDull,backgroundBlue, bodyBlue} from '../../../styles/colors'

import Paper from '@material-ui/core/Paper'; 
import AddCircleIcon from '@material-ui/icons/AddCircle'

import ForwardIcon from '@material-ui/icons/Forward';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

import {styled, createMuiTheme}  from '@material-ui/core/styles'
const theme = createMuiTheme(); // allows use of mui theme in styled component

/* Main_s

     Main_s chooses views from URL 
     Two params from the URL in specific... xxx/pageView/detailId

     It also holds the empty side panel,  and
     the empty content wrapper


*/




// --------------------------------------
const BodyWrapper= styled('div')({
  display: 'block',
  
  // backgroundColor: bodyBlue,
  height: '100vh',

  backgroundImage: 'linear-gradient(to  bottom, #3B30CC, #1B1625, #040952)',
  overflow: 'hidden',


})




const MainWrapper= styled('div')({

  display: 'block',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '0 auto',
  maxWidth: '960px',
  minHeight: '600px',
  height: '100%',

  [theme.breakpoints.down('sm')] : {
    
  },

})


const TopSpacer= styled('div')({
  display: 'block',
  // backgroundColor: 'red' ,
  width: '100%',
  height: '4.3rem',

  [theme.breakpoints.down('sm')] : {
    height: '2.5rem',
  },

})

//  ---- phone Navigation panels -------


const SideNavWrapper= styled('div')({

  display: 'none',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  position: 'absolute',
  zIndex: '55',

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',

    width: '3rem',
  
    height: '100%',
    color: 'white',
    background: veryDarkBlue
  },
  
  [theme.breakpoints.down('xs')] : {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',

    width: '3rem',
  
    height: '100%',
    color: 'white',
    background: veryDarkBlue
  },
})



const BottomNavWrapper= styled('div')({

  display: 'none',

  backgroundColor: veryDarkBlue,

  [theme.breakpoints.down('xs')] : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100vw',
    height: '3rem',

    zIndex: '10000',

    color: 'white',

  },



})

const SidePanelWrapper= styled('div')({
  display: 'block',
  position: 'absolute',

  backgroundColor: 'white',
  width: '15rem',
  height: '100%',
  paddingTop: '.5rem',

  zIndex: '31',


  [theme.breakpoints.down('sm')] : {
    
    left: '3rem',
    '&.hide' : {
      left: '-12rem'
    },
  
    '&.show' : {
      left: '3rem'
    },
    
  },

  
  
  [theme.breakpoints.down('xs')] : {
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

const Handle= styled('div')({

  display: 'none',
  position:'absolute',
  width: '1.5rem',
  height: '3rem',
  borderRadius: '0 5px 5px 0',
 

  [theme.breakpoints.down('sm')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    right: '-1.5rem',
    top: '3rem',

    

    background: chitOrange
  },
  

})









const BottomNavSpacer = styled('div')({

  display: 'none',
  height: '3rem',


  [theme.breakpoints.down('sm')] : {
    display: 'block'
  },

  [theme.breakpoints.down('xs')] : {
    display:  'none',

  }

})



// ----- Content Area here -------------

const MainContentWrapper= styled('div')({

  display: 'block',
  height: '95%',


  // paddingTop: '3rem',
  paddingLeft: '3rem',
  '&::-webkit-scrollbar': {
    width: '0.75em' 
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.4)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.3)',
    border: '2px solid rgba(0,0,0,.1)',
    borderRadius: '5px'
  },
  overflow: 'auto',


  [theme.breakpoints.down('sm')] : {
    // paddingTop: '1.5rem',
    paddingLeft: '0',
    height: '90%',

  },

  [theme.breakpoints.down('xs')] : {
  
    paddingLeft: '3rem',

  }

})



const ContentArea = styled('div')({

  display: 'block',
  marginLeft: '15rem',
  height: '100%',
  // paddingTop: '.5rem',
  


  [theme.breakpoints.down('sm')] : {
    // display: 'block'
    marginLeft: '3rem',
  },

  [theme.breakpoints.down('xs')] : {
    marginLeft: '0',

  }

})




// ===================================

function Main_s(props) {
  let match = useRouteMatch()
  const modalShow = props.status.modalDisplayed
  // const modalShow = useSelector(state => state.status.modalDisplayed)
  let page, detail
  
  // let brad = 
  
  if(!match.params.pageView){page = 'twoParty'}else{page = match.params.pageView}
  console.log('[Features  page] route page is :  ', page)

  if(!match.params.detailId){detail = 'booooolahhhh'}else{detail = match.params.detailId}
  console.log('[Features  page] route detailId is :  ', detail)

// ----side Panel logic ----- 


const [viewSidePanel, setViewSidePanel] = useState('hide');
const handleSidePanelChange = (evt)=>{
  evt.persist()
  const newSidePanelView = (viewSidePanel==='show') ? 'hide': 'show'
  setViewSidePanel(newSidePanelView)
}



  return (
    <BodyWrapper>  
{modalShow && <Modal />}
      <MainWrapper>

      <HeaderMain />
      <TopSpacer />
      
     

        <SideNavWrapper>
          <IconNav/> 
        </SideNavWrapper>   

        <MainContentWrapper>


{/* #########   SIDE PANEL  ############################### */}
        
<SidePanelWrapper className = {viewSidePanel}>


      <Handle onClick={handleSidePanelChange}>

        {viewSidePanel === 'hide' &&
          <KeyboardArrowRightIcon style={{ color: 'white' }} />
        }

        {viewSidePanel === 'show' &&
          <KeyboardArrowLeftIcon style={{ color: 'white' }} />
        }
      </Handle>




          {page === 'twoParty' &&  <TwoPartyNav />  }
          {page === 'personal' &&  <PersonalNav />  }
          {page === 'work' &&  <WorkNav  />  }
          {page === 'notes' &&  <NoteNav/>  }
          {page === 'logs' &&  <LogNav/>  }
          {page === 'spotlights' &&  <SpotlightNav/>  } 



</SidePanelWrapper>
{/* #########   SIDE PANEL  ############################### */}

<ContentArea>

      {page === 'spotlights' &&
            <Spotlights />
          }

          {page === 'twoParty' &&
            <TwoPartyMain />
          }

          {page === 'personal' &&
            <PersonalMain />
          }

          {page === 'work' &&
            <WorkMain />
          }



          {page === 'notes' &&
            <NotesMain />
          }


          {page === 'logs' &&
            <Logs />
          }
          </ContentArea>


<BottomNavSpacer/>
</MainContentWrapper>

</MainWrapper>

<BottomNavWrapper> 
<IconNav/> 
</BottomNavWrapper> 

</BodyWrapper>
  )
}

// export default Main_s



const actions = {
  // // changeDisplaySpotlight,
  // changeSpotlightCompletedStatus,
  // changeDisplaySpotlight
}

const makeMapStateToProps = state => ({
  status: sample_selectStatus(state)
});






export default connect(makeMapStateToProps, actions)(Main_s)
