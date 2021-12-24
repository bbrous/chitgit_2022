//Modal.jsx
import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import{lightGrey, chitBlueDull, } from '../../../../styles/colors'
// import{closeModal} from '../../app/redux/actions/mainActions'

import {sample_selectStatus} from '../../../../app/redux/statusRedux/X_sam_selectors_Status'

// ####### CHANGE TO GET MODAL FROM ACTIONS IN STATUS #################

          // import{ selectSpotlights, 
          //   makeSelectSpotlights,
          //   selectTasks,
          //   makeGetSpotlight,
          //   selectSpotlightTaskArray
            
          // } from '../../../../app/redux/spotlightRedux/sam_selectors_Spotlights'

// ####### CHANGE TO GET MODAL FROM ACTIONS IN STATUS #################


import SpotlightForm from '../../../../forms/sampleForms/XSpotlightForm'

// import ChitDetailTP from '../../pages/private/ChitDetail_TP'
// import ChitDetailPE from '../../pages/private/ChitDetail_PE'
// import ChitDetailWO from '../../pages/private/ChitDetail_WO'




import { styled, createMuiTheme } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'; 

const theme = createMuiTheme(); // allows use of mui theme in styled component
 



// import WOChitDetail from '../../features/main/views/chitView/WO_ChitDetail'
// import PEChitDetail from '../../features/main/views/chitView/PE_ChitDetail'
// import TPChitDetail from '../../features/main/views/chitView/ChitDetail'
// import NewModalDisplay from '../../features/main/new/NewModalDisplay'

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
  top: '8rem',
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


let modalType = props.status.modalType

// console.log('[MODAL... modalType is -- : ', modalType)
console.log('[MODAL... modalType is -- : ', props.status.modalType)

// let modalType = 'spotLightForm'

  return(
<Fragment>
  <ModalWrapper></ModalWrapper>
       <ModalDisplay > 
       
         <Close onClick = {props.closeModal}>Close</Close>
         
 
          {/* {modalType === 'personalDetail' && 
            
          <ChitDetailPE/>
          }

          {modalType === 'twoPartyDetail' && 
            <ChitDetailTP/> 
           
          }

          {modalType === 'workDetail' && 
            <ChitDetailWO/> 
           
          } */}

          {modalType === 'spotlightForm' && 
            <SpotlightForm/> 
           
          }  


         </ModalDisplay>

  
  </Fragment>
  
  //   if(modalType === 'workChit'){
  //     return(
  //       <Fragment>
  //       <WOChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalType === 'personalChit'){
  //     return(
  //       <Fragment>
  //       <PEChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalType === 'twoPartyChit'){
  //     return(
  //       <Fragment>
  //       <TPChitDetail modalChitId = {displayChitId} />
  //       </Fragment>
  //     )
  //   }

  //   if(modalType === 'newChit'){
  //     return(
  //       <Fragment>
  //       <NewModalDisplay  />
  //       </Fragment>
  //     )
  //   }




  )}

// const mapState = state => ({

//   /* only accesses all chit as props ... NOT
//       acct info
//       or people
//       or view
//   */
 
//  chitData: state.data.serverData.work,
//  chitDisplay: state.view
//   });


  
  // export default connect(mapState)(Modal)
 

  const actions = {
    // closeModal 
  }
  
  const mapState = state => ({
    status: sample_selectStatus(state)
  });
  
  export default connect(mapState, actions)(Modal)