
/*---- File - sampleSite/samComponents/Modal_s
    Modal displayed by redux/statusRedux/sam_statusSlice

    Contains children: 
       All forms
       All detail pages
 

      parent- Main - src/pages/public/sampleSite/Main
*/



import React, { Fragment } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import{lightGrey, chitBlueDull, } from '../../../../styles/colors'
// import{closeModal} from '../../app/redux/actions/mainActions'

import{ closeModal} from '../../../../app/redux/statusRedux/sam_statusSlice'


import{selectStatus} from '../../../../app/redux/statusRedux/sam_statusSlice'

import MainHelp from '../samHelp/Main_help_s'
import HelpSpotlights from '../../sampleSite.bak/samHelp/Help_spotlights_s'
import SpotlightForm from '../samForms/SpotlightForm_s'
import NoteForm from '../samForms/NoteForm_s'


// import WOChitDetail from '../../features/main/views/chitView/WO_ChitDetail'
// import PEChitDetail from '../../features/main/views/chitView/PE_ChitDetail'
// import TPChitDetail from '../../features/main/views/chitView/ChitDetail'
// import NewModalDisplay from '../../features/main/new/NewModalDisplay'

// import ChitDetailTP from '../../pages/private/ChitDetail_TP'
// import ChitDetailPE from '../../pages/private/ChitDetail_PE'
// import ChitDetailWO from '../../pages/private/ChitDetail_WO'

// import WOChitDetail from '../../features/main/views/chitView/WO_ChitDetail'
// import PEChitDetail from '../../features/main/views/chitView/PE_ChitDetail'
// import TPChitDetail from '../../features/main/views/chitView/ChitDetail'
// import NewModalDisplay from '../../features/main/new/NewModalDisplay'

import Paper from '@mui/material/Paper'; 

import { styled, createTheme  } from "@mui/material/styles"
const theme = createTheme(); // allows use of mui theme in styled component

// -----------------------------------------------------------------

const ModalWrapper= styled('div')({
  display: 'block',
 
  position: 'absolute',
  backgroundColor: 'black',
  height: '100vh',
  width: '100vw',

  
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
  width: '30rem',
  height: '40rem',
  borderRadius: '5px',
  
  transform: 'translate(-50%)',
  zIndex: '166',
  
  [theme.breakpoints.down('xs')] : {
    //  left: '.5rem',
     top: '2.6rem',
     height: '93.5vh',
     width: '98vw'
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
  color: chitBlueDull,
  cursor: 'pointer',
  borderRadius: '5px',

    '&:hover' : {
      backgroundColor: lightGrey
    }

})

//======================================
const Modal = (props) => {
console.log('[ MODAL @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ] props ', props.modalType);
  const dispatch = useDispatch()
  // --- IMPORTANT -----------------------------------
  // id is the id for spotlight (ie. spot_1) or note (ie. note_1), etc...
  //         but for "help", id is a help page (ie. 'spotlights' or 'notes')

let {modalType, modalPage, modalDisplayed, id} = useSelector(selectStatus).modal

console.log('[ modal ] modalPage ', modalPage);

  return(
<Fragment>
  <ModalWrapper></ModalWrapper>
       {modalType === 'form' && <ModalDisplay > 
       
         <Close onClick = {()=>dispatch(closeModal())}>Close</Close>
         
 
          {/* {modalType === 'personalDetail' && 
            
          <ChitDetailPE/>
          }

          {modalType === 'twoPartyDetail' && 
            <ChitDetailTP/> 
           
          }

          {modalType === 'workDetail' && 
            <ChitDetailWO/> 
           
          } */}

     
        {modalPage === 'spotlights' &&
          <SpotlightForm id = {id} type = 'spotlights' />

        }

        {modalPage === 'notes' &&
          <NoteForm id = {id} type = 'notes'/>

        }
   <Close onClick = {()=>dispatch(closeModal())}>Close</Close>
     
         </ModalDisplay>
         
} 

{modalType === 'info' && <ModalDisplay >        

<Close onClick = {()=>dispatch(closeModal())}>Close</Close>
   <HelpSpotlights/>

</ModalDisplay>
} 
       
    

       


  
  </Fragment>
  
  //   if(modalPage === 'workChit'){
  //     return(
  //       <Fragment>
  //       <WOChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalPage === 'personalChit'){
  //     return(
  //       <Fragment>
  //       <PEChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalPage === 'twoPartyChit'){
  //     return(
  //       <Fragment>
  //       <TPChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalPage === 'newChit'){
  //     return(
  //       <Fragment>
  //       <NewModalDisplay  />
  //       </Fragment>
  //     )
  //   }




  )} // --- end func Modal ---------------------




  
  export default Modal