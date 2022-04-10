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

      {pageType === 'personalChits' &&
          <Content>
            <div> ChitGit <em>Chits</em> are tokens... <br/>
            Personal Chits are tokens you give to yourself.  Use personal chits to motivate yourself... or track progress towards a goal... or to indicate a personal milestone or accomplishment.
             </div>
                         
             <div>
             There are several colors of personal chits,  each of which serve to indicate a value or weight for the chit. 
            </div>

            <div> 
              When you create your first personal chit, you first create a category.  Subsequent chits you give yourself can be added to that category or to a new category you create.

             </div>


            <MoreInfo> For details click the info icon <Info />  at top of the chits page </MoreInfo>
          </Content>
        }


{pageType === 'twoPartyChits' &&
          <Content>
            <div> Two party Chit Git <em>Chits</em> are tokens... <br/>
            Tokens that represent things you've done for others, or that 
            others have done for you.
             </div>
                         
             <div>
             There are several types of two party chits,  each of which serve different purposes.  There are also several colors of each type of chit to indicate a "value" for the chit.  These values (set by you) are used to calculate your personal karmic balance.
            </div>

            <div> 
             You create two party chits here whether or not the action taken was done by you for someone else... or by someone else for you.  Two party chits are privateby default, unless you choose to share them with the other party.   If you choose to give a chit to someone else, they do not have to be Chit Git members (or sign up for Chit Git) in order to receive / view it.  
             </div>
             
             <div> Chit Git does not require or want you to provide any of the other party's contact info in order for you to send them a chit or for them to view it.
             </div>

          


            <MoreInfo> For details click the info icon <Info />  at top of the chits page </MoreInfo>
          </Content>
        }



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

{pageType === 'logs' &&
          <Content>
            <div> ChitGit <em>Logs</em> are designed to help you keep track of
            interactions between you and another party or entity.
            </div>
            <div> For instance - document calls between you and a company about 
              an issue... or exhanges between you and a neighbor or coworker.
            </div>
            <div> Chit Git logs can be timestamped.  In Chit Git a timestamped 
               log, can not be edited once invoked ... a feature which can be useful in legal disputes.
            </div>
            <MoreInfo> Get detail info from <Info />  at top of logs page </MoreInfo>
          </Content>
        }
      </ModalDisplay>
    </>
  )


}



export default PopoverModal
