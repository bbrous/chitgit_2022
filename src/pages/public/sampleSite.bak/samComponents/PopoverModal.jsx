/* --- PopoverModal ----

In Sample - the popover gives the initial explanation about
what the app tool is supposed to do...
  ie. Spotlights are a decomposition tool
      Chronicles are topic oriented journal
      Logs are a 2 party oriented journal
      etc.
  parent: Spotlights - pages/public/sampleSite/samSpots/Spotlights
*/


import React, { useRef, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import{  chitBlueDull, } from '../../../../styles/colors'
// import{closeModal} from '../../app/redux/actions/mainActions'

import{  changeStatusInitialMessage} from '../../../../app/redux/statusRedux/sam_statusSlice'
 
 
 
import Paper from '@mui/material/Paper'; 
import InfoIcon from '@mui/icons-material/Info'


import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const ModalWrapper= styled('div')({
  display: 'block',
 
  position: 'absolute',
  backgroundColor: 'black',
  height: '100%',
  width: '100%',

  
  opacity: '.75',
zIndex: '66'

})

const ModalDisplay = styled(Paper)({
  display: 'block',

  position: 'absolute',
  top: '4rem',
  left: '50%',
  padding: '2rem 1rem 1.5rem 1rem',
  backgroundColor: 'white',
  minHeight: '30%',
     width: '60%',
  borderRadius: '5px',
  
  transform: 'translate(-50%)',
  zIndex: '166',
  
  [theme.breakpoints.down('xs')] : {
    //  left: '.5rem',
     
  },
 

})

const Close = styled('div')({

  display: 'block',
  width: '3rem',
  height: '1.5rem',
  position: 'absolute',
  textAlign: 'center',
  textDecoration: 'underline',
  top: '5px',
  right: '10px',
  color: 'red',
  cursor: 'pointer',
  borderRadius: '5px',

    '&:hover' : {
      backgroundColor: 'lightgrey'
    }

})
 
const Content = styled('div')({

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  paddingBottom: '.5rem',
  fontSize: '.85rem',
  '& div': {marginBottom: '.5rem'}
 

})

const Info= styled(InfoIcon)({

  height: '3rem',
  color: 'grey',
  margin: '.5rem .5rem',


  [theme.breakpoints.down('sm')] : {
    // height: '1.25rem',
    // backgroundColor: 'red'
  },
})
const MoreInfo = styled('div')({

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '2rem',
  color: chitBlueDull
 

})

// ===========================================

function PopoverModal(props) {
  const dispatch = useDispatch()
  let pageType = props.pageType
  const wrapperRef = useRef(null);

  function handleClickOutside(event) {

    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      dispatch(changeStatusInitialMessage({pageType: pageType}))
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

// ---Return -----------------------------------------------------

  return (
    <>
      <ModalWrapper />
      <ModalDisplay ref={wrapperRef}>
        <Close onClick={() =>
        dispatch(changeStatusInitialMessage({pageType: pageType}))
        } >Close</Close>


        {pageType === 'spotlights' &&
          <Content>
            <div> ChitGit <em>Spotlights</em> is a "decomposition" tool. </div>
            <div>
              As used here, a "decomposition" tool is a cross between a to-do list and a project manager.

              The tool is designed  to allow you to break down a complex goal, objective or activity
              into smaller, more manageable chunks...
              and then to place those chunks in the order that they
              are  to be executed  to complete the prmary undertaking.
            </div>
            <MoreInfo> Get detail info from <Info />  at top of spotlights page </MoreInfo>
          </Content>
        }
      </ModalDisplay>
    </>
  )
}



export default PopoverModal
