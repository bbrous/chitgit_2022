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
console.log('[ POPOVER ] pageType ', pageType);
  return (
    <>
      <ModalWrapper />
      <ModalDisplay ref={wrapperRef}>
        <Close onClick={() =>
        dispatch(changeStatusInitialMessage({pageType: pageType}))
        } >Close</Close>

      {pageType === 'personalChits' &&
          <Content>
            <div> <em>Personal Chits </em> 
             are tokens you give to yourself.  <br/>Use personal chits to motivate yourself... or track progress towards a goal... or to indicate a personal milestone or accomplishment.
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
            <div>
              Chits are at the heart of all Chit Git apps.
            </div>
            <div> <em>Chits</em> are tokens...  
            Tokens that you can give or receive to someone for something they did for you or something you did for them... Or tokens you give yourself for something you accomplished.
             </div>
             <div>
               Here you can choose between 2-party chits or Personal chits.
               <br/>There are different views specific for each chit type ... 
                 <ul>
                   <li>
                   ledger and karmic views for 2-Party
                   </li>
                   <li>
                   ledger and calendar view for Personal
                   </li>
                   </ul>  
             </div>
                         

            <MoreInfo> For details on chits, click the info icon <Info />  at top of the chits page </MoreInfo>
          </Content>
        }



        {pageType === 'spotlights' &&
          <Content>
            <div> <em>Spotlights</em> is a "decomposition" tool. </div>
            <div>
              They are a kind of cross between a to-do list and a personal project manager.
              </div><div>
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
            <div> Logs are 1 of 3 "chronicle" types... They may all look similar, but each is designed to accomplish a different purpose. </div>
            
            <div> <em>Logs</em> are designed to help you keep track of
            interactions between you and another party or entity.
            </div>
            <div> Chit Git log sections can be converted into chits.</div>
            <div> Chit Git logs sections can be timestamped.  A timestamped 
               log section can NOT be edited once invoked ... a feature which can be useful in legal disputes.
            </div>
            <MoreInfo> Get detail info from <Info />  at top of logs page </MoreInfo>
          </Content>
        }
{pageType === 'topicals' &&
          <Content>
            <div> Topicals are 1 of 3 "chronicle" types... They may all look similar, but each is designed to accomplish a different purpose. </div>
            <div> <em>Topicals</em> are designed to help you keep a record of, and store information about a specific topic for your personal pursuits.
             
            </div>
            <div> Chit Git topicals sections can be converted into chits.</div>

            <div> Chit Git topical sections can also be timestamped.  A timestamped  topical section can Not be edited once invoked ... a feature which can be useful in legal disputes.
            </div>
            <MoreInfo> Get detail info from <Info />  at top of topicals page </MoreInfo>
          </Content>
        }

{pageType === 'journal' &&
          <Content>
            <div> Your journal is 1 of 3 "chronicle" types... They may all look similar, but each is designed to accomplish a different purpose. </div>
            <div> <em>Your journal</em> is designed to record your stream of consciousness.  Write about anything you thing, feel, or that happened in your day.
            </div>

            <div> Any journal section can be turned into either a log section or topical section.  When converted, a duplicate or modified version is created in logs or topicals - while the original journal section remains intact in the journal.
            </div>
            <MoreInfo> Get detail info from <Info />  at top of logs page </MoreInfo>
          </Content>
        }




      </ModalDisplay>
    </>
  )


}



export default PopoverModal
